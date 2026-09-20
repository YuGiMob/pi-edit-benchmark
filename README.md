# pi-edit-benchmark

LLM tool-calling benchmark comparing file-editing extensions for [pi-coding-agent](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent): the built-in `edit` tool, the hashline family (`pi-hashline-edit`, `pi-hashline-edit-pro`, `pi-hashline-context-edit`, `pi-hashline-readmap`), tolerant/semantic matchers (`@cortexkit/aft-pi`, `@xynogen/pix-edit`, `pi-semantic-edit`), snapshot-bound hashline editing (`@agimon-ai/doompi-edit`), and guarded IDE editing (`pi-agent-ide`).

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

`src/main-llm.ts` drives the same contenders with a **real model** through a tool-calling loop. Models come from two remote providers — opencode-go and ollama-cloud — each reached at its own endpoint with its own key (`OPENCODE_API_KEY`, `OLLAMA_API_KEY`; the hyper provider is retired from the default matrix), plus a keyless local `llamacpp` provider pointed at a llama.cpp server (e.g. `http://192.168.0.21:8080/v1`). The system prompt **mirrors pi's own `buildSystemPrompt`**: pi header, an "Available tools" list built from each tool's `promptSnippet`, aggregated `promptGuidelines`, any `before_agent_start` system-prompt patches the contender registers, and the working directory. Tool schemas are passed untruncated, and `prepareArguments` + TypeBox validation run exactly as pi runs them.
The model must read the file and issue edits through the tools; the file state afterwards is scored against the scenario expectations. For the stale scenarios, the external change is applied to the file *immediately after the model's first read* — simulating a concurrent modification — and the model's behavior (silent mis-edit vs. rejected-and-recovered) is what's measured.

```
bun run src/main-llm.ts                        # 9 models × 11 contenders × 35 scenarios (3,465 runs)
bun run src/main-llm.ts --scenarios stale-line,duplicate-nth   # a subset
bun run src/main-llm.ts --models glm-5.3-flash,muse-spark-1.3-contributor
bun run src/main-llm.ts --concurrency 6 --delay-ms 8000 --dry-run
bun run src/llm/show-trace.ts results/traces/<model>/<contender>-<scenario>.json
```

**Parallel lanes:** all selected models run in parallel, each as its own lane bounded by per-provider concurrency (`hyper: 16`, `opencode-go: 16`, `ollama-cloud: 5`, `llamacpp: 6` by default). `--lane-concurrency provider=n,...` overrides individual lanes, `--concurrency n` overrides every lane, and `--delay-ms` staggers lane starts (pacing for tight rate limits). One invocation covers the whole matrix — no manual per-lane runs or report merging.

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
| DeepSeek V4.1 Flash | `deepseek-v4.1-flash` | ollama-cloud | chat completions | provider default | $0.30 / $1.20 |
| Gemma 4 26B A4B | `gemma-4-26b-a4b-q4` | llamacpp | chat completions | provider default | local, $0.00 |
| GLM 5.3 Flash | `glm-5.3-flash` | opencode-go | chat completions | `max` | $0.075 / $0.25 |
| Qwen3.8-27B | `qwen3.8-27b-q2` | llamacpp | chat completions | provider default | local, $0.00 |
| Qwen3.8-Flash | `qwen3.8-flash` | opencode-go | chat completions | `max` | $0.15 / $0.47 |
| Muse Spark 1.3 Contributor | `muse-spark-1.3-contributor` | opencode-go | **OpenAI Responses** | `xhigh` | $0.10 / $0.20 |
| Gemma 4 (31B) | `gemma4:31b` | ollama-cloud | chat completions | provider default | $0.14 / $0.40 |
| Nemotron 3 Nano (30B) | `nemotron-3-nano:30b` | ollama-cloud | chat completions | provider default | $0.06 / $0.24 |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | `qwen3.5-9b-q4km` | llamacpp | chat completions | provider default | local, $0.00 |

Reported per run: pass/fail against the scenario expectations, outcome class (`applied`, `rejected`, `recovered` — the model re-read after a stale rejection and applied correctly), tool-call trace, tokens, and API cost (prices from `~/.pi/agent/models-store.json`).

## Contenders

| Contender | Edit format | Anchors | Undo |
| --- | --- | --- | --- |
| `builtin-edit` | `{ path, edits: [{ oldText, newText }] }` | none (text matching) | no |
| `pi-hashline-edit` | `{ path, edits: [{ op, pos, end, lines }] }` | `LINE#HASH:` 2-char contextual | no |
| `pi-hashline-context-edit` | same + `replace_text` | `LINE#HASH:` 2-char contextual | no |
| `pi-hashline-edit-pro` (4.2.6) | `{ path, remove_from, remove_to, replacement_lines }` | `HASH│` 4-char, served-range verification | yes |
| `pi-hashline-edit-pro-diff0` | same, with `diffContextLines: 0` (post-edit diffs carry no context lines) | `HASH│` 4-char, served-range verification | yes |
| `pi-hashline-readmap` | `{ path, edits: [{ set_line / replace_lines / insert_after }] }` | `LINE:HASH|` 3-char | no |
| `@cortexkit/aft-pi` | `{ path, edits: [{ oldString, newString, occurrence }] }` | none (fuzzy find/replace, Rust backend) | no |
| `@xynogen/pix-edit` | `{ path, edits: [{ oldText, newText }] }` | none (unique-text replace + diff) | no |
| `pi-semantic-edit` | `{ path, edits: [{ oldText, newText, replaceAll? }] }` | none (10-pass semantic fuzzy chain, uniqueness guard) | no |
| `@agimon-ai/doompi-edit` | `{ path, hash, edits: [{ from, to, content }] }` | 8-char exact-byte file tag + 3-letter line anchors from a snapshot-bound read/grep | no |
| `pi-agent-ide` | guarded editing: `replace` (text/line-range/search-match selectors), `insert`, `delete`, `write`, `apply` | line-hash and exact-text selectors with stale-selection recovery | no |


## Scenarios (35)

Each scenario carries a `focus` that the report splits by: **core editing** (18), **staleness & concurrency** (10), and **served-state & undo** (7) — the last group exercises anchor/served-state mechanics that only hashline-style tools implement.

### Core editing (18)
- `single-line` — replace one line
- `range` — replace an inclusive range
- `delete-line` — delete one line cleanly
- `duplicate-nth` / `duplicate-import` — edit the *2nd* occurrence of duplicated content
- `whitespace-only` — target a line with trailing whitespace
- `crlf` / `bom` — line endings and BOM survive
- `empty-file` — seed an empty file
- `long-line` — replace a >50KB line the model only ever saw truncated
- `noop` — identical replacement leaves the file byte-identical
- `insert-after` — insert lines below a target
- `unicode` — CJK/emoji/accent content survives byte-level
- `tabs` — tab indentation stays byte-identical
- `no-trailing-newline` — a missing EOF newline stays absent
- `delete-range` — delete an inclusive range cleanly
- `insert-eof` — insert after the last line
- `crlf-bom` — BOM and CRLF survive together

### Staleness & concurrency (10)
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

## Results — latest full round (9 models × 11 contenders × 35 scenarios, `results/llm-report.md`, 3,465 runs, $4.54)

Per model (each /385; three models ran locally on llama.cpp):

| Model | Passed | Rate | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- |
| GLM 5.3 Flash | 357 | **93%** | 7,155 | $0.45 |
| DeepSeek V4.1 Flash | 353 | 92% | 10,722 | $1.48 |
| Qwen3.8-Flash | 354 | 92% | 13,034 | $0.83 |
| Muse Spark 1.3 Contributor | 353 | 92% | 10,888 | $0.49 |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | 356 | 92% | 10,191 | $0.00 |
| Gemma 4 (31B) | 338 | 88% | 6,599 | $0.37 |
| Nemotron 3 Nano (30B) | 331 | 86% | 17,252 | $0.92 |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | 324 | 84% | 7,733 | $0.00 |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | 319 | 83% | 8,262 | $0.00 |

Per tool with the focus split (each cell passed/total across all models):

| Tool | Core (162) | Staleness (90) | Served-state (63) | Overall (315) |
| --- | --- | --- | --- | --- |
| **pi-hashline-edit-pro** | **161** | 89 | 58 | **308 (98%)** |
| **pi-hashline-edit-pro-diff0** | 160 | 89 | 59 | **308 (98%)** |
| @agimon-ai/doompi-edit | 149 | 86 | 62 | 297 (94%) |
| pi-hashline-readmap | 151 | 85 | 57 | 293 (93%) |
| pi-hashline-context-edit | 134 | 87 | 63 | 284 (90%) |
| pi-hashline-edit | 133 | 87 | 63 | 283 (90%) |
| @cortexkit/aft-pi | 140 | 76 | 62 | 278 (88%) |
| @xynogen/pix-edit | 142 | 76 | 60 | 278 (88%) |
| pi-agent-ide | 124 | 77 | 62 | 263 (83%) |
| builtin-edit | 124 | 66 | 60 | 250 (79%) |
| pi-semantic-edit | 125 | 59 | 59 | 243 (77%) |

Per-tool process (all models):

| Tool | Version | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- | --- |
| builtin-edit | 0.85.1 | 3.4 | 7,301 | $0.0011 | 10 |
| pi-hashline-edit | 0.8.3 | 2.9 | 10,760 | $0.0011 | 10 |
| pi-hashline-context-edit | 0.11.0 | 2.6 | 8,878 | $0.0010 | 10 |
| pi-hashline-edit-pro | 4.3.5 | 2.8 | 9,079 | $0.0010 | 10 |
| pi-hashline-edit-pro-diff0 | 4.3.5 | 2.9 | 9,500 | $0.0011 | 10 |
| pi-hashline-readmap | 0.14.0 | 3.2 | 9,534 | $0.0012 | 10 |
| @cortexkit/aft-pi | 0.56.2 | 3.0 | 10,881 | $0.0012 | 10 |
| @xynogen/pix-edit | 0.2.5 | 3.3 | 7,307 | $0.0011 | 10 |
| pi-semantic-edit | 0.4.0 | 2.9 | 12,239 | $0.0021 | 11 |
| @agimon-ai/doompi-edit | 0.0.1-alpha.49 | 3.5 | 8,874 | $0.0011 | 10 |
| pi-agent-ide | 0.6.2 | 4.6 | 17,890 | $0.0022 | 12 |

Totals across the round: **30.2M prompt tokens in, 5.2M completion tokens out, 11,179 tool calls** (856 failed), 38.3h of summed run time.

**Findings:**
- **`pi-hashline-edit-pro` 4.3.5 leads at 98% and wins the core-editing group outright** (161/162), with `diff0` matching it overall (308/315) — the two stay tied even at the larger 11-contender matrix.
- **`@agimon-ai/doompi-edit` debuts 3rd (94%)**: snapshot-bound per-file tags + 3-letter line anchors give it strong staleness defense (86/90) right behind pro.
- **`pi-agent-ide` debuts at 83%**: its guarded `replace`/`insert`/`delete`/`write` surface is solid on served-state (62/63) but its staleness recovery (77/90) and token appetite (17,890/run) trail the hashline family.
- **Local llama.cpp lanes are competitive**: the 27B at UD-Q2_K_XL ties the best remote models (92%) for $0; the 26B A4B MoE lands 84% and the 9B Q4_K_M 83%.
- **The built-in `edit` tool remains worst-in-class on staleness (66/90)**: its text matching silently corrupts duplicated and externally-changed content.
- **`@cortexkit/aft-pi` scored 88% with its `before_agent_start` workflow hints restored** — earlier rounds ran it without that injected guidance, so its old numbers were understated.
- **Stale-rejection + recovery is observable at scale**: 72 `recovered` runs in the qwen38 lane alone — hashline tools refuse stale anchors and models re-read and re-apply; text tools have no such safety net.
- **Served-state is solvable but expensive**: hashline tools score 57-63/63; the gap to text tools has narrowed as models learned to re-read, but `b7`/`b8`-style blind edits remain guesswork without served anchors.


## Ecosystem popularity (npm + GitHub, snapshot 2026-09)

| Package | Downloads/mo | Stars |
| --- | --- | --- |
| **`pi-hashline-edit-pro`** | **20,403** | 74 |
| `@cortexkit/aft-pi` | 4,362 | 275 |
| `@xynogen/pix-edit` | 2,599 | 62 |
| `pi-hashline-readmap` | 2,293 | 104 |
| `pi-hashline-edit` (abandoned upstream) | 1,942 | repo deleted |
| `pi-semantic-edit` | 1,537 | 4 |
| `pi-better-edit` (removed from bench) | 950 | 4 |
| `pi-hledit` (removed from bench) | 228 | 2 |
| `@jerryan/pi-hashline-edit` (removed from bench) | 173 | 7 |
| `@the-agency/pi-hashline-edit` (removed from bench) | 61 | 25 |
| `pi-hashline-context-edit` | 47 | 0 |

`pi-hashline-edit-pro` is the most-downloaded dedicated editing extension in the pi ecosystem (~4.7× the runner-up) and the only edit tool in the [pi.dev top-50 catalog](https://pi.dev/packages).

## Project layout

```
src/
  main-llm.ts   benchmark entry point
  types.ts      shared types
  contenders/   per-tool adapters (expose the real pi tools to the LLM loop)
  scenarios/    the scenario battery (35, tagged core/staleness/served-state)
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
