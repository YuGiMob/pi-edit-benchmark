import { describe, expect, it } from "vitest";
import { scenarios } from "../src/scenarios";
import { allContenders } from "../src/contenders";

describe("scenario battery", () => {
  it("has unique scenario ids and file names", () => {
    const ids = scenarios.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    const files = scenarios.map((s) => s.fileName);
    expect(new Set(files).size).toBe(files.length);
  });

  it("covers all three categories", () => {
    const categories = new Set(scenarios.map((s) => s.category));
    expect(categories).toEqual(new Set(["correctness", "safety", "robustness"]));
  });
});

describe("contender registry", () => {
  it("registers all contenders with unique ids", () => {
    const contenders = allContenders();
    const ids = contenders.map((c) => c.info.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(contenders.length).toBeGreaterThanOrEqual(8);
  });

  it("registers both pro diff-context variants", () => {
    const ids = allContenders().map((c) => c.info.id);
    expect(ids).toContain("pi-hashline-edit-pro");
    expect(ids).toContain("pi-hashline-edit-pro-diff0");
  });
});
