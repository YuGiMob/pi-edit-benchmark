import type { Contender, ToolSpec } from "../types";
import { makeRegistry } from "./shared";

export function aftContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getRegistry = async () => {
    if (registryRef.registry) return registryRef.registry;
    const mod = await import("@cortexkit/aft-pi");
    const fake = makeRegistry();
    mod.default(fake.pi);
    for (let i = 0; i < 30; i++) {
      try {
        fake.getTool("read");
        fake.getTool("edit");
        registryRef.registry = fake;
        return fake;
      } catch {
        await new Promise((r) => setTimeout(r, 500));
      }
    }
    throw new Error("aft-pi did not register read/edit tools within 15s");
  };
  return {
    info: {
      id: "@cortexkit/aft-pi",
      name: "@cortexkit/aft-pi",
      version: "0.54.0",
      description:
        "Agent File Tools: Rust-backed read/edit with occurrence-targeted find/replace, symbol edits, and fuzzy matching. No anchors, no staleness check.",
      available: true,
    },
    async listTools(): Promise<ToolSpec[]> {
      const registry = await getRegistry();
      return registry.listTools();
    },
  };
}
