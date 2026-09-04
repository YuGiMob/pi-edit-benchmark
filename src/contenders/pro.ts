import type { Contender, ReadResult, Scenario, ToolSpec } from "../types";
import {
  parseReadLines,
  resolveTarget,
  readResult,
  extractResultText,
  isErrorResult,
  makeRegistry,
} from "./shared";

const ROW_RE = /^([A-Za-z0-9]{3})│(.*)$/;

export function proContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getTools = async () => {
    if (registryRef.registry) return registryRef.registry;
    const mod = await import("pi-hashline-edit-pro");
    const fake = makeRegistry();
    mod.default(fake.pi);
    registryRef.registry = fake;
    return fake;
  };
  return {
    info: {
      id: "pi-hashline-edit-pro",
      name: "pi-hashline-edit-pro",
      version: "3.0.1",
      description:
        "Strict hashline fork: 3-char perfect anchors, served-range verification, boundary anti-duplication, persisted undo.",
      available: true,
    },
    supportsUndo: true,
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
      const { lines, bytes } = parseReadLines(text, ROW_RE, "hash");
      return readResult(text, lines);
    },
    buildEditRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      const { start, end } = resolveTarget(readResult.lines, scenario.target);
      const [from, to] = scenario.reversedRange
        ? [end.anchor, start.anchor]
        : [start.anchor, end.anchor];
      return {
        path: scenario.fileName,
        remove_from: from,
        remove_to: to,
        replacement_lines: scenario.replacement,
      };
    },
    buildInsertRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      const { start } = resolveTarget(readResult.lines, scenario.target);
      return {
        path: scenario.fileName,
        anchor: start.anchor,
        direction: "after",
        lines: scenario.replacement,
      };
    },
    async executeEdit(request, cwd) {
      const { replace } = await getTools();
      return runTool(replace, request, cwd);
    },
    async executeInsert(request, cwd) {
      const { insert } = await getTools();
      return runTool(insert, request, cwd);
    },
    async listTools() {
      const registry = await getTools();
      return registry.listTools();
    },
    async undo(path, cwd) {
      const { undo_last_change: undo } = await getTools();
      return runTool(undo, { path }, cwd);
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
