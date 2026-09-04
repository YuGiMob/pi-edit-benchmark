import type { ContenderScore, ScenarioRun } from "../types";

export function scoreContender(
  contenderId: string,
  runs: ScenarioRun[],
  readBytesPerLine: number,
  anchorLength: number,
  supportsUndo: boolean,
): ContenderScore {
  const failures: ContenderScore["failures"] = [];
  let passCount = 0;
  for (const run of runs) {
    if (run.pass) {
      passCount += 1;
      continue;
    }
    failures.push({
      scenarioId: run.scenario.id,
      kind: run.failureKind ?? "crashed",
      detail: run.errorMessage ?? "",
    });
  }
  return {
    contenderId,
    total: passCount,
    max: runs.length,
    passCount,
    scenarioCount: runs.length,
    failures,
    readBytesPerLine,
    anchorLength,
    supportsUndo,
  };
}

export function safetyScore(runs: ScenarioRun[]): {
  passed: number;
  total: number;
} {
  const safety = runs.filter((r) => r.scenario.category === "safety");
  return {
    passed: safety.filter((r) => r.pass).length,
    total: safety.length,
  };
}

export function catastrophicFailures(runs: ScenarioRun[]): ScenarioRun[] {
  return runs.filter((r) => r.failureKind === "silent-wrong-line");
}
