import type { Contender, ToolSpec } from "../types";
import { makeRegistry, pkgVersion } from "./shared";

export function readmapContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getRegistry = async () => {
    if (registryRef.registry) return registryRef.registry;
    const mod = await import("pi-hashline-readmap");
    const fake = makeRegistry();
    mod.default(fake.pi);
    registryRef.registry = fake;
    return fake;
  };
  return {
    info: {
      id: "pi-hashline-readmap",
      name: "pi-hashline-readmap",
      version: pkgVersion("pi-hashline-readmap", "0.14.0"),
      description:
        "Unified extension: hash-anchored read/edit (LINE:HASH| rows), code maps, AST-grep, and more.",
      available: true,
    },
    async listTools(): Promise<ToolSpec[]> {
      const registry = await getRegistry();
      return registry.listTools();
    },
  };
}
