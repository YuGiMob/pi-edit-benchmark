import { createReadTool, createReadToolDefinition } from "@earendil-works/pi-coding-agent";
import { join } from "path";
import type { Contender, ReadResult, Scenario } from "../types";
import { resolveTarget, readResult, extractResultText, isErrorResult } from "./shared";

export function pixEditContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof import("./shared").makeRegistry> } = {};
  const getTools = async () => {
    if (registryRef.registry) return registryRef.registry;
    const mod = await import("@xynogen/pix-edit/extension");
    const { makeRegistry } = await import("./shared");
    const fake = makeRegistry();
    mod.default(fake.pi);
    registryRef.registry = fake;
    return fake;
  };
  return {
    info: {
      id: "@xynogen/pix-edit",
      name: "@xynogen/pix-edit",
      version: "0.2.2",
      description:
        "Precise text-replacement edit with diff rendering: { path, edits: [{ oldText, newText }] }, oldText must be unique. No read tool, no anchors, no staleness check.",
      available: true,
    },
    supportsUndo: false,
    async read(path, cwd, options) {
      const tool = createReadTool(cwd) as unknown as {
        execute(...args: unknown[]): Promise<unknown>;
      };
      const result = await tool.execute(
        "r1",
        { path, ...(options ?? {}) },
        undefined,
        undefined,
        { cwd } as never,
      );
      const text = extractResultText(result);
      const lines = text
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "")
        .split("\n")
        .map((content, i) => ({
          lineNumber: i + 1,
          anchor: "",
          content,
        }));
      return readResult(text, lines);
    },
    buildEditRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      const { start, end } = resolveTarget(readResult.lines, scenario.target);
      const oldText = readResult.lines
        .slice(
          readResult.lines.indexOf(start),
          readResult.lines.indexOf(end) + 1,
        )
        .map((l) => l.content)
        .join("\n");
      return {
        path: join(cwd, scenario.fileName),
        edits: [{ oldText, newText: scenario.replacement.join("\n") }],
      };
    },
    buildInsertRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      const { start } = resolveTarget(readResult.lines, scenario.target);
      return {
        path: join(cwd, scenario.fileName),
        edits: [
          {
            oldText: start.content,
            newText: [start.content, ...scenario.replacement].join("\n"),
          },
        ],
      };
    },
    async executeEdit(request, cwd) {
      const { edit } = await getTools();
      return runTool(edit, request, cwd);
    },
    async executeInsert(request, cwd) {
      return this.executeEdit(request, cwd);
    },
    async listTools() {
      const registry = await getTools();
      const tools = registry.listTools();
      const readDef = createReadToolDefinition(".") as unknown as any;
      return [
        {
          name: "read",
          description: readDef.description,
          promptSnippet: readDef.promptSnippet,
          promptGuidelines: readDef.promptGuidelines,
          parameters: readDef.parameters ?? {},
          execute: (params: unknown, runCwd: string) =>
            runTool(createReadTool(runCwd) as unknown as any, params, runCwd),
        },
        ...tools.map((t) => ({
          ...t,
          execute: (params: unknown, runCwd: string) => {
            const rec = params as { path?: unknown };
            if (typeof rec?.path === "string" && !rec.path.startsWith("/")) {
              return t.execute({ ...rec, path: join(runCwd, rec.path) }, runCwd);
            }
            return t.execute(params, runCwd);
          },
        })),
      ];
    },
  };
}

async function runTool(
  tool: any,
  params: unknown,
  cwd: string,
): Promise<{ ok: boolean; error?: string; resultText?: string }> {
  try {
    const result = await tool.execute(
      "t1",
      params,
      undefined,
      undefined,
      { cwd } as never,
    );
    const text = extractResultText(result);
    const diff = (result as { details?: { diff?: string } })?.details?.diff;
    return {
      ok: !isErrorResult(result),
      resultText: diff ? `${text}\n${diff}` : text,
      error: isErrorResult(result) ? text : undefined,
    };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}
