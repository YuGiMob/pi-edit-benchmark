import type { Contender, ToolSpec } from "../types";
import { makeRegistry } from "./shared";

export interface LineHashFamilyOptions {
  id: string;
  name: string;
  version: string;
  description: string;
  load: () => Promise<{ default: (pi: any) => void }>;
}

export function lineHashFamilyContender(opts: LineHashFamilyOptions): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getRegistry = async () => {
    if (registryRef.registry) return registryRef.registry;
    const mod = await opts.load();
    const fake = makeRegistry();
    mod.default(fake.pi);
    registryRef.registry = fake;
    return fake;
  };
  return {
    info: {
      id: opts.id,
      name: opts.name,
      version: opts.version,
      description: opts.description,
      available: true,
    },
    async listTools(): Promise<ToolSpec[]> {
      const registry = await getRegistry();
      return registry.listTools();
    },
  };
}
