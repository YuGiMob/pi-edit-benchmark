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
    expect(contenders.length).toBeGreaterThanOrEqual(9);
  });

  it("registers the pro family and drops removed contenders", () => {
    const ids = allContenders().map((c) => c.info.id);
    expect(ids).toContain("pi-hashline-edit-pro");
    expect(ids).toContain("builtin-bash");
    expect(ids).toContain("pi-hashline-edit-pro-nodedup");
    expect(ids).toContain("pi-edit-guard");
    expect(ids).not.toContain("pi-hashline-edit-pro-diff0");
    expect(ids).not.toContain("pi-hashline-edit");
    expect(ids).not.toContain("pi-hashline-context-edit");
    expect(ids).not.toContain("pi-agent-ide");
  });
});
