# pi-edit-benchmark

LLM tool-calling benchmark comparing file-editing extensions for [pi-coding-agent](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent): the built-in `edit` tool, a shell-only `bash` baseline (`builtin-bash`), the hashline family (`pi-hashline-edit-pro`, `pi-hashline-readmap`), tolerant matchers (`@cortexkit/aft-pi`, `@xynogen/pix-edit`, `pi-semantic-edit`), snapshot-bound hashline editing (`@agimon-ai/doompi-edit`), and a repairing `edit` override (`pi-edit-guard`).

## Why

LLM file editing fails in two ways: edits land on the wrong line, and stale edits are applied silently. Hash-anchored tools (hashline) exist to fix both. This benchmark measures, with real-LLM tool-calling runs, how well each tool actually does:

- **Correctness** — does the edit land exactly where the model pointed?
- **Safety** — is a stale or ambiguous edit refused instead of silently misapplied?
- **Robustness** — do anchors survive unrelated edits, does undo restore bytes, do BOM/CRLF survive, do error messages guide recovery?

## How it works

Each contender is a real pi extension loaded through a fake pi `ExtensionAPI` (the same registration surface pi uses, including `prepareArguments` + TypeBox validation), so the real tool implementations run unmodified. The fake API also fires pi's session and tool lifecycle events (`session_start`, `tool_call`, `tool_result`, `session_shutdown`), so hook-based behavior — e.g. `pi-edit-guard`'s mtime stale-read blocking — runs as it does in pi. A real model drives each contender's own tools through a tool-calling loop.
Every scenario runs in an isolated temp dir per contender, so no state leaks between runs.

```
npm install --legacy-peer-deps   # peer-dep conflicts between extensions; keep @earendil-works/pi-tui installed
bun run src/main-llm.ts          # real-LLM benchmark (multi-provider)
```

Output: `results/llm-report.md` + `results/llm-report.json` (all models), plus `results/llm-report-cloud.*` and `results/llm-report-local.*` splits (each with `.md`, `.json`, `.runs.jsonl`); traces land in `results/traces/<model>/`.

Requires [Bun](https://bun.sh) — several contenders ship `.ts` sources without `"type": "module"` and only Bun resolves their ESM imports of `pi-coding-agent` correctly.

## LLM benchmark

`src/main-llm.ts` drives the same contenders with a **real model** through a tool-calling loop. Models come from the opencode-go remote provider (`OPENCODE_API_KEY`), plus a keyless local `llamacpp` provider pointed at a llama.cpp server (e.g. `http://192.168.0.21:8080/v1`). The system prompt **mirrors pi's own `buildSystemPrompt`**: pi header, an "Available tools" list built from each tool's `promptSnippet`, aggregated `promptGuidelines`, any `before_agent_start` system-prompt patches the contender registers, and the working directory. Tool schemas are passed untruncated, and `prepareArguments` + TypeBox validation run exactly as pi runs them.
The model must read the file and issue edits through the tools; the file state afterwards is scored against the scenario expectations. For the stale scenarios, the external change is applied to the file *immediately after the model's first read* — simulating a concurrent modification — and the model's behavior (silent mis-edit vs. rejected-and-recovered) is what's measured. Task prompts leave the read decision to the model; `--read-mandate` restores the previous 'always read the file before editing' suffix for a comparison run.

```
bun run src/main-llm.ts --scenarios stale-line,duplicate-nth   # a subset
bun run src/main-llm.ts                        # 10 models × 9 contenders × 34 scenarios (3,060 runs)
bun run src/main-llm.ts --models glm-5.3-flash,muse-spark-1.3-contributor
bun run src/main-llm.ts --concurrency 6 --delay-ms 8000 --dry-run
bun run src/llm/show-trace.ts results/traces/<model>/<contender>-<scenario>.json
```

**Parallel lanes:** all selected models run in parallel, each as its own lane bounded by per-provider concurrency (`opencode-go: 16`, `llamacpp: 6` by default). `--lane-concurrency provider=n,...` overrides individual lanes, `--concurrency n` overrides every lane, and `--delay-ms` staggers lane starts (pacing for tight rate limits). Cloud lanes all run at once; the llamacpp lanes share one endpoint, so run one local model per invocation (or swap the served model between runs) and merge with `--resume`.

### Run traces (validation)

Every completed LLM run is recorded as a full transcript in `results/traces/<model>/<contender>-<scenario>.json` (4 of the 3,060 runs aborted before a trace was written and are scored from the committed run log):

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
| K2 Horizon 3.7B | `k2-horizon-3.7b-q4` | llamacpp | chat completions | provider default | local, $0.00 |
| K2 Horizon 7B | `k2-horizon-7b-q4` | llamacpp | chat completions | provider default | local, $0.00 |
| GLM 5.3 Flash | `glm-5.3-flash` | opencode-go | chat completions | `max` | $0.15 / $0.50 |
| Qwen3.8-27B | `qwen3.8-27b-q2` | llamacpp | chat completions | provider default | local, $0.00 |
| Qwen3.8-Flash | `qwen3.8-flash` | opencode-go | chat completions | `max` | $0.15 / $0.47 |
| Muse Spark 1.3 Contributor | `muse-spark-1.3-contributor` | opencode-go | **OpenAI Responses** | `xhigh` | $0.10 / $0.20 |
| MiMo 2.6 Flash | `mimo-v2.6-flash` | opencode-go | chat completions | provider default | $0.14 / $0.28 |
| MiMo-V2.6-Pro | `mimo-v2.6-pro` | opencode-go | chat completions | provider default | $0.435 / $0.87 |

The two K2 Horizon models run through IFM's llama.cpp fork (`model/K2Horizon` branch); mainline llama.cpp does not support the `k2_horizon` architecture yet. The local `llamacpp` endpoint serves a single model at a time, so local models are benchmarked in separate invocations with the served model swapped between them.

Reported per run: pass/fail against the scenario expectations, outcome class (`applied`, `rejected`, `recovered` — the model re-read after a stale rejection and applied correctly), tool-call trace, tokens, and API cost (prices from `~/.pi/agent/models-store.json`).

## Contenders

| Contender | Edit format | Anchors | Undo |
| --- | --- | --- | --- |
| `builtin-edit` | `{ path, edits: [{ oldText, newText }] }` | none (text matching) | no |
| `pi-hashline-edit-pro` | `{ remove_from, remove_to, replacement_lines }` + `insert { anchor, direction, lines }` (no `path`; anchors resolve the file) | `anchor│` 4-char, served-range verification | yes |
| `pi-hashline-readmap` | `{ path, edits: [{ set_line / replace_lines / insert_after }] }` | `LINE:HASH|` 3-char | no |
| `@cortexkit/aft-pi` | `{ path, edits: [{ oldString, newString, occurrence }] }` | none (fuzzy find/replace, Rust backend) | no |
| `@xynogen/pix-edit` | `{ path, edits: [{ oldText, newText }] }` | none (unique-text replace + diff) | no |
| `pi-semantic-edit` | `{ path, edits: [{ oldText, newText, replaceAll? }] }` | none (10-pass semantic fuzzy chain, uniqueness guard) | no |
| `@agimon-ai/doompi-edit` | `{ path, hash, edits: [{ from, to, content }] }` | 8-char exact-byte file tag + 3-letter line anchors from a snapshot-bound read/grep | no |
| `builtin-bash` | pi's standard `bash` tool only — no read/edit/write tools | none (shell: `cat`, `sed`, `printf`, …) | no |
| `pi-edit-guard` | same surface as built-in `edit` (`{ path, edits: [{ oldText, newText }] }`) plus `undo` | none (argument repair, 14-pass fuzzy match chain, mtime staleness check) | yes |


## Scenarios (34)

Each scenario carries a `focus` that the report splits by: **core editing** (23) and **staleness & concurrency** (11).

### Core editing (23)
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
- `undo` — undo restores the exact previous bytes
- `b13-chained-diff-edit` — two sequential edits in one file; both must land and the rest stay byte-identical
- `b18-boundary-dup` — the replacement re-includes the line above the range; applied literally, so the duplicate stays

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


## Scoring

- Pass = the file ended in the expected state, the edit was refused when refusal was the safe outcome, or a stale rejection was recovered from after a re-read (`recovered`).
- `SILENT WRONG-LINE EDIT` — the tool wrote when it should have refused, or landed on the wrong occurrence. The worst failure class.
- `applied wrong content` — applied, but the result differs from the intent (e.g. BOM dropped, blank line left behind).
- `rejected a valid edit` — refused an edit that should have applied.

The report splits every score by the two focus groups above.

## Results — full wave (10 models × 9 contenders × 34 scenarios, 3,060 runs, $3.22)

Reports: `results/llm-report.md` (all models), `results/llm-report-cloud.md` (6 opencode-go models, 1,836 runs, $3.22), and `results/llm-report-local.md` (4 llama.cpp models, 1,224 runs, $0.00).

> This wave runs with the read mandate off (only `--read-mandate` restores it), `pi-edit-guard` 0.1.5, `pi-hashline-edit-pro` 4.4.1, and lifecycle events live. The two K2 Horizon models run through IFM's llama.cpp fork (`model/K2Horizon` branch); mainline still does not support the `k2_horizon` architecture. Matrix note: `pi-hashline-edit`, `pi-hashline-context-edit`, and `pi-agent-ide` were dropped in earlier rounds, and `long-line` was dropped from the battery. Scores below are re-evaluated offline from the committed run traces under the current evaluator. Since the wave ran, `@cortexkit/aft-pi` 0.57.2 and `@agimon-ai/doompi-edit` 0.0.1-alpha.56 were released upstream (the latter peer-depends on `pi-coding-agent` 0.87.1, while the bench pins 0.87.0); the tables below score the pinned versions.

Per model (each /306):

| Model | Passed | Rate | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | 292 | **95%** | 8,295 | $0.46 |
| MiMo 2.6 Flash | 292 | **95%** | 8,460 | $0.39 |
| Qwen3.8-Flash | 290 | **95%** | 8,332 | $0.45 |
| MiMo-V2.6-Pro | 289 | **94%** | 7,954 | $1.15 |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | 289 | **94%** | 8,453 | $0.00 |
| GLM 5.3 Flash | 285 | **93%** | 6,179 | $0.33 |
| Muse Spark 1.3 Contributor | 285 | **93%** | 12,617 | $0.44 |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | 260 | **85%** | 6,821 | $0.00 |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | 245 | **80%** | 7,713 | $0.00 |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | 231 | **75%** | 6,780 | $0.00 |

Per tool with the focus split (each cell passed/total across all ten models):

| Tool | Core (23) | Staleness (11) | Overall (34) |
| --- | --- | --- | --- |
| pi-hashline-edit-pro | 228/230 | 110/110 | 338/340 (99%) |
| builtin-bash | 216/230 | 100/110 | 316/340 (93%) |
| @xynogen/pix-edit | 217/230 | 95/110 | 312/340 (92%) |
| builtin-edit | 218/230 | 89/110 | 307/340 (90%) |
| pi-semantic-edit | 222/230 | 77/110 | 299/340 (88%) |
| @cortexkit/aft-pi | 197/230 | 101/110 | 298/340 (88%) |
| @agimon-ai/doompi-edit | 201/230 | 96/110 | 297/340 (87%) |
| pi-hashline-readmap | 201/230 | 95/110 | 296/340 (87%) |
| pi-edit-guard | 214/230 | 81/110 | 295/340 (87%) |

Per-tool process (all ten models):

| Tool | Version | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- | --- |
| builtin-edit | 0.87.0 | 3.9 | 6,898 | $0.0010 | 31 |
| pi-hashline-edit-pro | 4.4.1 | 3.0 | 9,034 | $0.0011 | 15 |
| pi-hashline-readmap | 0.14.0 | 3.9 | 8,390 | $0.0010 | 15 |
| @cortexkit/aft-pi | 0.57.1 | 4.0 | 13,087 | $0.0016 | 10 |
| @xynogen/pix-edit | 0.2.5 | 3.6 | 6,958 | $0.0011 | 27 |
| pi-semantic-edit | 0.4.0 | 3.1 | 5,972 | $0.0007 | 10 |
| @agimon-ai/doompi-edit | 0.0.1-alpha.52 | 4.2 | 8,255 | $0.0011 | 24 |
| builtin-bash | 0.87.0 | 3.5 | 7,386 | $0.0010 | 16 |
| pi-edit-guard | 0.1.5 | 3.3 | 7,463 | $0.0010 | 15 |

Totals across the wave: **22.7M prompt tokens in, 2.3M completion tokens out, 11,040 tool calls** (1,466 failed), 25.1h of summed run time.

**Findings:**
- **`pi-hashline-edit-pro` 4.4.1 sweeps the wave at 99% (338/340)** — the only tool to take all 110 staleness runs, ahead of `builtin-bash` (93%) and `@xynogen/pix-edit` (92%).
- **Qwen3.8-27B-Q2 runs with the cloud leaders at 94% (289/306)** — the best local model, one run behind Qwen3.8-Flash (290) and tied with MiMo-V2.6-Pro (289), trailing DeepSeek and MiMo 2.6 Flash (292 each).
- **K2 Horizon scales with size**: 7B at 80% (245/306) beats 3.7B at 75% (231/306), but both trail Gemma 4 26B A4B (85%) and need IFM's fork to run at all.
- **`builtin-bash` remains the strongest non-anchor baseline** at 93%, with `@xynogen/pix-edit` (92%) the best structured-edit tool behind it.
- **The two K2 models drive the worst failure class**: 68 of the 134 applied-wrong results and 47 of the 117 silent-wrong-line results, on 20% of the matrix.
- **`pi-edit-guard` sits last at 87% (295/340)**; `pi-semantic-edit` keeps the weakest staleness score (77/110) and `@cortexkit/aft-pi` the weakest core (197/230).

## Ecosystem popularity (npm + GitHub, snapshot 2026-09-24)

| Package | Downloads/mo | Stars |
| --- | --- | --- |
| **`pi-hashline-edit-pro`** | **17,789** | 92 |
| `@agimon-ai/doompi-edit` | 5,244 | 36 |
| `@cortexkit/aft-pi` | 2,756 | 308 |
| `pi-better-edit` (removed from bench) | 2,018 | 7 |
| `@xynogen/pix-edit` | 1,575 | 71 |
| `pi-hashline-readmap` | 1,095 | 104 |
| `pi-hashline-edit` (removed from bench) | 699 | repo deleted |
| `pi-edit-guard` | 499 | 4 |
| `@the-agency/pi-hashline-edit` (removed from bench) | 240 | 27 |
| `pi-semantic-edit` | 171 | 4 |
| `pi-hledit` (removed from bench) | 128 | 2 |
| `@jerryan/pi-hashline-edit` (removed from bench) | 118 | 7 |
| `pi-hashline-context-edit` (removed from bench) | 37 | 0 |

`pi-hashline-edit-pro` is the most-downloaded dedicated editing extension in the pi ecosystem (~3.4× the runner-up, `@agimon-ai/doompi-edit`) and the highest-downloading edit tool in the [pi.dev catalog](https://pi.dev/packages), where it currently sits just outside the overall top 50.

## Project layout

```
src/
  main-llm.ts   benchmark entry point
  types.ts      shared types
  contenders/   per-tool adapters (expose the real pi tools to the LLM loop)
  scenarios/    the scenario battery (34, tagged core/staleness)
  llm/          multi-provider client + tool-calling runner + report rendering
results/        generated reports + per-run traces (committed)
```

## Adding a contender

1. `npm install <package>` (use `--legacy-peer-deps`; keep `@earendil-works/pi-tui` installed — extensions peer-depend on it).
2. Add an adapter in `src/contenders/` implementing the `Contender` interface: `info` plus `listTools()`, which loads the extension through the fake pi `ExtensionAPI` and returns its tools. `promptSnippet`/`promptGuidelines` are rendered into the pi-mirror system prompt.
3. Register it in `src/contenders/index.ts` and add its tool filter to `LLM_TOOL_FILTERS` in `src/llm/models.ts`.
4. Add a `taskDescriptions` entry in `src/llm/runner.ts` for any new scenario id.

## License

MIT
