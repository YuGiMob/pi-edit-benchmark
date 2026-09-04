import { mkdir, readFile, rm, writeFile } from "fs/promises";
import { join } from "path";
import type {
  Contender,
  ReadLine,
  ReadResult,
  Scenario,
  ScenarioRun,
} from "../types";

export interface RunOptions {
  cwd: string;
  onRun?: (contenderId: string, scenarioId: string, run: ScenarioRun) => void;
}

export async function runScenario(
  contender: Contender,
  scenario: Scenario,
  opts: RunOptions,
): Promise<ScenarioRun> {
  const dir = join(opts.cwd, `${contender.info.id}-${scenario.id}`);
  await mkdir(dir, { recursive: true });
  const filePath = join(dir, scenario.fileName);
  const fixtureBytes =
    scenario.fixtureBytes ?? Buffer.from(scenario.fixture, "utf-8");
  await writeFile(filePath, fixtureBytes);

  const base: ScenarioRun = {
    contenderId: contender.info.id,
    scenario,
    outcome: "error",
    pass: false,
  };

  if (scenario.skipFor?.includes(contender.info.id)) {
    base.outcome = "skipped";
    base.pass = true;
    await rm(dir, { recursive: true, force: true });
    opts.onRun?.(contender.info.id, scenario.id, base);
    return base;
  }

  let readResult: ReadResult | undefined;
  try {
    const readPath = scenario.blindEdit
      ? `${scenario.fileName}.copy`
      : scenario.fileName;
    if (scenario.blindEdit) {
      await writeFile(join(dir, readPath), fixtureBytes);
    }
    readResult = await contender.read(readPath, dir, scenario.readOptions);
  } catch (error) {
    base.outcome = "error";
    base.failureKind = "crashed";
    base.errorMessage = error instanceof Error ? error.message : String(error);
    await rm(dir, { recursive: true, force: true });
    opts.onRun?.(contender.info.id, scenario.id, base);
    return base;
  }
  base.readBytes = readResult.bytes;
  base.readLines = readResult.lines.length;
  const anchorLengths = readResult.lines
    .map((l) => l.anchor.length)
    .filter((n) => n > 0);
  if (anchorLengths.length > 0) base.anchorLength = Math.min(...anchorLengths);

  try {
    if (scenario.mutateAfterRead) {
      const current = await readFile(filePath, "utf-8");
      await writeFile(filePath, scenario.mutateAfterRead(current), "utf-8");
    }

    const isInsert = scenario.id === "insert-after";
    const request = isInsert
      ? contender.buildInsertRequest?.(readResult, scenario, dir)
      : contender.buildEditRequest(readResult, scenario, dir);
    const result = isInsert
      ? await contender.executeInsert?.(request!, dir)
      : await contender.executeEdit(request!, dir);

    if (scenario.chained && result?.ok) {
      const rows = parseResultRows(contender.info.id, result.resultText ?? "");
      if (rows.length === 0) {
        base.outcome = "skipped";
        base.pass = true;
        await rm(dir, { recursive: true, force: true });
        opts.onRun?.(contender.info.id, scenario.id, base);
        return base;
      }
      const synthetic = readResultFromRows(rows);
      const secondTarget = scenario.chainedSecondTarget ?? {
        kind: "line",
        match: "ddd",
      };
      const secondRequest = contender.buildEditRequest(
        synthetic,
        {
          ...scenario,
          target: secondTarget,
          replacement: scenario.chainedSecondReplacement ?? ["DDD"],
        },
        dir,
      );
      const secondResult = await contender.executeEdit(secondRequest, dir);
      if (!secondResult.ok) {
        base.outcome = "rejected";
        base.failureKind = "rejected-valid";
        base.errorMessage = secondResult.error;
        base.pass = false;
        await rm(dir, { recursive: true, force: true });
        opts.onRun?.(contender.info.id, scenario.id, base);
        return base;
      }
    }

    if (scenario.undoAfterExternalChange && result?.ok) {
      const current = await readFile(filePath, "utf-8");
      const mutated = scenario.mutateAfterEditFn
        ? scenario.mutateAfterEditFn(current)
        : current;
      await writeFile(filePath, mutated, "utf-8");
      if (contender.supportsUndo && contender.undo) {
        const undoResult = await contender.undo(scenario.fileName, dir);
        const afterUndo = await readFile(filePath, "utf-8");
        if (undoResult.ok || afterUndo !== mutated) {
          base.outcome = "applied";
          base.failureKind = "applied-wrong";
          base.errorMessage = undoResult.error;
          base.pass = false;
          await rm(dir, { recursive: true, force: true });
          opts.onRun?.(contender.info.id, scenario.id, base);
          return base;
        }
      }
    }

    const actual = await readFile(filePath, "utf-8");
    base.actualContent = actual;
    base.errorMessage = result?.error;

    const expected =
      scenario.expectedByContender?.[contender.info.id] ?? scenario.expected;

    if (result?.ok) {
      if (expected.content !== undefined && actual === expected.content) {
        base.outcome = "applied";
        base.pass = expected.outcome === "applied" || expected.outcome === "either";
      } else if (expected.outcome === "rejected") {
        base.outcome = "applied";
        base.failureKind = "silent-wrong-line";
        base.pass = false;
      } else {
        base.outcome = "applied";
        base.failureKind = "applied-wrong";
        base.pass = false;
      }
    } else {
      base.outcome = "rejected";
      base.pass = expected.outcome === "rejected" || expected.outcome === "either";
      if (!base.pass) base.failureKind = "rejected-valid";
    }

    if (scenario.id === "anchor-stability" && base.pass) {
      const stability = await measureAnchorStability(
        contender,
        scenario,
        dir,
        readResult,
      );
      base.anchorStability = stability;
      if (stability < 1) {
        base.pass = false;
        base.failureKind = "applied-wrong";
      }
    }

    if (scenario.id === "undo") {
      if (!contender.supportsUndo || !contender.undo) {
        base.pass = false;
        base.failureKind = "rejected-valid";
        base.errorMessage = "no undo support";
      } else if (base.pass) {
        const undoResult = await contender.undo(scenario.fileName, dir);
        const afterUndo = await readFile(filePath, "utf-8");
        const fixtureText = fixtureBytes.toString("utf-8");
        if (!undoResult.ok || afterUndo !== fixtureText) {
          base.pass = false;
          base.failureKind = "applied-wrong";
          base.errorMessage = undoResult.error;
        }
      }
    }

    if (scenario.id === "error-guidance" && base.outcome === "rejected") {
      const message = result?.error ?? "";
      const hasGuidance = /read|anchor|re-?read|fresh/i.test(message);
      base.pass = hasGuidance;
      if (!hasGuidance) base.failureKind = "rejected-valid";
    }
  } catch (error) {
    base.outcome = "rejected";
    base.errorMessage = error instanceof Error ? error.message : String(error);
    const expected =
      scenario.expectedByContender?.[contender.info.id] ?? scenario.expected;
    base.pass = expected.outcome === "rejected" || expected.outcome === "either";
    if (!base.pass) base.failureKind = "rejected-valid";
  } finally {
    await rm(dir, { recursive: true, force: true });
  }

  opts.onRun?.(contender.info.id, scenario.id, base);
  return base;
}

function parseResultRows(
  contenderId: string,
  text: string,
): ReadLine[] {
  const normalized = text.replace(/\r\n/g, "\n").replace(/\r/g, "");
  const patterns: Record<string, RegExp> = {
    "pi-hashline-edit-pro": /^[+ ]([A-Za-z0-9]{3})│(.*)$/m,
    "pi-hashline-edit": /^(\d+)#([A-Za-z0-9]+):(.*)$/m,
    "pi-hashline-context-edit": /^(\d+)#([A-Za-z0-9]+):(.*)$/m,
    "pi-hashline-readmap": /^(\d+):([A-Za-z0-9]+)\|(.*)$/m,
    "builtin-edit": /^[+ ](.*)$/m,
    "@xynogen/pix-edit": /^[+ -](\d+) (.*)$/m,
  };
  const re = patterns[contenderId];
  if (!re) return [];
  const rows: ReadLine[] = [];
  for (const line of normalized.split("\n")) {
    const m = line.match(re);
    if (!m) continue;
    if (contenderId === "builtin-edit") {
      const content = m[1] ?? "";
      if (content.startsWith("+++") || content.startsWith("---") || content.startsWith("@@")) continue;
      rows.push({ lineNumber: rows.length + 1, anchor: "", content });
    } else if (contenderId === "@xynogen/pix-edit") {
      rows.push({ lineNumber: Number(m[1]), anchor: "", content: m[2] ?? "" });
    } else if (contenderId === "pi-hashline-edit-pro") {
      rows.push({
        lineNumber: rows.length + 1,
        anchor: m[1]!,
        content: m[2] ?? "",
      });
    } else {
      rows.push({
        lineNumber: Number(m[1]),
        anchor: m[2]!,
        content: m[3] ?? "",
      });
    }
  }
  return rows;
}

function readResultFromRows(rows: ReadLine[]): ReadResult {
  return {
    text: rows.map((r) => `${r.anchor}│${r.content}`).join("\n"),
    lines: rows,
    bytes: 0,
  };
}

async function measureAnchorStability(
  contender: Contender,
  scenario: Scenario,
  dir: string,
  before: { lines: { anchor: string; content: string }[] },
): Promise<number> {
  try {
    const after = await contender.read(scenario.fileName, dir);
    const beforeByContent = new Map<string, string>();
    for (const line of before.lines) {
      if (line.anchor) beforeByContent.set(line.content, line.anchor);
    }
    let preserved = 0;
    let total = 0;
    for (const line of after.lines) {
      const prev = beforeByContent.get(line.content);
      if (prev === undefined) continue;
      total += 1;
      if (prev === line.anchor) preserved += 1;
    }
    return total === 0 ? 1 : preserved / total;
  } catch {
    return 0;
  }
}
