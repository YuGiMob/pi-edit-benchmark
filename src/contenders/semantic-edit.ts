import { createReadTool, createReadToolDefinition } from "@earendil-works/pi-coding-agent";
import type { Contender, ReadResult, Scenario } from "../types";
import { resolveTarget, readResult, extractResultText, isErrorResult, makeRegistry } from "./shared";

export function semanticEditContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getTools = async () => {
    if (registryRef.registry) return registryRef.registry;
    const mod = await import("pi-semantic-edit");
    const fake = makeRegistry();
    mod.default(fake.pi);
    registryRef.registry = fake;
    return fake;
  };

  async function readBuiltin(path: string, cwd: string, options?: { offset?: number; limit?: number }) {
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
  }

  async function runEdit(request: unknown, cwd: string) {
    const registry = await getTools();
    const edit = registry.getTool("edit");
    try {
      const result = await edit.execute(
        "e1",
        request,
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

  return {
    info: {
      id: "pi-semantic-edit",
      name: "pi-semantic-edit",
      version: "0.4.0",
      description:
        "Tolerant-matching edit: { path, edits: [{ oldText, newText, replaceAll? }] } with a 10-pass fuzzy chain (whitespace/indent/escape/Unicode drift) and a uniqueness guard that refuses ambiguous matches with line positions. No anchors, no staleness check. Replaces the built-in edit.",
      available: true,
    },
    supportsUndo: false,
    async read(path, cwd, options) {
      return readBuiltin(path, cwd, options);
    },
    buildEditRequest(readResult: ReadResult, scenario: Scenario) {
      const { start, end } = resolveTarget(readResult.lines, scenario.target);
      const oldText = readResult.lines
        .slice(
          readResult.lines.indexOf(start),
          readResult.lines.indexOf(end) + 1,
        )
        .map((l) => l.content)
        .join("\n");
      return {
        path: scenario.fileName,
        edits: [{ oldText, newText: scenario.replacement.join("\n") }],
      };
    },
    buildInsertRequest(readResult: ReadResult, scenario: Scenario) {
      const { start } = resolveTarget(readResult.lines, scenario.target);
      return {
        path: scenario.fileName,
        edits: [{ oldText: start.content, newText: [start.content, ...scenario.replacement].join("\n") }],
      };
    },
    async executeEdit(request, cwd) {
      return runEdit(request, cwd);
    },
    async executeInsert(request, cwd) {
      return this.executeEdit(request, cwd);
    },
    async listTools() {
      const registry = await getTools();
      const readDef = createReadToolDefinition(".") as unknown as any;
      return [
        {
          name: "read",
          description: readDef.description,
          promptSnippet: readDef.promptSnippet,
          promptGuidelines: readDef.promptGuidelines,
          parameters: readDef.parameters ?? {},
          execute: (params: unknown, runCwd: string) =>
            runBuiltinRead(params, runCwd),
        },
        ...registry.listTools(),
      ];
    },
  };
}

async function runBuiltinRead(params: unknown, cwd: string) {
  const tool = createReadTool(cwd) as unknown as {
    execute(...args: unknown[]): Promise<unknown>;
  };
  const result = await tool.execute("t1", params, undefined, undefined, { cwd } as never);
  const text = extractResultText(result);
  return {
    ok: !isErrorResult(result),
    resultText: text,
    error: isErrorResult(result) ? text : undefined,
  };
}
