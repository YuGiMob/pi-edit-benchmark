import { mkdir, writeFile } from "fs/promises";
import { join } from "path";
import { homedir } from "os";
import type { Contender, ToolSpec } from "../types";
import { makeRegistry, pkgVersion } from "./shared";

const ID = "pi-agent-ide";
const DISABLED_MODULES = [
  "ide.tips",
  "ide.doctor",
  "ide.languages",
  "ide.documentation",
  "ide.processes",
  "ide.vision",
  "ide.debugger",
  "ide.terminal",
  "ide.lsp",
  "ide.formatter",
  "ide.lint",
  "ide.changes",
  "ide.ast",
  "ide.diagnostics",
  "read.web",
  "read.filesystem.jq",
  "read.filesystem.image",
  "read.filesystem.pdf",
];

async function ensureSettings(): Promise<void> {
  const dir = join(homedir(), ".pi", "agent", "pi-agent-ide");
  const file = join(dir, "extensions.json");
  try {
    await mkdir(dir, { recursive: true });
    await writeFile(
      file,
      JSON.stringify({ preset: "full", disabled: DISABLED_MODULES, enabled: [] }, null, 2),
      "utf-8",
    );
  } catch {
  }
}

export function agentIdeContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getRegistry = async () => {
    if (registryRef.registry) return registryRef.registry;
    await ensureSettings();
    const fake = makeRegistry();
    const pi = new Proxy(fake.pi as any, {
      get(target, key) {
        if (key in target) return target[key];
        return () => {};
      },
    });
    const mod = await import("../../node_modules/pi-agent-ide/dist/pi-agent-ide.js");
    await mod.default(pi);
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
      version: pkgVersion("pi-agent-ide", "0.6.2"),
      description:
        "Agent-native IDE: read with source coordinates, plus guarded editing via replace (text/line-range/search-match selectors), insert, delete and write; stale selections recover with guidance.",
      available: true,
    },
    async listTools(): Promise<ToolSpec[]> {
      const registry = await getRegistry();
      return registry.listTools();
    },
    systemPromptPatch,
  };
}
