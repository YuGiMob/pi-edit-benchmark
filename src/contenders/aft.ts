import type { Contender, ReadResult, Scenario, ToolSpec } from "../types";
import {
  parseReadLines,
  resolveTarget,
  readResult,
  extractResultText,
  isErrorResult,
  makeRegistry,
} from "./shared";

const ROW_RE = /^(\d+): (.*)$/;

function parseAftLines(text: string): { lines: { lineNumber: number; anchor: string; content: string }[]; bytes: number } {
  const lines: { lineNumber: number; anchor: string; content: string }[] = [];
  const normalized = text.replace(/\r\n/g, "\n").replace(/\r/g, "");
  for (const row of normalized.split("\n")) {
    const match = row.match(ROW_RE);
    if (!match) continue;
    lines.push({ lineNumber: Number(match[1]), anchor: "", content: match[2] ?? "" });
  }
  return { lines, bytes: Buffer.byteLength(text, "utf-8") };
}
export function aftContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getTools = async () => {
    if (registryRef.registry) return registryRef.registry;
    const mod = await import("@cortexkit/aft-pi");
    const fake = makeRegistry();
    mod.default(fake.pi);
    for (let i = 0; i < 30; i++) {
      try {
        fake.getTool("read");
        fake.getTool("edit");
        registryRef.registry = fake;
        return fake;
      } catch {
        await new Promise((r) => setTimeout(r, 500));
      }
    }
    throw new Error("aft-pi did not register read/edit tools within 15s");
  };
  return {
    info: {
      id: "@cortexkit/aft-pi",
      name: "@cortexkit/aft-pi",
      version: "0.54.0",
      description:
        "Agent File Tools: Rust-backed read/edit with occurrence-targeted find/replace, symbol edits, and fuzzy matching. No anchors, no staleness check.",
      available: true,
    },
    supportsUndo: false,
    async read(path, cwd, options) {
      const { read } = await getTools();
      const result = await read.execute(
        "r1",
        { path, ...(options ?? {}) },
        undefined,
        undefined,
        { cwd } as never,
      );
      const text = extractResultText(result);
      const { lines, bytes } = parseAftLines(text);
      return readResult(text, lines);
    },
    buildEditRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      if (scenario.target.kind === "empty-file") {
        return {
          path: scenario.fileName,
          appendContent: scenario.replacement.join("\n"),
        };
      }
      const { start, end } = resolveTarget(readResult.lines, scenario.target);
      const oldString = readResult.lines
        .slice(
          readResult.lines.indexOf(start),
          readResult.lines.indexOf(end) + 1,
        )
        .map((l) => l.content)
        .join("\n");
      const edit: Record<string, unknown> = {
        oldString,
        newString: scenario.replacement.join("\n"),
      };
      if (scenario.target.kind === "line-nth") {
        edit.occurrence = scenario.target.nth;
      }
      return { path: scenario.fileName, edits: [edit] };
    },
    buildInsertRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      const { start } = resolveTarget(readResult.lines, scenario.target);
      return {
        path: scenario.fileName,
        edits: [
          {
            oldString: start.content,
            newString: [start.content, ...scenario.replacement].join("\n"),
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
      return registry.listTools();
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
