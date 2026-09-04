import {
  createEditTool,
  createEditToolDefinition,
  createReadTool,
  createReadToolDefinition,
} from "@earendil-works/pi-coding-agent";
import type { Contender, ReadResult, Scenario } from "../types";
import { resolveTarget, readResult, extractResultText, isErrorResult } from "./shared";

export function builtinContender(): Contender {
  return {
    info: {
      id: "builtin-edit",
      name: "built-in edit (str_replace)",
      version: "0.84.4",
      description:
        "pi-coding-agent's standard edit tool: path + edits[{oldText, newText}]. Text matching, no anchors, no staleness check.",
      available: true,
    },
    supportsUndo: false,
    async read(path, cwd, options) {
      const tool = createReadTool(cwd) as unknown as { execute(...args: unknown[]): Promise<unknown> };
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
        path: scenario.fileName,
        edits: [{ oldText, newText: scenario.replacement.join("\n") }],
      };
    },
    buildInsertRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      const { start } = resolveTarget(readResult.lines, scenario.target);
      return {
        path: scenario.fileName,
        edits: [
          {
            oldText: start.content,
            newText: [start.content, ...scenario.replacement].join("\n"),
          },
        ],
      };
    },
    async executeEdit(request, cwd) {
      const tool = createEditTool(cwd) as unknown as { execute(...args: unknown[]): Promise<unknown> };
      try {
        const result = await tool.execute(
          "e1",
          request,
          undefined,
          undefined,
          { cwd } as never,
        );
        const text = extractResultText(result);
        return {
          ok: !isErrorResult(result),
          resultText: text,
          error: isErrorResult(result) ? text : undefined,
        };
      } catch (error) {
        return { ok: false, error: error instanceof Error ? error.message : String(error) };
      }
    },
    async executeInsert(request, cwd) {
      return this.executeEdit(request, cwd);
    },
    async listTools() {
      const readDef = createReadToolDefinition(".") as unknown as any;
      const editDef = createEditToolDefinition(".") as unknown as any;
      return [
        {
          name: "read",
          description: readDef.description,
          promptSnippet: readDef.promptSnippet,
          promptGuidelines: readDef.promptGuidelines,
          parameters: readDef.parameters ?? {},
          execute: (params: unknown, runCwd: string) =>
            runBuiltinTool(createReadTool(runCwd) as unknown as any, params, runCwd),
        },
        {
          name: "edit",
          description: editDef.description,
          promptSnippet: editDef.promptSnippet,
          promptGuidelines: editDef.promptGuidelines,
          parameters: editDef.parameters ?? {},
          execute: (params: unknown, runCwd: string) =>
            runBuiltinTool(createEditTool(runCwd) as unknown as any, params, runCwd),
        },
      ];
    },
  };
}

async function runBuiltinTool(
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
    return {
      ok: !isErrorResult(result),
      resultText: text,
      error: isErrorResult(result) ? text : undefined,
    };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}
