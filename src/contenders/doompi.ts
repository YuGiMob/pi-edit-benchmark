import type { Contender, ToolSpec } from "../types";
import { makeRegistry, pkgVersion } from "./shared";

const ID = "@agimon-ai/doompi-edit";

export function doompiEditContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getRegistry = async () => {
    if (registryRef.registry) return registryRef.registry;
    const fake = makeRegistry();
    const host = await import("@agimon-ai/doompi-core/cordis-host");
    await host.installDoomCordisHost(fake.pi, { mode: "standalone" });
    for (const name of ["read", "grep"]) {
      const m = await import(`@agimon-ai/doompi-${name}/extensions/pi`);
      m.default(fake.pi);
    }
    const mod = await import("@agimon-ai/doompi-edit/extensions/pi");
    mod.default(fake.pi);
    await new Promise((r) => setTimeout(r, 2000));
    registryRef.registry = fake;
    return fake;
  };
  const systemPromptPatch = (basePrompt: string): string => {
    let prompt = basePrompt;
    for (const handler of registryRef.registry!.getHandlers("before_agent_start")) {
      prompt = handler({ systemPrompt: prompt })?.systemPrompt ?? prompt;
    }
    return prompt;
  };
  return {
    info: {
      id: ID,
      name: ID,
      version: pkgVersion("@agimon-ai/doompi-edit", "0.0.1-alpha.49"),
      description:
        "Snapshot-bound hashline editing (DoomPi): read/grep return exact-byte file tags and 3-letter line anchors; edit applies snapshot-bound inclusive ranges and refuses stale ones.",
      available: true,
    },
    async listTools(): Promise<ToolSpec[]> {
      const registry = await getRegistry();
      return registry.listTools();
    },
    systemPromptPatch,
  };
}
