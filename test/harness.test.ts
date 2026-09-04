import { describe, expect, it } from "vitest";
import { parseReadLines, resolveTarget } from "../src/contenders/shared";
import { scenarios } from "../src/scenarios";
import { allContenders } from "../src/contenders";

describe("read output parsing", () => {
  it("parses LINE#HASH: rows", () => {
    const { lines } = parseReadLines(
      "1#TS:aaa\n2#PJ:bbb\n",
      /^(\d+)#([A-Za-z0-9]+):(.*)$/,
    );
    expect(lines).toEqual([
      { lineNumber: 1, anchor: "TS", content: "aaa" },
      { lineNumber: 2, anchor: "PJ", content: "bbb" },
    ]);
  });

  it("parses HASH│ rows without line numbers", () => {
    const { lines } = parseReadLines(
      "NSd│aaa\nGfU│bbb\n",
      /^([A-Za-z0-9]{3})│(.*)$/,
      "hash",
    );
    expect(lines).toEqual([
      { lineNumber: 1, anchor: "NSd", content: "aaa" },
      { lineNumber: 2, anchor: "GfU", content: "bbb" },
    ]);
  });

  it("strips CR from CRLF read output", () => {
    const { lines } = parseReadLines(
      "1#QM:alpha\r\n2#VP:beta\r\n",
      /^(\d+)#([A-Za-z0-9]+):(.*)$/,
    );
    expect(lines[1]?.content).toBe("beta");
  });

  it("keeps CR when stripCr is false", () => {
    const { lines } = parseReadLines(
      "2#VP:beta\r\n",
      /^(\d+)#([A-Za-z0-9]+):([\s\S]*)$/,
      "line-hash",
      false,
    );
    expect(lines[0]?.content).toBe("beta\r");
  });
});

describe("target resolution", () => {
  const lines = [
    { lineNumber: 1, anchor: "a", content: "aaa" },
    { lineNumber: 2, anchor: "b", content: "bbb" },
    { lineNumber: 3, anchor: "c", content: "ccc" },
  ];

  it("finds the first line containing the match", () => {
    const { start, end } = resolveTarget(lines, { kind: "line", match: "bb" });
    expect(start.lineNumber).toBe(2);
    expect(end).toBe(start);
  });

  it("finds the nth occurrence", () => {
    const dup = [
      { lineNumber: 1, anchor: "a", content: "}" },
      { lineNumber: 2, anchor: "b", content: "x" },
      { lineNumber: 3, anchor: "c", content: "}" },
    ];
    const { start } = resolveTarget(dup, { kind: "line-nth", match: "}", nth: 2 });
    expect(start.lineNumber).toBe(3);
  });

  it("resolves an inclusive range", () => {
    const { start, end } = resolveTarget(lines, { kind: "range", from: "aaa", to: "ccc" });
    expect(start.lineNumber).toBe(1);
    expect(end.lineNumber).toBe(3);
  });
});

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

});
