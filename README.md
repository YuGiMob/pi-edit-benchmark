# pi-edit-benchmark

LLM tool-calling benchmark comparing file-editing extensions for [pi-coding-agent](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent): the built-in `edit` tool, a shell-only `bash` baseline (`builtin-bash`), the hashline family (`pi-hashline-edit-pro`, `pi-hashline-readmap`), tolerant matchers (`@cortexkit/aft-pi`, `@xynogen/pix-edit`, `pi-semantic-edit`), snapshot-bound hashline editing (`@agimon-ai/doompi-edit`), and a repairing `edit` override (`pi-edit-guard`).

## Why

LLM file editing fails in two ways: edits land on the wrong line, and stale edits are applied silently. Hash-anchored tools (hashline) exist to fix both. This benchmark measures, with real-LLM tool-calling runs, how well each tool actually does:

- **Correctness** — does the edit land exactly where the model pointed?
- **Safety** — is a stale or ambiguous edit refused instead of silently misapplied?
- **Robustness** — do anchors survive unrelated edits, does undo restore bytes, do BOM/CRLF survive, do error messages guide recovery?

## How it works

Each contender is a real pi extension loaded through a fake pi `ExtensionAPI` (the same registration surface pi uses, including `prepareArguments` + TypeBox validation), so the real tool implementations run unmodified. A real model drives each contender's own tools through a tool-calling loop.
Every scenario runs in an isolated temp dir per contender, so no state leaks between runs.

```
npm install --legacy-peer-deps   # peer-dep conflicts between extensions; keep @earendil-works/pi-tui installed
bun run src/main-llm.ts          # real-LLM benchmark (multi-provider)
```

Output: `results/llm-report.md` + `results/llm-report.json`; traces land in `results/traces/<model>/`.

Requires [Bun](https://bun.sh) — several contenders ship `.ts` sources without `"type": "module"` and only Bun resolves their ESM imports of `pi-coding-agent` correctly.

## LLM benchmark

`src/main-llm.ts` drives the same contenders with a **real model** through a tool-calling loop. Models come from the opencode-go remote provider (`OPENCODE_API_KEY`), plus a keyless local `llamacpp` provider pointed at a llama.cpp server (e.g. `http://192.168.0.21:8080/v1`). The system prompt **mirrors pi's own `buildSystemPrompt`**: pi header, an "Available tools" list built from each tool's `promptSnippet`, aggregated `promptGuidelines`, any `before_agent_start` system-prompt patches the contender registers, and the working directory. Tool schemas are passed untruncated, and `prepareArguments` + TypeBox validation run exactly as pi runs them.
The model must read the file and issue edits through the tools; the file state afterwards is scored against the scenario expectations. For the stale scenarios, the external change is applied to the file *immediately after the model's first read* — simulating a concurrent modification — and the model's behavior (silent mis-edit vs. rejected-and-recovered) is what's measured.

```
bun run src/main-llm.ts --scenarios stale-line,duplicate-nth   # a subset
bun run src/main-llm.ts                        # 9 models × 10 contenders × 38 scenarios (3,420 runs)
bun run src/main-llm.ts --models glm-5.3-flash,muse-spark-1.3-contributor
bun run src/main-llm.ts --concurrency 6 --delay-ms 8000 --dry-run
bun run src/llm/show-trace.ts results/traces/<model>/<contender>-<scenario>.json
```

**Parallel lanes:** all selected models run in parallel, each as its own lane bounded by per-provider concurrency (`opencode-go: 16`, `llamacpp: 6` by default). `--lane-concurrency provider=n,...` overrides individual lanes, `--concurrency n` overrides every lane, and `--delay-ms` staggers lane starts (pacing for tight rate limits). One invocation covers the whole matrix — no manual per-lane runs or report merging.

### Run traces (validation)

Every LLM run is recorded as a full transcript in `results/traces/<model>/<contender>-<scenario>.json`:

- the system prompt and the user task
- every assistant turn: model **reasoning**, tool calls with their exact **arguments**
- every tool result exactly as the model saw it (read output, diff, error)
- run metadata: pass/fail, outcome (`applied` / `rejected` / `recovered` / …), token counts, cost, duration, `readFirst` / `editedBlind`, expected vs actual file content

The summary report links every run (scenario tables) and every failed run ("Failed runs — traces for validation" section) to its trace. `show-trace.ts` prints a trace as a readable conversation. This makes each verdict independently checkable — e.g. a `recovered` verdict shows the `read edit✗ read edit` sequence with the actual stale-anchor error the tool returned.

### Models

| Model | Id | Provider | API | Effort | Pricing (per M in/out) |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | `deepseek-v4.1-flash` | opencode-go | chat completions | provider default | $0.15 / $0.60 |
| Gemma 4 26B A4B | `gemma-4-26b-a4b-q4` | llamacpp | chat completions | provider default | local, $0.00 |
| GLM 5.3 Flash | `glm-5.3-flash` | opencode-go | chat completions | `max` | $0.075 / $0.25 |
| Qwen3.8-27B | `qwen3.8-27b-q2` | llamacpp | chat completions | provider default | local, $0.00 |
| Qwen3.8-Flash | `qwen3.8-flash` | opencode-go | chat completions | `max` | $0.15 / $0.47 |
| Muse Spark 1.3 Contributor | `muse-spark-1.3-contributor` | opencode-go | **OpenAI Responses** | `xhigh` | $0.10 / $0.20 |
| MiMo 2.6 Flash | `mimo-v2.6-flash` | opencode-go | chat completions | provider default | $0.14 / $0.28 |
| MiMo-V2.6-Pro | `mimo-v2.6-pro` | opencode-go | chat completions | provider default | $0.435 / $0.87 |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | `qwen3.5-9b-q4km` | llamacpp | chat completions | provider default | local, $0.00 |

Reported per run: pass/fail against the scenario expectations, outcome class (`applied`, `rejected`, `recovered` — the model re-read after a stale rejection and applied correctly), tool-call trace, tokens, and API cost (prices from `~/.pi/agent/models-store.json`).

## Contenders

| Contender | Edit format | Anchors | Undo |
| --- | --- | --- | --- |
| `builtin-edit` | `{ path, edits: [{ oldText, newText }] }` | none (text matching) | no |
| `pi-hashline-edit-pro` | `{ path, remove_from, remove_to, replacement_lines }` | `HASH│` 4-char, served-range verification | yes |
| `pi-hashline-edit-pro-nodedup` | same, with `boundaryDedupMode: off` (boundary re-inclusions apply literally) | `HASH│` 4-char, served-range verification | yes |
| `pi-hashline-readmap` | `{ path, edits: [{ set_line / replace_lines / insert_after }] }` | `LINE:HASH|` 3-char | no |
| `@cortexkit/aft-pi` | `{ path, edits: [{ oldString, newString, occurrence }] }` | none (fuzzy find/replace, Rust backend) | no |
| `@xynogen/pix-edit` | `{ path, edits: [{ oldText, newText }] }` | none (unique-text replace + diff) | no |
| `pi-semantic-edit` | `{ path, edits: [{ oldText, newText, replaceAll? }] }` | none (10-pass semantic fuzzy chain, uniqueness guard) | no |
| `@agimon-ai/doompi-edit` | `{ path, hash, edits: [{ from, to, content }] }` | 8-char exact-byte file tag + 3-letter line anchors from a snapshot-bound read/grep | no |
| `builtin-bash` | pi's standard `bash` tool only — no read/edit/write tools | none (shell: `cat`, `sed`, `printf`, …) | no |
| `pi-edit-guard` | same surface as built-in `edit` (`{ path, edits: [{ oldText, newText }] }`) plus `undo` | none (argument repair, 14-pass fuzzy match chain, mtime staleness check) | yes |


## Scenarios (38)

Each scenario carries a `focus` that the report splits by: **core editing** (20), **staleness & concurrency** (11), and **served-state & undo** (7) — the last group exercises anchor/served-state mechanics that only hashline-style tools implement.

### Core editing (20)
- `single-line` — replace one line
- `range` — replace an inclusive range
- `delete-line` — delete one line cleanly
- `duplicate-nth` / `duplicate-import` — edit the *2nd* occurrence of duplicated content
- `whitespace-only` — target a line with trailing whitespace
- `crlf` / `bom` — line endings and BOM survive
- `empty-file` — seed an empty file
- `noop` — identical replacement leaves the file byte-identical
- `insert-after` — insert lines below a target
- `unicode` — CJK/emoji/accent content survives byte-level
- `tabs` — tab indentation stays byte-identical
- `no-trailing-newline` — a missing EOF newline stays absent
- `delete-range` — delete an inclusive range cleanly
- `insert-eof` — insert after the last line
- `crlf-bom` — BOM and CRLF survive together
- `sub-line-token` — replace a small token inside a longer line; the rest of the line stays byte-identical (search/replace targets the token, line-anchored tools rewrite the line — the outcome is the same for both)
- `replace-all` — every occurrence of a repeated token replaced (one `replaceAll`-style edit vs per-occurrence entries or ranges)
- `batch-edits` — five disjoint small values changed in one file; tests batching economy

### Staleness & concurrency (11)
- `stale-line` — the target line changed on disk; the edit must be refused
- `stale-range` — a line *inside* the replaced range changed; the edit must be refused
- `external-far` — an unrelated distant change must not block the edit
- `b6-change-then-revert` — interior change reverted before the edit; must apply
- `b9-boundary-changed` — the anchor line itself changed; must reject
- `b10-duplicate-drift` — drift inside a duplicated block; must reject, not overwrite
- `b12-noop-with-drift` — noop edit with unrelated external change; file untouched
- `b15-large-range-drift` — 200-line range with drifted interior; must reject
- `error-guidance` — a refused edit explains how to recover
- `insert-race-stale-boundary` — insert after a line changed on disk; must be refused
- `formatter-drift` — a formatter reindents the whole file between read and edit; the target token survives, so tolerant apply or refuse-and-recover both end at the same formatted result — writing back a stale cached view fails

### Served-state & undo (7)
- `anchor-stability` — anchors of untouched lines survive an edit (no re-read needed)
- `undo` — undo restores the exact previous bytes
- `b7-paged-read-gap` — edit targets a line never shown by a paged read; served-state tools must reject
- `b8-blind-edit` — edit with anchors never served for this file; served-state tools must reject
- `b13-chained-diff-edit` — second edit anchored on the post-edit diff rows, no re-read
- `b17-reversed-range` — swapped remove_from/remove_to; anchor tools autocorrect
- `b18-boundary-dup` — replacement re-includes the boundary line; dedup tools strip it

## Scoring

- Pass = the file ended in the expected state, the edit was refused when refusal was the safe outcome, or a stale rejection was recovered from after a re-read (`recovered`).
- `SILENT WRONG-LINE EDIT` — the tool wrote when it should have refused, or landed on the wrong occurrence. The worst failure class.
- `applied wrong content` — applied, but the result differs from the intent (e.g. BOM dropped, blank line left behind).
- `rejected a valid edit` — refused an edit that should have applied.

The report splits every score by the three focus groups above.

## Results — preliminary opencode-go wave (6 models × 10 contenders × 38 scenarios, `results/llm-report.md`, 2,280 runs, $3.59)

> **Preliminary:** only the opencode-go lanes have run so far. The three local llama.cpp models will be merged in with `--resume` once their server is available; the tables below cover the six remote models only. Matrix note: `pi-hashline-edit`, `pi-hashline-context-edit`, and `pi-agent-ide` were dropped in earlier rounds, `pi-hashline-edit-pro-diff0` was replaced by `pi-hashline-edit-pro-nodedup`, and `long-line` was dropped from the battery.

Per model (each /380):

| Model | Passed | Rate | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | 357 | 94% | 7,825 | $0.53 |
| GLM 5.3 Flash | 354 | 93% | 5,650 | $0.35 |
| Qwen3.8-Flash | 356 | 94% | 8,422 | $0.56 |
| MiMo 2.6 Flash | 358 | **94%** | 7,240 | $0.41 |
| MiMo-V2.6-Pro | 356 | 94% | 7,259 | $1.30 |
| Muse Spark 1.3 Contributor | 356 | 94% | 10,126 | $0.44 |

Per tool with the focus split (each cell passed/total across all six models):

| Tool | Core (20) | Staleness (11) | Served-state (7) | Overall (38) |
| --- | --- | --- | --- | --- |
| **pi-hashline-edit-pro-nodedup** | **120** | **66** | **42** | **228 (100%)** |
| pi-hashline-edit-pro | 120 | 66 | 37 | 223 (98%) |
| @agimon-ai/doompi-edit | 114 | 65 | 42 | 221 (97%) |
| builtin-bash | 113 | 65 | 42 | 220 (96%) |
| pi-hashline-readmap | 116 | 60 | 37 | 213 (93%) |
| @xynogen/pix-edit | 114 | 57 | 42 | 213 (93%) |
| @cortexkit/aft-pi | 107 | 63 | 41 | 211 (93%) |
| pi-edit-guard | 113 | 52 | 42 | 207 (91%) |
| builtin-edit | 102 | 58 | 42 | 202 (89%) |
| pi-semantic-edit | 102 | 55 | 42 | 199 (87%) |

Per-tool process (all six models):

| Tool | Version | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- | --- |
| builtin-edit | 0.87.0 | 3.6 | 6,552 | $0.0014 | 13 |
| pi-hashline-edit-pro | 4.3.8 | 2.9 | 8,550 | $0.0016 | 7 |
| pi-hashline-edit-pro-nodedup | 4.3.8 | 2.9 | 8,423 | $0.0016 | 7 |
| pi-hashline-readmap | 0.14.0 | 3.2 | 7,365 | $0.0015 | 10 |
| @cortexkit/aft-pi | 0.57.1 | 3.2 | 11,342 | $0.0023 | 10 |
| @xynogen/pix-edit | 0.2.5 | 3.4 | 6,673 | $0.0015 | 37 |
| pi-semantic-edit | 0.4.0 | 3.0 | 6,191 | $0.0013 | 12 |
| @agimon-ai/doompi-edit | 0.0.1-alpha.52 | 3.8 | 7,644 | $0.0016 | 16 |
| builtin-bash | 0.87.0 | 3.2 | 7,520 | $0.0013 | 12 |
| pi-edit-guard | 0.1.4 | 3.0 | 7,277 | $0.0016 | 10 |

Totals across the wave: **16.2M prompt tokens in, 1.5M completion tokens out, 7,317 tool calls** (574 failed), 13.2h of summed run time.

**Findings:**
- **`pi-hashline-edit-pro-nodedup` sweeps the wave at 100% (228/228)**, ahead of `pi-hashline-edit-pro` 4.3.8 at 98% — the dedup-off variant takes all 42 served-state runs while pro loses 5 there.
- **`@agimon-ai/doompi-edit` alpha.52 lands 3rd (97%)** with 65/66 staleness, and **`builtin-bash` scores 96%** — the shell baseline now rivals the best dedicated tools on this battery.
- **`pi-edit-guard` 0.1.4 is strongest on core (113/120) but weakest on staleness (52/66)**: `insert-race-stale-boundary` and `b10-duplicate-drift` account for 11 of its 14 staleness misses, and all six models fail `empty-file` because the guard cannot seed an empty file.
- **`pi-semantic-edit` remains last (87%)** and produces the most silent wrong-line edits (29), followed by `builtin-edit` (26) at 89% overall.
- **All six opencode-go models land within one point of each other (93–94%)**, so tool choice, not model choice, dominates this battery.
- **`@xynogen/pix-edit` produced the longest run (37 tool calls, `b15-large-range-drift`)** — its retry loops can snowball; every other tool stayed at or below 16 steps.

## Ecosystem popularity (npm + GitHub, snapshot 2026-09)

| Package | Downloads/mo | Stars |
| --- | --- | --- |
| **`pi-hashline-edit-pro`** | **20,403** | 74 |
| `@cortexkit/aft-pi` | 4,362 | 275 |
| `@xynogen/pix-edit` | 2,599 | 62 |
| `pi-hashline-readmap` | 2,293 | 104 |
| `pi-hashline-edit` (removed from bench) | 1,942 | repo deleted |
| `pi-semantic-edit` | 1,537 | 4 |
| `pi-better-edit` (removed from bench) | 950 | 4 |
| `pi-hledit` (removed from bench) | 228 | 2 |
| `@jerryan/pi-hashline-edit` (removed from bench) | 173 | 7 |
| `@the-agency/pi-hashline-edit` (removed from bench) | 61 | 25 |
| `pi-hashline-context-edit` (removed from bench) | 47 | 0 |

`pi-hashline-edit-pro` is the most-downloaded dedicated editing extension in the pi ecosystem (~4.7× the runner-up) and the only edit tool in the [pi.dev top-50 catalog](https://pi.dev/packages).

## Project layout

```
src/
  main-llm.ts   benchmark entry point
  types.ts      shared types
  contenders/   per-tool adapters (expose the real pi tools to the LLM loop)
  scenarios/    the scenario battery (38, tagged core/staleness/served-state)
  llm/          multi-provider client + tool-calling runner + report rendering
results/        generated reports + per-run traces (committed)
```

## Adding a contender

1. `npm install <package>` (use `--legacy-peer-deps`; keep `@earendil-works/pi-tui` installed — extensions peer-depend on it).
2. Add an adapter in `src/contenders/` implementing the `Contender` interface: `info` plus `listTools()`, which loads the extension through the fake pi `ExtensionAPI` and returns its tools. `promptSnippet`/`promptGuidelines` are rendered into the pi-mirror system prompt.
3. Register it in `src/contenders/index.ts` and add its tool filter to `LLM_TOOL_FILTERS` in `src/llm/models.ts`.
4. Add a `taskDescriptions` entry in `src/llm/runner.ts` for any new scenario id, and per-contender expectations (`expectedByContender`) where the tool's contract genuinely differs (e.g. no empty-file seeding).

## License

MIT
