import { mkdir, readFile, rm, writeFile } from "fs/promises";
import { join } from "path";
import { chat, type ChatMessage } from "./client";
import type { Contender, LlmModelSpec, LlmRun, LlmTrace, Scenario, ToolSpec } from "../types";

export interface LlmRunnerOptions {
  cwd: string;
  model: LlmModelSpec;
  baseUrl: string;
  apiKey: string;
  toolFilter: string[];
  maxSteps: number;
  timeoutMs: number;
  costPerMIn: number;
  costPerMOut: number;
  traceDir?: string;
  log?: (line: string) => void;
}

export interface EvaluatedOutcome {
  pass: boolean;
  outcome: string;
  failureKind?: string;
}

export function taskPrompt(scenario: Scenario): string {
  return `Modify ${scenario.fileName} in the current working directory. ${taskDescriptions[scenario.id] ?? scenario.name}. Use the provided tools; always read the file before editing.`;
}

const taskDescriptions: Record<string, string> = {
  "single-line": "Replace the line containing 'bbb' with exactly one line: BBB",
  range: "Replace the lines from the line containing 'bbb' through the line containing 'ddd' with exactly three lines: B, C, D",
  "delete-line": "Delete the line containing 'bbb'; the surrounding lines must stay intact with no blank line left behind",
  "duplicate-nth":
    "The file contains two functions. Replace the line that is the closing brace '}' of the SECOND function (the second line that is exactly '}') with exactly '};'",
  "duplicate-import":
    "Replace the SECOND occurrence of the line 'import { a } from 'x';' with exactly 'import { a2 } from 'x';'",
  "whitespace-only": "Replace the line containing 'bbb' with exactly one line: BBB",
  crlf: "Replace the line containing 'beta' (in a CRLF file) with exactly one line: BETA",
  bom: "Replace the line containing 'beta' with exactly one line: BETA",
  "empty-file": "The file is empty. Insert exactly two lines: 'first' and 'second'",
  "long-line":
    "Replace the very long line (the one consisting almost entirely of lowercase x characters) with exactly one line: REPLACED",
  noop: "Replace the line containing 'bbb' with exactly the same line 'bbb' (the file should end up unchanged)",
  "insert-after":
    "Insert exactly two lines 'B1' and 'B2' immediately after the line containing 'bbb'; the line 'bbb' itself must stay",
  "stale-line": "Replace the line containing 'bbb' with exactly one line: BBB",
  "stale-range":
    "Replace the lines from the line containing 'bbb' through the line containing 'ddd' with exactly two lines: B, D",
  "shift-above": "Replace the line containing 'bbb' with exactly one line: BBB",
  "external-far": "Replace the line containing 'ccc' with exactly one line: CCC",
  "anchor-stability": "Replace the line containing 'ccc' with exactly one line: CCC",
  undo: "Replace the line containing 'bbb' with exactly one line: BBB, then undo that change so the file is back to its original state",
  "error-guidance": "Replace the line containing 'bbb' with exactly one line: BBB",
  "b6-change-then-revert":
    "Replace the lines from the line containing 'bbb' through the line containing 'ddd' with exactly two lines: B, D",
  "b7-paged-read-gap": "Replace the line containing 'eee' with exactly one line: E",
  "b8-blind-edit": "Replace the line containing 'bbb' with exactly one line: BBB",
  "b9-boundary-changed": "Replace the line containing 'bbb' with exactly one line: BBB",
  "b10-duplicate-drift":
    "The file contains two functions. Replace the line that is the closing brace '}' of the SECOND function (the second line that is exactly '}') with exactly '};'",
  "b12-noop-with-drift": "Replace the line containing 'bbb' with exactly the same line 'bbb' (the file should end up unchanged)",
  "b13-chained-diff-edit":
    "Replace the line containing 'ccc' with exactly one line: CCC, then replace the line containing 'ddd' with exactly one line: DDD. Use the anchors from the first edit's result for the second edit; do not re-read the whole file.",
  "b15-large-range-drift":
    "Replace the lines from the line containing 'line10' through the line containing 'line190' with exactly one line: X",
  "b16b-undo-stale":
    "Replace the line containing 'bbb' with exactly one line: BBB, then undo that change",
  "b17-reversed-range":
    "Replace the lines from the line containing 'bbb' through the line containing 'ddd' with exactly three lines: B, C, D",
  "b18-boundary-dup":
    "Replace the line containing 'bbb' with exactly two lines: aaa and BBB",
};

const RECOVERY_CONTENT: Record<string, string> = {
  "stale-line": "aaa\nBBB\nccc\n",
  "stale-range": "aaa\nB\nD\n",
  "b9-boundary-changed": "aaa\nBBB\nccc\n",
  "b10-duplicate-drift":
    "function a() {\n  return 1;\n}\nfunction b() {\n  return 2; // drifted\n};\n",
  "b15-large-range-drift":
    Array.from({ length: 200 }, (_, i) => `line${i + 1}`)
      .slice(0, 9)
      .concat("X", Array.from({ length: 200 }, (_, i) => `line${i + 1}`).slice(190))
      .join("\n") + "\n",
};

export function buildSystemPrompt(tools: ToolSpec[], cwd: string): string {
  const visible = tools.filter((t) => t.promptSnippet);
  const toolsList = visible.length > 0
    ? visible.map((t) => `- ${t.name}: ${t.promptSnippet}`).join("\n")
    : "(none)";
  const guidelines: string[] = [];
  const seen = new Set<string>();
  for (const t of tools) {
    for (const g of t.promptGuidelines ?? []) {
      if (!seen.has(g)) {
        seen.add(g);
        guidelines.push(g);
      }
    }
  }
  return [
    "You are an expert coding assistant operating inside pi, a coding agent harness. You help users by reading files, executing commands, editing code, and writing new files.",
    "",
    "Available tools:",
    toolsList,
    "",
    "In addition to the tools above, you may have access to other custom tools depending on the project.",
    "",
    "Guidelines:",
    ...guidelines,
    "",
    `Current working directory: ${cwd}`,
  ].join("\n");
}

export async function runLlmScenario(
  contender: Contender,
  scenario: Scenario,
  opts: LlmRunnerOptions,
): Promise<LlmRun> {
  const dir = join(opts.cwd, `${contender.info.id}-${scenario.id}`);
  await mkdir(dir, { recursive: true });
  const filePath = join(dir, scenario.fileName);
  const fixtureBytes =
    scenario.fixtureBytes ?? Buffer.from(scenario.fixture, "utf-8");
  await writeFile(filePath, fixtureBytes);

  const startedAt = Date.now();
  const base: LlmRun = {
    contenderId: contender.info.id,
    scenarioId: scenario.id,
    modelId: opts.model.id,
    pass: false,
    outcome: "error",
    steps: 0,
    toolCalls: [],
    readFirst: false,
    editedBlind: false,
    tokensIn: 0,
    tokensOut: 0,
    costUsd: 0,
    durationMs: 0,
  };

  try {
    const tools = (await contender.listTools()).filter((t) =>
      opts.toolFilter.includes(t.name),
    );
    if (tools.length === 0) {
      base.outcome = "no tools";
      base.failureKind = "skipped";
      return base;
    }

    const messages: ChatMessage[] = [
      { role: "system", content: buildSystemPrompt(tools, dir) },
      { role: "user", content: taskPrompt(scenario) },
    ];
    const traceMessages: LlmTrace["messages"] = messages.map((m) => ({ ...m }));

    let mutationApplied = false;
    const seenRead = { value: false };

    for (let step = 0; step < opts.maxSteps; step++) {
      const result = await chat(
        {
          model: opts.model,
          baseUrl: opts.baseUrl,
          apiKey: opts.apiKey,
          tools,
          maxTokens: opts.model.maxTokens,
          timeoutMs: opts.timeoutMs,
        },
        messages,
      );
      base.tokensIn += result.tokensIn;
      base.tokensOut += result.tokensOut;

      if (result.toolCalls.length === 0) break;

      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: "",
        toolCalls: result.toolCalls.map((tc) => ({
          id: tc.id,
          name: tc.name,
          arguments: tc.arguments,
        })),
      };
      messages.push(assistantMsg);
      traceMessages.push({
        ...assistantMsg,
        reasoning: result.reasoning ?? undefined,
      });

      for (const call of result.toolCalls) {
        const tool = tools.find((t) => t.name === call.name);
        if (!tool) {
          messages.push({
            role: "tool",
            toolCallId: call.id,
            content: `Unknown tool: ${call.name}`,
          });
          base.toolCalls.push({ name: call.name, ok: false });
          continue;
        }
        let params: unknown;
        try {
          params = JSON.parse(call.arguments);
        } catch {
          messages.push({
            role: "tool",
            toolCallId: call.id,
            content: `Invalid JSON arguments: ${call.arguments.slice(0, 300)}`,
          });
          base.toolCalls.push({ name: call.name, ok: false });
          continue;
        }
        if (!base.readFirst && isReadCall(call.name, params)) {
          base.readFirst = true;
        }
        if (isEditCall(call.name) && !seenRead.value) {
          base.editedBlind = true;
        }
        const toolResult = await tool.execute(params, dir);
        if (!seenRead.value && isReadCall(call.name, params)) {
          seenRead.value = true;
          if (scenario.mutateAfterRead && !mutationApplied) {
            const current = await readFile(filePath, "utf-8");
            await writeFile(filePath, scenario.mutateAfterRead(current), "utf-8");
            mutationApplied = true;
          }
        }
        if (scenario.mutateAfterEdit && !mutationApplied && isEditCall(call.name)) {
          const current = await readFile(filePath, "utf-8");
          const mutated = scenario.mutateAfterEditFn
            ? scenario.mutateAfterEditFn(current)
            : current;
          await writeFile(filePath, mutated, "utf-8");
          mutationApplied = true;
        }
        base.toolCalls.push({ name: call.name, ok: toolResult.ok });
        const content = toolResult.error
          ? `Error: ${toolResult.error}`
          : (toolResult.resultText ?? "ok");
        const resultMsg = { role: "tool" as const, toolCallId: call.id, content };
        messages.push(resultMsg);
        traceMessages.push(resultMsg);
      }
      opts.log?.(`  step ${step}: ${base.toolCalls.map((t) => t.name).join(", ")}`);
    }
    base.steps = base.toolCalls.length;
    base.durationMs = Date.now() - startedAt;
    base.costUsd =
      (base.tokensIn / 1_000_000) * opts.costPerMIn +
      (base.tokensOut / 1_000_000) * opts.costPerMOut;

    const actual = await readFile(filePath, "utf-8");
    base.actualContent = actual;
    const evalOutcome = evaluateLlmOutcome(
      contender.info.id,
      scenario,
      actual,
      fixtureBytes.toString("utf-8"),
    );
    base.pass = evalOutcome.pass;
    base.outcome = evalOutcome.outcome;
    base.failureKind = evalOutcome.failureKind;

    if (opts.traceDir) {
      const trace: LlmTrace = {
        modelId: opts.model.id,
        contenderId: contender.info.id,
        scenarioId: scenario.id,
        task: taskPrompt(scenario),
        startedAt: new Date(startedAt).toISOString(),
        durationMs: base.durationMs,
        tokensIn: base.tokensIn,
        tokensOut: base.tokensOut,
        costUsd: base.costUsd,
        pass: base.pass,
        outcome: base.outcome,
        failureKind: base.failureKind,
        readFirst: base.readFirst,
        editedBlind: base.editedBlind,
        expectedContent: scenario.expected.content,
        actualContent: base.actualContent,
        messages: traceMessages,
      };
      const safeModel = opts.model.id.replace(/[^A-Za-z0-9._-]/g, "_");
      const safeContender = contender.info.id.replace(/[^A-Za-z0-9._-]/g, "_");
      const traceDir = join(opts.traceDir, safeModel);
      await mkdir(traceDir, { recursive: true });
      const tracePath = join(
        traceDir,
        `${safeContender}-${scenario.id}.json`,
      );
      await writeFile(tracePath, JSON.stringify(trace, null, 1), "utf-8");
      base.tracePath = tracePath;
    }
  } catch (error) {
    base.outcome = "error";
    base.failureKind = "crashed";
    base.errorMessage = error instanceof Error ? error.message : String(error);
    base.durationMs = Date.now() - startedAt;
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
  return base;
}

function isReadCall(name: string, params: unknown): boolean {
  if (name === "read" || name === "hashline_read") return true;
  return false;
}

function isEditCall(name: string): boolean {
  if (
    ["edit", "replace", "insert", "hashline_edit", "undo", "undo_last_change"].includes(name)
  ) {
    return true;
  }
  return name === "write";
}

export function evaluateLlmOutcome(
  contenderId: string,
  scenario: Scenario,
  actual: string,
  fixture: string,
): EvaluatedOutcome {
  const postMutation = scenario.mutateAfterRead
    ? scenario.mutateAfterRead(fixture)
    : null;
  const expected =
    scenario.expectedByContender?.[contenderId] ?? scenario.expected;

  if (scenario.id === "undo") {
    if (actual === fixture) return { pass: true, outcome: "undo" };
    return {
      pass: false,
      outcome: "applied",
      failureKind: "applied-wrong",
    };
  }

  if (scenario.id === "b16b-undo-stale") {
    const postEditMutated = scenario.mutateAfterEditFn
      ? scenario.mutateAfterEditFn("aaa\nBBB\nccc\n")
      : "aaa\nBBB\nccc-x\n";
    if (actual === postEditMutated) return { pass: true, outcome: "undo-refused" };
    if (actual === fixture) return { pass: true, outcome: "undo" };
    return {
      pass: false,
      outcome: "applied",
      failureKind: "applied-wrong",
    };
  }

  if (scenario.id === "error-guidance") {
    const recovered = "aaa\nBBB\nccc\n";
    if (actual === recovered) return { pass: true, outcome: "recovered" };
    if (postMutation !== null && actual === postMutation) {
      return {
        pass: false,
        outcome: "rejected",
        failureKind: "no-recovery",
      };
    }
    return {
      pass: false,
      outcome: "applied",
      failureKind: "silent-wrong-line",
    };
  }

  if (expected.outcome === "rejected") {
    if (postMutation !== null && actual === postMutation) {
      return { pass: true, outcome: "rejected" };
    }
    const recovered = RECOVERY_CONTENT[scenario.id];
    if (recovered !== undefined && actual === recovered) {
      return { pass: true, outcome: "recovered" };
    }
    return {
      pass: false,
      outcome: "applied",
      failureKind: "silent-wrong-line",
    };
  }

  if (expected.content !== undefined && actual === expected.content) {
    return { pass: true, outcome: "applied" };
  }
  if (
    expected.outcome === "either" &&
    postMutation !== null &&
    actual === postMutation
  ) {
    return { pass: true, outcome: "rejected" };
  }
  if (expected.outcome === "either" && actual === fixture) {
    return { pass: true, outcome: "noop" };
  }
  return {
    pass: false,
    outcome: "applied",
    failureKind: actual === fixture ? "noop" : "applied-wrong",
  };
}
