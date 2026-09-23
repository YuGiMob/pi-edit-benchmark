import type { Contender, ToolSpec } from "../types";

export interface ToolCallResult {
  ok: boolean;
  error?: string;
  resultText?: string;
}

export async function executeToolWithEvents(
  contender: Contender,
  tool: ToolSpec,
  params: unknown,
  toolCallId: string,
  cwd: string,
): Promise<ToolCallResult> {
  const emit = contender.emitEvent;
  if (!emit) return tool.execute(params, cwd);

  const payload = { toolName: tool.name, toolCallId, input: params };
  let blocked: string | undefined;
  try {
    const outcome = (await emit("tool_call", payload, cwd)) as
      | { block?: boolean; reason?: string }
      | undefined;
    if (outcome?.block) blocked = outcome.reason ?? "Tool call blocked";
  } catch (error) {
    blocked = error instanceof Error ? error.message : String(error);
  }

  const input = payload.input;
  let result: ToolCallResult =
    blocked !== undefined
      ? { ok: false, error: blocked }
      : await tool.execute(input, cwd);

  try {
    const event = {
      toolName: tool.name,
      toolCallId,
      input,
      content: [{ type: "text", text: result.error ?? result.resultText ?? "" }],
      details: undefined as unknown,
      isError: !result.ok,
      usage: undefined as unknown,
    };
    const patched = (await emit("tool_result", event, cwd)) as typeof event;
    const text = (patched.content ?? [])
      .filter((part) => part.type === "text")
      .map((part) => part.text)
      .join("");
    result = {
      ok: !patched.isError,
      error: patched.isError ? text : undefined,
      resultText: patched.isError ? undefined : text,
    };
  } catch {
  }

  return result;
}

export async function emitSessionEvent(
  contender: Contender,
  name: string,
  cwd: string,
): Promise<void> {
  if (!contender.emitEvent) return;
  try {
    await contender.emitEvent(name, {}, cwd);
  } catch {
  }
}
