# pi edit-tool benchmark — LLM runs

Generated 2026-09-04T12:45:47.598Z. Real-model runs against ollama-cloud; the model drives each contender's actual tools through a tool-calling loop. Total API cost: $1.2517.

## Models

| Model | Runs | Passed | Pass rate | Avg steps | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | 272 | 199/272 | 73% | 3.0 | 5955 | $0.2500 |
| Nemotron 3 Nano (30B) | 272 | 205/272 | 75% | 5.4 | 19098 | $0.8094 |
| GPT-OSS (20B) | 272 | 190/272 | 70% | 3.4 | 6389 | $0.1923 |

## Results — pass rate by model (rows) × tool (columns)

| Model | builtin-edit | pi-hashline-edit | pi-hashline-context-edit | pi-hashline-edit-pro | pi-hashline-readmap | @cortexkit/aft-pi | @xynogen/pix-edit | pi-semantic-edit | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | 22/34 | 27/34 | 27/34 | 30/34 | 29/34 | 24/34 | 23/34 | 17/34 | 199/272 (73%) |
| Nemotron 3 Nano (30B) | 22/34 | 26/34 | 26/34 | 29/34 | 24/34 | 29/34 | 27/34 | 22/34 | 205/272 (75%) |
| GPT-OSS (20B) | 20/34 | 26/34 | 27/34 | 30/34 | 15/34 | 25/34 | 22/34 | 25/34 | 190/272 (70%) |

## Per-tool totals (all models)

| Tool | Core (15) | Staleness (11) | Served-state (8) | Passed | Total | Pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| builtin-edit | 24/45 | 21/33 | 19/24 | 64 | 102 | 63% |
| pi-hashline-edit | 29/45 | 29/33 | 21/24 | 79 | 102 | 77% |
| pi-hashline-context-edit | 30/45 | 30/33 | 20/24 | 80 | 102 | 78% |
| pi-hashline-edit-pro | 37/45 | 31/33 | 21/24 | 89 | 102 | 87% |
| pi-hashline-readmap | 26/45 | 26/33 | 16/24 | 68 | 102 | 67% |
| @cortexkit/aft-pi | 31/45 | 25/33 | 22/24 | 78 | 102 | 76% |
| @xynogen/pix-edit | 27/45 | 25/33 | 20/24 | 72 | 102 | 71% |
| pi-semantic-edit | 22/45 | 20/33 | 22/24 | 64 | 102 | 63% |

## Per-tool process (all models)

| Tool | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- |
| builtin-edit | 3.4 | 9381 | $0.0016 | 10 |
| pi-hashline-edit | 3.0 | 10847 | $0.0014 | 10 |
| pi-hashline-context-edit | 3.0 | 10178 | $0.0013 | 10 |
| pi-hashline-edit-pro | 3.3 | 13027 | $0.0017 | 10 |
| pi-hashline-readmap | 8.9 | 14343 | $0.0022 | 439 |
| @cortexkit/aft-pi | 2.9 | 7289 | $0.0009 | 10 |
| @xynogen/pix-edit | 3.5 | 9143 | $0.0016 | 10 |
| pi-semantic-edit | 3.3 | 9637 | $0.0015 | 10 |

## Scenario detail

### b6-change-then-revert

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace undo_last_change read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b6-change-then-revert.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b6-change-then-revert.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-b6-change-then-revert.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-b6-change-then-revert.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-b6-change-then-revert.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-b6-change-then-revert.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (noop) | `read✗ read✗ read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b6-change-then-revert.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-b6-change-then-revert.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b6-change-then-revert.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-b6-change-then-revert.json) |

### b7-paged-read-gap

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-b7-paged-read-gap.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b7-paged-read-gap.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b7-paged-read-gap.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b7-paged-read-gap.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-b7-paged-read-gap.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-b7-paged-read-gap.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-b7-paged-read-gap.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | noop | `read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b7-paged-read-gap.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b7-paged-read-gap.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-b7-paged-read-gap.json) |

### b8-blind-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-b8-blind-edit.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b8-blind-edit.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b8-blind-edit.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b8-blind-edit.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b8-blind-edit.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b8-blind-edit.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b8-blind-edit.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | noop | `read edit✗ read edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b8-blind-edit.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-b8-blind-edit.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-b8-blind-edit.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-b8-blind-edit.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-b8-blind-edit.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | noop | `read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b8-blind-edit.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-b8-blind-edit.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b8-blind-edit.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-b8-blind-edit.json) |

### b9-boundary-changed

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/gemma4_31b/builtin-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b9-boundary-changed.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | rejected | `read edit✗ edit✗ read read read read edit✗ read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | recovered | `read edit read read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b9-boundary-changed.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-b9-boundary-changed.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-b9-boundary-changed.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-b9-boundary-changed.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-b9-boundary-changed.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | rejected | `read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b9-boundary-changed.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-b9-boundary-changed.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit read read read read read read` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b9-boundary-changed.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | recovered | `read edit read read read read read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-b9-boundary-changed.json) |

### b10-duplicate-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read edit read` | [trace](traces/gemma4_31b/builtin-edit-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b10-duplicate-drift.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read edit read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read read read read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | recovered | `read read read read edit✗ edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b10-duplicate-drift.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | recovered | `read read edit✗ edit read` | [trace](traces/gpt-oss_20b/builtin-edit-b10-duplicate-drift.json) |
| GPT-OSS (20B) | pi-hashline-edit | ❌ | error (crashed) | `read edit✗ read` | - |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | recovered | `read edit read read` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-b10-duplicate-drift.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | error (crashed) | `read✗ read read edit✗ edit✗` | - |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ❌ | error (crashed) | `read read` | - |
| GPT-OSS (20B) | pi-semantic-edit | ❌ | error (crashed) | `read read read read` | - |

### b12-noop-with-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/builtin-edit-b12-noop-with-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b12-noop-with-drift.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b12-noop-with-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/pi-hashline-readmap-b12-noop-with-drift.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/pi-semantic-edit-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit✗ read read read read read read read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b12-noop-with-drift.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit✗ edit✗` | [trace](traces/gpt-oss_20b/builtin-edit-b12-noop-with-drift.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-b12-noop-with-drift.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-b12-noop-with-drift.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | applied | `read✗ read✗ read✗ read✗ read✗ search✗ read✗ read edit✗ edit✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b12-noop-with-drift.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | noop | `read edit read edit read` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b12-noop-with-drift.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/gpt-oss_20b/pi-semantic-edit-b12-noop-with-drift.json) |

### b13-chained-diff-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit✗ edit✗ edit edit✗ edit✗ edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b13-chained-diff-edit.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-b13-chained-diff-edit.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-b13-chained-diff-edit.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace replace read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read✗ read✗ read edit✗ edit✗ edit✗ edit✗ edit` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b13-chained-diff-edit.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-b13-chained-diff-edit.json) |

### b15-large-range-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/builtin-edit-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b15-large-range-drift.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read read read read read read read read` | [trace](traces/gemma4_31b/pi-semantic-edit-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | rejected | `read edit✗ edit✗ read edit✗` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | recovered | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read read read read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read read read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | rejected | `read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | recovered | `read edit edit✗ read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b15-large-range-drift.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read read edit` | [trace](traces/gpt-oss_20b/builtin-edit-b15-large-range-drift.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | recovered | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-b15-large-range-drift.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | recovered | `read edit read read edit✗` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-b15-large-range-drift.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-b15-large-range-drift.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read✗ read✗ read✗ read✗ read edit✗ edit✗ edit✗ edit read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b15-large-range-drift.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-b15-large-range-drift.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | recovered | `read read edit read` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b15-large-range-drift.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | recovered | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-b15-large-range-drift.json) |

### b16b-undo-stale

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/gemma4_31b/builtin-edit-b16b-undo-stale.json) |
| Gemma 4 (31B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b16b-undo-stale.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b16b-undo-stale.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | undo-refused | `read replace undo_last_change✗ read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b16b-undo-stale.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b16b-undo-stale.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b16b-undo-stale.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b16b-undo-stale.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (applied-wrong) | `read edit read edit read read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read read edit read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read read read edit read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | undo-refused | `read replace undo_last_change✗ read undo_last_change✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | undo | `read edit edit read read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | undo | `read edit edit read read read edit read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit edit read read read read read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b16b-undo-stale.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (applied-wrong) | `read edit edit` | [trace](traces/gpt-oss_20b/builtin-edit-b16b-undo-stale.json) |
| GPT-OSS (20B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit edit✗ read edit read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-b16b-undo-stale.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-b16b-undo-stale.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace undo_last_change✗ read replace replace✗ read replace✗ replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-b16b-undo-stale.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | undo | `read✗ read✗ read✗ read✗ read✗ read✗ …?✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b16b-undo-stale.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-b16b-undo-stale.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b16b-undo-stale.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | undo | `read edit edit read read read edit read` | [trace](traces/gpt-oss_20b/pi-semantic-edit-b16b-undo-stale.json) |

### b17-reversed-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-b17-reversed-range.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b17-reversed-range.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b17-reversed-range.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b17-reversed-range.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b17-reversed-range.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b17-reversed-range.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b17-reversed-range.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b17-reversed-range.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/builtin-edit-b17-reversed-range.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-b17-reversed-range.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-b17-reversed-range.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-b17-reversed-range.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | noop | `read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b17-reversed-range.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-b17-reversed-range.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b17-reversed-range.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/pi-semantic-edit-b17-reversed-range.json) |

### b18-boundary-dup

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (applied-wrong) | `read edit read read read read read read read read` | [trace](traces/gemma4_31b/builtin-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit read edit✗ read edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/gemma4_31b/pi-hashline-readmap-b18-boundary-dup.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit read edit read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b18-boundary-dup.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read read edit` | [trace](traces/gpt-oss_20b/builtin-edit-b18-boundary-dup.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit edit✗ read edit edit edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-b18-boundary-dup.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-b18-boundary-dup.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace replace read insert undo_last_change read replace read replace✗` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-b18-boundary-dup.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (noop) | `read✗ read✗ read✗ read read✗ read✗ read edit✗ read✗ edit✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b18-boundary-dup.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-b18-boundary-dup.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b18-boundary-dup.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-b18-boundary-dup.json) |

### single-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-single-line.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-single-line.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-single-line.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-single-line.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-single-line.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-single-line.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-single-line.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-single-line.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-single-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-single-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-single-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-single-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-single-line.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-single-line.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-single-line.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-single-line.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/builtin-edit-single-line.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-single-line.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-single-line.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-single-line.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | error (crashed) | `read✗ read✗ read✗` | - |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-single-line.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-single-line.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-single-line.json) |

### range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-range.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-range.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-range.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-range.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-range.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-range.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-range.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-range.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (noop) | `read read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-range.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-range.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-range.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-range.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/builtin-edit-range.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-range.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-range.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-range.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (noop) | `read✗ read✗ read✗ read✗ intended✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-range.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-range.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-range.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-range.json) |

### delete-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-delete-line.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-delete-line.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-delete-line.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-delete-line.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/pi-hashline-readmap-delete-line.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-delete-line.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-delete-line.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-delete-line.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-delete-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-delete-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-delete-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-delete-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-delete-line.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-delete-line.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-delete-line.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-delete-line.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/builtin-edit-delete-line.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-delete-line.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-delete-line.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-delete-line.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | applied | `read✗ read edit✗ read✗ read edit read` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-delete-line.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-delete-line.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read read edit read read` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-delete-line.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/pi-semantic-edit-delete-line.json) |

### duplicate-nth

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/gemma4_31b/builtin-edit-duplicate-nth.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-duplicate-nth.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-duplicate-nth.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-duplicate-nth.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-duplicate-nth.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-duplicate-nth.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit✗ edit read edit read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-duplicate-nth.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit read edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read read edit✗ read edit read read edit✗` | [trace](traces/nemotron-3-nano_30b/builtin-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ❌ | applied (noop) | `read read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-duplicate-nth.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read read edit` | [trace](traces/gpt-oss_20b/builtin-edit-duplicate-nth.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-duplicate-nth.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-duplicate-nth.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-duplicate-nth.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (noop) | `read✗ read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-duplicate-nth.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-duplicate-nth.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ❌ | error (crashed) | `read` | - |
| GPT-OSS (20B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/gpt-oss_20b/pi-semantic-edit-duplicate-nth.json) |

### duplicate-import

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/gemma4_31b/builtin-edit-duplicate-import.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-duplicate-import.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-duplicate-import.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-duplicate-import.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-duplicate-import.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-duplicate-import.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-duplicate-import.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-duplicate-import.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-duplicate-import.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-duplicate-import.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-duplicate-import.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-duplicate-import.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-duplicate-import.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-duplicate-import.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (noop) | `read✗ read✗ read✗ read read✗ edit✗ edit✗ edit✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-duplicate-import.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-duplicate-import.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-duplicate-import.json) |
| GPT-OSS (20B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-duplicate-import.json) |

### whitespace-only

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-whitespace-only.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-whitespace-only.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-whitespace-only.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-whitespace-only.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-whitespace-only.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-whitespace-only.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-whitespace-only.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-whitespace-only.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-whitespace-only.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-whitespace-only.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-whitespace-only.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-whitespace-only.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-whitespace-only.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-whitespace-only.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit✗ read✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-whitespace-only.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ❌ | applied (noop) | `read✗ read✗` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-whitespace-only.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-whitespace-only.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-whitespace-only.json) |

### crlf

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-crlf.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-crlf.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-crlf.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-crlf.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-crlf.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-crlf.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-crlf.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit✗ edit read edit read read read read read` | [trace](traces/gemma4_31b/pi-semantic-edit-crlf.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-crlf.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-crlf.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-crlf.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-crlf.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-crlf.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-crlf.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-crlf.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-crlf.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/builtin-edit-crlf.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-crlf.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-crlf.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-crlf.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-crlf.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-crlf.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-crlf.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-crlf.json) |

### bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-bom.json) |
| Gemma 4 (31B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-bom.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-bom.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-bom.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-bom.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-bom.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-bom.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-bom.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-bom.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-bom.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-bom.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-bom.json) |
| GPT-OSS (20B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-bom.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-bom.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-bom.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | applied | `read✗ read✗ read edit✗ edit✗ edit` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-bom.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-bom.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-bom.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-bom.json) |

### empty-file

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read edit✗` | [trace](traces/gemma4_31b/builtin-edit-empty-file.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-empty-file.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-empty-file.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-empty-file.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-empty-file.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-empty-file.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ read read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-empty-file.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/gemma4_31b/pi-semantic-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read read read read read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (noop) | `` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-empty-file.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-empty-file.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ read read edit✗ read read read read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit✗ edit✗ edit✗ edit✗ read edit✗ read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-empty-file.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read✗ read edit✗` | [trace](traces/gpt-oss_20b/builtin-edit-empty-file.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-empty-file.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-empty-file.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-empty-file.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (noop) | `read✗ read✗ read✗ read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-empty-file.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read read read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-empty-file.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-empty-file.json) |
| GPT-OSS (20B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read read read edit✗ edit✗ read edit read` | [trace](traces/gpt-oss_20b/pi-semantic-edit-empty-file.json) |

### long-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read read read read read read read read` | [trace](traces/gemma4_31b/builtin-edit-long-line.json) |
| Gemma 4 (31B) | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read read read read read read read read` | [trace](traces/gemma4_31b/pi-hashline-edit-long-line.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read read read read read read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-long-line.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-long-line.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/pi-hashline-readmap-long-line.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-long-line.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (noop) | `read read read read read read read read read read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-long-line.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (noop) | `read read read read read read read read read read` | [trace](traces/gemma4_31b/pi-semantic-edit-long-line.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read read read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-long-line.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-long-line.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ❌ | applied (noop) | `read read read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (noop) | `read read read read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-long-line.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read read` | [trace](traces/gpt-oss_20b/builtin-edit-long-line.json) |
| GPT-OSS (20B) | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-long-line.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-long-line.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-long-line.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (noop) | `read✗ read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-long-line.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-long-line.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ❌ | applied (noop) | `read read read read read read✗ read read` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-long-line.json) |
| GPT-OSS (20B) | pi-semantic-edit | ❌ | error (crashed) | `read read` | - |

### noop

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/builtin-edit-noop.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-noop.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-noop.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-noop.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/pi-hashline-readmap-noop.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-noop.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/_xynogen_pix-edit-noop.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/pi-semantic-edit-noop.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/nemotron-3-nano_30b/builtin-edit-noop.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-noop.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-noop.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-noop.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-noop.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-noop.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-noop.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-noop.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/gpt-oss_20b/builtin-edit-noop.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-noop.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-noop.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-noop.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | applied | `read✗ read✗ read edit✗ edit✗ edit✗ edit✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-noop.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-noop.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-noop.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗` | [trace](traces/gpt-oss_20b/pi-semantic-edit-noop.json) |

### insert-after

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-insert-after.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-insert-after.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-insert-after.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-insert-after.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-insert-after.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-insert-after.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-insert-after.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-insert-after.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-insert-after.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-insert-after.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-insert-after.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-insert-after.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-insert-after.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-insert-after.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-insert-after.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-insert-after.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/builtin-edit-insert-after.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-insert-after.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-insert-after.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-insert-after.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (noop) | `read✗ read✗ read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-insert-after.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-insert-after.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-insert-after.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-insert-after.json) |

### unicode

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/builtin-edit-unicode.json) |
| Gemma 4 (31B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-unicode.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-unicode.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-unicode.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-unicode.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit edit edit read edit read edit edit edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-unicode.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-unicode.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-unicode.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (noop) | `read edit✗ read read read read read read read read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read edit read edit edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-unicode.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-unicode.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read edit read read read read edit read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-unicode.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-unicode.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-unicode.json) |
| GPT-OSS (20B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-unicode.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read✗ run✗ read edit read` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-unicode.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert undo_last_change insert` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-unicode.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (noop) | `read✗ read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-unicode.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read read read✗ edit read` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-unicode.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read✗ edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-unicode.json) |
| GPT-OSS (20B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-unicode.json) |

### tabs

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/builtin-edit-tabs.json) |
| Gemma 4 (31B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-tabs.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-tabs.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-tabs.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-tabs.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (noop) | `read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-tabs.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (noop) | `read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-tabs.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (noop) | `read` | [trace](traces/gemma4_31b/pi-semantic-edit-tabs.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (noop) | `read edit✗ read read read edit✗ read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (noop) | `read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read edit read read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace undo_last_change read insert replace✗ read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-tabs.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-tabs.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ read read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read read read edit read read read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-tabs.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gpt-oss_20b/builtin-edit-tabs.json) |
| GPT-OSS (20B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read read read edit read read edit read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-tabs.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-tabs.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-tabs.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (noop) | `read✗ read✗ read✗ read✗ read✗ read✗ We✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-tabs.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ❌ | error (crashed) | `read✗ read read read✗ read read✗ read✗ read read` | - |
| GPT-OSS (20B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-tabs.json) |
| GPT-OSS (20B) | pi-semantic-edit | ❌ | applied (noop) | `` | [trace](traces/gpt-oss_20b/pi-semantic-edit-tabs.json) |

### no-trailing-newline

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-no-trailing-newline.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-no-trailing-newline.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read edit read edit edit edit edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read edit edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ❌ | applied (noop) | `` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read edit read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-no-trailing-newline.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gpt-oss_20b/builtin-edit-no-trailing-newline.json) |
| GPT-OSS (20B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-no-trailing-newline.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read✗ read✗ read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-no-trailing-newline.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ❌ | error (crashed) | `read read replace read undo_last_change read replace` | - |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (noop) | `read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-no-trailing-newline.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-no-trailing-newline.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read✗ edit read` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-no-trailing-newline.json) |
| GPT-OSS (20B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-no-trailing-newline.json) |

### stale-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/builtin-edit-stale-line.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-stale-line.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-stale-line.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-stale-line.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-stale-line.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-stale-line.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-stale-line.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-stale-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit edit✗ read read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-stale-line.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read read read read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-stale-line.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-stale-line.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-stale-line.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit✗ read edit read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-stale-line.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-stale-line.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-stale-line.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | rejected | `read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ functions:Need✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-stale-line.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-stale-line.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-stale-line.json) |
| GPT-OSS (20B) | pi-semantic-edit | ❌ | error (crashed) | `read edit read read read read` | - |

### target-deleted

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/gemma4_31b/builtin-edit-target-deleted.json) |
| Gemma 4 (31B) | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-target-deleted.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-target-deleted.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read replace read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-target-deleted.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-target-deleted.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-target-deleted.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-target-deleted.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-target-deleted.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-target-deleted.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-target-deleted.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-target-deleted.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read read read insert` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-target-deleted.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | rejected | `read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-target-deleted.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read read read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-target-deleted.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read read read edit read read read read read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-target-deleted.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-target-deleted.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ read edit` | [trace](traces/gpt-oss_20b/builtin-edit-target-deleted.json) |
| GPT-OSS (20B) | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-target-deleted.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-target-deleted.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | rejected | `read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-target-deleted.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | rejected | `read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-target-deleted.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit read edit read edit read` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-target-deleted.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-target-deleted.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | rejected | `read edit✗ read` | [trace](traces/gpt-oss_20b/pi-semantic-edit-target-deleted.json) |

### stale-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/gemma4_31b/builtin-edit-stale-range.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-stale-range.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-stale-range.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-stale-range.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-stale-range.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-stale-range.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-stale-range.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-stale-range.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-stale-range.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-stale-range.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | rejected | `read edit✗ edit✗ read read read read read read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | recovered | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-stale-range.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read read edit read` | [trace](traces/gpt-oss_20b/builtin-edit-stale-range.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-stale-range.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ read✗ edit read` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-stale-range.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-stale-range.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | rejected | `read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-stale-range.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | recovered | `read edit edit read` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-stale-range.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-stale-range.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/gpt-oss_20b/pi-semantic-edit-stale-range.json) |

### shift-above

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-shift-above.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-shift-above.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-shift-above.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-shift-above.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-shift-above.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-shift-above.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-shift-above.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-shift-above.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-shift-above.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-shift-above.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-shift-above.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-shift-above.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-shift-above.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read read read edit✗ edit edit✗ edit edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-shift-above.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-shift-above.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read read edit edit✗ read read read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-shift-above.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-shift-above.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-shift-above.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit✗ read edit read read read read` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-shift-above.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-shift-above.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | rejected | `read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-shift-above.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit edit edit read edit read` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-shift-above.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-shift-above.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-shift-above.json) |

### external-far

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-external-far.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-external-far.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-external-far.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-external-far.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-external-far.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-external-far.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-external-far.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-external-far.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-external-far.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-external-far.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-external-far.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-external-far.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-external-far.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-external-far.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-external-far.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-external-far.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-external-far.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-external-far.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-external-far.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-external-far.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read✗ read✗ read✗ read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-external-far.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-external-far.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ❌ | error (crashed) | `read` | - |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-external-far.json) |

### anchor-stability

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-anchor-stability.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-anchor-stability.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-anchor-stability.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-anchor-stability.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-anchor-stability.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-anchor-stability.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-anchor-stability.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-anchor-stability.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-anchor-stability.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-anchor-stability.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-anchor-stability.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-anchor-stability.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-anchor-stability.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-anchor-stability.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-anchor-stability.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-anchor-stability.json) |
| GPT-OSS (20B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-anchor-stability.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-anchor-stability.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-anchor-stability.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-anchor-stability.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | applied (noop) | `read✗ read✗ read✗ read` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-anchor-stability.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-anchor-stability.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-anchor-stability.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-anchor-stability.json) |

### undo

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/gemma4_31b/builtin-edit-undo.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | undo | `read edit edit` | [trace](traces/gemma4_31b/pi-hashline-edit-undo.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | undo | `read edit edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-undo.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-undo.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | undo | `read edit edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-undo.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | undo | `read edit edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-undo.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-undo.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | undo | `read edit read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-undo.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-undo.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | undo | `read edit read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-undo.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | undo | `read edit read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-undo.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-undo.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | undo | `read edit edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-undo.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | undo | `read edit edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-undo.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | undo | `read edit read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-undo.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | undo | `read edit read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-undo.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | error (crashed) | `read edit read read edit` | - |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | undo | `read edit edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-undo.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | undo | `read edit edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-undo.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-undo.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ✅ | undo | `read✗ read✗ read✗ read✗ read✗ read✗` | [trace](traces/gpt-oss_20b/pi-hashline-readmap-undo.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | undo | `read` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-undo.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | undo | `read edit edit✗ read edit` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-undo.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | undo | `read edit edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-undo.json) |

### error-guidance

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/builtin-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-error-guidance.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-error-guidance.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-error-guidance.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read replace read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-error-guidance.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read read read edit read read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-error-guidance.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | recovered | `read edit read read read read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | recovered | `read edit read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-error-guidance.json) |
| GPT-OSS (20B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gpt-oss_20b/builtin-edit-error-guidance.json) |
| GPT-OSS (20B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gpt-oss_20b/pi-hashline-edit-error-guidance.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-error-guidance.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-error-guidance.json) |
| GPT-OSS (20B) | pi-hashline-readmap | ❌ | error (crashed) | `read✗ read✗ read✗ read✗ justref??✗ read✗ read✗ read✗ read✗` | - |
| GPT-OSS (20B) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-error-guidance.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read✗ edit✗ read` | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-error-guidance.json) |
| GPT-OSS (20B) | pi-semantic-edit | ✅ | recovered | `read edit read read edit` | [trace](traces/gpt-oss_20b/pi-semantic-edit-error-guidance.json) |

## Failed runs — traces for validation

Every failed run is listed with its full transcript link (system prompt, user task, model reasoning, every tool call with arguments, every tool result, and the final file state).

| Model | Contender | Scenario | Outcome | Trace |
| --- | --- | --- | --- | --- |
| Gemma 4 (31B) | builtin-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma4_31b/builtin-edit-b16b-undo-stale.json) |
| Gemma 4 (31B) | builtin-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma4_31b/builtin-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-duplicate-nth.json) |
| Gemma 4 (31B) | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-duplicate-import.json) |
| Gemma 4 (31B) | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-empty-file.json) |
| Gemma 4 (31B) | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-long-line.json) |
| Gemma 4 (31B) | builtin-edit | unicode | applied (applied-wrong) | [trace](traces/gemma4_31b/builtin-edit-unicode.json) |
| Gemma 4 (31B) | builtin-edit | tabs | applied (applied-wrong) | [trace](traces/gemma4_31b/builtin-edit-tabs.json) |
| Gemma 4 (31B) | builtin-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/gemma4_31b/builtin-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | builtin-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-target-deleted.json) |
| Gemma 4 (31B) | builtin-edit | stale-range | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-stale-range.json) |
| Gemma 4 (31B) | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-hashline-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-edit-b16b-undo-stale.json) |
| Gemma 4 (31B) | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-edit-bom.json) |
| Gemma 4 (31B) | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-hashline-edit-long-line.json) |
| Gemma 4 (31B) | pi-hashline-edit | unicode | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-edit-unicode.json) |
| Gemma 4 (31B) | pi-hashline-edit | tabs | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-edit-tabs.json) |
| Gemma 4 (31B) | pi-hashline-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-hashline-edit-target-deleted.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-context-edit-b16b-undo-stale.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-context-edit-bom.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-hashline-context-edit-long-line.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | unicode | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-context-edit-unicode.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | tabs | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-context-edit-tabs.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-context-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-hashline-context-edit-target-deleted.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | unicode | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-edit-pro-unicode.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | no-trailing-newline | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-edit-pro-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-hashline-edit-pro-target-deleted.json) |
| Gemma 4 (31B) | pi-hashline-readmap | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-readmap-b16b-undo-stale.json) |
| Gemma 4 (31B) | pi-hashline-readmap | unicode | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-readmap-unicode.json) |
| Gemma 4 (31B) | pi-hashline-readmap | tabs | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-readmap-tabs.json) |
| Gemma 4 (31B) | pi-hashline-readmap | no-trailing-newline | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-readmap-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-readmap | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-hashline-readmap-target-deleted.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b16b-undo-stale.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | crlf | applied (applied-wrong) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-crlf.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-empty-file.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | unicode | applied (applied-wrong) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-unicode.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | tabs | applied (noop) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-tabs.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | no-trailing-newline | applied (applied-wrong) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-no-trailing-newline.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | stale-line | applied (silent-wrong-line) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-stale-line.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-target-deleted.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-error-guidance.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma4_31b/_xynogen_pix-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma4_31b/_xynogen_pix-edit-b16b-undo-stale.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma4_31b/_xynogen_pix-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | duplicate-nth | applied (applied-wrong) | [trace](traces/gemma4_31b/_xynogen_pix-edit-duplicate-nth.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/gemma4_31b/_xynogen_pix-edit-empty-file.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | long-line | applied (noop) | [trace](traces/gemma4_31b/_xynogen_pix-edit-long-line.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | unicode | applied (applied-wrong) | [trace](traces/gemma4_31b/_xynogen_pix-edit-unicode.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | tabs | applied (noop) | [trace](traces/gemma4_31b/_xynogen_pix-edit-tabs.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/gemma4_31b/_xynogen_pix-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma4_31b/_xynogen_pix-edit-target-deleted.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | stale-range | applied (silent-wrong-line) | [trace](traces/gemma4_31b/_xynogen_pix-edit-stale-range.json) |
| Gemma 4 (31B) | pi-semantic-edit | b6-change-then-revert | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-semantic-edit-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-semantic-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-semantic-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-semantic-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-semantic-edit-b16b-undo-stale.json) |
| Gemma 4 (31B) | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-duplicate-nth.json) |
| Gemma 4 (31B) | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-duplicate-import.json) |
| Gemma 4 (31B) | pi-semantic-edit | crlf | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-semantic-edit-crlf.json) |
| Gemma 4 (31B) | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-empty-file.json) |
| Gemma 4 (31B) | pi-semantic-edit | long-line | applied (noop) | [trace](traces/gemma4_31b/pi-semantic-edit-long-line.json) |
| Gemma 4 (31B) | pi-semantic-edit | unicode | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-semantic-edit-unicode.json) |
| Gemma 4 (31B) | pi-semantic-edit | tabs | applied (noop) | [trace](traces/gemma4_31b/pi-semantic-edit-tabs.json) |
| Gemma 4 (31B) | pi-semantic-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-semantic-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-semantic-edit | stale-line | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-stale-line.json) |
| Gemma 4 (31B) | pi-semantic-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-target-deleted.json) |
| Gemma 4 (31B) | pi-semantic-edit | stale-range | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-stale-range.json) |
| Gemma 4 (31B) | pi-semantic-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | builtin-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/builtin-edit-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-long-line.json) |
| Nemotron 3 Nano (30B) | builtin-edit | unicode | applied (noop) | [trace](traces/nemotron-3-nano_30b/builtin-edit-unicode.json) |
| Nemotron 3 Nano (30B) | builtin-edit | tabs | applied (noop) | [trace](traces/nemotron-3-nano_30b/builtin-edit-tabs.json) |
| Nemotron 3 Nano (30B) | builtin-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/builtin-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | builtin-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-target-deleted.json) |
| Nemotron 3 Nano (30B) | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | empty-file | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | unicode | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | tabs | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-target-deleted.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | b7-paged-read-gap | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | unicode | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | tabs | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-target-deleted.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | unicode | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | tabs | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | no-trailing-newline | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | target-deleted | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-target-deleted.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | b6-change-then-revert | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | b13-chained-diff-edit | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | b16b-undo-stale | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | b18-boundary-dup | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | range | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | duplicate-nth | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | unicode | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | tabs | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | no-trailing-newline | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | anchor-stability | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-anchor-stability.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | unicode | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-unicode.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | tabs | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-tabs.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | no-trailing-newline | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | target-deleted | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-target-deleted.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | shift-above | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-shift-above.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | duplicate-nth | applied (noop) | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | long-line | applied (noop) | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-long-line.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | unicode | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-unicode.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | tabs | applied (noop) | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-tabs.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | no-trailing-newline | applied (noop) | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-target-deleted.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b16b-undo-stale.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | whitespace-only | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | long-line | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | unicode | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-unicode.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | tabs | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-target-deleted.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | shift-above | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-shift-above.json) |
| GPT-OSS (20B) | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/builtin-edit-b9-boundary-changed.json) |
| GPT-OSS (20B) | builtin-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/builtin-edit-b15-large-range-drift.json) |
| GPT-OSS (20B) | builtin-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gpt-oss_20b/builtin-edit-b16b-undo-stale.json) |
| GPT-OSS (20B) | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/builtin-edit-duplicate-nth.json) |
| GPT-OSS (20B) | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/builtin-edit-duplicate-import.json) |
| GPT-OSS (20B) | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/builtin-edit-empty-file.json) |
| GPT-OSS (20B) | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/builtin-edit-long-line.json) |
| GPT-OSS (20B) | builtin-edit | unicode | applied (applied-wrong) | [trace](traces/gpt-oss_20b/builtin-edit-unicode.json) |
| GPT-OSS (20B) | builtin-edit | tabs | applied (applied-wrong) | [trace](traces/gpt-oss_20b/builtin-edit-tabs.json) |
| GPT-OSS (20B) | builtin-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/gpt-oss_20b/builtin-edit-no-trailing-newline.json) |
| GPT-OSS (20B) | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/builtin-edit-stale-line.json) |
| GPT-OSS (20B) | builtin-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/builtin-edit-target-deleted.json) |
| GPT-OSS (20B) | builtin-edit | undo | error (crashed) | - |
| GPT-OSS (20B) | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/builtin-edit-error-guidance.json) |
| GPT-OSS (20B) | pi-hashline-edit | b10-duplicate-drift | error (crashed) | - |
| GPT-OSS (20B) | pi-hashline-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-edit-b16b-undo-stale.json) |
| GPT-OSS (20B) | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-edit-bom.json) |
| GPT-OSS (20B) | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/pi-hashline-edit-long-line.json) |
| GPT-OSS (20B) | pi-hashline-edit | unicode | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-edit-unicode.json) |
| GPT-OSS (20B) | pi-hashline-edit | tabs | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-edit-tabs.json) |
| GPT-OSS (20B) | pi-hashline-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-edit-no-trailing-newline.json) |
| GPT-OSS (20B) | pi-hashline-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/pi-hashline-edit-target-deleted.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-b16b-undo-stale.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-bom.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-long-line.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | unicode | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-unicode.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | tabs | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-tabs.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-no-trailing-newline.json) |
| GPT-OSS (20B) | pi-hashline-context-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/pi-hashline-context-edit-target-deleted.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-b16b-undo-stale.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | unicode | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-unicode.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | tabs | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-tabs.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | no-trailing-newline | error (crashed) | - |
| GPT-OSS (20B) | pi-hashline-readmap | b6-change-then-revert | applied (noop) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b6-change-then-revert.json) |
| GPT-OSS (20B) | pi-hashline-readmap | b10-duplicate-drift | error (crashed) | - |
| GPT-OSS (20B) | pi-hashline-readmap | b13-chained-diff-edit | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b13-chained-diff-edit.json) |
| GPT-OSS (20B) | pi-hashline-readmap | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b15-large-range-drift.json) |
| GPT-OSS (20B) | pi-hashline-readmap | b18-boundary-dup | applied (noop) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-b18-boundary-dup.json) |
| GPT-OSS (20B) | pi-hashline-readmap | single-line | error (crashed) | - |
| GPT-OSS (20B) | pi-hashline-readmap | range | applied (noop) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-range.json) |
| GPT-OSS (20B) | pi-hashline-readmap | duplicate-nth | applied (noop) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-duplicate-nth.json) |
| GPT-OSS (20B) | pi-hashline-readmap | duplicate-import | applied (noop) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-duplicate-import.json) |
| GPT-OSS (20B) | pi-hashline-readmap | whitespace-only | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-whitespace-only.json) |
| GPT-OSS (20B) | pi-hashline-readmap | empty-file | applied (noop) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-empty-file.json) |
| GPT-OSS (20B) | pi-hashline-readmap | long-line | applied (noop) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-long-line.json) |
| GPT-OSS (20B) | pi-hashline-readmap | insert-after | applied (noop) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-insert-after.json) |
| GPT-OSS (20B) | pi-hashline-readmap | unicode | applied (noop) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-unicode.json) |
| GPT-OSS (20B) | pi-hashline-readmap | tabs | applied (noop) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-tabs.json) |
| GPT-OSS (20B) | pi-hashline-readmap | no-trailing-newline | applied (noop) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-no-trailing-newline.json) |
| GPT-OSS (20B) | pi-hashline-readmap | external-far | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-external-far.json) |
| GPT-OSS (20B) | pi-hashline-readmap | anchor-stability | applied (noop) | [trace](traces/gpt-oss_20b/pi-hashline-readmap-anchor-stability.json) |
| GPT-OSS (20B) | pi-hashline-readmap | error-guidance | error (crashed) | - |
| GPT-OSS (20B) | @cortexkit/aft-pi | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-b16b-undo-stale.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | whitespace-only | applied (noop) | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-whitespace-only.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | crlf | applied (applied-wrong) | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-crlf.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-empty-file.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | unicode | applied (applied-wrong) | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-unicode.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | tabs | error (crashed) | - |
| GPT-OSS (20B) | @cortexkit/aft-pi | no-trailing-newline | applied (applied-wrong) | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-no-trailing-newline.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | target-deleted | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-target-deleted.json) |
| GPT-OSS (20B) | @cortexkit/aft-pi | shift-above | applied (applied-wrong) | [trace](traces/gpt-oss_20b/_cortexkit_aft-pi-shift-above.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b9-boundary-changed.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | b10-duplicate-drift | error (crashed) | - |
| GPT-OSS (20B) | @xynogen/pix-edit | b13-chained-diff-edit | applied (applied-wrong) | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-b16b-undo-stale.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | duplicate-nth | error (crashed) | - |
| GPT-OSS (20B) | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-empty-file.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | long-line | applied (noop) | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-long-line.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | unicode | applied (applied-wrong) | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-unicode.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | tabs | applied (applied-wrong) | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-tabs.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-no-trailing-newline.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/_xynogen_pix-edit-target-deleted.json) |
| GPT-OSS (20B) | @xynogen/pix-edit | external-far | error (crashed) | - |
| GPT-OSS (20B) | pi-semantic-edit | b10-duplicate-drift | error (crashed) | - |
| GPT-OSS (20B) | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/pi-semantic-edit-duplicate-nth.json) |
| GPT-OSS (20B) | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/pi-semantic-edit-duplicate-import.json) |
| GPT-OSS (20B) | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/gpt-oss_20b/pi-semantic-edit-empty-file.json) |
| GPT-OSS (20B) | pi-semantic-edit | long-line | error (crashed) | - |
| GPT-OSS (20B) | pi-semantic-edit | unicode | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-semantic-edit-unicode.json) |
| GPT-OSS (20B) | pi-semantic-edit | tabs | applied (noop) | [trace](traces/gpt-oss_20b/pi-semantic-edit-tabs.json) |
| GPT-OSS (20B) | pi-semantic-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/gpt-oss_20b/pi-semantic-edit-no-trailing-newline.json) |
| GPT-OSS (20B) | pi-semantic-edit | stale-line | error (crashed) | - |
