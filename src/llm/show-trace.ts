import { readFileSync } from "fs";
import type { LlmTrace } from "../types";

const path = process.argv[2];
if (!path) {
  console.error("Usage: bun run src/llm/show-trace.ts <path-to-trace.json>");
  process.exit(1);
}

const trace = JSON.parse(readFileSync(path, "utf-8")) as LlmTrace;

console.log("=".repeat(72));
console.log(
  `${trace.contenderId} / ${trace.scenarioId} / ${trace.modelId}`,
);
console.log(
  `${trace.pass ? "PASS" : "FAIL"} — ${trace.outcome}${trace.failureKind ? ` (${trace.failureKind})` : ""}`,
);
console.log(
  `tokens in=${trace.tokensIn} out=${trace.tokensOut} cost=$${trace.costUsd.toFixed(4)} duration=${trace.durationMs}ms readFirst=${trace.readFirst} blind=${trace.editedBlind}`,
);
console.log("task:", trace.task);
if (trace.expectedContent !== undefined) {
  console.log("expected:", JSON.stringify(trace.expectedContent));
}
if (trace.actualContent !== undefined) {
  console.log("actual:  ", JSON.stringify(trace.actualContent));
}
console.log("=".repeat(72));

for (const m of trace.messages) {
  switch (m.role) {
    case "system":
      console.log(`\n── SYSTEM ──\n${m.content}`);
      break;
    case "user":
      console.log(`\n── USER ──\n${m.content}`);
      break;
    case "assistant":
      console.log(`\n── ASSISTANT ──`);
      if (m.reasoning) console.log(`  [reasoning] ${m.reasoning}`);
      if (m.toolCalls && m.toolCalls.length > 0) {
        for (const tc of m.toolCalls) {
          console.log(`  TOOL CALL ${tc.name} ${tc.arguments}`);
        }
      }
      if (m.content) console.log(`  ${m.content}`);
      break;
    case "tool":
      console.log(`\n── TOOL RESULT ${m.toolCallId ?? ""} ──\n${m.content}\n`);
      break;
  }
}
