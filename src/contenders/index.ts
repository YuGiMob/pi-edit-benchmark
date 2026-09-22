import type { Contender } from "../types";
import { builtinContender } from "./builtin";
import { bashOnlyContender } from "./bash-only";
import { editGuardContender } from "./edit-guard";
import { doompiEditContender } from "./doompi";
import { proContender } from "./pro";
import { readmapContender } from "./readmap";
import { aftContender } from "./aft";
import { pixEditContender } from "./pix-edit";
import { semanticEditContender } from "./semantic-edit";

export function allContenders(): Contender[] {
  return [
    builtinContender(),
    proContender(),
    proContender({
      id: "pi-hashline-edit-pro-nodedup",
      name: "pi-hashline-edit-pro (dedup off)",
      description:
        "Same strict hashline fork with boundaryDedupMode: off — boundary re-inclusions apply literally instead of being stripped.",
      boundaryDedupMode: "off",
    }),
    readmapContender(),
    aftContender(),
    pixEditContender(),
    semanticEditContender(),
    doompiEditContender(),
    bashOnlyContender(),
    editGuardContender(),
  ];
}
