import { createBashTool, createBashToolDefinition } from "@earendil-works/pi-coding-agent";
import type { Contender, ToolSpec } from "../types";
import { pkgVersion, runBuiltinTool } from "./shared";

export function bashOnlyContender(): Contender {
  return {
    info: {
      id: "builtin-bash",
      name: "built-in bash (shell only)",
      version: pkgVersion("@earendil-works/pi-coding-agent", "0.87.0"),
      description:
        "pi-coding-agent's standard bash tool only — no read/edit/write tools. All file inspection and modification must go through shell commands.",
      available: true,
    },
    async listTools(): Promise<ToolSpec[]> {
      const bashDef = createBashToolDefinition(".", { exposeSessionEnvironment: false }) as unknown as any;
      return [
        {
          name: "bash",
          description: bashDef.description,
          promptSnippet: bashDef.promptSnippet,
          promptGuidelines: bashDef.promptGuidelines,
          parameters: bashDef.parameters ?? {},
          execute: (params: unknown, runCwd: string) =>
            runBuiltinTool(
              createBashTool(runCwd, { exposeSessionEnvironment: false }) as unknown as any,
              params,
              runCwd,
            ),
        },
      ];
    },
  };
}
