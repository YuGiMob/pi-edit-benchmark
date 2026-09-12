import {
  createEditTool,
  createEditToolDefinition,
  createReadTool,
  createReadToolDefinition,
} from "@earendil-works/pi-coding-agent";
import type { Contender, ToolSpec } from "../types";
import { extractResultText, isErrorResult } from "./shared";

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
    async listTools(): Promise<ToolSpec[]> {
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
