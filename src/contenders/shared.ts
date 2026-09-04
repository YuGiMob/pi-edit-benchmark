import type { ReadLine, ReadResult, TargetSpec, ToolSpec } from "../types";
import { Compile } from "typebox/compile";

export function parseReadLines(
  text: string,
  rowRe: RegExp,
  kind: "line-hash" | "hash" = "line-hash",
  stripCr = true,
): { lines: ReadLine[]; bytes: number } {
  const lines: ReadLine[] = [];
  const normalized = stripCr
    ? text.replace(/\r\n/g, "\n").replace(/\r/g, "")
    : text;
  for (const row of normalized.split("\n")) {
    const match = row.match(rowRe);
    if (!match) continue;
    if (kind === "hash") {
      lines.push({
        lineNumber: lines.length + 1,
        anchor: match[1]!,
        content: match[2] ?? "",
      });
      continue;
    }
    lines.push({
      lineNumber: Number(match[1]),
      anchor: match[2]!,
      content: match[3] ?? "",
    });
  }
  return { lines, bytes: Buffer.byteLength(text, "utf-8") };
}

export function resolveTarget(
  lines: ReadLine[],
  target: TargetSpec,
): { start: ReadLine; end: ReadLine } {
  switch (target.kind) {
    case "line": {
      const hit = lines.find((l) =>
        target.matchRe ? target.matchRe.test(l.content) : l.content.includes(target.match));
      if (!hit) throw new Error(`target line "${target.match}" not found in read output`);
      return { start: hit, end: hit };
    }
    case "line-nth": {
      const hits = lines.filter((l) => l.content.includes(target.match));
      const hit = hits[target.nth - 1];
      if (!hit) throw new Error(`target occurrence ${target.nth} of "${target.match}" not found`);
      return { start: hit, end: hit };
    }
    case "range": {
      const from = lines.find((l) => l.content.includes(target.from));
      const to = lines.find((l) => l.content.includes(target.to));
      if (!from || !to) throw new Error(`range ${target.from}..${target.to} not found in read output`);
      return { start: from, end: to };
    }
    case "empty-file": {
      const hit = lines[0];
      if (!hit) throw new Error("empty-file target requires a read output with one row");
      return { start: hit, end: hit };
    }
    case "eof": {
      const hit = lines[lines.length - 1];
      if (!hit) throw new Error("eof target requires a non-empty read output");
      return { start: hit, end: hit };
    }
  }
}

export function readResult(text: string, lines: ReadLine[]): ReadResult {
  return { text, lines, bytes: Buffer.byteLength(text, "utf-8") };
}

export function makeRegistry() {
  const tools = new Map<string, any>();
  const out: Record<string, unknown> = {};
  const attach = (tool: any) => {
    out[tool.name] = tool;
  };
  return Object.assign(out, {
    pi: {
      events: new (require("events").EventEmitter)(),
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
        attach(tool);
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
  });
}


export function anchorLengthOf(lines: ReadLine[]): number {
  if (lines.length === 0) return 0;
  return Math.min(...lines.map((l) => l.anchor.length));
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
