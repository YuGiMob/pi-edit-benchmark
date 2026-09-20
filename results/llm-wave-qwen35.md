# pi edit-tool benchmark — LLM runs

Generated 2026-09-20T05:57:53.788Z. Real-model runs against llamacpp; the model drives each contender's actual tools through a tool-calling loop. Total API cost: $0.0000.

## Models

| Model | Runs | Passed | Pass rate | Avg steps | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | 385 | 319/385 | 83% | 2.9 | 8262 | $0.0000 |

## Results — pass rate by model (rows) × tool (columns)

| Model | builtin-edit | pi-hashline-edit | pi-hashline-context-edit | pi-hashline-edit-pro | pi-hashline-edit-pro-diff0 | pi-hashline-readmap | @cortexkit/aft-pi | @xynogen/pix-edit | pi-semantic-edit | @agimon-ai/doompi-edit | pi-agent-ide | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | 26/35 | 31/35 | 31/35 | 33/35 | 34/35 | 31/35 | 26/35 | 31/35 | 24/35 | 29/35 | 23/35 | 319/385 (83%) |

## Per-tool totals (all models)

| Tool | Core (18) | Staleness (10) | Served-state (7) | Passed | Total | Pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| builtin-edit | 14/18 | 5/10 | 7/7 | 26 | 35 | 74% |
| pi-hashline-edit | 15/18 | 9/10 | 7/7 | 31 | 35 | 89% |
| pi-hashline-context-edit | 15/18 | 9/10 | 7/7 | 31 | 35 | 89% |
| pi-hashline-edit-pro | 17/18 | 10/10 | 6/7 | 33 | 35 | 94% |
| pi-hashline-edit-pro-diff0 | 17/18 | 10/10 | 7/7 | 34 | 35 | 97% |
| pi-hashline-readmap | 15/18 | 10/10 | 6/7 | 31 | 35 | 89% |
| @cortexkit/aft-pi | 13/18 | 6/10 | 7/7 | 26 | 35 | 74% |
| @xynogen/pix-edit | 16/18 | 8/10 | 7/7 | 31 | 35 | 89% |
| pi-semantic-edit | 12/18 | 5/10 | 7/7 | 24 | 35 | 69% |
| @agimon-ai/doompi-edit | 15/18 | 8/10 | 6/7 | 29 | 35 | 83% |
| pi-agent-ide | 10/18 | 6/10 | 7/7 | 23 | 35 | 66% |

## Per-tool process (all models)

| Tool | Version | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- | --- |
| builtin-edit | 0.85.1 | 3.2 | 5586 | $0.0000 | 10 |
| pi-hashline-edit | 0.8.3 | 2.7 | 9296 | $0.0000 | 10 |
| pi-hashline-context-edit | 0.11.0 | 2.3 | 7998 | $0.0000 | 5 |
| pi-hashline-edit-pro | 4.3.5 | 2.6 | 8332 | $0.0000 | 5 |
| pi-hashline-edit-pro-diff0 | 4.3.5 | 2.7 | 8657 | $0.0000 | 10 |
| pi-hashline-readmap | 0.14.0 | 2.6 | 6524 | $0.0000 | 5 |
| @cortexkit/aft-pi | 0.56.2 | 2.4 | 9263 | $0.0000 | 7 |
| @xynogen/pix-edit | 0.2.5 | 3.3 | 6163 | $0.0000 | 10 |
| pi-semantic-edit | 0.4.0 | 2.3 | 4948 | $0.0000 | 7 |
| @agimon-ai/doompi-edit | 0.0.1-alpha.49 | 3.3 | 7920 | $0.0000 | 10 |
| pi-agent-ide | 0.6.2 | 4.7 | 16193 | $0.0000 | 10 |

## Scenario detail

### b9-boundary-changed

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read grep edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ❌ | applied (silent-wrong-line) | `read replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-b9-boundary-changed.json) |

### b8-blind-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-b8-blind-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-b8-blind-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-b8-blind-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-b8-blind-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-b8-blind-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-b8-blind-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-b8-blind-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-b8-blind-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-b8-blind-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace replace` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-b8-blind-edit.json) |

### b6-change-then-revert

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-b6-change-then-revert.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-b6-change-then-revert.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-b6-change-then-revert.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-b6-change-then-revert.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-b6-change-then-revert.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-b6-change-then-revert.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-b6-change-then-revert.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-b6-change-then-revert.json) |

### b7-paged-read-gap

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-b7-paged-read-gap.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-b7-paged-read-gap.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-b7-paged-read-gap.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-b7-paged-read-gap.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-b7-paged-read-gap.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-b7-paged-read-gap.json) |

### b12-noop-with-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-b12-noop-with-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-b12-noop-with-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-b12-noop-with-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-b12-noop-with-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-b12-noop-with-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ read edit✗` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-b12-noop-with-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace replace` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-b12-noop-with-drift.json) |

### b17-reversed-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-b17-reversed-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-b17-reversed-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-b17-reversed-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-b17-reversed-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-b17-reversed-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-b17-reversed-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-b17-reversed-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-b17-reversed-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-b17-reversed-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-b17-reversed-range.json) |

### b13-chained-diff-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-b13-chained-diff-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-b13-chained-diff-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-b13-chained-diff-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-b13-chained-diff-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace replace replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-b13-chained-diff-edit.json) |

### single-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-single-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-single-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-single-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-single-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-single-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-single-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-single-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-single-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-single-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-single-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-single-line.json) |

### b10-duplicate-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace read insert read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ❌ | applied (silent-wrong-line) | `read replace replace replace replace apply read apply insert read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-b10-duplicate-drift.json) |

### delete-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-delete-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-delete-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-delete-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-delete-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-delete-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-delete-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-delete-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-delete-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-delete-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-delete-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read delete read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-delete-line.json) |

### range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ❌ | applied (noop) | `read replace read replace apply apply apply apply read read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-range.json) |

### duplicate-nth

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-duplicate-nth.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-duplicate-nth.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-duplicate-nth.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-duplicate-nth.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-duplicate-nth.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-duplicate-nth.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-duplicate-nth.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-duplicate-nth.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace read write` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-duplicate-nth.json) |

### whitespace-only

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-whitespace-only.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-whitespace-only.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-whitespace-only.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-whitespace-only.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-whitespace-only.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-whitespace-only.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-whitespace-only.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-whitespace-only.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-whitespace-only.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-whitespace-only.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ❌ | applied (noop) | `read replace read replace apply replace read read apply read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-whitespace-only.json) |

### duplicate-import

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (noop) | `read` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ❌ | applied (noop) | `read replace read apply apply replace replace apply apply apply` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-duplicate-import.json) |

### b18-boundary-dup

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-b18-boundary-dup.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-b18-boundary-dup.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-b18-boundary-dup.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-b18-boundary-dup.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-b18-boundary-dup.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-b18-boundary-dup.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-b18-boundary-dup.json) |

### bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-bom.json) |

### crlf

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-crlf.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-crlf.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-crlf.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-crlf.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-crlf.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-crlf.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-crlf.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-crlf.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-crlf.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-crlf.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-crlf.json) |

### unicode

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-unicode.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-unicode.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-unicode.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-unicode.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-unicode.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-unicode.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-unicode.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-unicode.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-unicode.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-unicode.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace read replace replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-unicode.json) |

### noop

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-noop.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-noop.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-noop.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-noop.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-noop.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-noop.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-noop.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ read read read edit✗` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-noop.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-noop.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-noop.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace replace` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-noop.json) |

### insert-after

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-insert-after.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-insert-after.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-insert-after.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-insert-after.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-insert-after.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-insert-after.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read edit✗ read edit read` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-insert-after.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-insert-after.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-insert-after.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read edit read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-insert-after.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read insert read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-insert-after.json) |

### tabs

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (noop) | `read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-tabs.json) |

### stale-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read✗ read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | recovered | `read replace replace read replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-stale-line.json) |

### no-trailing-newline

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-no-trailing-newline.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-no-trailing-newline.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-no-trailing-newline.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-no-trailing-newline.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read✗ read replace read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-no-trailing-newline.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-no-trailing-newline.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-no-trailing-newline.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-no-trailing-newline.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-no-trailing-newline.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace read replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-no-trailing-newline.json) |

### long-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read read read edit read read read read` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read read read read read read read read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ❌ | applied (applied-wrong) | `read read insert read read read replace read undo_last_change undo_last_change✗` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read read read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ❌ | applied (noop) | `read read read read read read read read read read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-long-line.json) |

### anchor-stability

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-anchor-stability.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-anchor-stability.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-anchor-stability.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-anchor-stability.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-anchor-stability.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-anchor-stability.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-anchor-stability.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-anchor-stability.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-anchor-stability.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-anchor-stability.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-anchor-stability.json) |

### external-far

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-external-far.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-external-far.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-external-far.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-external-far.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-external-far.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-external-far.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-external-far.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-external-far.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-external-far.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-external-far.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read replace replace` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-external-far.json) |

### stale-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-stale-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-stale-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-stale-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-stale-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ replace read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-stale-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-stale-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-stale-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-stale-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-stale-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-stale-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | recovered | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-stale-range.json) |

### error-guidance

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ❌ | applied (silent-wrong-line) | `read replace replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-error-guidance.json) |

### undo

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | undo | `read edit edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-undo.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | undo | `read edit read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-undo.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | undo | `read edit edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-undo.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-undo.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | undo | `read replace undo_last_change` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-undo.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-undo.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | undo | `read edit edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-undo.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | undo | `read edit edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-undo.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | undo | `read edit edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-undo.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read edit✗ read edit read edit✗ edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-undo.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | undo | `read replace read replace` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-undo.json) |

### insert-eof

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (noop) | `read✗` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read insert` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-insert-eof.json) |

### delete-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-delete-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-delete-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-delete-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-delete-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-delete-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-delete-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-delete-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read edit read` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-delete-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-delete-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-delete-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | applied | `read delete read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-delete-range.json) |

### crlf-bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-crlf-bom.json) |

### empty-file

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read read read edit✗ edit✗ read edit✗ read` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | applied | `read edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ read read edit✗ read edit✗ edit✗` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ read read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ❌ | applied (applied-wrong) | `read write` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-empty-file.json) |

### insert-race-stale-boundary

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit✗ edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read read read read edit read` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ❌ | applied (silent-wrong-line) | `read insert insert read replace read replace read` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-insert-race-stale-boundary.json) |

### b15-large-range-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | ✅ | recovered | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-b15-large-range-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read read read edit read` | [trace](traces/qwen3.5-9b-q4km/builtin-edit-b15-large-range-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-b15-large-range-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-b15-large-range-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-b15-large-range-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | rejected | `read edit✗ read edit✗ read read read read read read` | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-b15-large-range-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit` | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-b15-large-range-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | ✅ | rejected | `read replace replace read apply apply apply apply read replace` | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-b15-large-range-drift.json) |

## Failed runs — traces for validation

Every failed run is listed with its full transcript link (system prompt, user task, model reasoning, every tool call with arguments, every tool result, and the final file state).

| Model | Contender | Scenario | Outcome | Trace |
| --- | --- | --- | --- | --- |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/builtin-edit-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/builtin-edit-duplicate-nth.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/builtin-edit-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/builtin-edit-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/builtin-edit-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/builtin-edit-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/builtin-edit-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/builtin-edit-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | builtin-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/builtin-edit-b15-large-range-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit | crlf-bom | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | crlf-bom | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-context-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-context-edit-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | tabs | applied (noop) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-diff0 | long-line | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-edit-pro-diff0-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | duplicate-import | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | long-line | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-hashline-readmap-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | duplicate-import | applied (noop) | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | crlf | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-crlf.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | unicode | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-unicode.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | stale-line | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | insert-eof | applied (noop) | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | error-guidance | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/_cortexkit_aft-pi-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | long-line | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/qwen3.5-9b-q4km/_xynogen_pix-edit-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | delete-line | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-delete-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | long-line | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | tabs | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | stale-line | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-semantic-edit-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | single-line | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-single-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | stale-line | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-stale-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | long-line | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-insert-eof.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-b9-boundary-changed.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-b10-duplicate-drift.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | undo | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-undo.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | bom | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | range | applied (noop) | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-range.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | empty-file | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-empty-file.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | whitespace-only | applied (noop) | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-whitespace-only.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | tabs | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-tabs.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | duplicate-import | applied (noop) | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-duplicate-import.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | long-line | applied (noop) | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-long-line.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | crlf-bom | applied (applied-wrong) | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-crlf-bom.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | error-guidance | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-error-guidance.json) |
| Qwen3.5 9B (Q4_K_M, llama.cpp) | pi-agent-ide | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.5-9b-q4km/pi-agent-ide-insert-race-stale-boundary.json) |
