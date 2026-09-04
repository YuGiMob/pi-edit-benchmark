# pi-edit-benchmark

Deterministic, tool-level benchmark comparing file-editing extensions for [pi-coding-agent](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent): the built-in `edit` tool, the hashline family (`pi-hashline-edit`, `pi-hashline-edit-pro`, `pi-hashline-context-edit`, `pi-hashline-readmap`), tolerant/semantic matchers (`@cortexkit/aft-pi`, `@xynogen/pix-edit`, `pi-semantic-edit`), and the reference `@oh-my-pi/hashline` engine.

## Why

LLM file editing fails in two ways: edits land on the wrong line, and stale edits are applied silently. Hash-anchored tools (hashline) exist to fix both. This benchmark measures, with deterministic tool-level runs and real-LLM tool-calling runs, how well each tool actually does:

- **Correctness** — does the edit land exactly where the model pointed?
- **Safety** — is a stale or ambiguous edit refused instead of silently misapplied?
- **Robustness** — do anchors survive unrelated edits, does undo restore bytes, do BOM/CRLF survive, do error messages guide recovery?

## How it works

Each contender is loaded through a fake pi `ExtensionAPI` (the same registration surface pi uses, including `prepareArguments` + TypeBox validation), so the real tool implementations run unmodified. The model is simulated as a *perfect copier*: it reads the file through the contender's own `read` tool, copies the exact anchor (or `oldText`) of the target line from the output, and issues the edit in the contender's native format.
Every scenario runs in an isolated temp dir per contender, so no state leaks between runs.

```
npm install --legacy-peer-deps   # peer-dep conflicts between extensions; keep @earendil-works/pi-tui installed
bun run src/main.ts              # deterministic tool-level benchmark
bun run src/main-llm.ts          # real-LLM benchmark (multi-provider)
```

Output: `results/report.md` + `results/report.json` (tool-level) and `results/llm-report.md` + `results/llm-report.json` (LLM). Traces land in `results/traces/<model>/`.

Requires [Bun](https://bun.sh) — several contenders ship `.ts` sources without `"type": "module"` and only Bun resolves their ESM imports of `pi-coding-agent` correctly.

## LLM benchmark

`src/main-llm.ts` drives the same contenders with a **real model** through a tool-calling loop. Models come from three providers — hyper, opencode-go, and ollama-cloud — each reached at its own endpoint with its own key (`HYPER_API_KEY`, `OPENCODE_API_KEY`, `OLLAMA_API_KEY`). The system prompt **mirrors pi's own `buildSystemPrompt`**: pi header, an "Available tools" list built from each tool's `promptSnippet`, aggregated `promptGuidelines`, and the working directory. Tool schemas are passed untruncated, and `prepareArguments` + TypeBox validation run exactly as pi runs them.

The model must read the file and issue edits through the tools; the file state afterwards is scored with the same expectations as the tool-level benchmark. For the stale scenarios, the external change is applied to the file *immediately after the model's first read* — simulating a concurrent modification — and the model's behavior (silent mis-edit vs. rejected-and-recovered) is what's measured.

```
bun run src/main-llm.ts                        # 10 models × 8 tools × 34 scenarios (2,720 runs)
bun run src/main-llm.ts --scenarios stale-line,duplicate-nth   # a subset
bun run src/main-llm.ts --models glm-5.3-flash,muse-spark-1.3-contributor
bun run src/main-llm.ts --concurrency 6 --delay-ms 8000 --dry-run
bun run src/llm/show-trace.ts results/traces/<model>/<contender>-<scenario>.json
```

**Pacing for rate limits:** `--concurrency` bounds parallel runs and `--delay-ms` inserts a pause between scenario batches. Providers differ: hyper caps at ~1,000 requests/hour (run one hyper model at a time, paced), ollama-cloud allows concurrency 3, opencode-go has no concurrency limit as long as the same model isn't called concurrently. For full rounds, run one invocation per provider lane in parallel (see `--models`), then merge the JSONs.

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
| DeepSeek V4 Flash 0731 | `deepseek-v4-flash:0731` | ollama-cloud | chat completions | provider default | $0.44 / $1.32 |
| Gemma 4 26B A4B | `gemma-4-26b-a4b-it` | hyper | chat completions | `max` | $0.106 / $0.368 |
| GLM 5.3 Flash | `glm-5.3-flash` | opencode-go | chat completions | `max` | $0.075 / $0.25 |
| Qwen3.8-27B | `qwen3.8-27b` | hyper | chat completions | `max` | $0.50 / $3.00 |
| Qwen3.8-Flash | `qwen3.8-flash` | opencode-go | chat completions | `max` | $0.15 / $0.47 |
| Muse Spark 1.2 Contributor | `muse-spark-1.2-contributor` | opencode-go | **OpenAI Responses** | `xhigh` | $0.10 / $0.20 |
| Muse Spark 1.3 Contributor | `muse-spark-1.3-contributor` | opencode-go | **OpenAI Responses** | `xhigh` | $0.10 / $0.20 |
| Gemma 4 (31B) | `gemma4:31b` | ollama-cloud | chat completions | provider default | $0.14 / $0.40 |
| Nemotron 3 Nano (30B) | `nemotron-3-nano:30b` | ollama-cloud | chat completions | provider default | $0.06 / $0.24 |
| GPT-OSS (20B) | `gpt-oss:20b` | ollama-cloud | chat completions | provider default | $0.07 / $0.30 |

Reported per run: pass/fail against the scenario expectations, outcome class (`applied`, `rejected`, `recovered` — the model re-read after a stale rejection and applied correctly), tool-call trace, tokens, and API cost (prices from `~/.pi/agent/models-store.json`).

## Contenders

| Contender | Edit format | Anchors | Undo |
| --- | --- | --- | --- |
| `builtin-edit` | `{ path, edits: [{ oldText, newText }] }` | none (text matching) | no |
| `pi-hashline-edit` | `{ path, edits: [{ op, pos, end, lines }] }` | `LINE#HASH:` 2-char contextual | no |
| `pi-hashline-context-edit` | same + `replace_text` | `LINE#HASH:` 2-char contextual | no |
| `pi-hashline-edit-pro` (3.0.1) | `{ path, remove_from, remove_to, replacement_lines }` | `HASH│` 4-char, served-range verification | yes |
| `pi-hashline-readmap` | `{ path, edits: [{ set_line / replace_lines / insert_after }] }` | `LINE:HASH|` 3-char | no |
| `@oh-my-pi/hashline` | patch language (`[path#tag] PUT A.=B:`) | 4-hex file tag | no |
| `@cortexkit/aft-pi` | `{ path, edits: [{ oldString, newString, occurrence }] }` | none (fuzzy find/replace, Rust backend) | no |
| `@xynogen/pix-edit` | `{ path, edits: [{ oldText, newText }] }` | none (unique-text replace + diff) | no |
| `pi-semantic-edit` | `{ path, edits: [{ oldText, newText, replaceAll? }] }` | none (10-pass semantic fuzzy chain, uniqueness guard) | no |

`@oh-my-pi/hashline` is the reference engine driven directly (no pi tools) — included in the deterministic suite, excluded from LLM rounds.

## Scenarios (34)

Each scenario carries a `focus` that the reports split by: **core editing** (15), **staleness & concurrency** (11), and **served-state & undo** (8) — the last group exercises anchor/served-state mechanics that only hashline-style tools implement.

### Core editing (15)
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

### Staleness & concurrency (11)
- `stale-line` — the target line changed on disk; the edit must be refused
- `stale-range` — a line *inside* the replaced range changed; the edit must be refused
- `shift-above` — a line was inserted above the target (position shift)
- `target-deleted` — an external writer *deleted* the target line; the edit must be refused
- `external-far` — an unrelated distant change must not block the edit
- `b6-change-then-revert` — interior change reverted before the edit; must apply
- `b9-boundary-changed` — the anchor line itself changed; must reject
- `b10-duplicate-drift` — drift inside a duplicated block; must reject, not overwrite
- `b12-noop-with-drift` — noop edit with unrelated external change; file untouched
- `b15-large-range-drift` — 200-line range with drifted interior; must reject
- `error-guidance` — a refused edit explains how to recover

### Served-state & undo (8)
- `anchor-stability` — anchors of untouched lines survive an edit (no re-read needed)
- `undo` — undo restores the exact previous bytes
- `b7-paged-read-gap` — edit targets a line never shown by a paged read; served-state tools must reject
- `b8-blind-edit` — edit with anchors never served for this file; served-state tools must reject
- `b13-chained-diff-edit` — second edit anchored on the post-edit diff rows, no re-read
- `b16b-undo-stale` — undo after an external change; must be refused
- `b17-reversed-range` — swapped remove_from/remove_to; anchor tools autocorrect
- `b18-boundary-dup` — replacement re-includes the boundary line; dedup tools strip it

## Scoring

- Pass = the file ended in the expected state, or the edit was refused when refusal was the safe outcome.
- `SILENT WRONG-LINE EDIT` — the tool wrote when it should have refused, or landed on the wrong occurrence. The worst failure class.
- `applied wrong content` — applied, but the result differs from the intent (e.g. BOM dropped, blank line left behind).
- `rejected a valid edit` — refused an edit that should have applied.

Both reports split every score by the three focus groups above.

## Results — latest LLM round (8 models × 8 tools × 34 scenarios, `results/llm-report.md`, 2,176 runs, $3.34)

Per model (each /272):

| Model | Passed | Rate | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- |
| GLM 5.3 Flash | 216 | **79%** | 9,363 | $0.21 |
| Muse Spark 1.2 Contributor | 214 | 79% | 15,556 | $0.50 |
| Muse Spark 1.3 Contributor | 214 | 79% | 17,837 | $0.54 |
| Nemotron 3 Nano (30B) | 205 | 75% | 19,098 | $0.81 |
| Qwen3.8-Flash | 205 | 75% | 12,886 | $0.61 |
| Gemma 4 (31B) | 199 | 73% | 5,955 | $0.25 |
| Gemma 4 26B A4B | 196 | 72% | 7,629 | $0.23 |
| GPT-OSS (20B) | 190 | 70% | 6,389 | $0.19 |

Per tool with the focus split (each cell passed/total across all models):

| Tool | Core (120) | Staleness (88) | Served-state (64) | Overall (272) |
| --- | --- | --- | --- | --- |
| **pi-hashline-edit-pro** | **97** | 81 | 56 | **234 (86%)** |
| pi-hashline-context-edit | 82 | 80 | 55 | 217 (80%) |
| @cortexkit/aft-pi | 84 | 69 | 57 | 210 (77%) |
| pi-hashline-edit | 81 | 79 | 55 | 215 (79%) |
| pi-hashline-readmap | 88 | 72 | 48 | 208 (76%) |
| @xynogen/pix-edit | 72 | 71 | 53 | 196 (72%) |
| builtin-edit | 66 | 59 | 52 | 177 (65%) |
| pi-semantic-edit | 64 | 61 | 57 | 182 (67%) |

Per-tool process (all models):

| Tool | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- |
| builtin-edit | 3.7 | 8,656 | $0.0014 | 12 |
| pi-hashline-edit | 3.3 | 11,766 | $0.0014 | 10 |
| pi-hashline-context-edit | 3.0 | 9,919 | $0.0012 | 10 |
| pi-hashline-edit-pro | 3.5 | 11,773 | $0.0015 | 12 |
| pi-hashline-readmap | 5.5 | 11,097 | $0.0015 | 439* |
| @cortexkit/aft-pi | 3.2 | 7,809 | $0.0010 | 10 |
| @xynogen/pix-edit | 3.7 | 9,714 | $0.0015 | 13 |
| pi-semantic-edit | 3.4 | 23,978 | $0.0028 | 10 |

\* one runaway run inflated the max; typical runs stay ≤10.

**Findings:**
- **`pi-hashline-edit-pro` leads overall (86%) and wins the core-editing group outright** (97/120 vs 82-88 for every other tool) — with the score achieved under a pi-faithful prompt carrying no benchmark-specific coaching.
- **The built-in `edit` tool is the worst performer (65%)**: its text matching silently corrupts duplicated content (`duplicate-nth`/`duplicate-import` failed by every model) and externally-changed lines.
- **`pi-semantic-edit` debuted last (67%)**: drift tolerance doesn't help when the failure mode is ambiguity, and its fuzzy chain is the most token-hungry (23,978/run).
- **`readmap` wins staleness-adjacent scenarios but collapsed for GPT-OSS (15/34)** — a single-model outlier worth re-testing.
- **Served-state is the hardest group for text tools** (52-57/64): without served anchors, `b7`/`b8`/`b13`/`b16b` are guesswork.
- **Stale-rejection + recovery is observable**: hashline tools reject stale edits and models re-read and re-apply (`recovered`) — text tools have no such safety net.

## Deterministic tool-level suite

`bun run src/main.ts` runs the same battery without an LLM (the model is simulated as a perfect copier). Its last full run predates the current roster (it included since-removed forks); regenerate it after roster changes with `bun run src/main.ts`.

## Ecosystem popularity (npm + GitHub, snapshot 2026-09)

| Package | Downloads/mo | Stars |
| --- | --- | --- |
| `@oh-my-pi/hashline` (reference engine) | 329,522 | 29,296 |
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
  contenders/   per-tool adapters (read → parse → build request → execute)
  scenarios/    the scenario battery (34, tagged core/staleness/served-state)
  harness/      runner + scoring
  llm/          multi-provider client + LLM runner (pi-mirror system prompt)
  report/       markdown/JSON report generation
  registry.ts   fake pi ExtensionAPI
results/        generated reports + per-run traces (committed)
```

## Adding a contender

1. `npm install <package>` (use `--legacy-peer-deps`; keep `@earendil-works/pi-tui` installed — extensions peer-depend on it).
2. Add an adapter in `src/contenders/` implementing the `Contender` interface: `read` (return parsed `anchor│content` lines), `buildEditRequest` (translate a scenario target into the tool's native request), `executeEdit`. If the tool defines `promptSnippet`/`promptGuidelines`, pass them through — they are rendered into the pi-mirror system prompt.
3. Register it in `src/contenders/index.ts` and add its tool filter to `LLM_TOOL_FILTERS` in `src/llm/models.ts`.
4. Add per-contender expectations in `src/scenarios/index.ts` (`expectedByContender`) where the tool's contract genuinely differs (e.g. no empty-file seeding).

## License

MIT
