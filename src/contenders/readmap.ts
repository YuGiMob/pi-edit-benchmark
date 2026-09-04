import type { Contender, ReadResult, Scenario } from "../types";
import {
  parseReadLines,
  resolveTarget,
  readResult,
  extractResultText,
  isErrorResult,
  makeRegistry,
} from "./shared";

const ROW_RE = /^(\d+):([A-Za-z0-9]+)\|(.*)$/;

export function readmapContender(): Contender {
  const toolsRef: { read?: any; edit?: any; registry?: ReturnType<typeof makeRegistry> } = {};
  const getTools = async () => {
    if (toolsRef.read && toolsRef.edit) return toolsRef as any;
    const mod = await import("pi-hashline-readmap");
    const fake = makeRegistry();
    toolsRef.registry = fake;
    mod.default(fake.pi);
    toolsRef.read = fake.getTool("read");
    toolsRef.edit = fake.getTool("edit");
    return toolsRef as any;
  };
  return {
    info: {
      id: "pi-hashline-readmap",
      name: "pi-hashline-readmap",
      version: "0.14.0",
      description:
        "Unified extension: hash-anchored read/edit (LINE:HASH| rows), code maps, AST-grep, and more.",
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
      const { lines, bytes } = parseReadLines(text, ROW_RE);
      return readResult(text, lines);
    },
    buildEditRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      const { start, end } = resolveTarget(readResult.lines, scenario.target);
      const [from, to] = scenario.reversedRange ? [end, start] : [start, end];
      const anchor = (l: { lineNumber: number; anchor: string }) =>
        `${l.lineNumber}:${l.anchor}`;
      if (from === to) {
        return {
          path: scenario.fileName,
          edits: [
            {
              set_line: {
                anchor: anchor(from),
                new_text: scenario.replacement.join("\n"),
              },
            },
          ],
        };
      }
      return {
        path: scenario.fileName,
        edits: [
          {
            replace_lines: {
              start_anchor: anchor(from),
              end_anchor: anchor(to),
              new_text: scenario.replacement.join("\n"),
            },
          },
        ],
      };
    },
    async executeEdit(request, cwd) {
      const { edit } = await getTools();
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
    },
    buildInsertRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      const { start } = resolveTarget(readResult.lines, scenario.target);
      return {
        path: scenario.fileName,
        edits: [
          {
            insert_after: {
              anchor: `${start.lineNumber}:${start.anchor}`,
              new_text: scenario.replacement.join("\n"),
            },
          },
        ],
      };
    },
    async executeInsert(request, cwd) {
      return this.executeEdit(request, cwd);
    },
    async listTools() {
      await getTools();
      return toolsRef.registry!.listTools();
    },
  };
}

