import { join } from "path";
import {
  NodeFilesystem,
  InMemorySnapshotStore,
  Patcher,
  Patch,
} from "@oh-my-pi/hashline";
import type { Contender, ReadResult, Scenario } from "../types";
import { resolveTarget, readResult } from "./shared";

export function ompContender(): Contender {
  const fs = new NodeFilesystem();
  const snapshots = new InMemorySnapshotStore();
  const patcher = new Patcher({ fs, snapshots });
  return {
    info: {
      id: "@oh-my-pi/hashline",
      name: "@oh-my-pi/hashline (core)",
      version: "18.0.10",
      description:
        "Reference hashline engine: patch language with file-hash tags, snapshot store, 3-way-merge recovery. Not a pi tool; driven directly.",
      available: true,
    },
    supportsUndo: false,
    async listTools() {
      return [];
    },
    async read(path, cwd, options) {
      const abs = join(cwd, path);
      const text = await fs.readText(abs);
      const lines = text.length === 0 ? [""] : text.split("\n");
      const seen = new Set(lines.map((_, i) => i + 1));
      snapshots.record(abs, text, seen);
      return readResult(
        text,
        lines.map((content, i) => ({
          lineNumber: i + 1,
          anchor: "",
          content,
        })),
      );
    },
    buildEditRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      const abs = join(cwd, scenario.fileName);
      const { start, end } = resolveTarget(readResult.lines, scenario.target);
      const body = scenario.replacement
        .map((line) => `+${line}`)
        .join("\n");
      const header = `[${abs}#${snapshots.head(abs)?.hash ?? ""}]`;
      return {
        patch: `${header}\nPUT ${start.lineNumber}.=${end.lineNumber}:\n${body}`
      };
    },
    buildInsertRequest(readResult: ReadResult, scenario: Scenario, cwd: string) {
      const abs = join(cwd, scenario.fileName);
      const { start } = resolveTarget(readResult.lines, scenario.target);
      const body = scenario.replacement
        .map((line) => `+${line}`)
        .join("\n");
      const header = `[${abs}#${snapshots.head(abs)?.hash ?? ""}]`;
      return {
        patch: `${header}\nPUT >${start.lineNumber}:\n${body}`
      };
    },
    async executeInsert(request, cwd) {
      return this.executeEdit(request, cwd);
    },
    async executeEdit(request, cwd) {
      try {
        const patch = Patch.parse((request as { patch: string }).patch);
        const result = await patcher.apply(patch);
        const sections = result.sections ?? [];
        const first = sections[0] as { isNoop?: boolean } | undefined;
        if (first?.isNoop) {
          return { ok: true, resultText: "noop" };
        }
        return { ok: true, resultText: "applied" };
      } catch (error) {
        return { ok: false, error: error instanceof Error ? error.message : String(error) };
      }
    },
  };
}
