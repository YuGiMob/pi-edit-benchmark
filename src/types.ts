export type Outcome = "applied" | "rejected" | "merged";

export type FailureKind =
  | "silent-wrong-line"
  | "applied-wrong"
  | "rejected-valid"
  | "corrupted"
  | "crashed";

export interface ReadLine {
  lineNumber: number;
  anchor: string;
  content: string;
}

export interface ReadResult {
  text: string;
  lines: ReadLine[];
  bytes: number;
}

export type TargetSpec =
  | { kind: "line"; match: string; matchRe?: RegExp }
  | { kind: "line-nth"; match: string; nth: number }
  | { kind: "range"; from: string; to: string }
  | { kind: "empty-file" }
  | { kind: "eof" };

export type ScenarioFocus = "core" | "staleness" | "served-state";

export interface Scenario {
  id: string;
  fileName: string;
  focus?: ScenarioFocus;
  category: "correctness" | "safety" | "robustness";
  name: string;
  description: string;
  fixture: string;
  fixtureBytes?: Buffer;
  target: TargetSpec;
  replacement: string[];
  mutateAfterRead?: (content: string) => string;
  mutateAfterEdit?: boolean;
  mutateAfterEditFn?: (content: string) => string;
  chainedSecondTarget?: TargetSpec;
  chainedSecondReplacement?: string[];
  readOptions?: { offset?: number; limit?: number };
  blindEdit?: boolean;
  chained?: boolean;
  undoAfterExternalChange?: boolean;
  reversedRange?: boolean;
  skipFor?: string[];
  expected: {
    outcome: Outcome | "either";
    content?: string;
  };
  expectedByContender?: Record<
    string,
    { outcome: Outcome | "either"; content?: string }
  >;
}

export interface ScenarioRun {
  contenderId: string;
  scenario: Scenario;
  anchorLength?: number;
  outcome: Outcome | "error";
  failureKind?: FailureKind;
  actualContent?: string;
  errorMessage?: string;
  readBytes?: number;
  readLines?: number;
  anchorStability?: number;
  pass: boolean;
}

export interface ContenderInfo {
  id: string;
  name: string;
  version: string;
  description: string;
  available: boolean;
  availabilityNote?: string;
}

export interface Contender {
  info: ContenderInfo;
  read(path: string, cwd: string, options?: { offset?: number; limit?: number }): Promise<ReadResult>;
  buildEditRequest(
    readResult: ReadResult,
    scenario: Scenario,
    cwd: string,
  ): unknown;
  executeEdit(request: unknown, cwd: string): Promise<{
    ok: boolean;
    error?: string;
    resultText?: string;
  }>;
  buildInsertRequest?(readResult: ReadResult, scenario: Scenario, cwd: string): unknown;
  executeInsert?(request: unknown, cwd: string): Promise<{
    ok: boolean;
    error?: string;
    resultText?: string;
  }>;
  listTools(): Promise<ToolSpec[]>;
  supportsUndo: boolean;
  undo?(path: string, cwd: string): Promise<{ ok: boolean; error?: string }>;
}

export interface ToolSpec {
  name: string;
  description: string;
  promptSnippet?: string;
  promptGuidelines?: string[];
  parameters: unknown;
  execute: (params: unknown, cwd: string) => Promise<{
    ok: boolean;
    error?: string;
    resultText?: string;
  }>;
}

export interface LlmModelSpec {
  id: string;
  name: string;
  reasoning: boolean;
  maxTokens: number;
  provider?: string;
  baseUrl?: string;
  api?: "openai-completions" | "openai-responses";
  reasoningEffort?: string;
}

export interface LlmRun {
  contenderId: string;
  scenarioId: string;
  modelId: string;
  pass: boolean;
  outcome: string;
  failureKind?: string;
  steps: number;
  toolCalls: { name: string; ok: boolean }[];
  readFirst: boolean;
  editedBlind: boolean;
  tokensIn: number;
  tokensOut: number;
  costUsd: number;
  durationMs: number;
  errorMessage?: string;
  actualContent?: string;
  tracePath?: string;
}

export interface LlmTraceMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  toolCallId?: string;
  reasoning?: string;
  toolCalls?: { id: string; name: string; arguments: string }[];
}

export interface LlmTrace {
  modelId: string;
  contenderId: string;
  scenarioId: string;
  task: string;
  startedAt: string;
  durationMs: number;
  tokensIn: number;
  tokensOut: number;
  costUsd: number;
  pass: boolean;
  outcome: string;
  failureKind?: string;
  readFirst: boolean;
  editedBlind: boolean;
  expectedContent?: string;
  actualContent?: string;
  messages: LlmTraceMessage[];
}

export interface LlmReport {
  generatedAt: string;
  models: LlmModelSpec[];
  runs: LlmRun[];
}

export interface ContenderScore {
  contenderId: string;
  total: number;
  max: number;
  passCount: number;
  scenarioCount: number;
  failures: { scenarioId: string; kind: FailureKind; detail: string }[];
  readBytesPerLine: number;
  anchorLength: number;
  supportsUndo: boolean;
}

export interface BenchReport {
  generatedAt: string;
  contenders: ContenderInfo[];
  scores: ContenderScore[];
  runs: ScenarioRun[];
}
