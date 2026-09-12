import { EventEmitter } from "events";
import { Compile } from "typebox/compile";
import type { ToolSpec } from "../types";

export function makeRegistry() {
  const tools = new Map<string, any>();
  return {
    pi: {
      events: new EventEmitter(),
      registerTool(tool: any) {
        const originalExecute = tool.execute;
        let validator: ReturnType<typeof Compile> | undefined;
        try {
          validator = tool.parameters ? Compile(tool.parameters) : undefined;
        } catch {
          validator = undefined;
        }
        tool.execute = async function (
          toolCallId: string,
          params: unknown,
          signal: AbortSignal | undefined,
          onUpdate: unknown,
          ctx: unknown,
        ) {
          const prepared = tool.prepareArguments
            ? tool.prepareArguments(params)
            : params;
          if (validator && !validator.Check(prepared)) {
            const errors = [...validator.Errors(prepared)]
              .map((e: any) => `  - ${e.message}`)
              .join("\n");
            throw new Error(
              `[E_BAD_SHAPE] Schema validation failed for tool "${tool.name}" after prepareArguments.\n${errors}`,
            );
          }
          return originalExecute.call(
            this,
            toolCallId,
            prepared,
            signal,
            onUpdate,
            ctx,
          );
        };
        tools.set(tool.name, tool);
      },
      registerCommand() {},
      on() {},
      getActiveTools() {
        return [];
      },
      setActiveTools() {},
    } as any,
    getTool(name: string) {
      const tool = tools.get(name);
      if (!tool) throw new Error(`Tool not registered: ${name}`);
      return tool;
    },
    listTools(): ToolSpec[] {
      return [...tools.values()].map((tool) => ({
        name: tool.name,
        description: tool.description,
        promptSnippet: tool.promptSnippet,
        promptGuidelines: tool.promptGuidelines,
        parameters: tool.parameters ?? {},
        execute: async (params: unknown, cwd: string) => {
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
            return {
              ok: false,
              error: error instanceof Error ? error.message : String(error),
            };
          }
        },
      }));
    },
  };
}

export function extractResultText(result: unknown): string {
  const content = (result as { content?: Array<{ type?: string; text?: string }> })
    ?.content;
  const entry = content?.find((c) => c.type === "text" && typeof c.text === "string");
  return entry?.text ?? "";
}

export function isErrorResult(result: unknown): boolean {
  return (result as { isError?: boolean })?.isError === true;
}
