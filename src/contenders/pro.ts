import type { Contender, ToolSpec } from "../types";
import { makeRegistry } from "./shared";

export function proContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getRegistry = async () => {
    if (registryRef.registry) return registryRef.registry;
    const mod = await import("pi-hashline-edit-pro");
    const fake = makeRegistry();
    mod.default(fake.pi);
    registryRef.registry = fake;
    return fake;
  };
  return {
    info: {
      id: "pi-hashline-edit-pro",
      name: "pi-hashline-edit-pro",
      version: "4.2.6",
      description:
        "Strict hashline fork: 4-char perfect anchors, served-range verification, boundary anti-duplication, persisted undo.",
      available: true,
    },
    async listTools(): Promise<ToolSpec[]> {
      const registry = await getRegistry();
      return registry.listTools();
    },
  };
}
