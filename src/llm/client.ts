import type { LlmModelSpec, ToolSpec } from "../types";

export interface ChatMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  toolCallId?: string;
  toolCalls?: ChatToolCall[];
}

export interface ChatToolCall {
  id: string;
  name: string;
  arguments: string;
}

export interface ChatResult {
  content: string;
  toolCalls: ChatToolCall[];
  finishReason: string;
  tokensIn: number;
  tokensOut: number;
  reasoning?: string;
}

export interface ClientOptions {
  model: LlmModelSpec;
  baseUrl: string;
  apiKey: string;
  tools: ToolSpec[];
  maxTokens: number;
  timeoutMs: number;
}

const CHAT_API = "/chat/completions";
const RESPONSES_API = "/responses";
export async function chat(
  opts: ClientOptions,
  messages: ChatMessage[],
): Promise<ChatResult> {
  let lastError: Error | undefined;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return await chatOnce(opts, messages);
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      const transient = /5\d\d|aborted|ECONNRESET|ETIMEDOUT|socket/i.test(
        lastError.message,
      );
      const rateLimited = /rate limit|429/i.test(lastError.message);
      if (!transient && !rateLimited) throw lastError;
      if (attempt === 2) throw lastError;
      await new Promise((r) =>
        setTimeout(r, rateLimited ? 90_000 * (attempt + 1) : 1500 * (attempt + 1)),
      );
    }
  }
  throw lastError;
}

async function chatOnce(
  opts: ClientOptions,
  messages: ChatMessage[],
): Promise<ChatResult> {
  return opts.model.api === "openai-responses"
    ? chatResponses(opts, messages)
    : chatCompletions(opts, messages);
}

async function chatCompletions(
  opts: ClientOptions,
  messages: ChatMessage[],
): Promise<ChatResult> {
  const toolSchemas = opts.tools.map((t) => ({
    type: "function",
    function: {
      name: t.name,
      description: t.description,
      parameters: t.parameters as Record<string, unknown>,
    },
  }));
  const body: Record<string, unknown> = {
    model: opts.model.id,
    messages: messages.map((m) => {
      const base: Record<string, unknown> = { role: m.role, content: m.content };
      if (m.toolCallId) base.tool_call_id = m.toolCallId;
      if (m.toolCalls) {
        base.tool_calls = m.toolCalls.map((tc) => ({
          id: tc.id,
          type: "function",
          function: { name: tc.name, arguments: tc.arguments },
        }));
      }
      return base;
    }),
    max_tokens: opts.maxTokens,
  };
  if (toolSchemas.length > 0) body.tools = toolSchemas;
  if (opts.model.reasoningEffort) body.reasoning_effort = opts.model.reasoningEffort;

  const { ok, raw } = await postJson(opts, CHAT_API, body);
  if (!ok) {
    throw new Error(`API ${raw.slice(0, 300)}`);
  }
  const data = JSON.parse(raw) as {
    choices?: Array<{
      message?: {
        content?: string | null;
        reasoning?: string | null;
        tool_calls?: Array<{
          id?: string;
          function?: { name?: string; arguments?: string };
        }>;
      };
      finish_reason?: string;
    }>;
    usage?: { prompt_tokens?: number; completion_tokens?: number };
  };
  const choice = data.choices?.[0];
  const message = choice?.message;
  if (!message) throw new Error(`Empty completion: ${raw.slice(0, 300)}`);
  return {
    content: message.content ?? "",
    reasoning: message.reasoning ?? undefined,
    toolCalls: (message.tool_calls ?? []).map((tc) => ({
      id: tc.id ?? `call_${Math.random().toString(36).slice(2, 12)}`,
      name: tc.function?.name ?? "",
      arguments: tc.function?.arguments ?? "{}",
    })),
    finishReason: choice?.finish_reason ?? "stop",
    tokensIn: data.usage?.prompt_tokens ?? 0,
    tokensOut: data.usage?.completion_tokens ?? 0,
  };
}

async function chatResponses(
  opts: ClientOptions,
  messages: ChatMessage[],
): Promise<ChatResult> {
  const toolSchemas = opts.tools.map((t) => ({
    type: "function",
    name: t.name,
    description: t.description,
    parameters: t.parameters as Record<string, unknown>,
    strict: false,
  }));
  const body: Record<string, unknown> = {
    model: opts.model.id,
    input: messages.flatMap(toResponsesInput),
    max_output_tokens: opts.maxTokens,
  };
  if (toolSchemas.length > 0) body.tools = toolSchemas;
  if (opts.model.reasoningEffort) body.reasoning = { effort: opts.model.reasoningEffort };

  const { ok, raw } = await postJson(opts, RESPONSES_API, body);
  if (!ok) {
    throw new Error(`API ${raw.slice(0, 300)}`);
  }
  const data = JSON.parse(raw) as {
    output?: Array<{
      type?: string;
      content?: Array<{ type?: string; text?: string }>;
      summary?: Array<{ type?: string; text?: string }>;
      name?: string;
      arguments?: string;
      call_id?: string;
    }>;
    status?: string;
    usage?: { input_tokens?: number; output_tokens?: number };
  };
  const output = data.output ?? [];
  const content = output
    .filter((item) => item.type === "message")
    .flatMap((item) => item.content ?? [])
    .filter((part) => part.type === "output_text")
    .map((part) => part.text ?? "")
    .join("");
  const reasoning = output
    .filter((item) => item.type === "reasoning")
    .flatMap((item) => item.summary ?? [])
    .map((part) => part.text ?? "")
    .join("\n");
  return {
    content,
    reasoning: reasoning || undefined,
    toolCalls: output
      .filter((item) => item.type === "function_call")
      .map((item) => ({
        id: item.call_id ?? `call_${Math.random().toString(36).slice(2, 12)}`,
        name: item.name ?? "",
        arguments: item.arguments ?? "{}",
      })),
    finishReason: data.status ?? "stop",
    tokensIn: data.usage?.input_tokens ?? 0,
    tokensOut: data.usage?.output_tokens ?? 0,
  };
}

function toResponsesInput(m: ChatMessage): Record<string, unknown>[] {
  if (m.role === "tool") {
    return [
      { type: "function_call_output", call_id: m.toolCallId, output: m.content },
    ];
  }
  if (m.role === "assistant" && m.toolCalls && m.toolCalls.length > 0) {
    const items: Record<string, unknown>[] = [];
    if (m.content) {
      items.push({
        role: "assistant",
        content: [{ type: "output_text", text: m.content }],
      });
    }
    for (const tc of m.toolCalls) {
      items.push({
        type: "function_call",
        call_id: tc.id,
        name: tc.name,
        arguments: tc.arguments,
      });
    }
    return items;
  }
  const type = m.role === "assistant" ? "output_text" : "input_text";
  return [{ role: m.role, content: [{ type, text: m.content }] }];
}

async function postJson(
  opts: ClientOptions,
  path: string,
  body: Record<string, unknown>,
): Promise<{ ok: boolean; raw: string }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), opts.timeoutMs);
  try {
    const response = await fetch(
      `${opts.baseUrl.replace(/\/$/, "")}${path}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${opts.apiKey}`,
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      },
    );
    return { ok: response.ok, raw: await response.text() };
  } finally {
    clearTimeout(timeout);
  }
}
