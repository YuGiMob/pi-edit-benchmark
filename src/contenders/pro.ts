import { mkdir, writeFile } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os";
import type { Contender, ToolSpec } from "../types";
import { makeRegistry, pkgVersion } from "./shared";

export interface ProContenderOptions {
  id?: string;
  name?: string;
  description?: string;
  diffContextLines?: number;
}

const DEFAULT_ID = "pi-hashline-edit-pro";
const DEFAULT_NAME = "pi-hashline-edit-pro";
const DEFAULT_DESCRIPTION =
  "Strict hashline fork: 4-char perfect anchors, served-range verification, persisted undo.";
const DEFAULT_DIFF_CONTEXT_LINES = 1;

const CONFIG_ROOT = join(tmpdir(), "pi-edit-benchmark-pro-config");

let executionChain: Promise<unknown> = Promise.resolve();

function serialize<T>(work: () => Promise<T>): Promise<T> {
  const run = executionChain.then(work);
  executionChain = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function configDirFor(
  id: string,
  diffContextLines: number,
): Promise<string> {
  const dir = join(CONFIG_ROOT, id.replace(/[^A-Za-z0-9._-]/g, "_"));
  const appDir = join(dir, "pi-hashline-edit-pro");
  await mkdir(appDir, { recursive: true });
  await writeFile(
    join(appDir, "config.json"),
    JSON.stringify(
      {
        autoRead: true,
        anchorGrepEnabled: true,
        requirePath: false,
        strictInput: false,
        diffContextLines,
      },
      null,
      2,
    ),
    "utf-8",
  );
  return dir;
}

function withStandardConfig<T>(dir: string, work: () => Promise<T>): Promise<T> {
  return serialize(async () => {
    const previous = process.env.XDG_CONFIG_HOME;
    process.env.XDG_CONFIG_HOME = dir;
    try {
      return await work();
    } finally {
      if (previous === undefined) delete process.env.XDG_CONFIG_HOME;
      else process.env.XDG_CONFIG_HOME = previous;
    }
  });
}

const PRO_VERSION = pkgVersion("pi-hashline-edit-pro", "4.3.7");
export function proContender(options: ProContenderOptions = {}): Contender {
  const id = options.id ?? DEFAULT_ID;
  const diffContextLines = options.diffContextLines ?? DEFAULT_DIFF_CONTEXT_LINES;
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const configDirRef: { dir?: Promise<string> } = {};

  const getConfigDir = () => {
    configDirRef.dir ??= configDirFor(id, diffContextLines);
    return configDirRef.dir;
  };

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
      id,
      name: options.name ?? DEFAULT_NAME,
      version: PRO_VERSION,
      description: options.description ?? DEFAULT_DESCRIPTION,
      available: true,
    },
    async listTools(): Promise<ToolSpec[]> {
      const registry = await getRegistry();
      const configDir = await getConfigDir();
      return registry.listTools().map((tool) => ({
        ...tool,
        execute: (params: unknown, cwd: string) =>
          withStandardConfig(configDir, () => tool.execute(params, cwd)),
      }));
    },
  };
}
