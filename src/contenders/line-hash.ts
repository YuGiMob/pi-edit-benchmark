import type { Contender, ReadLine, ReadResult, Scenario } from "../types";
import {
  parseReadLines,
  resolveTarget,
  readResult,
  extractResultText,
  isErrorResult,
  makeRegistry,
} from "./shared";

export interface LineHashFamilyOptions {
  id: string;
  name: string;
  version: string;
  description: string;
  load: () => Promise<{ default: (pi: any) => void }>;
  readToolName?: string;
  editToolName?: string;
  rowRe: RegExp;
  stripCr?: boolean;
  buildEdits: (
    readResult: ReadResult,
    scenario: Scenario,
  ) => unknown[];
  extraFields?: (scenario: Scenario) => Record<string, unknown>;
}

export function lineHashFamilyContender(opts: LineHashFamilyOptions): Contender {
  const toolsRef: { read?: any; edit?: any; registry?: ReturnType<typeof makeRegistry> } = {};
  const getTools = async () => {
    if (toolsRef.read && toolsRef.edit) return toolsRef as any;
    const mod = await opts.load();
    const fake = makeRegistry();
    toolsRef.registry = fake;
    mod.default(fake.pi);
    toolsRef.read = fake.getTool(opts.readToolName ?? "read");
    toolsRef.edit = fake.getTool(opts.editToolName ?? "edit");
    return toolsRef as any;
  };
  return {
    info: {
      id: opts.id,
      name: opts.name,
      version: opts.version,
      description: opts.description,
      available: true,
    },
    supportsUndo: false,
    async read(path, cwd, options) {
      const { read } = await getTools();
      const allLines: ReadLine[] = [];
      let totalBytes = 0;
      let offset = options?.offset ?? 1;
      const pages = options?.offset !== undefined || options?.limit !== undefined ? 1 : 20;
      for (let page = 0; page < pages; page++) {
        const result = await read.execute(
          `r${page}`,
          { path, offset, limit: options?.limit ?? 2000 },
          undefined,
          undefined,
          { cwd } as never,
        );
        const text = extractResultText(result);
        totalBytes += Buffer.byteLength(text, "utf-8");
        const { lines } = parseReadLines(text, opts.rowRe, "line-hash", opts.stripCr !== false);
        allLines.push(...lines);
        const next = /Use offset=(\d+) to continue/.exec(text);
        if (!next) break;
        offset = Number(next[1]);
      }
      return readResult(allLines.map((l) => `${l.lineNumber}#${l.anchor}:${l.content}`).join("\n"), allLines);
    },
    buildEditRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      if (scenario.target.kind === "empty-file") {
        return {
          path: scenario.fileName,
          edits: [{ op: "append", lines: scenario.replacement }],
          ...(opts.extraFields ? opts.extraFields(scenario) : {}),
        };
      }
      return {
        path: scenario.fileName,
        edits: opts.buildEdits(readResult, scenario),
        ...(opts.extraFields ? opts.extraFields(scenario) : {}),
      };
    },
    buildInsertRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      const { start } = resolveTarget(readResult.lines, scenario.target);
      return {
        path: scenario.fileName,
        edits: [{ op: "append", pos: posRef(start), lines: scenario.replacement }],
        ...(opts.extraFields ? opts.extraFields(scenario) : {}),
      };
    },
    async executeInsert(request, cwd) {
      return this.executeEdit(request, cwd);
    },
    async listTools() {
      await getTools();
      return toolsRef.registry!.listTools();
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
  };
}


export function posRef(line: { anchor: string; lineNumber: number }): string {
  return `${line.lineNumber}#${line.anchor}`;
}

export function replaceEdits(readResult: ReadResult, scenario: Scenario): unknown[] {
  const { start, end } = resolveTarget(readResult.lines, scenario.target);
  const [pos, endRef] = scenario.reversedRange
    ? [end, start]
    : [start, end];
  const edit: Record<string, unknown> = {
    op: "replace",
    pos: posRef(pos),
    lines: scenario.replacement,
  };
  if (pos !== endRef) edit.end = posRef(endRef);
  return [edit];
}

export function appendEdits(readResult: ReadResult, scenario: Scenario): unknown[] {
  const { start } = resolveTarget(readResult.lines, scenario.target);
  return [{ op: "append", pos: posRef(start), lines: scenario.replacement }];
}

export function prependEdits(readResult: ReadResult, scenario: Scenario): unknown[] {
  const { start } = resolveTarget(readResult.lines, scenario.target);
  return [{ op: "prepend", pos: posRef(start), lines: scenario.replacement }];
}
