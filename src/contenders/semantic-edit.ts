import type { Contender, ToolSpec } from "../types";
import { builtinReadTool, makeRegistry, pkgVersion } from "./shared";

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
      return [
        builtinReadTool(),
        ...registry.listTools(),
      ];
    },
  };
}
