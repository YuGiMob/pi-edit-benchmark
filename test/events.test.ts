import { describe, expect, it } from "vitest";
import { makeRegistry } from "../src/contenders/shared";
import { emitSessionEvent, executeToolWithEvents } from "../src/llm/tool-events";
import type { Contender, ToolSpec } from "../src/types";

function testTool(
  execute: (
    params: any,
    cwd: string,
  ) => Promise<{ ok: boolean; error?: string; resultText?: string }>,
): ToolSpec {
  return { name: "edit", description: "test tool", parameters: {}, execute };
}

function testContender(registry: ReturnType<typeof makeRegistry>): Contender {
  return {
    info: { id: "test", name: "test", version: "0", description: "", available: true },
    async listTools() {
      return [];
    },
    emitEvent: (name, payload, cwd) =>
      registry.fire(name, payload, {
        cwd,
        sessionManager: {
          getSessionId: () => "test",
          getSessionFile: () => undefined,
        },
      }),
  };
}

describe("tool lifecycle events", () => {
  it("runs tool_call handlers and applies input mutations", async () => {
    const registry = makeRegistry();
    const seen: unknown[] = [];
    registry.pi.on("tool_call", (event: any) => {
      event.input.path = "mutated.ts";
      seen.push({ ...event.input });
    });
    const result = await executeToolWithEvents(
      testContender(registry),
      testTool(async (params: any) => {
        seen.push({ executed: params.path });
        return { ok: true, resultText: "ok" };
      }),
      { path: "original.ts" },
      "c1",
      "/tmp",
    );
    expect(result.ok).toBe(true);
    expect(seen).toEqual([{ path: "mutated.ts" }, { executed: "mutated.ts" }]);
  });

  it("blocks execution when a tool_call handler returns block", async () => {
    const registry = makeRegistry();
    registry.pi.on("tool_call", () => ({ block: true, reason: "stale read" }));
    let executed = false;
    const result = await executeToolWithEvents(
      testContender(registry),
      testTool(async () => {
        executed = true;
        return { ok: true };
      }),
      {},
      "c1",
      "/tmp",
    );
    expect(executed).toBe(false);
    expect(result).toEqual({ ok: false, error: "stale read" });
  });

  it("blocks the call when a tool_call handler throws", async () => {
    const registry = makeRegistry();
    registry.pi.on("tool_call", () => {
      throw new Error("boom");
    });
    const result = await executeToolWithEvents(
      testContender(registry),
      testTool(async () => ({ ok: true })),
      {},
      "c1",
      "/tmp",
    );
    expect(result.ok).toBe(false);
    expect(result.error).toBe("boom");
  });

  it("chains tool_result patches in handler order", async () => {
    const registry = makeRegistry();
    registry.pi.on("tool_result", (event: any) => ({
      content: [{ type: "text", text: `${event.content[0].text} first` }],
    }));
    registry.pi.on("tool_result", (event: any) => ({
      content: [{ type: "text", text: `${event.content[0].text} second` }],
    }));
    const result = await executeToolWithEvents(
      testContender(registry),
      testTool(async () => ({ ok: true, resultText: "base" })),
      {},
      "c1",
      "/tmp",
    );
    expect(result.resultText).toBe("base first second");
  });

  it("fires session events with the working directory", async () => {
    const registry = makeRegistry();
    const events: string[] = [];
    registry.pi.on("session_start", (_event: any, ctx: any) => {
      events.push(`start:${ctx.cwd}`);
    });
    registry.pi.on("session_shutdown", () => {
      events.push("shutdown");
    });
    const contender = testContender(registry);
    await emitSessionEvent(contender, "session_start", "/tmp/work");
    await emitSessionEvent(contender, "session_shutdown", "/tmp/work");
    expect(events).toEqual(["start:/tmp/work", "shutdown"]);
  });

  it("executes directly when the contender exposes no emitEvent", async () => {
    const contender: Contender = {
      info: { id: "x", name: "x", version: "0", description: "", available: true },
      async listTools() {
        return [];
      },
    };
    const result = await executeToolWithEvents(
      contender,
      testTool(async () => ({ ok: true, resultText: "direct" })),
      {},
      "c1",
      "/tmp",
    );
    expect(result.resultText).toBe("direct");
  });
});
