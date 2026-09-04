import type { Contender } from "../types";
import { builtinContender } from "./builtin";
import { proContender } from "./pro";
import { readmapContender } from "./readmap";
import { ompContender } from "./omp";
import { aftContender } from "./aft";
import { pixEditContender } from "./pix-edit";
import { semanticEditContender } from "./semantic-edit";
import {
  lineHashFamilyContender,
  replaceEdits,
  appendEdits,
  prependEdits,
} from "./line-hash";

const LINE_HASH_COLON_RE = /^(\d+)#([A-Za-z0-9]+):(.*)$/;

export function allContenders(): Contender[] {
  return [
    builtinContender(),
    lineHashFamilyContender({
      id: "pi-hashline-edit",
      name: "pi-hashline-edit",
      version: "0.8.3",
      description:
        "Original hashline extension (RimuruW): 2-char hashes, LINE#HASH: rows, replace/append/prepend ops, stale anchors fail.",
      load: () => import("pi-hashline-edit"),
      rowRe: LINE_HASH_COLON_RE,
      buildEdits: replaceEdits,
    }),
    lineHashFamilyContender({
      id: "pi-hashline-context-edit",
      name: "pi-hashline-context-edit",
      version: "0.11.0",
      description:
        "Fork with contextual FNV-1a hashes (line + neighbors), 3-way merge on non-overlapping external changes, replace_text op.",
      load: () => import("pi-hashline-context-edit"),
      rowRe: LINE_HASH_COLON_RE,
      buildEdits: replaceEdits,
    }),
    proContender(),
    readmapContender(),
    ompContender(),
    aftContender(),
    pixEditContender(),
    semanticEditContender(),
  ];
}

export { appendEdits, prependEdits };
