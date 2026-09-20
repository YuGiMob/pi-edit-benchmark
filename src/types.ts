export type Outcome = "applied" | "rejected" | "merged";

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
  mutateAfterRead?: (content: string) => string;
  expected: {
    outcome: Outcome | "either";
    content?: string;
  };
  expectedByContender?: Record<
    string,
    { outcome: Outcome | "either"; content?: string }
  >;
}

export interface ContenderInfo {
  id: string;
  name: string;
  version: string;
  description: string;
  available: boolean;
}

export interface Contender {
  info: ContenderInfo;
  listTools(): Promise<ToolSpec[]>;
  systemPromptPatch?: (basePrompt: string) => string;
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
  contenderVersion?: string;
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
  contenderVersion?: string;
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
