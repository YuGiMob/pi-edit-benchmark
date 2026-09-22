import type { Contender, ToolSpec } from "../types";
import { builtinReadTool, extractResultText, isErrorResult, makeRegistry, pkgVersion } from "./shared";

export function editGuardContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getRegistry = async () => {
    if (registryRef.registry) return registryRef.registry;
    const mod = await import("pi-edit-guard");
    const fake = makeRegistry();
    mod.default(fake.pi);
    registryRef.registry = fake;
    return fake;
  };
  return {
    info: {
      id: "pi-edit-guard",
      name: "pi-edit-guard",
      version: pkgVersion("pi-edit-guard", "0.1.4"),
      description:
        "Overrides the built-in edit tool with argument repair and a 14-pass tiered match chain, mtime-based stale-read blocking, plus a snapshot-backed undo tool.",
      available: true,
    },
    async listTools(): Promise<ToolSpec[]> {
      const registry = await getRegistry();
      return [
        builtinReadTool(),
        ...registry.listTools().map((t) => ({
          ...t,
          execute: (params: unknown, runCwd: string) =>
            runTool(registry.getTool(t.name), params, runCwd),
        })),
      ];
    },
  };
}

async function runTool(
  tool: any,
  params: unknown,
  cwd: string,
): Promise<{ ok: boolean; error?: string; resultText?: string }> {
  try {
    const result = await tool.execute(
      "t1",
      params,
      undefined,
      undefined,
      {
        cwd,
        sessionManager: {
          getSessionId: () => "benchmark",
          getSessionFile: () => undefined,
        },
      } as never,
    );
    const text = extractResultText(result);
    const diff = (result as { details?: { diff?: string } })?.details?.diff;
    return {
      ok: !isErrorResult(result),
      resultText: diff ? `${text}\n${diff}` : text,
      error: isErrorResult(result) ? text : undefined,
    };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}
