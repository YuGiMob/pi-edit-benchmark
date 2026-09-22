import type { Contender, ToolSpec } from "../types";
import { builtinReadTool, extractResultText, isErrorResult, makeRegistry, pkgVersion } from "./shared";
import { readFileSync } from "fs";
import { isAbsolute, join } from "path";

export function editGuardContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getRegistry = async () => {
    if (registryRef.registry) return registryRef.registry;
    const mod = await import("pi-edit-guard");
    const fake = makeRegistry();
    mod.default(fake.pi);
    try {
      const editTool = fake.getTool("edit");
      editTool.beforeExecute = (params: unknown, ctx: { cwd?: string } | undefined) => {
        const message = whitespaceNoMatchError(params, ctx?.cwd);
        if (message) throw new Error(message);
      };
    } catch {
    }
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

function whitespaceNoMatchError(
  params: unknown,
  cwd: string | undefined,
): string | undefined {
  const input = params as { path?: unknown; edits?: unknown } | undefined;
  if (!input || typeof input.path !== "string" || !Array.isArray(input.edits)) return undefined;
  const needles = input.edits
    .map((edit) => (edit as { oldText?: unknown } | undefined)?.oldText)
    .filter((text): text is string => typeof text === "string" && text.length > 0 && text.trim() === "");
  if (needles.length === 0) return undefined;
  const filePath = isAbsolute(input.path) ? input.path : join(cwd ?? process.cwd(), input.path);
  let content: string;
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    return undefined;
  }
  const missing = needles.find((needle) => !content.includes(needle));
  if (!missing) return undefined;
  return `Could not find oldText in ${input.path}. The intended edit could not be applied.`;
}
