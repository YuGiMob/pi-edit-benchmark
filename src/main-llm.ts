import { appendFile, mkdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { homedir } from "os";
import { existsSync, readFileSync } from "fs";
import { mkdtemp, rm } from "fs/promises";
import { tmpdir } from "os";
import { allContenders } from "./contenders";
import { scenarios } from "./scenarios";
import { runLlmScenario } from "./llm/runner";
import { LLM_MODELS, DEFAULT_LLM_SCENARIOS, LLM_TOOL_FILTERS } from "./llm/models";
import type { LlmModelSpec, LlmReport, LlmRun } from "./types";

interface CliArgs {
  models: string[];
  contenders: string[];
  scenarios: string[];
  all: boolean;
  dryRun: boolean;
  maxSteps: number;
  concurrency: number;
  concurrencySet: boolean;
  laneConcurrency: Record<string, number>;
  out: string;
  delayMs: number;
  readMandate: boolean;
  resume: boolean;
  timeoutMs?: number;
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {
    models: [],
    contenders: [],
    scenarios: [],
    all: false,
    dryRun: false,
    maxSteps: 10,
    concurrency: 2,
    concurrencySet: false,
    laneConcurrency: {},
    out: "results/llm-report.md",
    delayMs: 0,
    readMandate: false,
    resume: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]!;
    const next = () => argv[++i]!;
    switch (a) {
      case "--read-mandate":
        args.readMandate = true;
        break;
      case "--resume":
        args.resume = true;
        break;
      case "--models":
        args.models = next().split(",");
        break;
      case "--contenders":
        args.contenders = next().split(",");
        break;
      case "--scenarios":
        args.scenarios = next().split(",");
        break;
      case "--all":
        args.all = true;
        break;
      case "--dry-run":
        args.dryRun = true;
        break;
      case "--max-steps":
        args.maxSteps = Number(next());
        break;
      case "--concurrency":
        args.concurrency = Number(next());
        args.concurrencySet = true;
        break;
      case "--lane-concurrency":
        for (const part of next().split(",")) {
          const [p, n] = part.split("=");
          if (p && n) args.laneConcurrency[p] = Number(n);
        }
        break;
      case "--out":
        args.out = next();
        break;
      case "--delay-ms":
        args.delayMs = Number(next());
        break;
      case "--timeout-ms":
        args.timeoutMs = Number(next());
        break;
      case "--help":
        console.log(`
Usage: bun run src/main-llm.ts [options]

Options:
  --models <ids>       Comma-separated model ids to benchmark (default: all)
  --contenders <ids>   Comma-separated contender ids (default: all available)
  --scenarios <ids>    Comma-separated scenario ids (default: a curated subset)
  --all                Run every scenario instead of the default subset
  --max-steps <n>      Max tool calls per run (default: 10)
  --concurrency <n>    Override lane concurrency for every provider
  --lane-concurrency p=n[,p=n]
                       Per-provider lane concurrency override (e.g. opencode-go=8)
  --delay-ms <n>       Pause before starting each provider lane (pacing for tight rate limits)
  --timeout-ms <n>     Per-API-call timeout (default: 180000)

  --read-mandate      Append the 'always read the file before editing' task suffix
                      (off by default; the main run leaves the read decision to the model)

  --resume            Skip runs already recorded in <out>.runs.jsonl; new runs append there

  --dry-run            Print the run matrix without calling the API
  --out <path>         Report output path (default: results/llm-report.md)
`);
        process.exit(0);
    }
  }
  return args;
}

async function loadCosts(): Promise<Map<string, Map<string, { in: number; out: number }>>> {
  const costs = new Map<string, Map<string, { in: number; out: number }>>();
  try {
    const raw = await readFile(
      join(homedir(), ".pi", "agent", "models-store.json"),
      "utf-8",
    );
    const store = JSON.parse(raw) as Record<string, { models: Array<{ id: string; cost?: { input?: number; output?: number } }> }>;
    for (const [provider, entry] of Object.entries(store)) {
      const perModel = new Map<string, { in: number; out: number }>();
      for (const model of entry.models ?? []) {
        perModel.set(model.id, {
          in: model.cost?.input ?? 0,
          out: model.cost?.output ?? 0,
        });
      }
      costs.set(provider, perModel);
    }
  } catch {
  }
  return costs;
}

function providerOf(model: LlmModelSpec): string {
  return model.provider;
}

const PROVIDER_ENV: Record<string, string> = {
  "opencode-go": "OPENCODE_API_KEY",
  "ollama-cloud": "OLLAMA_API_KEY",
};

function authJsonKey(provider: string): string | undefined {
  try {
    const raw = readFileSync(join(homedir(), ".pi", "agent", "auth.json"), "utf-8");
    const auth = JSON.parse(raw) as Record<string, { key?: string }>;
    return auth[provider]?.key;
  } catch {
    return undefined;
  }
}

function apiKeyFor(model: LlmModelSpec): string | undefined {
  if (providerOf(model) === "llamacpp") return "local";
  const env = PROVIDER_ENV[providerOf(model)];
  return (env ? process.env[env] : undefined) ?? authJsonKey(providerOf(model));
}

const PROVIDER_CONCURRENCY: Record<string, number> = {
  "opencode-go": 16,
  "ollama-cloud": 5,
  llamacpp: 6,
};

function laneConcurrencyOf(model: LlmModelSpec, args: CliArgs): number {
  const override = args.laneConcurrency[providerOf(model)];
  if (override !== undefined) return override;
  if (args.concurrencySet) return args.concurrency;
  return PROVIDER_CONCURRENCY[providerOf(model)] ?? 2;
}

function logRun(run: LlmRun): void {
  const mark = run.pass ? "PASS" : "FAIL";
  const calls = run.toolCalls.map((t) => (t.ok ? t.name : `${t.name}x`)).join(" ");
  console.log(
    `[${mark}] ${run.modelId.padEnd(20)} ${run.contenderId.padEnd(26)} ${run.scenarioId.padEnd(30)} ${run.outcome.padEnd(12)} steps=${run.steps} tok=${run.tokensIn + run.tokensOut} ${run.failureKind ?? ""} | ${calls}${run.errorMessage ? ` :: ${run.errorMessage.slice(0, 200)}` : ""}`,
  );
}

function baseUrlOf(model: LlmModelSpec): string {
  return model.baseUrl;
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  const costs = await loadCosts();

  const models: LlmModelSpec[] = args.models.length > 0
    ? LLM_MODELS.filter((m) => args.models.includes(m.id))
    : LLM_MODELS;
  const contenders = allContenders().filter(
    (c) =>
      c.info.available &&
      (args.contenders.length === 0 || args.contenders.includes(c.info.id)) &&
      LLM_TOOL_FILTERS[c.info.id]?.length > 0,
  );
  const scenarioList = scenarios.filter((s) =>
    args.scenarios.length > 0
      ? args.scenarios.includes(s.id)
      : DEFAULT_LLM_SCENARIOS.length > 0
        ? DEFAULT_LLM_SCENARIOS.includes(s.id)
        : true,
  );

  const activeModels = models.filter((model) => {
    if (apiKeyFor(model)) return true;
    console.error(`[skip] ${model.id}: ${providerOf(model)} API key not set (expected ${PROVIDER_ENV[providerOf(model)]} env or a matching entry in ~/.pi/agent/auth.json)`);
    return false;
  });

  const outPath = args.out.startsWith("/") ? args.out : join(process.cwd(), args.out);
  const runsFile = outPath.replace(/\.md$/, ".runs.jsonl");
  const completed = new Map<string, LlmRun>();
  if (args.resume && existsSync(runsFile)) {
    for (const line of (await readFile(runsFile, "utf-8")).split("\n")) {
      if (!line.trim()) continue;
      try {
        const run = JSON.parse(line) as LlmRun;
        completed.set(`${run.modelId}/${run.contenderId}/${run.scenarioId}`, run);
      } catch {
      }
    }
  }
  let runsDone = completed.size;
  await mkdir(join(process.cwd(), "results"), { recursive: true });
  if (completed.size > 0) console.log(`resuming: ${completed.size} completed runs loaded from ${runsFile}`);
  for (const model of activeModels) {
    console.log(`\n=== Model: ${model.name} (${model.id}) ===`);
    const remaining = contenders.length * scenarioList.length
      - [...completed.values()].filter((r) => r.modelId === model.id).length;
    console.log(`  ${remaining} runs, lane concurrency ${laneConcurrencyOf(model, args)}`);
    if (args.dryRun) {
      for (const contender of contenders) {
        for (const scenario of scenarioList) {
          console.log(`  - ${contender.info.id} / ${scenario.id}`);
        }
      }
    }
  }

  if (args.dryRun) {
    console.log("dry run: no report written");
    return;
  }

  const lanes = await Promise.all(
    activeModels.map(async (model) => {
      const apiKey = apiKeyFor(model)!;
      const cost = costs.get(providerOf(model))?.get(model.id) ?? { in: 0, out: 0 };
      const laneConcurrency = laneConcurrencyOf(model, args);
      const laneRuns: LlmRun[] = [...completed.values()].filter((r) => r.modelId === model.id);
      const queue: Array<{ contenderId: string; scenarioId: string }> = [];
      for (const contender of contenders) {
        for (const scenario of scenarioList) {
          if (completed.has(`${model.id}/${contender.info.id}/${scenario.id}`)) continue;
          queue.push({ contenderId: contender.info.id, scenarioId: scenario.id });
        }
      }
      let cursor = 0;
      if (args.delayMs > 0) await new Promise((r) => setTimeout(r, args.delayMs));
      const worker = async (): Promise<void> => {
        while (cursor < queue.length) {
          const q = queue[cursor++]!;
          const contender = contenders.find((c) => c.info.id === q.contenderId)!;
          const scenario = scenarioList.find((s) => s.id === q.scenarioId)!;
          const dir = await mkdtemp(join(tmpdir(), "pi-llm-bench-"));
          try {
            const run = await runLlmScenario(contender, scenario, {
              cwd: dir,
              model,
              baseUrl: baseUrlOf(model),
              apiKey,
              toolFilter: LLM_TOOL_FILTERS[q.contenderId] ?? [],
              maxSteps: args.maxSteps,
              timeoutMs: args.timeoutMs ?? 180_000,
              mandateRead: args.readMandate,
              costPerMIn: cost.in,
              costPerMOut: cost.out,
              traceDir: join(process.cwd(), "results", "traces"),
            });
            laneRuns.push(run);
            logRun(run);
            runsDone += 1;
            if (runsDone % 10 === 0) {
              (globalThis as { Bun?: { gc?: (sync: boolean) => void } }).Bun?.gc?.(true);
            }
            try {
              await appendFile(runsFile, JSON.stringify(run) + "\n");
            } catch {
            }
          } finally {
            await rm(dir, { recursive: true, force: true });
          }
        }
      };
      await Promise.all(Array.from({ length: Math.min(laneConcurrency, queue.length) }, () => worker()));
      return laneRuns;
    }),
  );

  const runs = lanes.flat();
  const totalCost = runs.reduce((sum, run) => sum + run.costUsd, 0);


  const report: LlmReport = {
    generatedAt: new Date().toISOString(),
    models,
    runs,
    mandateRead: args.readMandate,
  };
  await mkdir(join(process.cwd(), "results"), { recursive: true });
  await writeFile(outPath, renderLlmReport(report, totalCost, outPath));
  await writeFile(outPath.replace(/\.md$/, ".json"), JSON.stringify(report, null, 2));
  console.log(
    `\nReport written to ${outPath} (total API cost: $${totalCost.toFixed(4)})`,
  );
}

export function renderLlmReport(report: LlmReport, totalCost: number, outPath?: string): string {
  const out: string[] = [];
  out.push("# pi edit-tool benchmark — LLM runs");
  out.push("");
  const providers = [...new Set(report.models.map(providerOf))].join(" + ");
  out.push(`Generated ${report.generatedAt}. Real-model runs against ${providers}; the model drives each contender's actual tools through a tool-calling loop. Total API cost: $${totalCost.toFixed(4)}.${report.mandateRead === true ? " Read mandate on (--read-mandate)." : " Read mandate off."}`);
  out.push("");
  out.push("## Models");
  out.push("");
  out.push("| Model | Runs | Passed | Pass rate | Avg steps | Avg tokens/run | Cost |");
  out.push("| --- | --- | --- | --- | --- | --- | --- |");
  for (const model of report.models) {
    const runs = report.runs.filter((r) => r.modelId === model.id);
    const passed = runs.filter((r) => r.pass).length;
    const avgSteps = runs.length > 0 ? (runs.reduce((s, r) => s + r.steps, 0) / runs.length).toFixed(1) : "-";
    const avgTokens = runs.length > 0 ? Math.round(runs.reduce((s, r) => s + r.tokensIn + r.tokensOut, 0) / runs.length) : 0;
    const cost = runs.reduce((s, r) => s + r.costUsd, 0);
    out.push(
      `| ${model.name} | ${runs.length} | ${passed}/${runs.length} | ${(passed / Math.max(1, runs.length) * 100).toFixed(0)}% | ${avgSteps} | ${avgTokens} | $${cost.toFixed(4)} |`,
    );
  }
  out.push("");
  const contenderIds = [...new Set(report.runs.map((r) => r.contenderId))];
  out.push("## Results — pass rate by model (rows) × tool (columns)");
  out.push("");
  out.push("| Model | " + contenderIds.map((c) => c).join(" | ") + " | Overall |");
  out.push("| --- | " + contenderIds.map(() => "---").join(" | ") + " | --- |");
  for (const model of report.models) {
    const cells = contenderIds.map((id) => {
      const runs = report.runs.filter((r) => r.modelId === model.id && r.contenderId === id);
      if (runs.length === 0) return "-";
      const passed = runs.filter((r) => r.pass).length;
      return `${passed}/${runs.length}`;
    });
    const modelRuns = report.runs.filter((r) => r.modelId === model.id);
    const modelPassed = modelRuns.filter((r) => r.pass).length;
    out.push(
      `| ${model.name} | ${cells.join(" | ")} | ${modelPassed}/${modelRuns.length} (${(modelPassed / Math.max(1, modelRuns.length) * 100).toFixed(0)}%) |`,
    );
  }
  out.push("");
  const focusById = new Map(scenarios.map((sc) => [sc.id, sc.focus ?? "core"]));
  const focusTotals = (id: string) => {
    const runs = report.runs.filter((r) => r.contenderId === id);
    const cell: Record<string, { passed: number; total: number }> = { core: { passed: 0, total: 0 }, staleness: { passed: 0, total: 0 }, "served-state": { passed: 0, total: 0 } };
    for (const r of runs) {
      const cell2 = cell[focusById.get(r.scenarioId) ?? "core"];
      cell2.total += 1;
      if (r.pass) cell2.passed += 1;
    }
    return cell;
  };
  const groupCount: Record<string, number> = {};
  for (const sc of scenarios) groupCount[sc.focus ?? "core"] = (groupCount[sc.focus ?? "core"] ?? 0) + 1;
  out.push("## Per-tool totals (all models)");
  out.push("");
  out.push(`| Tool | Core (${groupCount.core}) | Staleness (${groupCount.staleness}) | Served-state (${groupCount["served-state"]}) | Passed | Total | Pass rate |`);
  out.push("| --- | --- | --- | --- | --- | --- | --- |");
  for (const id of contenderIds) {
    const runs = report.runs.filter((r) => r.contenderId === id);
    const passed = runs.filter((r) => r.pass).length;
    const cell = focusTotals(id);
    out.push(`| ${id} | ${cell.core.passed}/${cell.core.total} | ${cell.staleness.passed}/${cell.staleness.total} | ${cell["served-state"].passed}/${cell["served-state"].total} | ${passed} | ${runs.length} | ${(passed / Math.max(1, runs.length) * 100).toFixed(0)}% |`);
  }
  out.push("");
  out.push("## Per-tool process (all models)");
  out.push("");
  out.push("| Tool | Version | Avg steps | Avg tokens/run | Avg cost | Max steps |");
  out.push("| --- | --- | --- | --- | --- | --- |");
  for (const id of contenderIds) {
    const runs = report.runs.filter((r) => r.contenderId === id);
    const version = runs[0]?.contenderVersion ?? "-";
    const avgSteps = runs.length > 0 ? (runs.reduce((s, r) => s + r.steps, 0) / runs.length).toFixed(1) : "-";
    const avgTokens = runs.length > 0 ? Math.round(runs.reduce((s, r) => s + r.tokensIn + r.tokensOut, 0) / runs.length) : 0;
    const avgCost = runs.length > 0 ? runs.reduce((s, r) => s + r.costUsd, 0) / runs.length : 0;
    const maxSteps = runs.length > 0 ? Math.max(...runs.map((r) => r.steps)) : 0;
    out.push(`| ${id} | ${version} | ${avgSteps} | ${avgTokens} | $${avgCost.toFixed(4)} | ${maxSteps} |`);
  }
  out.push("");
  out.push("## Scenario detail");
  out.push("");
  const scenarioIds = [...new Set(report.runs.map((r) => r.scenarioId))];
  for (const sid of scenarioIds) {
    out.push(`### ${sid}`);
    out.push("");
    out.push("| Model | Contender | Pass | Outcome | Steps | Trace |");
    out.push("| --- | --- | --- | --- | --- | --- |");
    for (const run of report.runs.filter((r) => r.scenarioId === sid)) {
      const calls = run.toolCalls
        .map((t) => (t.ok ? t.name : `${t.name}✗`))
        .join(" ");
      const traceLink = traceLinkFor(run, outPath);
      out.push(
        `| ${report.models.find((m) => m.id === run.modelId)?.name ?? run.modelId} | ${run.contenderId} | ${run.pass ? "✅" : "❌"} | ${run.outcome}${run.failureKind ? ` (${run.failureKind})` : ""} | \`${calls}\` | ${traceLink} |`,
      );
    }
    out.push("");
  }
  out.push("## Failed runs — traces for validation");
  out.push("");
  out.push("Every failed run is listed with its full transcript link (system prompt, user task, model reasoning, every tool call with arguments, every tool result, and the final file state).");
  out.push("");
  const failed = report.runs.filter((r) => !r.pass);
  if (failed.length === 0) {
    out.push("No failed runs.");
  } else {
    out.push("| Model | Contender | Scenario | Outcome | Trace |");
    out.push("| --- | --- | --- | --- | --- |");
    for (const run of failed) {
      const traceLink = traceLinkFor(run, outPath);
      out.push(
        `| ${report.models.find((m) => m.id === run.modelId)?.name ?? run.modelId} | ${run.contenderId} | ${run.scenarioId} | ${run.outcome}${run.failureKind ? ` (${run.failureKind})` : ""} | ${traceLink} |`,
      );
    }
  }
  out.push("");
  return out.join("\n");
}

function traceLinkFor(run: { tracePath?: string }, outPath?: string): string {
  if (!run.tracePath) return "-";
  if (!outPath) return `[trace](${run.tracePath})`;
  const { dirname, relative } = require("path") as typeof import("path");
  const rel = relative(dirname(outPath), run.tracePath);
  return `[trace](${rel.replace(/\\/g, "/")})`;
}

if (import.meta.main) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
