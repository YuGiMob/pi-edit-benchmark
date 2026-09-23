import type { Scenario } from "../types";

const LARGE_FIXTURE = Array.from({ length: 200 }, (_, i) => `line${i + 1}`).join("\n") + "\n";

export const betterEditScenarios: Scenario[] = [
  {
    id: "b6-change-then-revert",
    fileName: "b6.ts",
    category: "safety",
    focus: "staleness",
    name: "interior change then revert (B6)",
    description:
      "A line inside the range changed and was reverted before the edit; the file matches what was served, so the edit must apply.",
    fixture: "aaa\nbbb\nccc\nddd\n",
    mutateAfterRead: (content) =>
      content.replace("ccc", "ccc-temp").replace("ccc-temp", "ccc"),
    expected: { outcome: "applied", content: "aaa\nB\nD\n" },
  },
  {
    id: "b9-boundary-changed",
    fileName: "b9.ts",
    category: "safety",
    focus: "staleness",
    name: "boundary line changed after read (B9)",
    description:
      "The exact anchor line changed on disk; the edit must be refused as stale.",
    fixture: "aaa\nbbb\nccc\n",
    mutateAfterRead: (content) => content.replace("bbb", "bbb-x"),
    expected: { outcome: "rejected" },
  },
  {
    id: "b10-duplicate-drift",
    fileName: "b10.ts",
    category: "safety",
    focus: "staleness",
    name: "duplicate-content drift must still reject (B10)",
    description:
      "Two identical blocks; a line inside the second block drifted after read. The edit of the second block must be refused, not silently overwrite the drift.",
    fixture:
      "function a() {\n  return 1;\n}\nfunction b() {\n  return 2;\n}\n",
    mutateAfterRead: (content) => content.replace("  return 2;", "  return 2; // drifted"),
    expected: { outcome: "rejected" },
  },
  {
    id: "b12-noop-with-drift",
    fileName: "b12.ts",
    category: "safety",
    focus: "staleness",
    name: "noop replace with out-of-range drift (B12)",
    description:
      "A noop edit (identical replacement) with an unrelated external change must leave the file untouched.",
    fixture: "aaa\nbbb\nccc\n",
    mutateAfterRead: (content) => content.replace("aaa", "aaa-x"),
    expected: { outcome: "either", content: "aaa-x\nbbb\nccc\n" },
  },
  {
    id: "b13-chained-diff-edit",
    fileName: "b13.ts",
    category: "robustness",
    focus: "core",
    name: "two sequential edits (B13)",
    description:
      "Two sequential edits in one file; both must land and the rest of the file must stay byte-identical.",
    fixture: "aaa\nbbb\nccc\nddd\neee\n",
    expected: { outcome: "applied", content: "aaa\nbbb\nCCC\nDDD\neee\n" },
  },
  {
    id: "b15-large-range-drift",
    fileName: "b15.ts",
    category: "safety",
    focus: "staleness",
    name: "large-range drift must reject (B15)",
    description:
      "A 200-line range with a drifted interior line; the edit must be refused, not silently overwrite the drift.",
    fixture: LARGE_FIXTURE,
    mutateAfterRead: (content) => content.replace("line100", "line100-drifted"),
    expected: { outcome: "rejected" },
  },
  {
    id: "b18-boundary-dup",
    fileName: "b18.ts",
    category: "correctness",
    focus: "core",
    name: "boundary line duplicated in replacement (B18)",
    description:
      "The replacement re-includes the line above the range; it is applied literally, duplicating that line.",
    fixture: "aaa\nbbb\nccc\n",
    expected: { outcome: "applied", content: "aaa\naaa\nBBB\nccc\n" },
  },
];
