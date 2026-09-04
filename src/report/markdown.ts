import type { BenchReport, ContenderScore, ScenarioFocus, ScenarioRun } from "../types";

const FOCUS_GROUPS: { key: ScenarioFocus; label: string }[] = [
  { key: "core", label: "Core editing" },
  { key: "staleness", label: "Staleness & concurrency" },
  { key: "served-state", label: "Served-state & undo" },
];
import { safetyScore, catastrophicFailures } from "../harness/score";

const KIND_LABEL: Record<string, string> = {
  "silent-wrong-line": "SILENT WRONG-LINE EDIT",
  "applied-wrong": "applied wrong content",
  "rejected-valid": "rejected a valid edit",
  corrupted: "corrupted the file",
  crashed: "crashed",
};

export function renderMarkdown(report: BenchReport): string {
  const out: string[] = [];
  out.push("# pi edit-tool benchmark");
  out.push("");
  out.push(`Generated ${report.generatedAt}. Deterministic tool-level runs: each scenario is executed against every contender in an isolated temp dir; the model is simulated as a perfect copier of read output.`);
  out.push("");
  out.push("## Contenders");
  out.push("");
  out.push("| Contender | Version | Undo | Status |");
  out.push("| --- | --- | --- | --- |");
  for (const c of report.contenders) {
    const score = report.scores.find((s) => s.contenderId === c.id);
    out.push(
      `| ${c.name} | ${c.version} | ${score?.supportsUndo ? "yes" : "no"} | ${c.available ? "available" : `unavailable — ${c.availabilityNote ?? ""}`} |`,
    );
  }
  out.push("");
  out.push("## Summary");
  out.push("");
  out.push("| Contender | Passed | Score | Safety | Catastrophic | Read bytes/line | Anchor len | Undo |");
  out.push("| --- | --- | --- | --- | --- | --- | --- | --- |");
  const sorted = [...report.scores].sort((a, b) => b.passCount - a.passCount);
  for (const s of sorted) {
    const runs = report.runs.filter((r) => r.scenario.id && r.contenderId === s.contenderId);
    const safety = safetyScore(runs);
    const cats = catastrophicFailures(runs);
    out.push(
      `| ${s.contenderId} | ${s.passCount}/${s.scenarioCount} | ${(s.passCount / Math.max(1, s.scenarioCount) * 100).toFixed(0)}% | ${safety.passed}/${safety.total} | ${cats.length} | ${s.readBytesPerLine.toFixed(1)} | ${s.anchorLength} | ${s.supportsUndo ? "yes" : "no"} |`,
    );
  }
  out.push("");
  const focusOf = (run: ScenarioRun) => run.scenario.focus ?? "core";
  const scenarioCount: Record<ScenarioFocus, number> = { core: 0, staleness: 0, "served-state": 0 };
  for (const id of new Set(report.runs.map((r) => r.scenario.id))) {
    const run = report.runs.find((r) => r.scenario.id === id)!;
    scenarioCount[focusOf(run)] += 1;
  }
  const cells = new Map<string, Record<ScenarioFocus, { passed: number; total: number }>>();
  for (const c of report.contenders) cells.set(c.id, { core: { passed: 0, total: 0 }, staleness: { passed: 0, total: 0 }, "served-state": { passed: 0, total: 0 } });
  for (const run of report.runs) {
    const cell = cells.get(run.contenderId)![focusOf(run)];
    cell.total += 1;
    if (run.pass) cell.passed += 1;
  }
  out.push("## Score by focus");
  out.push("");
  out.push("| Contender | " + FOCUS_GROUPS.map((g) => `${g.label} (${scenarioCount[g.key]} scenarios)`).join(" | ") + " |");
  out.push("| --- | " + FOCUS_GROUPS.map(() => "---").join(" | ") + " |");
  for (const s of sorted) {
    const cell = cells.get(s.contenderId)!;
    out.push(`| ${s.contenderId} | ` + FOCUS_GROUPS.map((g) => `${cell[g.key].passed}/${cell[g.key].total}`).join(" | ") + " |");
  }
  out.push("");
  out.push("## Scenario results");
  out.push("");
  const scenarioIds = [...new Set(report.runs.map((r) => r.scenario.id))];
  for (const id of scenarioIds) {
    const first = report.runs.find((r) => r.scenario.id === id);
    if (!first) continue;
    out.push(`### ${id} — ${first.scenario.name}`);
    out.push("");
    out.push(first.scenario.description);
    out.push("");
    out.push("| Contender | Outcome | Pass | Detail |");
    out.push("| --- | --- | --- | --- |");
    for (const c of report.contenders) {
      const run = report.runs.find(
        (r) => r.scenario.id === id && r.contenderId === c.id,
      );
      if (!run) continue;
      const detail = run.pass
        ? run.anchorStability !== undefined
          ? `anchor stability ${(run.anchorStability * 100).toFixed(0)}%`
          : run.outcome === "applied"
            ? "content matches"
            : "rejected as expected"
        : run.failureKind
          ? KIND_LABEL[run.failureKind] ?? run.failureKind
          : "failed";
      out.push(
        `| ${c.id} | ${run.outcome} | ${run.pass ? "✅" : "❌"} | ${detail} |`,
      );
    }
    out.push("");
  }
  out.push("## Failure details");
  out.push("");
  for (const s of sorted) {
    if (s.failures.length === 0) continue;
    out.push(`### ${s.contenderId}`);
    out.push("");
    for (const f of s.failures) {
      out.push(`- **${f.scenarioId}**: ${KIND_LABEL[f.kind] ?? f.kind}`);
      if (f.detail) out.push(`  - ${f.detail.slice(0, 300)}`);
    }
    out.push("");
  }
  return out.join("\n");
}

export function renderJson(report: BenchReport): string {
  return JSON.stringify(report, null, 2);
}
