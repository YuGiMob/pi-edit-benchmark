import { EventEmitter } from "events";

function makeEvents() {
  const emitter = new EventEmitter();
  return {
    on: (event: string, handler: (...args: any[]) => void) => {
      emitter.on(event, handler);
      return () => emitter.off(event, handler);
    },
    once: (event: string, handler: (...args: any[]) => void) => {
      emitter.once(event, handler);
      return () => emitter.off(event, handler);
    },
    off: (event: string, handler: (...args: any[]) => void) => emitter.off(event, handler),
    emit: (event: string, ...args: unknown[]) => emitter.emit(event, ...args),
  };
}
import { Compile } from "typebox/compile";
import type { ToolSpec } from "../types";
import { readFileSync } from "fs";
import { createReadTool, createReadToolDefinition } from "@earendil-works/pi-coding-agent";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

export function pkgVersion(name: string, fallback: string): string {
  try {
    const resolved = import.meta.resolve(name);
    let dir = dirname(resolved.startsWith("file:") ? fileURLToPath(resolved) : resolved);
    for (let i = 0; i < 6; i++) {
      try {
        const pkg = JSON.parse(readFileSync(join(dir, "package.json"), "utf-8")) as { name?: string; version?: string };
        if (pkg.name === name && pkg.version) return pkg.version;
      } catch {
      }
      const parent = dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }
  } catch {
  }
  return fallback;
}

export function makeRegistry() {
  const tools = new Map<string, any>();
  const eventHandlers = new Map<string, ((...args: any[]) => any)[]>();
  return {
    pi: {
      events: makeEvents(),
      registerFlag() {},
      getFlag() {},
      registerEntryRenderer() {},
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
      on(event: string, handler: (...args: any[]) => any) {
        const list = eventHandlers.get(event) ?? [];
        list.push(handler);
        eventHandlers.set(event, list);
        return () => {
          const l = eventHandlers.get(event) ?? [];
          const idx = l.indexOf(handler);
          if (idx >= 0) l.splice(idx, 1);
        };
      },
      getActiveTools() {
        return [];
      },
      setActiveTools() {},
    } as any,
    getHandlers(event: string) {
      return eventHandlers.get(event) ?? [];
    },
    getTool(name: string) {
      const tool = tools.get(name);
      if (!tool) throw new Error(`Tool not registered: ${name}`);
      return tool;
    },
    async fire(event: string, payload: any, ctx: unknown) {
      const handlers = eventHandlers.get(event) ?? [];
      let current = payload;
      for (const handler of handlers) {
        const result = await handler(current, ctx);
        if (!result || typeof result !== "object") continue;
        if (event === "tool_call") {
          if ((result as { block?: unknown }).block) return result;
          continue;
        }
        current = { ...current };
        for (const key of ["content", "details", "isError", "usage"]) {
          if (key in result && (result as Record<string, unknown>)[key] !== undefined) {
            (current as Record<string, unknown>)[key] = (result as Record<string, unknown>)[key];
          }
        }
      }
      return event === "tool_call" ? undefined : current;
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

export async function runBuiltinTool(
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

export function builtinReadTool(): ToolSpec {
  const readDef = createReadToolDefinition(".") as unknown as any;
  return {
    name: "read",
    description: readDef.description,
    promptSnippet: readDef.promptSnippet,
    promptGuidelines: readDef.promptGuidelines,
    parameters: readDef.parameters ?? {},
    execute: (params: unknown, runCwd: string) =>
      runBuiltinTool(createReadTool(runCwd) as unknown as any, params, runCwd),
  };
}
