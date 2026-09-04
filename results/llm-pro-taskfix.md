# pi edit-tool benchmark — LLM runs

Generated 2026-09-04T14:52:12.490Z. Real-model runs against hyper + opencode-go + ollama-cloud; the model drives each contender's actual tools through a tool-calling loop. Total API cost: $0.0479.

## Models

| Model | Runs | Passed | Pass rate | Avg steps | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- | --- | --- |
| Gemma 4 26B A4B | 4 | 4/4 | 100% | 4.8 | 10086 | $0.0044 |
| GLM 5.3 Flash | 4 | 4/4 | 100% | 2.5 | 6897 | $0.0024 |
| Qwen3.8-Flash | 4 | 3/4 | 75% | 3.5 | 10208 | $0.0068 |
| Muse Spark 1.2 Contributor | 4 | 3/4 | 75% | 5.8 | 21176 | $0.0103 |
| Muse Spark 1.3 Contributor | 4 | 3/4 | 75% | 4.3 | 15866 | $0.0076 |
| Gemma 4 (31B) | 4 | 4/4 | 100% | 2.8 | 6682 | $0.0039 |
| Nemotron 3 Nano (30B) | 4 | 3/4 | 75% | 5.0 | 19345 | $0.0093 |
| GPT-OSS (20B) | 4 | 4/4 | 100% | 3.5 | 8242 | $0.0031 |

## Results — pass rate by model (rows) × tool (columns)

| Model | pi-hashline-edit-pro | Overall |
| --- | --- | --- |
| Gemma 4 26B A4B | 4/4 | 4/4 (100%) |
| GLM 5.3 Flash | 4/4 | 4/4 (100%) |
| Qwen3.8-Flash | 3/4 | 3/4 (75%) |
| Muse Spark 1.2 Contributor | 3/4 | 3/4 (75%) |
| Muse Spark 1.3 Contributor | 3/4 | 3/4 (75%) |
| Gemma 4 (31B) | 4/4 | 4/4 (100%) |
| Nemotron 3 Nano (30B) | 3/4 | 3/4 (75%) |
| GPT-OSS (20B) | 4/4 | 4/4 (100%) |

## Per-tool totals (all models)

| Tool | Core (15) | Staleness (11) | Served-state (8) | Passed | Total | Pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| pi-hashline-edit-pro | 24/24 | 4/8 | 0/0 | 28 | 32 | 88% |

## Per-tool process (all models)

| Tool | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- |
| pi-hashline-edit-pro | 4.0 | 12312 | $0.0015 | 10 |

## Scenario detail

### unicode

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-unicode.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-unicode.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-unicode.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-unicode.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-unicode.json) |

### tabs

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-tabs.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-tabs.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace✗ replace undo_last_change read replace✗ replace✗ replace read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace✗ read read read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-tabs.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-tabs.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-tabs.json) |

### no-trailing-newline

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read read✗ read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-no-trailing-newline.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-no-trailing-newline.json) |

### target-deleted

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Gemma 4 26B A4B | pi-hashline-edit-pro | ✅ | rejected | `read replace✗ read read read read read read read read` | [trace](traces/gemma-4-26b-a4b-it/pi-hashline-edit-pro-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | rejected | `read replace✗ read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-target-deleted.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read replace✗ read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-target-deleted.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read replace✗ read insert read` | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read replace✗ read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-target-deleted.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | rejected | `read replace✗ read read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-target-deleted.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read replace✗ read read read read read insert read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-target-deleted.json) |
| GPT-OSS (20B) | pi-hashline-edit-pro | ✅ | rejected | `read replace✗ read read read ???✗` | [trace](traces/gpt-oss_20b/pi-hashline-edit-pro-target-deleted.json) |

## Failed runs — traces for validation

Every failed run is listed with its full transcript link (system prompt, user task, model reasoning, every tool call with arguments, every tool result, and the final file state).

| Model | Contender | Scenario | Outcome | Trace |
| --- | --- | --- | --- | --- |
| Qwen3.8-Flash | pi-hashline-edit-pro | target-deleted | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-target-deleted.json) |
| Muse Spark 1.2 Contributor | pi-hashline-edit-pro | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.2-contributor/pi-hashline-edit-pro-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | target-deleted | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-target-deleted.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | target-deleted | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-target-deleted.json) |
