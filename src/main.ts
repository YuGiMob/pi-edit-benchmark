import { mkdir, mkdtemp, rm, writeFile } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os";
import { allContenders } from "./contenders";
import { scenarios } from "./scenarios";
import { runScenario } from "./harness/runner";
import { scoreContender } from "./harness/score";
import { renderMarkdown, renderJson } from "./report/markdown";
import type { BenchReport, ScenarioRun } from "./types";

const resultsDir = join(process.cwd(), "results");

async function main(): Promise<void> {
  const contenders = allContenders();
  const runs: ScenarioRun[] = [];
  const readStats = new Map<string, { bytes: number; lines: number }>();
  const anchorLengths = new Map<string, number>();

  for (const contender of contenders) {
    if (!contender.info.available) {
      console.log(`[skip] ${contender.info.id}: ${contender.info.availabilityNote}`);
      continue;
    }
    for (const scenario of scenarios) {
      const dir = await mkdtemp(join(tmpdir(), "pi-edit-bench-"));
      try {
        const run = await runScenario(contender, scenario, { cwd: dir });
        runs.push(run);
        const mark = run.pass ? "PASS" : "FAIL";
        console.log(
          `[${mark}] ${contender.info.id.padEnd(28)} ${scenario.id.padEnd(18)} ${run.outcome}${run.failureKind ? ` (${run.failureKind})` : ""}`,
        );
        if (scenario.id === "single-line") {
          if (run.readBytes !== undefined && run.readLines !== undefined && run.readLines > 0) {
            readStats.set(contender.info.id, {
              bytes: run.readBytes,
              lines: run.readLines,
            });
          }
          if (run.anchorLength !== undefined) {
            anchorLengths.set(contender.info.id, run.anchorLength);
          }
        }
      } finally {
        await rm(dir, { recursive: true, force: true });
      }
    }
  }

  const scores = contenders
    .filter((c) => c.info.available)
    .map((c) => {
      const cRuns = runs.filter((r) => r.contenderId === c.info.id);
      const stats = readStats.get(c.info.id);
      const bytesPerLine =
        stats && stats.lines > 0 ? stats.bytes / stats.lines : 0;
      return scoreContender(
        c.info.id,
        cRuns,
        bytesPerLine,
        anchorLengths.get(c.info.id) ?? 0,
        c.supportsUndo,
      );
    });

  const report: BenchReport = {
    generatedAt: new Date().toISOString(),
    contenders: contenders.map((c) => c.info),
    scores,
    runs,
  };

  await mkdir(resultsDir, { recursive: true });
  await writeFile(join(resultsDir, "report.md"), renderMarkdown(report));
  await writeFile(join(resultsDir, "report.json"), renderJson(report));
  console.log(`\nReport written to ${join(resultsDir, "report.md")}`);
}


main().catch((error) => {
  console.error(error);
  process.exit(1);
});
