import { Compile } from "typebox/compile";
import { EventEmitter } from "events";

export interface FakePi {
  pi: {
    registerTool(tool: any): void;
    registerCommand(name: string, def: unknown): void;
    on(event: string, handler: (...args: unknown[]) => unknown): void;
    getActiveTools(): string[];
    setActiveTools(tools: string[]): void;
  };
  handlers: Map<string, (...args: unknown[]) => unknown>;
  getTool(name: string): any;
  toolNames(): string[];
}

export function makeFakePi(): FakePi {
  const tools = new Map<string, any>();
  const handlers = new Map<string, (...args: unknown[]) => unknown>();
  const events = new EventEmitter();
  let activeTools: string[] = [];
  return {
    pi: {
      events,
      registerTool(tool: any) {
        const originalExecute = tool.execute;
        let validator: ReturnType<typeof Compile> | undefined;
        try {
          validator = tool.parameters ? Compile(tool.parameters) : undefined;
        } catch {
          validator = undefined;
        }
        tool.execute = async function (
          toolCallId: string,
          params: unknown,
          signal: AbortSignal | undefined,
          onUpdate: unknown,
          ctx: unknown,
        ) {
          const prepared = tool.prepareArguments
            ? tool.prepareArguments(params)
            : params;
          if (validator && !validator.Check(prepared)) {
            const errors = [...validator.Errors(prepared)]
              .map((e: any) => `  - ${e.message}`)
              .join("\n");
            throw new Error(
              `[E_BAD_SHAPE] Schema validation failed for tool "${tool.name}" after prepareArguments.\n${errors}`,
            );
          }
          return originalExecute.call(
            this,
            toolCallId,
            prepared,
            signal,
            onUpdate,
            ctx,
          );
        };
        tools.set(tool.name, tool);
      },
      registerCommand() {},
      on(event: string, handler: (...args: unknown[]) => unknown) {
        handlers.set(event, handler);
      },
      getActiveTools() {
        return [...activeTools];
      },
      setActiveTools(toolsList: string[]) {
        activeTools = [...toolsList];
      },
    } as any,
    handlers,
    getTool(name: string) {
      const tool = tools.get(name);
      if (!tool) throw new Error(`Tool not registered: ${name}`);
      return tool;
    },
    toolNames() {
      return [...tools.keys()];
    },
  };
}

export function makeCtx(cwd: string): any {
  return {
    cwd,
    ui: { notify() {} },
    signal: undefined,
  };
}
