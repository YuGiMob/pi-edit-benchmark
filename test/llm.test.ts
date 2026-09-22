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
  it("applies the pro boundary-dedup expectation to the readmap", () => {
    const s = scenario("b18-boundary-dup");
    expect(evaluateLlmOutcome("pi-hashline-readmap", s, "aaa\nBBB\nccc\n", s.fixture).pass).toBe(true);
    expect(evaluateLlmOutcome("pi-hashline-readmap", s, "aaa\naaa\nBBB\nccc\n", s.fixture).pass).toBe(false);
  });
  it("applies the literal boundary expectation to the dedup-off variant", () => {
    const s = scenario("b18-boundary-dup");
    expect(evaluateLlmOutcome("pi-hashline-edit-pro-nodedup", s, "aaa\naaa\nBBB\nccc\n", s.fixture).pass).toBe(true);
    expect(evaluateLlmOutcome("pi-hashline-edit-pro-nodedup", s, "aaa\nBBB\nccc\n", s.fixture).pass).toBe(false);
  });
  it("scores sub-line-token on the resulting line, not the mechanism", () => {
    const s = scenario("sub-line-token");
    const good = [
      "function loadConfig() {",
      '  const endpoint = "https://api.example.com/v1/resources?limit=250&sort=asc";',
      '  const fallback = "https://api.example.com/v1/resources?limit=25&sort=desc";',
      "  return { endpoint, fallback };",
    ].join("\n") + "\n";
    expect(evaluateLlmOutcome("pi-hashline-edit-pro", s, good, s.fixture).pass).toBe(true);
    expect(evaluateLlmOutcome("builtin-edit", s, good, s.fixture).pass).toBe(true);
  });
  it("scores replace-all only when every occurrence changed", () => {
    const s = scenario("replace-all");
    const full = [
      "script:",
      "  stage: ship --env stage",
      "  canary: ship --env canary",
      "  prod: ship --env prod",
      "  smoke: ship --env smoke",
    ].join("\n") + "\n";
    const partial = full.replace("  prod: ship", "  prod: deploy");
    expect(evaluateLlmOutcome("@xynogen/pix-edit", s, full, s.fixture).pass).toBe(true);
    expect(evaluateLlmOutcome("@xynogen/pix-edit", s, partial, s.fixture).pass).toBe(false);
  });
  it("scores batch-edits only when all five values landed", () => {
    const s = scenario("batch-edits");
    const full = [
      "server:",
      "  host: 127.0.0.1",
      "  port: 9090",
      "  timeout: 60",
      "  workers: 8",
      "  loglevel: debug",
    ].join("\n") + "\n";
    const partial = full.replace("  timeout: 60", "  timeout: 30");
    expect(evaluateLlmOutcome("@cortexkit/aft-pi", s, full, s.fixture).pass).toBe(true);
    expect(evaluateLlmOutcome("@cortexkit/aft-pi", s, partial, s.fixture).pass).toBe(false);
  });
  it("formatter-drift passes a correct formatted result and fails a stale cached write", () => {
    const s = scenario("formatter-drift");
    const formatted = s.mutateAfterRead!(s.fixture);
    const good = formatted.replace("8080", "9090");
    const staleCacheWrite = s.fixture.replace("8080", "9090");
    expect(evaluateLlmOutcome("pi-hashline-edit-pro", s, good, s.fixture).pass).toBe(true);
    expect(evaluateLlmOutcome("pi-hashline-edit-pro", s, formatted, s.fixture)).toMatchObject({
      pass: false,
      failureKind: "no-recovery",
    });
    expect(evaluateLlmOutcome("builtin-edit", s, staleCacheWrite, s.fixture).pass).toBe(false);
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
  it("appends the read mandate by default and drops it under --no-read-mandate", () => {
    const s = scenario("single-line");
    expect(taskPrompt(s)).toContain("always read the file before editing");
    expect(taskPrompt(s, { mandateRead: false })).not.toContain("always read the file before editing");
    expect(taskPrompt(s, { mandateRead: false })).toContain("Use the provided tools.");
  });
});
