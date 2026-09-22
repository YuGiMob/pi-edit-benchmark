import { join } from "path";
import type { Contender, ToolSpec } from "../types";
import { builtinReadTool, makeRegistry, pkgVersion } from "./shared";

export function pixEditContender(): Contender {
  const registryRef: { registry?: ReturnType<typeof makeRegistry> } = {};
  const getRegistry = async () => {
    if (registryRef.registry) return registryRef.registry;
    const mod = await import("@xynogen/pix-edit/extension");
    const fake = makeRegistry();
    mod.default(fake.pi);
    registryRef.registry = fake;
    return fake;
  };
  return {
    info: {
      id: "@xynogen/pix-edit",
      name: "@xynogen/pix-edit",
      version: pkgVersion("@xynogen/pix-edit", "0.2.2"),
      description:
        "Precise text-replacement edit with diff rendering: { path, edits: [{ oldText, newText }] }, oldText must be unique. No read tool, no anchors, no staleness check.",
      available: true,
    },
    async listTools(): Promise<ToolSpec[]> {
      const registry = await getRegistry();
      return [
        builtinReadTool(),
        ...registry.listTools().map((t) => ({
          ...t,
          execute: (params: unknown, runCwd: string) => {
            const rec = params as { path?: unknown };
            if (typeof rec?.path === "string" && !rec.path.startsWith("/")) {
              return t.execute({ ...rec, path: join(runCwd, rec.path) }, runCwd);
            }
            return t.execute(params, runCwd);
          },
        })),
      ];
    },
  };
}
