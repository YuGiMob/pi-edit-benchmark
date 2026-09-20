import { createReadTool, createReadToolDefinition } from "@earendil-works/pi-coding-agent";
import type { Contender, ToolSpec } from "../types";
import { extractResultText, isErrorResult, makeRegistry, pkgVersion } from "./shared";

export function semanticEditContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getRegistry = async () => {
    if (registryRef.registry) return registryRef.registry;
    const mod = await import("pi-semantic-edit");
    const fake = makeRegistry();
    mod.default(fake.pi);
    registryRef.registry = fake;
    return fake;
  };
  return {
    info: {
      id: "pi-semantic-edit",
      name: "pi-semantic-edit",
      version: pkgVersion("pi-semantic-edit", "0.4.0"),
      description:
        "Tolerant-matching edit: { path, edits: [{ oldText, newText, replaceAll? }] } with a 10-pass fuzzy chain (whitespace/indent/escape/Unicode drift) and a uniqueness guard that refuses ambiguous matches with line positions. No anchors, no staleness check. Replaces the built-in edit.",
      available: true,
    },
    async listTools(): Promise<ToolSpec[]> {
      const registry = await getRegistry();
      const readDef = createReadToolDefinition(".") as unknown as any;
      return [
        {
          name: "read",
          description: readDef.description,
          promptSnippet: readDef.promptSnippet,
          promptGuidelines: readDef.promptGuidelines,
          parameters: readDef.parameters ?? {},
          execute: (params: unknown, runCwd: string) => runBuiltinRead(params, runCwd),
        },
        ...registry.listTools(),
      ];
    },
  };
}

async function runBuiltinRead(params: unknown, cwd: string) {
  const tool = createReadTool(cwd) as unknown as {
    execute(...args: unknown[]): Promise<unknown>;
  };
  const result = await tool.execute("t1", params, undefined, undefined, { cwd } as never);
  const text = extractResultText(result);
  return {
    ok: !isErrorResult(result),
    resultText: text,
    error: isErrorResult(result) ? text : undefined,
  };
}
