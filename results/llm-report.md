# pi edit-tool benchmark — LLM runs

Generated 2026-09-04T13:33:43.223Z. Real-model runs against hyper + opencode-go + ollama-cloud; the model drives each contender's actual tools through a tool-calling loop. Total API cost: $3.3403.

## Models

| Model | Runs | Passed | Pass rate | Avg steps | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- | --- | --- |
| Gemma 4 26B A4B | 272 | 196/272 | 72% | 4.0 | 7629 | $0.2346 |
| GLM 5.3 Flash | 272 | 216/272 | 79% | 3.0 | 9363 | $0.2137 |
| Qwen3.8-Flash | 272 | 205/272 | 75% | 3.6 | 12886 | $0.6061 |
| Muse Spark 1.2 Contributor | 272 | 214/272 | 79% | 3.9 | 15556 | $0.4973 |
| Muse Spark 1.3 Contributor | 272 | 214/272 | 79% | 3.2 | 17837 | $0.5369 |
| Gemma 4 (31B) | 272 | 199/272 | 73% | 3.0 | 5955 | $0.2500 |
| Nemotron 3 Nano (30B) | 272 | 205/272 | 75% | 5.4 | 19098 | $0.8094 |
| GPT-OSS (20B) | 272 | 190/272 | 70% | 3.4 | 6389 | $0.1923 |

## Results — pass rate by model (rows) × tool (columns)

| Model | builtin-edit | pi-hashline-edit | pi-hashline-context-edit | pi-hashline-edit-pro | pi-hashline-readmap | @cortexkit/aft-pi | @xynogen/pix-edit | pi-semantic-edit | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemma 4 26B A4B | 22/34 | 26/34 | 27/34 | 28/34 | 26/34 | 25/34 | 22/34 | 20/34 | 196/272 (72%) |
| GLM 5.3 Flash | 22/34 | 27/34 | 27/34 | 30/34 | 29/34 | 27/34 | 28/34 | 26/34 | 216/272 (79%) |
| Qwen3.8-Flash | 22/34 | 27/34 | 27/34 | 29/34 | 27/34 | 28/34 | 21/34 | 24/34 | 205/272 (75%) |
| Muse Spark 1.2 Contributor | 24/34 | 28/34 | 28/34 | 29/34 | 29/34 | 25/34 | 26/34 | 25/34 | 214/272 (79%) |
| Muse Spark 1.3 Contributor | 23/34 | 28/34 | 28/34 | 29/34 | 29/34 | 27/34 | 27/34 | 23/34 | 214/272 (79%) |
| Gemma 4 (31B) | 22/34 | 27/34 | 27/34 | 30/34 | 29/34 | 24/34 | 23/34 | 17/34 | 199/272 (73%) |
| Nemotron 3 Nano (30B) | 22/34 | 26/34 | 26/34 | 29/34 | 24/34 | 29/34 | 27/34 | 22/34 | 205/272 (75%) |
| GPT-OSS (20B) | 20/34 | 26/34 | 27/34 | 30/34 | 15/34 | 25/34 | 22/34 | 25/34 | 190/272 (70%) |

## Per-tool totals (all models)

| Tool | Core (15) | Staleness (11) | Served-state (8) | Passed | Total | Pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| builtin-edit | 66/120 | 59/88 | 52/64 | 177 | 272 | 65% |
| pi-hashline-edit | 81/120 | 79/88 | 55/64 | 215 | 272 | 79% |
| pi-hashline-context-edit | 82/120 | 80/88 | 55/64 | 217 | 272 | 80% |
| pi-hashline-edit-pro | 97/120 | 81/88 | 56/64 | 234 | 272 | 86% |
| pi-hashline-readmap | 88/120 | 72/88 | 48/64 | 208 | 272 | 76% |
| @cortexkit/aft-pi | 84/120 | 69/88 | 57/64 | 210 | 272 | 77% |
| @xynogen/pix-edit | 72/120 | 71/88 | 53/64 | 196 | 272 | 72% |
| pi-semantic-edit | 64/120 | 61/88 | 57/64 | 182 | 272 | 67% |

## Per-tool process (all models)

| Tool | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- |
| builtin-edit | 3.7 | 8656 | $0.0014 | 12 |
| pi-hashline-edit | 3.3 | 11766 | $0.0014 | 10 |
| pi-hashline-context-edit | 3.0 | 9919 | $0.0012 | 10 |
| pi-hashline-edit-pro | 3.5 | 11773 | $0.0015 | 12 |
| pi-hashline-readmap | 5.5 | 11097 | $0.0015 | 439 |
| @cortexkit/aft-pi | 3.2 | 7809 | $0.0010 | 10 |
| @xynogen/pix-edit | 3.7 | 9714 | $0.0015 | 13 |
| pi-semantic-edit | 3.4 | 23978 | $0.0028 | 10 |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | error (crashed) | `` | - |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b6-change-then-revert.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b6-change-then-revert.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-b6-change-then-revert.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-b6-change-then-revert.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b6-change-then-revert.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-b6-change-then-revert.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b6-change-then-revert.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b6-change-then-revert.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | error (crashed) | `read edit✗` | - |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b7-paged-read-gap.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b7-paged-read-gap.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-b7-paged-read-gap.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b7-paged-read-gap.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b7-paged-read-gap.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b7-paged-read-gap.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b7-paged-read-gap.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b7-paged-read-gap.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b7-paged-read-gap.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b8-blind-edit.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | error (crashed) | `` | - |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b8-blind-edit.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b8-blind-edit.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b8-blind-edit.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-b8-blind-edit.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-b8-blind-edit.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-b8-blind-edit.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b8-blind-edit.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b8-blind-edit.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-b8-blind-edit.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b8-blind-edit.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b8-blind-edit.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-b8-blind-edit.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b8-blind-edit.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b8-blind-edit.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-b8-blind-edit.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b8-blind-edit.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b8-blind-edit.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b8-blind-edit.json) |

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
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read read read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b9-boundary-changed.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b9-boundary-changed.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-b9-boundary-changed.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-b9-boundary-changed.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b9-boundary-changed.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-b9-boundary-changed.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b9-boundary-changed.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Gemma 4 26B A4B | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read read read read read read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b9-boundary-changed.json) |

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
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b10-duplicate-drift.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-b10-duplicate-drift.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-b10-duplicate-drift.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b10-duplicate-drift.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit read edit read read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read read read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read edit✗ read edit✗ edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | recovered | `read edit read edit read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b10-duplicate-drift.json) |
| Gemma 4 26B A4B | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read edit read read read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-b10-duplicate-drift.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/builtin-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit edit✗ read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read edit✗ read edit✗ read edit✗ edit✗ read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | noop | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/builtin-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read edit✗ read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | noop | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit✗ read edit read read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b12-noop-with-drift.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-b12-noop-with-drift.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-b12-noop-with-drift.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit✗ read✗ edit✗ read read read read read read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b12-noop-with-drift.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | noop | `read edit✗ read✗ edit edit read edit` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | noop | `read edit✗ edit✗ edit read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit✗ read read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ read read read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b12-noop-with-drift.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b12-noop-with-drift.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | noop | `read edit✗ edit✗ edit read edit edit✗ edit read edit` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit✗ read edit✗ read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b12-noop-with-drift.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b12-noop-with-drift.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit read read read read read read read read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-b12-noop-with-drift.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b12-noop-with-drift.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit✗ edit edit` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b13-chained-diff-edit.json) |

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
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read edit✗ edit✗ read edit✗ edit` | [trace](traces/glm-5.3-flash/builtin-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read read read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ edit read edit✗ read read read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read read edit read read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit edit edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b15-large-range-drift.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | recovered | `read edit✗ edit read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b15-large-range-drift.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-b15-large-range-drift.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-b15-large-range-drift.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read read read replace read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b15-large-range-drift.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-b15-large-range-drift.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | rejected | `read edit✗ read read edit✗ edit✗ edit✗ read read read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read read edit read read read read read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b15-large-range-drift.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | recovered | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-b15-large-range-drift.json) |

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
| GLM 5.3 Flash | builtin-edit | ❌ | applied (applied-wrong) | `read edit edit read read` | [trace](traces/glm-5.3-flash/builtin-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | undo-refused | `read replace undo_last_change✗ read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b16b-undo-stale.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b16b-undo-stale.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b16b-undo-stale.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b16b-undo-stale.json) |
| Qwen3.8-Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b16b-undo-stale.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b16b-undo-stale.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | undo-refused | `read replace undo_last_change✗ read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b16b-undo-stale.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b16b-undo-stale.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b16b-undo-stale.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b16b-undo-stale.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | undo-refused | `read replace undo_last_change✗ read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | undo-refused | `read replace undo_last_change✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b16b-undo-stale.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b16b-undo-stale.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-b16b-undo-stale.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | undo | `read edit read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b16b-undo-stale.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit read read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b16b-undo-stale.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b16b-undo-stale.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-b16b-undo-stale.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | undo | `read edit read edit read read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b16b-undo-stale.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace undo_last_change✗ read read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b16b-undo-stale.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b17-reversed-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b17-reversed-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b17-reversed-range.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b17-reversed-range.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-b17-reversed-range.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-b17-reversed-range.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-b17-reversed-range.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b17-reversed-range.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b17-reversed-range.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-b17-reversed-range.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b17-reversed-range.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b17-reversed-range.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-b17-reversed-range.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b17-reversed-range.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read edit read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b18-boundary-dup.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b18-boundary-dup.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-b18-boundary-dup.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-b18-boundary-dup.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read undo_last_change read insert undo_last_change read insert read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b18-boundary-dup.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-b18-boundary-dup.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit read edit read edit read read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read replace replace read replace read replace replace` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read edit edit read edit edit read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b18-boundary-dup.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-b18-boundary-dup.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-single-line.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-single-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-single-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-single-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-single-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-single-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-single-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-single-line.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-single-line.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-single-line.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-single-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-single-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-single-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-single-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-single-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-single-line.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-single-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-single-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-single-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-single-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-single-line.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-single-line.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-single-line.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-single-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-single-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-single-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-single-line.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-single-line.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-single-line.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-single-line.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-single-line.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-single-line.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-single-line.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-single-line.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-single-line.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-range.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-range.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-range.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-range.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | error (crashed) | `read` | - |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-range.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-range.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-range.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-range.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-range.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-range.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-range.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-range.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-range.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-range.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-range.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-range.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-range.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-range.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-range.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-range.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-range.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-delete-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-delete-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-delete-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-delete-line.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-delete-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-delete-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-delete-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-delete-line.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-delete-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-delete-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-delete-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-delete-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-delete-line.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-delete-line.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-delete-line.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-delete-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-delete-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-delete-line.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-delete-line.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-delete-line.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-delete-line.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-delete-line.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-delete-line.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-delete-line.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-delete-line.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-delete-line.json) |

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
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-duplicate-nth.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-duplicate-nth.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | error (crashed) | `` | - |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-nth.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-duplicate-nth.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-duplicate-nth.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-duplicate-nth.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-duplicate-nth.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-duplicate-nth.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-duplicate-nth.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-duplicate-nth.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-nth.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read edit edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-duplicate-nth.json) |
| Gemma 4 26B A4B | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-duplicate-nth.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit✗ edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-duplicate-nth.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-duplicate-nth.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-duplicate-nth.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-duplicate-nth.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-duplicate-nth.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-duplicate-nth.json) |

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
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-duplicate-import.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-duplicate-import.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-import.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-duplicate-import.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-duplicate-import.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | error (crashed) | `read edit read` | - |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-import.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-duplicate-import.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-duplicate-import.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-duplicate-import.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-duplicate-import.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-duplicate-import.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-duplicate-import.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-duplicate-import.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-import.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-duplicate-import.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-duplicate-import.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-duplicate-import.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-duplicate-import.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-duplicate-import.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-duplicate-import.json) |
| Gemma 4 26B A4B | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-duplicate-import.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-duplicate-import.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-whitespace-only.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-whitespace-only.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-whitespace-only.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-whitespace-only.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-whitespace-only.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-whitespace-only.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-whitespace-only.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-whitespace-only.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-whitespace-only.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-whitespace-only.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-whitespace-only.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-whitespace-only.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-whitespace-only.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-whitespace-only.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-whitespace-only.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-whitespace-only.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-whitespace-only.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-whitespace-only.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-whitespace-only.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-whitespace-only.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-whitespace-only.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-whitespace-only.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-crlf.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-crlf.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-crlf.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-crlf.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-crlf.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-crlf.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-crlf.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-crlf.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-crlf.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-crlf.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-crlf.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-crlf.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-crlf.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | error (crashed) | `read edit read` | - |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-crlf.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-crlf.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit read read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-crlf.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-crlf.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-crlf.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-crlf.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read edit edit read read read edit edit` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-crlf.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-crlf.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-crlf.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-crlf.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-crlf.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-crlf.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-crlf.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-crlf.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-crlf.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-crlf.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-crlf.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-crlf.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-crlf.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-crlf.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-bom.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-bom.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-bom.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-bom.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-bom.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-bom.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-bom.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-bom.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-bom.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | error (crashed) | `read edit read` | - |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-bom.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-bom.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read read read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-bom.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read read read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-bom.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-bom.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-bom.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-bom.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-bom.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-bom.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-bom.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-bom.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-bom.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-bom.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-bom.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-bom.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-bom.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-bom.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-bom.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-bom.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-bom.json) |

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
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ read` | [trace](traces/glm-5.3-flash/builtin-edit-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-empty-file.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-empty-file.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | error (crashed) | `read edit✗ edit✗` | - |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-empty-file.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read read edit✗ edit✗ edit✗ edit✗ read read✗ edit✗` | [trace](traces/qwen3.8-flash/builtin-edit-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-empty-file.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ read edit✗ edit✗ edit✗ read read✗ edit✗ read✗` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-empty-file.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-empty-file.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read✗ edit✗ read read✗ read read read read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-empty-file.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-empty-file.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-empty-file.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-empty-file.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-empty-file.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-empty-file.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ read read read✗ read✗ read edit✗ read read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-empty-file.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-empty-file.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-empty-file.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-empty-file.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-empty-file.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-empty-file.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-empty-file.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-empty-file.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-empty-file.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-empty-file.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-empty-file.json) |
| Gemma 4 26B A4B | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-empty-file.json) |

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
| GLM 5.3 Flash | builtin-edit | ❌ | error (crashed) | `read read read read read read edit✗` | - |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read edit✗ read read read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-long-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-long-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-long-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-long-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-long-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | error (crashed) | `read read read edit✗` | - |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read read read edit✗ read edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-long-line.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read read read read edit read read read edit✗` | [trace](traces/qwen3.8-flash/builtin-edit-long-line.json) |
| Qwen3.8-Flash | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `edit✗ read read read read edit read read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-long-line.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-long-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-long-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-long-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-long-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read read read edit read edit✗ edit read edit read read edit✗` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-long-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read read read read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-long-line.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read read edit✗ edit✗ read edit✗ read edit` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-long-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read read read edit✗ read read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-long-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-long-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-long-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-long-line.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-long-line.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read read read read read✗ edit✗ edit✗ edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-long-line.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read read read read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-long-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read read read read read read read read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-long-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-long-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read read read edit read edit read edit edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read read read read edit✗ edit read read read read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-long-line.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read read read read read read edit✗ read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-long-line.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read read edit edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-long-line.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ❌ | applied (noop) | `read read edit✗ read edit✗ read edit✗ edit✗ edit✗ read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-long-line.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-long-line.json) |
| Gemma 4 26B A4B | builtin-edit | ❌ | applied (silent-wrong-line) | `read read edit✗ read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-long-line.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (noop) | `read read edit✗ read edit✗ read read edit✗ edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-long-line.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-long-line.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read read read read read read read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-long-line.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/builtin-edit-noop.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-noop.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-noop.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-noop.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-noop.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-noop.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-noop.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-semantic-edit-noop.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/builtin-edit-noop.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-noop.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-noop.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-noop.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-noop.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-noop.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-noop.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit✗ edit edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-noop.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit✗ read✗ read read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-noop.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-noop.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-noop.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-noop.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-noop.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-noop.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit read edit` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-noop.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-noop.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-noop.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-noop.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ read read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-noop.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-noop.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-noop.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-noop.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-noop.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit✗ edit✗ read edit✗` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-noop.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit read edit read edit✗ edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-noop.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-noop.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-noop.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-insert-after.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-insert-after.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-insert-after.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-after.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-insert-after.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-insert-after.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-insert-after.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-insert-after.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-insert-after.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-insert-after.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-insert-after.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-insert-after.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-insert-after.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-insert-after.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-insert-after.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-insert-after.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-insert-after.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-insert-after.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-insert-after.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-after.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-insert-after.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-after.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-insert-after.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-insert-after.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-insert-after.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-insert-after.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-insert-after.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ edit read read edit read edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-insert-after.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-insert-after.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-insert-after.json) |

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
| GLM 5.3 Flash | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-unicode.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-unicode.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-unicode.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-unicode.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-unicode.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-unicode.json) |
| Qwen3.8-Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-unicode.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-unicode.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-unicode.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit✗ edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-unicode.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-unicode.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read✗ edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-unicode.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-unicode.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-unicode.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read read✗ edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-unicode.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-unicode.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read read insert✗ insert read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-unicode.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read read✗ read✗ read✗ read✗ read✗ edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-unicode.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-unicode.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read✗ read✗ read✗ edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-unicode.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-unicode.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read read✗ read✗ read read✗ insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-unicode.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-unicode.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-unicode.json) |
| Gemma 4 26B A4B | builtin-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-unicode.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-unicode.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read replace read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-unicode.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-unicode.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-unicode.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read edit read edit edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-unicode.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-unicode.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-unicode.json) |

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
| GLM 5.3 Flash | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-tabs.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-tabs.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-tabs.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-tabs.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-tabs.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-tabs.json) |
| Qwen3.8-Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read read✗ read✗ read✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-tabs.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-tabs.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read read✗ read✗ read✗ replace✗ replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-tabs.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-tabs.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read read read✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-tabs.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read✗ read✗ edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-tabs.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | error (crashed) | `read` | - |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-tabs.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-tabs.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-tabs.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ❌ | applied (noop) | `read read✗ read✗ read read✗ read✗ read✗ read✗ read✗ replace✗` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-tabs.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-tabs.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-tabs.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read✗ read✗ read✗ read✗ read✗ read edit read read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-tabs.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ❌ | error (crashed) | `read read` | - |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert✗ insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-tabs.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-tabs.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | error (crashed) | `read read edit read` | - |
| Gemma 4 26B A4B | pi-hashline-readmap | ❌ | applied (noop) | `read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-tabs.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read edit read read edit read read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-tabs.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ❌ | applied (noop) | `read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-tabs.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ❌ | applied (noop) | `read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-tabs.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ❌ | applied (noop) | `read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-tabs.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (noop) | `read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-tabs.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ❌ | applied (noop) | `read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-tabs.json) |
| Gemma 4 26B A4B | builtin-edit | ❌ | applied (noop) | `read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-tabs.json) |

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
| GLM 5.3 Flash | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-no-trailing-newline.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit edit edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read read✗ replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-no-trailing-newline.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ❌ | applied (applied-wrong) | `read edit read edit✗` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read read✗ read read read read edit edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read read read✗ read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read read✗ read✗ read✗ read✗ read✗ read✗ read read✗ insert` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read read edit read read read✗ read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit✗` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ❌ | error (crashed) | `read` | - |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read read✗ read✗ read✗ read✗ read read✗ replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read✗ edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ❌ | applied (noop) | `read edit read read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read replace read replace replace replace read replace` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-no-trailing-newline.json) |
| Gemma 4 26B A4B | builtin-edit | ❌ | applied (noop) | `read edit read edit` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ❌ | applied (noop) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-no-trailing-newline.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read edit read read read read read read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ❌ | applied (noop) | `read edit read edit read edit read edit read read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read read read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ read edit✗ edit✗ edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-no-trailing-newline.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-stale-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-stale-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-stale-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-stale-line.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-stale-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-stale-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-stale-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-stale-line.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-stale-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-stale-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-stale-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-stale-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-stale-line.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-stale-line.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-stale-line.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-stale-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-stale-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-stale-line.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-stale-line.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-stale-line.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-stale-line.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-stale-line.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-stale-line.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-stale-line.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-stale-line.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-stale-line.json) |

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
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read read✗ read✗ read✗ replace✗ read insert read replace undo_last_change read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-target-deleted.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-target-deleted.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | rejected | `read read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-target-deleted.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | rejected | `read read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-target-deleted.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-target-deleted.json) |
| Qwen3.8-Flash | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-target-deleted.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-target-deleted.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-target-deleted.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-target-deleted.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-target-deleted.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-target-deleted.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | error (crashed) | `read read` | - |
| Muse Spark 1.2 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-target-deleted.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read read read✗ read✗ read read✗ edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-target-deleted.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-target-deleted.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | rejected | `read read read✗ read✗ read✗ read read✗ read✗ read✗ read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-target-deleted.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read read read✗ edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-target-deleted.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read read edit read read read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-target-deleted.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read read✗ read✗ read✗ edit✗ read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-target-deleted.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ❌ | error (crashed) | `read read` | - |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read read read insert✗ read read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read read read✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-target-deleted.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-target-deleted.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | error (crashed) | `read read` | - |
| Gemma 4 26B A4B | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-target-deleted.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-target-deleted.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-target-deleted.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-target-deleted.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | rejected | `read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-target-deleted.json) |
| Gemma 4 26B A4B | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-target-deleted.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-target-deleted.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | rejected | `read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-target-deleted.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-stale-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-stale-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-stale-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-stale-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-stale-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-stale-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-stale-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-stale-range.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-stale-range.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-stale-range.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-stale-range.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-stale-range.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-stale-range.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-stale-range.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-stale-range.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-stale-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-stale-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-stale-range.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-stale-range.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-stale-range.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-stale-range.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-stale-range.json) |
| Gemma 4 26B A4B | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-stale-range.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-stale-range.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-stale-range.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-stale-range.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read read` | [trace](traces/glm-5.3-flash/builtin-edit-shift-above.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-shift-above.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-shift-above.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-shift-above.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-shift-above.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-shift-above.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-shift-above.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-shift-above.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-shift-above.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-shift-above.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-shift-above.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-shift-above.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-shift-above.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-shift-above.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-shift-above.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-shift-above.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-shift-above.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-shift-above.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-shift-above.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-shift-above.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-shift-above.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-shift-above.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit read read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-shift-above.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit read read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-shift-above.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-shift-above.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-shift-above.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-shift-above.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-shift-above.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read edit read read read edit read read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-shift-above.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-shift-above.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-shift-above.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-shift-above.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-shift-above.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-shift-above.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read read read read read read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-shift-above.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read read edit read read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-shift-above.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-shift-above.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-shift-above.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read read read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-shift-above.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-shift-above.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-external-far.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-external-far.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-external-far.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-external-far.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-external-far.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-external-far.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-external-far.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-external-far.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-external-far.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-external-far.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-external-far.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-external-far.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-external-far.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-external-far.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-external-far.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-external-far.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-external-far.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-external-far.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-external-far.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-external-far.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-external-far.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-external-far.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-external-far.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit read read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-external-far.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-external-far.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-external-far.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-external-far.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-external-far.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-external-far.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-external-far.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-external-far.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-external-far.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-external-far.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-external-far.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-external-far.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-anchor-stability.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-anchor-stability.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-anchor-stability.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-anchor-stability.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-anchor-stability.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-anchor-stability.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-anchor-stability.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-anchor-stability.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-anchor-stability.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-anchor-stability.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-anchor-stability.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-anchor-stability.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-anchor-stability.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-anchor-stability.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-anchor-stability.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-anchor-stability.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-anchor-stability.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-anchor-stability.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-anchor-stability.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-anchor-stability.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-anchor-stability.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-anchor-stability.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-undo.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | undo | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-undo.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-undo.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-undo.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-undo.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-undo.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-undo.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-undo.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/builtin-edit-undo.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | undo | `read edit read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-undo.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | undo | `read edit edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-undo.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-undo.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-undo.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | undo | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-undo.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-undo.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | undo | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-undo.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-undo.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-undo.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-undo.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-undo.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-undo.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-undo.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-undo.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-undo.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | undo | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-undo.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-undo.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | undo | `read read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-undo.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-undo.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ✅ | undo | `read edit read edit` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-undo.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-undo.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | undo | `read edit edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-undo.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-undo.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | undo | `read edit edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-undo.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | undo | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-undo.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-undo.json) |

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
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-error-guidance.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-error-guidance.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-error-guidance.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-error-guidance.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-error-guidance.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-error-guidance.json) |
| Muse Spark 1.2 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.2-contributor/builtin-edit-error-guidance.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-error-guidance.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-error-guidance.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-error-guidance.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-error-guidance.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit` | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-error-guidance.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-error-guidance.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-error-guidance.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-error-guidance.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-error-guidance.json) |
| Gemma 4 26B A4B | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-error-guidance.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-error-guidance.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-error-guidance.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-error-guidance.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-error-guidance.json) |
| Gemma 4 26B A4B | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-error-guidance.json) |
| Gemma 4 26B A4B | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-error-guidance.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-error-guidance.json) |

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
| GLM 5.3 Flash | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | builtin-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | builtin-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | builtin-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/glm-5.3-flash/builtin-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-nth.json) |
| GLM 5.3 Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-import.json) |
| GLM 5.3 Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-empty-file.json) |
| GLM 5.3 Flash | builtin-edit | long-line | error (crashed) | - |
| GLM 5.3 Flash | builtin-edit | unicode | applied (applied-wrong) | [trace](traces/glm-5.3-flash/builtin-edit-unicode.json) |
| GLM 5.3 Flash | builtin-edit | tabs | applied (applied-wrong) | [trace](traces/glm-5.3-flash/builtin-edit-tabs.json) |
| GLM 5.3 Flash | builtin-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/glm-5.3-flash/builtin-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | builtin-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-hashline-edit-long-line.json) |
| GLM 5.3 Flash | pi-hashline-edit | unicode | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit | tabs | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-hashline-edit-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-long-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | unicode | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | tabs | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | unicode | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | tabs | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | no-trailing-newline | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | target-deleted | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-readmap | b16b-undo-stale | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-hashline-readmap | unicode | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-readmap-unicode.json) |
| GLM 5.3 Flash | pi-hashline-readmap | tabs | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-readmap-tabs.json) |
| GLM 5.3 Flash | pi-hashline-readmap | no-trailing-newline | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-readmap-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-readmap | target-deleted | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-hashline-readmap-target-deleted.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | b16b-undo-stale | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b16b-undo-stale.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | crlf | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-empty-file.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | unicode | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-unicode.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | tabs | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-tabs.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | no-trailing-newline | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | target-deleted | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-target-deleted.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | empty-file | error (crashed) | - |
| GLM 5.3 Flash | @xynogen/pix-edit | long-line | error (crashed) | - |
| GLM 5.3 Flash | @xynogen/pix-edit | unicode | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-unicode.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | tabs | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-tabs.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-semantic-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-empty-file.json) |
| GLM 5.3 Flash | pi-semantic-edit | unicode | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-semantic-edit-unicode.json) |
| GLM 5.3 Flash | pi-semantic-edit | tabs | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-semantic-edit-tabs.json) |
| GLM 5.3 Flash | pi-semantic-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-semantic-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | builtin-edit | b6-change-then-revert | error (crashed) | - |
| Qwen3.8-Flash | builtin-edit | b7-paged-read-gap | error (crashed) | - |
| Qwen3.8-Flash | builtin-edit | b8-blind-edit | error (crashed) | - |
| Qwen3.8-Flash | builtin-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/qwen3.8-flash/builtin-edit-b16b-undo-stale.json) |
| Qwen3.8-Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-nth.json) |
| Qwen3.8-Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-import.json) |
| Qwen3.8-Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-empty-file.json) |
| Qwen3.8-Flash | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-long-line.json) |
| Qwen3.8-Flash | builtin-edit | unicode | applied (applied-wrong) | [trace](traces/qwen3.8-flash/builtin-edit-unicode.json) |
| Qwen3.8-Flash | builtin-edit | tabs | applied (applied-wrong) | [trace](traces/qwen3.8-flash/builtin-edit-tabs.json) |
| Qwen3.8-Flash | builtin-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/qwen3.8-flash/builtin-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | builtin-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-target-deleted.json) |
| Qwen3.8-Flash | pi-hashline-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-edit-b16b-undo-stale.json) |
| Qwen3.8-Flash | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-edit-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-hashline-edit-long-line.json) |
| Qwen3.8-Flash | pi-hashline-edit | unicode | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-edit-unicode.json) |
| Qwen3.8-Flash | pi-hashline-edit | tabs | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-edit-tabs.json) |
| Qwen3.8-Flash | pi-hashline-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-hashline-edit-target-deleted.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b16b-undo-stale.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-bom.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-long-line.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | unicode | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-unicode.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | tabs | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-tabs.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-target-deleted.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | unicode | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-unicode.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | tabs | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-tabs.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | no-trailing-newline | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | target-deleted | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-target-deleted.json) |
| Qwen3.8-Flash | pi-hashline-readmap | b16b-undo-stale | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b16b-undo-stale.json) |
| Qwen3.8-Flash | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-readmap | unicode | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-unicode.json) |
| Qwen3.8-Flash | pi-hashline-readmap | tabs | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-tabs.json) |
| Qwen3.8-Flash | pi-hashline-readmap | no-trailing-newline | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-readmap | target-deleted | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-target-deleted.json) |
| Qwen3.8-Flash | pi-hashline-readmap | shift-above | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-shift-above.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | b16b-undo-stale | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b16b-undo-stale.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | unicode | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-unicode.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | tabs | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-tabs.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | no-trailing-newline | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | target-deleted | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-target-deleted.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | shift-above | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-shift-above.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b16b-undo-stale.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | range | error (crashed) | - |
| Qwen3.8-Flash | @xynogen/pix-edit | duplicate-nth | error (crashed) | - |
| Qwen3.8-Flash | @xynogen/pix-edit | duplicate-import | error (crashed) | - |
| Qwen3.8-Flash | @xynogen/pix-edit | crlf | error (crashed) | - |
| Qwen3.8-Flash | @xynogen/pix-edit | bom | error (crashed) | - |
| Qwen3.8-Flash | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-empty-file.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | long-line | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-long-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | unicode | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-unicode.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | tabs | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-tabs.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-target-deleted.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | shift-above | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-shift-above.json) |
| Qwen3.8-Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-semantic-edit-b16b-undo-stale.json) |
| Qwen3.8-Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-empty-file.json) |
| Qwen3.8-Flash | pi-semantic-edit | unicode | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-semantic-edit-unicode.json) |
| Qwen3.8-Flash | pi-semantic-edit | tabs | error (crashed) | - |
| Qwen3.8-Flash | pi-semantic-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-semantic-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-semantic-edit | target-deleted | error (crashed) | - |
| Qwen3.8-Flash | pi-semantic-edit | shift-above | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-semantic-edit-shift-above.json) |
| Muse Spark 1.2 Contributor | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b9-boundary-changed.json) |
| Muse Spark 1.2 Contributor | builtin-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/builtin-edit-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/builtin-edit-duplicate-nth.json) |
| Muse Spark 1.2 Contributor | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/builtin-edit-duplicate-import.json) |
| Muse Spark 1.2 Contributor | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/builtin-edit-empty-file.json) |
| Muse Spark 1.2 Contributor | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/builtin-edit-long-line.json) |
| Muse Spark 1.2 Contributor | builtin-edit | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/builtin-edit-unicode.json) |
| Muse Spark 1.2 Contributor | builtin-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/builtin-edit-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | builtin-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/builtin-edit-target-deleted.json) |
| Muse Spark 1.2 Contributor | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/builtin-edit-error-guidance.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-bom.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-long-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-unicode.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-target-deleted.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-bom.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-long-line.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-unicode.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | pi-hashline-context-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-context-edit-target-deleted.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-unicode.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | tabs | applied (noop) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-tabs.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | shift-above | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-shift-above.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-b18-boundary-dup.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-unicode.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | pi-hashline-readmap | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-readmap-target-deleted.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-empty-file.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-unicode.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | tabs | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-tabs.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-target-deleted.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | shift-above | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-shift-above.json) |
| Muse Spark 1.2 Contributor | @cortexkit/aft-pi | external-far | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_cortexkit_aft-pi-external-far.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-empty-file.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | long-line | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-long-line.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-unicode.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | tabs | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-tabs.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-target-deleted.json) |
| Muse Spark 1.2 Contributor | @xynogen/pix-edit | shift-above | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/_xynogen_pix-edit-shift-above.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b10-duplicate-drift.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-b16b-undo-stale.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-duplicate-nth.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-duplicate-import.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-empty-file.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.2-contributor/pi-semantic-edit-unicode.json) |
| Muse Spark 1.2 Contributor | pi-semantic-edit | tabs | error (crashed) | - |
| Muse Spark 1.2 Contributor | pi-semantic-edit | no-trailing-newline | error (crashed) | - |
| Muse Spark 1.2 Contributor | pi-semantic-edit | target-deleted | error (crashed) | - |
| Muse Spark 1.3 Contributor | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | builtin-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-long-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-unicode.json) |
| Muse Spark 1.3 Contributor | builtin-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-target-deleted.json) |
| Muse Spark 1.3 Contributor | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | tabs | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-target-deleted.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-empty-file.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-unicode.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | tabs | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-tabs.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-target-deleted.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | shift-above | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-shift-above.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | long-line | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-long-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-unicode.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | long-line | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | unicode | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | tabs | error (crashed) | - |
| Muse Spark 1.3 Contributor | pi-semantic-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | target-deleted | error (crashed) | - |
| Muse Spark 1.3 Contributor | pi-semantic-edit | shift-above | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-shift-above.json) |
| Gemma 4 26B A4B | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-long-line.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | b6-change-then-revert | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b16b-undo-stale.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | crlf | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-crlf.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-target-deleted.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-b16b-undo-stale.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | no-trailing-newline | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-empty-file.json) |
| Gemma 4 26B A4B | builtin-edit | unicode | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-unicode.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-target-deleted.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-bom.json) |
| Gemma 4 26B A4B | pi-semantic-edit | stale-range | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-stale-range.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | b6-change-then-revert | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-b6-change-then-revert.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | stale-range | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-stale-range.json) |
| Gemma 4 26B A4B | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B | pi-hashline-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-target-deleted.json) |
| Gemma 4 26B A4B | builtin-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-bom.json) |
| Gemma 4 26B A4B | pi-semantic-edit | stale-line | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-stale-line.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | no-trailing-newline | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-no-trailing-newline.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | shift-above | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-shift-above.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-target-deleted.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | tabs | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-tabs.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b16b-undo-stale.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | unicode | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-unicode.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B | builtin-edit | no-trailing-newline | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B | pi-hashline-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-empty-file.json) |
| Gemma 4 26B A4B | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-duplicate-import.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | unicode | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-unicode.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | unicode | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-unicode.json) |
| Gemma 4 26B A4B | pi-hashline-edit | tabs | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-tabs.json) |
| Gemma 4 26B A4B | pi-semantic-edit | shift-above | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-shift-above.json) |
| Gemma 4 26B A4B | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-duplicate-nth.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | unicode | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-unicode.json) |
| Gemma 4 26B A4B | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-duplicate-nth.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | insert-after | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-insert-after.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | shift-above | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-shift-above.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | long-line | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-long-line.json) |
| Gemma 4 26B A4B | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-duplicate-import.json) |
| Gemma 4 26B A4B | builtin-edit | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-target-deleted.json) |
| Gemma 4 26B A4B | pi-hashline-edit | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-b16b-undo-stale.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | duplicate-nth | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-duplicate-nth.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | b17-reversed-range | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | unicode | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-unicode.json) |
| Gemma 4 26B A4B | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | tabs | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-tabs.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-empty-file.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | target-deleted | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-target-deleted.json) |
| Gemma 4 26B A4B | @xynogen/pix-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/_xynogen_pix-edit-error-guidance.json) |
| Gemma 4 26B A4B | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-long-line.json) |
| Gemma 4 26B A4B | pi-semantic-edit | noop | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-noop.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | tabs | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-tabs.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-b16b-undo-stale.json) |
| Gemma 4 26B A4B | builtin-edit | stale-range | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-stale-range.json) |
| Gemma 4 26B A4B | pi-semantic-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-empty-file.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | no-trailing-newline | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-no-trailing-newline.json) |
| Gemma 4 26B A4B | pi-semantic-edit | long-line | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-long-line.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B | @cortexkit/aft-pi | tabs | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/_cortexkit_aft-pi-tabs.json) |
| Gemma 4 26B A4B | pi-hashline-edit | no-trailing-newline | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B | pi-semantic-edit | tabs | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-tabs.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | tabs | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-tabs.json) |
| Gemma 4 26B A4B | builtin-edit | tabs | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-tabs.json) |
| Gemma 4 26B A4B | builtin-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/builtin-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B | pi-semantic-edit | b6-change-then-revert | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B | pi-hashline-edit | unicode | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-unicode.json) |
| Gemma 4 26B A4B | pi-semantic-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B | pi-hashline-readmap | no-trailing-newline | applied (noop) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-readmap-no-trailing-newline.json) |
| Gemma 4 26B A4B | pi-hashline-edit-pro | b16b-undo-stale | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-b16b-undo-stale.json) |
| Gemma 4 26B A4B | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-context-edit-long-line.json) |
| Gemma 4 26B A4B | pi-semantic-edit | unicode | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-it/pi-semantic-edit-unicode.json) |
