import type { LlmModelSpec } from "../types";

export const LLM_MODELS: LlmModelSpec[] = [
  {
    id: "deepseek-v4.1-flash",
    name: "DeepSeek V4.1 Flash",
    reasoning: true,
    maxTokens: 16384,
    provider: "opencode-go",
    baseUrl: "https://opencode.ai/zen/go/v1",
    requiresReasoningContent: true,
  },
  {
    id: "glm-5.3-flash",
    name: "GLM 5.3 Flash",
    reasoning: true,
    maxTokens: 16384,
    provider: "opencode-go",
    baseUrl: "https://opencode.ai/zen/go/v1",
    reasoningEffort: "max",
  },
  {
    id: "qwen3.8-flash",
    name: "Qwen3.8-Flash",
    reasoning: true,
    maxTokens: 16384,
    provider: "opencode-go",
    baseUrl: "https://opencode.ai/zen/go/v1",
    reasoningEffort: "max",
  },
  {
    id: "mimo-v2.6-flash",
    name: "MiMo 2.6 Flash",
    reasoning: true,
    maxTokens: 16384,
    provider: "opencode-go",
    baseUrl: "https://opencode.ai/zen/go/v1",
  },
  {
    id: "mimo-v2.6-pro",
    name: "MiMo-V2.6-Pro",
    reasoning: true,
    maxTokens: 16384,
    provider: "opencode-go",
    baseUrl: "https://opencode.ai/zen/go/v1",
  },
  {
    id: "muse-spark-1.3-contributor",
    name: "Muse Spark 1.3 Contributor",
    reasoning: true,
    maxTokens: 16384,
    provider: "opencode-go",
    baseUrl: "https://opencode.ai/zen/go/v1",
    api: "openai-responses",
    reasoningEffort: "xhigh",
  },
  {
    id: "qwen3.8-27b-q2",
    name: "Qwen3.8-27B (UD-Q2_K_XL, llama.cpp)",
    reasoning: true,
    maxTokens: 16384,
    provider: "llamacpp",
    baseUrl: "http://192.168.0.21:8080/v1",
  },
  {
    id: "gemma-4-26b-a4b-q4",
    name: "Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp)",
    reasoning: true,
    maxTokens: 16384,
    provider: "llamacpp",
    baseUrl: "http://192.168.0.21:8080/v1",
  },
];

export const DEFAULT_LLM_SCENARIOS: string[] = [];

export const LLM_TOOL_FILTERS: Record<string, string[]> = {
  "builtin-edit": ["read", "edit"],
  "pi-hashline-edit-pro": ["read", "replace", "insert", "undo_last_change"],
  "pi-hashline-edit-pro-nodedup": ["read", "replace", "insert", "undo_last_change"],
  "pi-hashline-readmap": ["read", "edit"],
  "@cortexkit/aft-pi": ["read", "edit"],
  "@xynogen/pix-edit": ["read", "edit"],
  "@agimon-ai/doompi-edit": ["read", "grep", "edit"],
  "builtin-bash": ["bash"],
  "pi-semantic-edit": ["read", "edit"],
  "pi-edit-guard": ["read", "edit", "undo"],
};
