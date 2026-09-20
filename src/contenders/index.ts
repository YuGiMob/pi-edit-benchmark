import type { Contender } from "../types";
import { pkgVersion } from "./shared";
import { builtinContender } from "./builtin";
import { doompiEditContender } from "./doompi";
import { agentIdeContender } from "./agent-ide";
import { proContender } from "./pro";
import { readmapContender } from "./readmap";
import { aftContender } from "./aft";
import { pixEditContender } from "./pix-edit";
import { semanticEditContender } from "./semantic-edit";
import { lineHashFamilyContender } from "./line-hash";

export function allContenders(): Contender[] {
  return [
    builtinContender(),
    lineHashFamilyContender({
      id: "pi-hashline-edit",
      name: "pi-hashline-edit",
      version: pkgVersion("pi-hashline-edit", "0.8.3"),
      description:
        "Original hashline extension (RimuruW): 2-char hashes, LINE#HASH: rows, replace/append/prepend ops, stale anchors fail.",
      load: () => import("pi-hashline-edit"),
    }),
    lineHashFamilyContender({
      id: "pi-hashline-context-edit",
      name: "pi-hashline-context-edit",
      version: pkgVersion("pi-hashline-context-edit", "0.11.0"),
      description:
        "Fork with contextual FNV-1a hashes (line + neighbors), 3-way merge on non-overlapping external changes, replace_text op.",
      load: () => import("pi-hashline-context-edit"),
    }),
    proContender(),
    proContender({
      id: "pi-hashline-edit-pro-diff0",
      name: "pi-hashline-edit-pro (diff 0)",
      description:
        "Same strict hashline fork with diffContextLines: 0 — post-edit diffs carry no surrounding context lines.",
      diffContextLines: 0,
    }),
    readmapContender(),
    aftContender(),
    pixEditContender(),
    semanticEditContender(),
    doompiEditContender(),
    agentIdeContender(),
  ];
}
