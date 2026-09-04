import { describe, expect, it } from "vitest";
import { evaluateLlmOutcome, taskPrompt } from "../src/llm/runner";
import { scenarios } from "../src/scenarios";

function scenario(id: string) {
  const s = scenarios.find((x) => x.id === id);
  if (!s) throw new Error(`scenario ${id} not found`);
  return s;
}

describe("evaluateLlmOutcome", () => {
  it("passes a correctly applied edit", () => {
    const s = scenario("single-line");
    const r = evaluateLlmOutcome("pi-hashline-edit-pro", s, "aaa\nBBB\nccc\nddd\n", s.fixture);
    expect(r.pass).toBe(true);
    expect(r.outcome).toBe("applied");
  });

  it("fails an applied-wrong edit", () => {
    const s = scenario("single-line");
    const r = evaluateLlmOutcome("pi-hashline-edit-pro", s, "aaa\nbbb\nccc\nddd\n", s.fixture);
    expect(r.pass).toBe(false);
    expect(r.failureKind).toBe("noop");
  });

  it("passes a stale edit that was rejected (file untouched by the model)", () => {
    const s = scenario("stale-line");
    const postMutation = s.mutateAfterRead!(s.fixture);
    const r = evaluateLlmOutcome("pi-hashline-edit-pro", s, postMutation, s.fixture);
    expect(r.pass).toBe(true);
    expect(r.outcome).toBe("rejected");
  });

  it("credits a stale edit that was rejected and then recovered by the model", () => {
    const s = scenario("stale-line");
    const r = evaluateLlmOutcome("pi-hashline-edit-pro", s, "aaa\nBBB\nccc\n", s.fixture);
    expect(r.pass).toBe(true);
    expect(r.outcome).toBe("recovered");
  });

  it("flags a silent wrong-line edit on a stale file", () => {
    const s = scenario("stale-line");
    const r = evaluateLlmOutcome("builtin-edit", s, "aaa\nBBB-external\nccc\n", s.fixture);
    expect(r.pass).toBe(false);
    expect(r.failureKind).toBe("silent-wrong-line");
  });

  it("passes an external-far edit that combines both changes", () => {
    const s = scenario("external-far");
    const r = evaluateLlmOutcome("pi-hashline-edit-pro", s, "aaa-external\nbbb\nCCC\nddd\neee\n", s.fixture);
    expect(r.pass).toBe(true);
  });

  it("passes the undo scenario only when the file is byte-identical to the fixture", () => {
    const s = scenario("undo");
    expect(evaluateLlmOutcome("pi-hashline-edit-pro", s, "aaa\nbbb\nccc\n", s.fixture).pass).toBe(true);
    expect(evaluateLlmOutcome("pi-hashline-edit-pro", s, "aaa\nBBB\nccc\n", s.fixture).pass).toBe(false);
  });

  it("passes duplicate-nth only when the second occurrence was edited", () => {
    const s = scenario("duplicate-nth");
    const correct = "function a() {\n  return 1;\n}\nfunction b() {\n  return 2;\n};\n";
    const wrong = "function a() {\n  return 1;\n};\nfunction b() {\n  return 2;\n}\n";
    expect(evaluateLlmOutcome("pi-hashline-edit-pro", s, correct, s.fixture).pass).toBe(true);
    expect(evaluateLlmOutcome("pi-hashline-edit-pro", s, wrong, s.fixture).pass).toBe(false);
  });
});

describe("taskPrompt", () => {
  it("names the file and gives a concrete task for every default scenario", () => {
    for (const s of scenarios) {
      const p = taskPrompt(s);
      expect(p).toContain(s.fileName);
      expect(p.length).toBeGreaterThan(40);
    }
  });
});
