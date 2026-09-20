# pi edit-tool benchmark — LLM runs

Generated 2026-09-20T06:53:29.202Z. Real-model runs against ollama-cloud + opencode-go; the model drives each contender's actual tools through a tool-calling loop. Total API cost: $4.5422.

## Models

| Model | Runs | Passed | Pass rate | Avg steps | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | 385 | 353/385 | 92% | 3.1 | 10722 | $1.4761 |
| GLM 5.3 Flash | 385 | 357/385 | 93% | 3.0 | 7155 | $0.4536 |
| Qwen3.8-Flash | 385 | 354/385 | 92% | 3.7 | 13034 | $0.8344 |
| Muse Spark 1.3 Contributor | 385 | 353/385 | 92% | 3.1 | 10888 | $0.4855 |
| Gemma 4 (31B) | 385 | 338/385 | 88% | 3.0 | 6599 | $0.3683 |
| Nemotron 3 Nano (30B) | 385 | 331/385 | 86% | 3.6 | 17252 | $0.9244 |

## Results — pass rate by model (rows) × tool (columns)

| Model | builtin-edit | pi-hashline-edit | pi-hashline-context-edit | pi-hashline-edit-pro | pi-hashline-edit-pro-diff0 | pi-hashline-readmap | @cortexkit/aft-pi | @xynogen/pix-edit | pi-semantic-edit | @agimon-ai/doompi-edit | pi-agent-ide | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | 28/35 | 32/35 | 32/35 | 34/35 | 34/35 | 34/35 | 32/35 | 32/35 | 30/35 | 34/35 | 31/35 | 353/385 (92%) |
| GLM 5.3 Flash | 29/35 | 32/35 | 32/35 | 35/35 | 35/35 | 35/35 | 32/35 | 33/35 | 28/35 | 34/35 | 32/35 | 357/385 (93%) |
| Qwen3.8-Flash | 31/35 | 32/35 | 32/35 | 35/35 | 35/35 | 33/35 | 32/35 | 32/35 | 29/35 | 34/35 | 29/35 | 354/385 (92%) |
| Muse Spark 1.3 Contributor | 28/35 | 32/35 | 32/35 | 34/35 | 34/35 | 34/35 | 34/35 | 31/35 | 29/35 | 34/35 | 31/35 | 353/385 (92%) |
| Gemma 4 (31B) | 27/35 | 32/35 | 32/35 | 34/35 | 33/35 | 34/35 | 28/35 | 29/35 | 24/35 | 33/35 | 32/35 | 338/385 (88%) |
| Nemotron 3 Nano (30B) | 27/35 | 28/35 | 30/35 | 34/35 | 34/35 | 28/35 | 32/35 | 32/35 | 28/35 | 33/35 | 25/35 | 331/385 (86%) |

## Per-tool totals (all models)

| Tool | Core (18) | Staleness (10) | Served-state (7) | Passed | Total | Pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| builtin-edit | 83/108 | 46/60 | 41/42 | 170 | 210 | 81% |
| pi-hashline-edit | 88/108 | 58/60 | 42/42 | 188 | 210 | 90% |
| pi-hashline-context-edit | 89/108 | 59/60 | 42/42 | 190 | 210 | 90% |
| pi-hashline-edit-pro | 108/108 | 59/60 | 39/42 | 206 | 210 | 98% |
| pi-hashline-edit-pro-diff0 | 107/108 | 59/60 | 39/42 | 205 | 210 | 98% |
| pi-hashline-readmap | 103/108 | 57/60 | 38/42 | 198 | 210 | 94% |
| @cortexkit/aft-pi | 95/108 | 54/60 | 41/42 | 190 | 210 | 90% |
| @xynogen/pix-edit | 94/108 | 54/60 | 41/42 | 189 | 210 | 90% |
| pi-semantic-edit | 85/108 | 43/60 | 40/42 | 168 | 210 | 80% |
| @agimon-ai/doompi-edit | 100/108 | 60/60 | 42/42 | 202 | 210 | 96% |
| pi-agent-ide | 85/108 | 54/60 | 41/42 | 180 | 210 | 86% |

## Per-tool process (all models)

| Tool | Version | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- | --- |
| builtin-edit | 0.85.1 | 3.4 | 7730 | $0.0017 | 10 |
| pi-hashline-edit | 0.8.3 | 2.9 | 10410 | $0.0017 | 10 |
| pi-hashline-context-edit | 0.11.0 | 2.7 | 9189 | $0.0016 | 10 |
| pi-hashline-edit-pro | 4.3.5 | 2.8 | 9474 | $0.0016 | 10 |
| pi-hashline-edit-pro-diff0 | 4.3.5 | 3.0 | 10138 | $0.0017 | 10 |
| pi-hashline-readmap | 0.14.0 | 3.2 | 10488 | $0.0019 | 10 |
| @cortexkit/aft-pi | 0.56.2 | 3.1 | 11282 | $0.0018 | 10 |
| @xynogen/pix-edit | 0.2.5 | 3.3 | 7577 | $0.0016 | 10 |
| pi-semantic-edit | 0.4.0 | 3.1 | 15678 | $0.0031 | 11 |
| @agimon-ai/doompi-edit | 0.0.1-alpha.49 | 3.5 | 9297 | $0.0017 | 10 |
| pi-agent-ide | 0.6.2 | 4.8 | 19094 | $0.0033 | 11 |

## Scenario detail

### b7-paged-read-gap

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-b7-paged-read-gap.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-b7-paged-read-gap.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | error (crashed) | `read` | - |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-b7-paged-read-gap.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-b7-paged-read-gap.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b7-paged-read-gap.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-b7-paged-read-gap.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b7-paged-read-gap.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b7-paged-read-gap.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-b7-paged-read-gap.json) |

### b9-boundary-changed

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | recovered | `read replace read read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | recovered | `read replace read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-b9-boundary-changed.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | recovered | `read replace read read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read read read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | recovered | `read replace read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-b9-boundary-changed.json) |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/builtin-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b9-boundary-changed.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read grep edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | recovered | `read replace read read read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | recovered | `read edit read read read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ read read read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read read read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | recovered | `read edit read read read read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read grep edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | recovered | `read replace read read read replace read read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-b9-boundary-changed.json) |

### b6-change-then-revert

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-b6-change-then-revert.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-b6-change-then-revert.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-b6-change-then-revert.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b6-change-then-revert.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b6-change-then-revert.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-b6-change-then-revert.json) |

### b10-duplicate-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | recovered | `read apply read read apply read apply replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | recovered | `read replace replace replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-b10-duplicate-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | recovered | `read apply read apply apply read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | rejected | `read read apply read read read apply read apply apply` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-b10-duplicate-drift.json) |
| Gemma 4 (31B) | builtin-edit | ❌ | error (crashed) | `` | - |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | recovered | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b10-duplicate-drift.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-b10-duplicate-drift.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | recovered | `read replace apply read apply read apply write read` | [trace](traces/gemma4_31b/pi-agent-ide-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | recovered | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit read edit edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | rejected | `read edit✗ read read read read read read read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ❌ | applied (silent-wrong-line) | `read write write read read search✗ read read read read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-b10-duplicate-drift.json) |

### b12-noop-with-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read read✗ read✗ read✗ read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | noop | `read replace apply read apply read apply apply replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-b12-noop-with-drift.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/builtin-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | noop | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-agent-ide-b12-noop-with-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit✗ read read` | [trace](traces/qwen3.8-flash/builtin-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit✗ bash✗ read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | noop | `read edit✗ read read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit✗ read read read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace apply read read read✗ read apply read read` | [trace](traces/qwen3.8-flash/pi-agent-ide-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ read read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace apply read read read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-b12-noop-with-drift.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/builtin-edit-b12-noop-with-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b12-noop-with-drift.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b12-noop-with-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-b12-noop-with-drift.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/pi-hashline-readmap-b12-noop-with-drift.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/pi-semantic-edit-b12-noop-with-drift.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace apply` | [trace](traces/gemma4_31b/pi-agent-ide-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | error (crashed) | `read edit✗ read` | - |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit✗ read read read read read read read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace read read read read read read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-b12-noop-with-drift.json) |

### b13-chained-diff-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read apply` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/builtin-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read edit` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read read replace replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit edit✗ edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read read replace replace read replace` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read apply` | [trace](traces/gemma4_31b/pi-agent-ide-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit edit edit✗ edit read edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | error (crashed) | `` | - |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace replace replace replace replace` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-b13-chained-diff-edit.json) |

### b17-reversed-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-b17-reversed-range.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b17-reversed-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-b17-reversed-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b17-reversed-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-b17-reversed-range.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-b17-reversed-range.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b17-reversed-range.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b17-reversed-range.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b17-reversed-range.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-b17-reversed-range.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b17-reversed-range.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b17-reversed-range.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | error (crashed) | `` | - |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-b17-reversed-range.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-b17-reversed-range.json) |

### b18-boundary-dup

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ❌ | applied (applied-wrong) | `read replace read undo_last_change replace insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-b18-boundary-dup.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read edit read edit read edit read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-b18-boundary-dup.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-b18-boundary-dup.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read edit edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-b18-boundary-dup.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ❌ | applied (applied-wrong) | `read replace read replace insert read replace read insert read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit read edit✗ read edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/gemma4_31b/pi-hashline-readmap-b18-boundary-dup.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit✗ read edit read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit✗ read edit✗ edit edit✗ read read read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read insert read undo_last_change` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace insert read undo_last_change replace✗ read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read read read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read read read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-b18-boundary-dup.json) |

### single-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-single-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-single-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-single-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-single-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-single-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-single-line.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-single-line.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-single-line.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-single-line.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-single-line.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-single-line.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-single-line.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-single-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-single-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-single-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-single-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-single-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-single-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-single-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-single-line.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-single-line.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-single-line.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-single-line.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-single-line.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-single-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-single-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-single-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read✗ read edit` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-single-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-single-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-single-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-single-line.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-single-line.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-single-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-single-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-single-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-single-line.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-single-line.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-single-line.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-single-line.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-single-line.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-single-line.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-single-line.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-single-line.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-single-line.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-single-line.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-single-line.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-single-line.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-single-line.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-single-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-single-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-single-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-single-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-single-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-single-line.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-single-line.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-single-line.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-single-line.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-single-line.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-single-line.json) |

### b15-large-range-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit✗ edit read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit read edit✗ read edit read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | recovered | `read replace read apply read apply apply read write read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-b15-large-range-drift.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | rejected | `read edit✗ edit read edit read edit edit edit✗ edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | recovered | `read replace read replace replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read read read edit read read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read read replace✗ read read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit read edit✗ read read read read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | recovered | `read apply read apply read replace replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read read read edit✗ read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | recovered | `read apply read apply write read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-b15-large-range-drift.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/builtin-edit-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b15-large-range-drift.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b15-large-range-drift.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | recovered | `read replace replace read` | [trace](traces/gemma4_31b/pi-agent-ide-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | rejected | `read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | recovered | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace✗ read read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read read read read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | recovered | `read edit read read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read read read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | rejected | `read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | recovered | `read replace read read read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-b15-large-range-drift.json) |

### range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-range.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-range.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-range.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-range.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-range.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-range.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-range.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-range.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-range.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-range.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-range.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-range.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-range.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-range.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-range.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-range.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-range.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-range.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-range.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-range.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-range.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-range.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-range.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-range.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-range.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-range.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-range.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-range.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-range.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-range.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-range.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-range.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-range.json) |

### delete-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-delete-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-delete-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-delete-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-delete-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-delete-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-delete-line.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-delete-line.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-delete-line.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-delete-line.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-delete-line.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read read delete read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-delete-line.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-delete-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-delete-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-delete-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-delete-line.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-delete-line.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read delete read` | [trace](traces/glm-5.3-flash/pi-agent-ide-delete-line.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-delete-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read✗ read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-delete-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-delete-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-delete-line.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-delete-line.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-delete-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-delete-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-delete-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read read delete read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-delete-line.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-delete-line.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-delete-line.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-delete-line.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-delete-line.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-delete-line.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/pi-hashline-readmap-delete-line.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-delete-line.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-delete-line.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-delete-line.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-delete-line.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-delete-line.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-delete-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-delete-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-delete-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-delete-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-delete-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-delete-line.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-delete-line.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-delete-line.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-delete-line.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-delete-line.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read delete read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-delete-line.json) |

### duplicate-nth

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-duplicate-nth.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read apply` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-duplicate-nth.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-duplicate-nth.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-nth.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace apply read apply apply read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-duplicate-nth.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-duplicate-nth.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read apply apply read replace replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ❌ | applied (noop) | `read read apply read apply read read read read apply` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-duplicate-nth.json) |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read read read read read read` | [trace](traces/gemma4_31b/builtin-edit-duplicate-nth.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-duplicate-nth.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-duplicate-nth.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-duplicate-nth.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-duplicate-nth.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-duplicate-nth.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-duplicate-nth.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit✗ edit read edit read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-duplicate-nth.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit read read read read read read read` | [trace](traces/gemma4_31b/pi-semantic-edit-duplicate-nth.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read apply read apply replace apply read apply write read` | [trace](traces/gemma4_31b/pi-agent-ide-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (noop) | `read edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit✗ edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ❌ | error (crashed) | `` | - |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ❌ | applied (applied-wrong) | `read write` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-duplicate-nth.json) |

### duplicate-import

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-duplicate-import.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-duplicate-import.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read apply read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-duplicate-import.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-duplicate-import.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-duplicate-import.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-import.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-duplicate-import.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-duplicate-import.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-duplicate-import.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-import.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-duplicate-import.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read apply read read apply read read read apply replace` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-duplicate-import.json) |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/gemma4_31b/builtin-edit-duplicate-import.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-duplicate-import.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-duplicate-import.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-duplicate-import.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-duplicate-import.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-duplicate-import.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-duplicate-import.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-duplicate-import.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-duplicate-import.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-duplicate-import.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read apply read apply read apply replace apply write read` | [trace](traces/gemma4_31b/pi-agent-ide-duplicate-import.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-duplicate-import.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-duplicate-import.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `grep edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ❌ | applied (noop) | `apply apply apply search✗ apply apply apply apply read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-duplicate-import.json) |

### whitespace-only

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-whitespace-only.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-whitespace-only.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-whitespace-only.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace read apply apply read apply apply apply read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-whitespace-only.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-whitespace-only.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-whitespace-only.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-whitespace-only.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-whitespace-only.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-whitespace-only.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-whitespace-only.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-whitespace-only.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-whitespace-only.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read apply read read apply read read read apply replace` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-whitespace-only.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-whitespace-only.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-whitespace-only.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-whitespace-only.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-whitespace-only.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-whitespace-only.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-whitespace-only.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-whitespace-only.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-whitespace-only.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-whitespace-only.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-whitespace-only.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-whitespace-only.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-whitespace-only.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-whitespace-only.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read✗ read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-whitespace-only.json) |

### crlf

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-crlf.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-crlf.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-crlf.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-crlf.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-crlf.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-crlf.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-crlf.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-crlf.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-crlf.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-crlf.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-crlf.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-crlf.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-crlf.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-crlf.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-crlf.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-crlf.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-crlf.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-crlf.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-crlf.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-crlf.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-crlf.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-crlf.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-crlf.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-crlf.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-crlf.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-crlf.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-crlf.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read bash✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-crlf.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read edit✗` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-crlf.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-crlf.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-crlf.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read read read replace read apply read read` | [trace](traces/qwen3.8-flash/pi-agent-ide-crlf.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-crlf.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-crlf.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-crlf.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-crlf.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-crlf.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-crlf.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-crlf.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-crlf.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-crlf.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-crlf.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ read edit read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-crlf.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | error (crashed) | `` | - |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-crlf.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-crlf.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-crlf.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-crlf.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-crlf.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-crlf.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-crlf.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-crlf.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-crlf.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-crlf.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-crlf.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-crlf.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read grep read read read grep read read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-crlf.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-crlf.json) |

### bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-bom.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-bom.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-bom.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-bom.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-bom.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace read read read read read read read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-bom.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-bom.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-bom.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-bom.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-bom.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-bom.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-bom.json) |
| GLM 5.3 Flash | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-bom.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-bom.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-bom.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-bom.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit bash✗ read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-bom.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-bom.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-bom.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-bom.json) |
| Qwen3.8-Flash | pi-agent-ide | ❌ | applied (applied-wrong) | `read read replace read apply` | [trace](traces/qwen3.8-flash/pi-agent-ide-bom.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-bom.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-bom.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-bom.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-bom.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-bom.json) |
| Gemma 4 (31B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-bom.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-bom.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-bom.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-bom.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-bom.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-bom.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-bom.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-bom.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-bom.json) |
| Gemma 4 (31B) | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-bom.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-bom.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-bom.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-bom.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-bom.json) |

### noop

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/deepseek-v4.1-flash/builtin-edit-noop.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-noop.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-noop.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-noop.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-noop.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ read edit✗ edit✗` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-noop.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-noop.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-noop.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-noop.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-noop.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace replace replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-noop.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/builtin-edit-noop.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-noop.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-noop.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-noop.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-noop.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-noop.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-noop.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-noop.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗` | [trace](traces/glm-5.3-flash/pi-semantic-edit-noop.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-noop.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-noop.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/builtin-edit-noop.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-noop.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-noop.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-noop.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-noop.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-noop.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-noop.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-noop.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit✗ read edit edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-noop.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-noop.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace apply read read read read✗ read` | [trace](traces/qwen3.8-flash/pi-agent-ide-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-noop.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-noop.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-noop.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-noop.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace read read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-noop.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/builtin-edit-noop.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-noop.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-noop.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-noop.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-noop.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/pi-hashline-readmap-noop.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-noop.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/_xynogen_pix-edit-noop.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma4_31b/pi-semantic-edit-noop.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-noop.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-noop.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/nemotron-3-nano_30b/builtin-edit-noop.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-noop.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-noop.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-noop.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-noop.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit✗ read read edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-noop.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-noop.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-noop.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-noop.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-noop.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-noop.json) |

### empty-file

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read✗` | [trace](traces/deepseek-v4.1-flash/builtin-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-empty-file.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-empty-file.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-empty-file.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ❌ | applied (applied-wrong) | `read write read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-empty-file.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read` | [trace](traces/glm-5.3-flash/builtin-edit-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-empty-file.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-empty-file.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ read edit✗ read edit✗ read edit✗ read edit✗` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-empty-file.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-empty-file.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-empty-file.json) |
| GLM 5.3 Flash | pi-agent-ide | ❌ | applied (applied-wrong) | `read write read` | [trace](traces/glm-5.3-flash/pi-agent-ide-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-empty-file.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ read✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/qwen3.8-flash/builtin-edit-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-empty-file.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-empty-file.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ read edit✗ edit✗ read✗ edit✗ read read✗` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-empty-file.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-empty-file.json) |
| Qwen3.8-Flash | pi-agent-ide | ❌ | applied (noop) | `read apply read read read apply apply read read apply` | [trace](traces/qwen3.8-flash/pi-agent-ide-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-empty-file.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-empty-file.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ❌ | applied (applied-wrong) | `read write read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-empty-file.json) |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read edit✗ edit✗ read edit✗ edit✗ edit✗` | [trace](traces/gemma4_31b/builtin-edit-empty-file.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-empty-file.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-empty-file.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-empty-file.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-empty-file.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-empty-file.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-empty-file.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-empty-file.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ read edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/gemma4_31b/pi-semantic-edit-empty-file.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-empty-file.json) |
| Gemma 4 (31B) | pi-agent-ide | ❌ | applied (applied-wrong) | `read write read` | [trace](traces/gemma4_31b/pi-agent-ide-empty-file.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit✗ read read edit✗ edit✗ read read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-empty-file.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-empty-file.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ❌ | applied (noop) | `` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read read read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read insert write read insert` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-empty-file.json) |

### insert-after

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-insert-after.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-insert-after.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-insert-after.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-insert-after.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-insert-after.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-insert-after.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-insert-after.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-insert-after.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-insert-after.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-insert-after.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read insert read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-insert-after.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-insert-after.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-insert-after.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit✗ edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-insert-after.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-after.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-after.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read insert read` | [trace](traces/glm-5.3-flash/pi-agent-ide-insert-after.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-insert-after.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-insert-after.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-insert-after.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-insert-after.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-insert-after.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-insert-after.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-insert-after.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-insert-after.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-insert-after.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-insert-after.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read read insert read read read` | [trace](traces/qwen3.8-flash/pi-agent-ide-insert-after.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-after.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-insert-after.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-insert-after.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-insert-after.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-insert-after.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-insert-after.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-insert-after.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-insert-after.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-insert-after.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-insert-after.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-insert-after.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-insert-after.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-insert-after.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read insert read` | [trace](traces/gemma4_31b/pi-agent-ide-insert-after.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-insert-after.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-insert-after.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-insert-after.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-insert-after.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-insert-after.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-insert-after.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-insert-after.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-insert-after.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-insert-after.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-insert-after.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read insert read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-insert-after.json) |

### b8-blind-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | error (crashed) | `` | - |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-b8-blind-edit.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-b8-blind-edit.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-b8-blind-edit.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b8-blind-edit.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace read read` | [trace](traces/qwen3.8-flash/pi-agent-ide-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-b8-blind-edit.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-b8-blind-edit.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-b8-blind-edit.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b8-blind-edit.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-b8-blind-edit.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-b8-blind-edit.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b8-blind-edit.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-b8-blind-edit.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-b8-blind-edit.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-b8-blind-edit.json) |

### unicode

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-unicode.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-unicode.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-unicode.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-unicode.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-unicode.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-unicode.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-unicode.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-unicode.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-unicode.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-unicode.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-unicode.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-unicode.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-unicode.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-unicode.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-unicode.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-unicode.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-unicode.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-unicode.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-unicode.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-unicode.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-unicode.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-unicode.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-unicode.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-unicode.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-unicode.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-unicode.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-unicode.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-unicode.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-unicode.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-unicode.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-unicode.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-unicode.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-unicode.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-unicode.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-unicode.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-unicode.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-unicode.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-unicode.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-unicode.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-unicode.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-unicode.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-unicode.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-unicode.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-unicode.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-unicode.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit✗ read edit✗ edit✗ edit✗ edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-unicode.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-unicode.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-unicode.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-unicode.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-unicode.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-unicode.json) |

### tabs

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-tabs.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-tabs.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-tabs.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-tabs.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-tabs.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-tabs.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-tabs.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-tabs.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-tabs.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-tabs.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-tabs.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace✗ replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-tabs.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-tabs.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-tabs.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-tabs.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-tabs.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-tabs.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace replace read read read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-tabs.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-tabs.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-tabs.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-tabs.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-tabs.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-tabs.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-tabs.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-tabs.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-tabs.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-tabs.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-tabs.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-tabs.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace✗ replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-tabs.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-tabs.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-tabs.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-tabs.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-tabs.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-tabs.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-tabs.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-tabs.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-tabs.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-tabs.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-tabs.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-tabs.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-tabs.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ❌ | error (crashed) | `` | - |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-tabs.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (noop) | `read edit✗ edit✗ read edit✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace✗ replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-tabs.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-tabs.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-tabs.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit✗ grep edit` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace replace read read read read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-tabs.json) |

### no-trailing-newline

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace read read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-no-trailing-newline.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-no-trailing-newline.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit✗ edit read read✗` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-no-trailing-newline.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-no-trailing-newline.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read read read apply read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace apply read read read apply apply apply apply` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-no-trailing-newline.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-no-trailing-newline.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit bash✗ read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-no-trailing-newline.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace read read read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-no-trailing-newline.json) |

### external-far

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-external-far.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-external-far.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-external-far.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-external-far.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-external-far.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-external-far.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-external-far.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-external-far.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-external-far.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-external-far.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-external-far.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-external-far.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-external-far.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-external-far.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-external-far.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-external-far.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-external-far.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-external-far.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-external-far.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-external-far.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-external-far.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-external-far.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-external-far.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-external-far.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-external-far.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-external-far.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-external-far.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-external-far.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-external-far.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-external-far.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-external-far.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-external-far.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace read read` | [trace](traces/qwen3.8-flash/pi-agent-ide-external-far.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-external-far.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-external-far.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-external-far.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-external-far.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-external-far.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-external-far.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-external-far.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-external-far.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-external-far.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-external-far.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-external-far.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-external-far.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-external-far.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-external-far.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read read` | [trace](traces/gemma4_31b/pi-agent-ide-external-far.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-external-far.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-external-far.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-external-far.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-external-far.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-external-far.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-external-far.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-external-far.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-external-far.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-external-far.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-external-far.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace read read replace` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-external-far.json) |

### anchor-stability

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-anchor-stability.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-anchor-stability.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-anchor-stability.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-anchor-stability.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-anchor-stability.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-anchor-stability.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read replace replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-anchor-stability.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-anchor-stability.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-anchor-stability.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-anchor-stability.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-anchor-stability.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-anchor-stability.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/builtin-edit-anchor-stability.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-anchor-stability.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-anchor-stability.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-anchor-stability.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-anchor-stability.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-anchor-stability.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-anchor-stability.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-anchor-stability.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-anchor-stability.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-anchor-stability.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-anchor-stability.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-anchor-stability.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-anchor-stability.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-anchor-stability.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-anchor-stability.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-anchor-stability.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-anchor-stability.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-anchor-stability.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-anchor-stability.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-anchor-stability.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read read grep read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-anchor-stability.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-anchor-stability.json) |

### stale-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-stale-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-stale-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-stale-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-stale-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-stale-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-stale-range.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-stale-range.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-stale-range.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-stale-range.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-stale-range.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | recovered | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-stale-range.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-stale-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-stale-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-stale-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-stale-range.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-stale-range.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | recovered | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-stale-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-stale-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-stale-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-stale-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-stale-range.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-stale-range.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | recovered | `read replace read read read read read` | [trace](traces/qwen3.8-flash/pi-agent-ide-stale-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-stale-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-stale-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | recovered | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-stale-range.json) |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/gemma4_31b/builtin-edit-stale-range.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-stale-range.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-stale-range.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-stale-range.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-stale-range.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ❌ | error (crashed) | `read replace✗` | - |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-stale-range.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-stale-range.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-stale-range.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-stale-range.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | recovered | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-stale-range.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit read read read read read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | rejected | `read replace✗` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-stale-range.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-stale-range.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ read read read edit read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | recovered | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-stale-range.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | recovered | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-stale-range.json) |

### long-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read read edit read read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-long-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-long-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-long-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-long-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-long-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-long-line.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-long-line.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ❌ | applied (noop) | `read read read read✗ read✗ read✗ read✗ read read✗` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-long-line.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read read read read read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-long-line.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-long-line.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read read apply apply` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-long-line.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-long-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-long-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-long-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-long-line.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read read edit✗ read read read read read` | [trace](traces/glm-5.3-flash/builtin-edit-long-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-long-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-long-line.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-long-line.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read read read read apply apply apply replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-long-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | error (crashed) | `read read read read read read read read read` | - |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read read edit✗ read edit✗ edit✗ edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-long-line.json) |
| Qwen3.8-Flash | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-long-line.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-long-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-long-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-long-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-long-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-long-line.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-long-line.json) |
| Qwen3.8-Flash | pi-agent-ide | ❌ | applied (noop) | `read read read read read read apply read read✗ read` | [trace](traces/qwen3.8-flash/pi-agent-ide-long-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read read read read edit read edit read read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-long-line.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | error (crashed) | `read read read read` | - |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | error (crashed) | `read read read read edit✗` | - |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-long-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-long-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (noop) | `read read read read read read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-long-line.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read read read apply read read apply read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-long-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read read edit read read read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read read read read edit✗ read read edit read read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-long-line.json) |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read read read read read read read read` | [trace](traces/gemma4_31b/builtin-edit-long-line.json) |
| Gemma 4 (31B) | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read read read read read read edit✗ read` | [trace](traces/gemma4_31b/pi-hashline-edit-long-line.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read read read read read read read` | [trace](traces/gemma4_31b/pi-hashline-context-edit-long-line.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-long-line.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-long-line.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-long-line.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-long-line.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (noop) | `read read read read read read read read read read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-long-line.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | error (crashed) | `read read read read read` | - |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-long-line.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read read read read read read apply apply` | [trace](traces/gemma4_31b/pi-agent-ide-long-line.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit edit✗ read edit✗ read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-long-line.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-long-line.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ❌ | applied (noop) | `read read read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (noop) | `read read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-long-line.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `grep read read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ❌ | applied (applied-wrong) | `read read read apply replace apply write read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-long-line.json) |

### delete-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-delete-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-delete-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-delete-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-delete-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-delete-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-delete-range.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-delete-range.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-delete-range.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-delete-range.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-delete-range.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read delete read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-delete-range.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-delete-range.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-delete-range.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-delete-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-delete-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-delete-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-delete-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-delete-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-delete-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-delete-range.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-delete-range.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read delete read` | [trace](traces/glm-5.3-flash/pi-agent-ide-delete-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-delete-range.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-delete-range.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-delete-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-delete-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-delete-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-delete-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read bash✗` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-delete-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-delete-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-delete-range.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-delete-range.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read delete read` | [trace](traces/qwen3.8-flash/pi-agent-ide-delete-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-delete-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-delete-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read delete read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-delete-range.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-delete-range.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-delete-range.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-delete-range.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-delete-range.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-delete-range.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/pi-hashline-readmap-delete-range.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-delete-range.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_xynogen_pix-edit-delete-range.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-delete-range.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-delete-range.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read delete read` | [trace](traces/gemma4_31b/pi-agent-ide-delete-range.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-delete-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-delete-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-delete-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-delete-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-delete-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-delete-range.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-delete-range.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-delete-range.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit edit✗ read edit read read read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-delete-range.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-delete-range.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read delete read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-delete-range.json) |

### undo

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-undo.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | undo | `read edit edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-undo.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | undo | `read edit edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-undo.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-undo.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | undo | `read replace undo_last_change` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-undo.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-undo.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | undo | `read edit edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-undo.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-undo.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | undo | `read edit edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-undo.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-undo.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | undo | `read replace replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-undo.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-undo.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | undo | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-undo.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | undo | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-undo.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-undo.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | undo | `read replace undo_last_change read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-undo.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-undo.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | undo | `read edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-undo.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | undo | `read edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-undo.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-undo.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | undo | `read edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-undo.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | undo | `read replace replace read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-undo.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/builtin-edit-undo.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-undo.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-undo.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-undo.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | undo | `read replace undo_last_change read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-undo.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-undo.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | undo | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-undo.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-undo.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | undo | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-undo.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-undo.json) |
| Qwen3.8-Flash | pi-agent-ide | ❌ | applied (applied-wrong) | `read read replace read read apply apply apply apply read✗` | [trace](traces/qwen3.8-flash/pi-agent-ide-undo.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | undo | `read replace read undo_last_change read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | undo | `read replace undo_last_change read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-undo.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-undo.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-undo.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | undo | `read read replace read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-undo.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/gemma4_31b/builtin-edit-undo.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | undo | `read edit edit` | [trace](traces/gemma4_31b/pi-hashline-edit-undo.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | undo | `read edit edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-undo.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-undo.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | undo | `read replace undo_last_change` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-undo.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/gemma4_31b/pi-hashline-readmap-undo.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | undo | `read edit edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-undo.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | undo | `read edit read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-undo.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | undo | `read edit read edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-undo.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-undo.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | undo | `read replace read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-undo.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-undo.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | undo | `read edit read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-undo.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | undo | `read edit read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-undo.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-undo.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | undo | `read replace undo_last_change read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-undo.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | undo | `read edit read read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-undo.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | undo | `` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-undo.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | undo | `read edit read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-undo.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | undo | `read edit read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-undo.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | undo | `grep grep read edit read read grep edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-undo.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | undo | `read replace read replace read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-undo.json) |

### insert-eof

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-insert-eof.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-insert-eof.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read edit read edit read edit read grep` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | applied | `read insert read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-insert-eof.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-insert-eof.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-insert-eof.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-insert-eof.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-insert-eof.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-insert-eof.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-insert-eof.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-insert-eof.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-insert-eof.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-eof.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | applied | `read insert apply apply apply replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-insert-eof.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-insert-eof.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-insert-eof.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-insert-eof.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-insert-eof.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-insert-eof.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-insert-eof.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-insert-eof.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-insert-eof.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-insert-eof.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read grep edit read read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | applied | `read read read apply apply read insert read read read` | [trace](traces/qwen3.8-flash/pi-agent-ide-insert-eof.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-insert-eof.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-eof.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-insert-eof.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/builtin-edit-insert-eof.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-insert-eof.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-insert-eof.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-insert-eof.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-insert-eof.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-insert-eof.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-insert-eof.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-insert-eof.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/pi-semantic-edit-insert-eof.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-insert-eof.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | applied | `read insert read` | [trace](traces/gemma4_31b/pi-agent-ide-insert-eof.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-insert-eof.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-insert-eof.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-insert-eof.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-insert-eof.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read insert` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-insert-eof.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-insert-eof.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-insert-eof.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-insert-eof.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-insert-eof.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-insert-eof.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ✅ | applied | `read insert read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-insert-eof.json) |

### error-guidance

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-error-guidance.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-error-guidance.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | recovered | `read replace read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-error-guidance.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-error-guidance.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-error-guidance.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-error-guidance.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | recovered | `read replace replace read replace apply read read replace replace replace` | [trace](traces/glm-5.3-flash/pi-agent-ide-error-guidance.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.8-flash/pi-hashline-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-error-guidance.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-error-guidance.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-error-guidance.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | recovered | `read replace read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-error-guidance.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-error-guidance.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-error-guidance.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | recovered | `read read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-error-guidance.json) |
| Gemma 4 (31B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/gemma4_31b/builtin-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-error-guidance.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read read read read read read read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-error-guidance.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-error-guidance.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-error-guidance.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-error-guidance.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read grep edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | recovered | `read replace read read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-error-guidance.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit edit✗ read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read read replace` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-error-guidance.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-error-guidance.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | recovered | `read edit read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ❌ | applied (silent-wrong-line) | `read replace` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-error-guidance.json) |

### crlf-bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-crlf-bom.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-crlf-bom.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ❌ | applied (applied-wrong) | `read read apply replace apply` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-crlf-bom.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-crlf-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-crlf-bom.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-crlf-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-crlf-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-crlf-bom.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-crlf-bom.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf-bom.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-crlf-bom.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-crlf-bom.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-crlf-bom.json) |
| GLM 5.3 Flash | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-crlf-bom.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-crlf-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-crlf-bom.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-crlf-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-crlf-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-crlf-bom.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-crlf-bom.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit bash✗ read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-crlf-bom.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-crlf-bom.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-crlf-bom.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-crlf-bom.json) |
| Qwen3.8-Flash | pi-agent-ide | ❌ | applied (applied-wrong) | `read read read read apply read replace read apply read` | [trace](traces/qwen3.8-flash/pi-agent-ide-crlf-bom.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-crlf-bom.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-crlf-bom.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ❌ | applied (applied-wrong) | `read read replace read apply read apply apply read read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-crlf-bom.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | applied | `read edit✗ read edit✗ read edit read` | [trace](traces/gemma4_31b/builtin-edit-crlf-bom.json) |
| Gemma 4 (31B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-crlf-bom.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-crlf-bom.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-crlf-bom.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-crlf-bom.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-crlf-bom.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-crlf-bom.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-crlf-bom.json) |
| Gemma 4 (31B) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-crlf-bom.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-crlf-bom.json) |
| Gemma 4 (31B) | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-crlf-bom.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-crlf-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-crlf-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-crlf-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-crlf-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | applied | `read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-crlf-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-crlf-bom.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-crlf-bom.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-crlf-bom.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-crlf-bom.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-crlf-bom.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ❌ | applied (applied-wrong) | `read replace read read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-crlf-bom.json) |

### insert-race-stale-boundary

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | recovered | `read insert read read read read read read read read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | recovered | `read insert read` | [trace](traces/glm-5.3-flash/pi-agent-ide-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit✗ bash✗ edit read read read edit read edit` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-agent-ide | ❌ | applied (silent-wrong-line) | `read insert read read read read apply replace apply` | [trace](traces/qwen3.8-flash/pi-agent-ide-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | recovered | `read insert read read read read read replace read replace` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/gemma4_31b/builtin-edit-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | rejected | `read edit✗ read read read read read read read read` | [trace](traces/gemma4_31b/pi-hashline-edit-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/gemma4_31b/pi-hashline-context-edit-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | rejected | `read insert✗ read read read read read read read read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | rejected | `read insert✗ read read read read read read read read` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit✗ edit read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read grep edit read` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | recovered | `read insert read read read read read read read read` | [trace](traces/gemma4_31b/pi-agent-ide-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit read read read read read` | [trace](traces/nemotron-3-nano_30b/builtin-edit-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ❌ | error (crashed) | `` | - |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read edit read read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read insert✗ read insert read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read read read read read edit` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit read read edit read read read read read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | recovered | `read edit` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read read read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | recovered | `grep edit read` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ❌ | applied (silent-wrong-line) | `read insert read read read write read read read replace` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-insert-race-stale-boundary.json) |

### stale-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-stale-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-stale-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-stale-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-stale-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-stale-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-stale-line.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-stale-line.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-stale-line.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-stale-line.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-stale-line.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | ✅ | recovered | `read replace read read replace read` | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-stale-line.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-diff0-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-stale-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-stale-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-stale-line.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-stale-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-stale-line.json) |
| GLM 5.3 Flash | pi-agent-ide | ✅ | recovered | `read replace read read replace read` | [trace](traces/glm-5.3-flash/pi-agent-ide-stale-line.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-diff0-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-stale-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-stale-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-stale-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-stale-line.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-stale-line.json) |
| Qwen3.8-Flash | pi-agent-ide | ✅ | recovered | `read replace read read replace read` | [trace](traces/qwen3.8-flash/pi-agent-ide-stale-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-stale-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | ✅ | recovered | `read replace read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-stale-line.json) |
| Gemma 4 (31B) | builtin-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/builtin-edit-stale-line.json) |
| Gemma 4 (31B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/pi-hashline-edit-stale-line.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-context-edit-stale-line.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-stale-line.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read read replace` | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-stale-line.json) |
| Gemma 4 (31B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma4_31b/pi-hashline-readmap-stale-line.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/gemma4_31b/_cortexkit_aft-pi-stale-line.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/_xynogen_pix-edit-stale-line.json) |
| Gemma 4 (31B) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma4_31b/pi-semantic-edit-stale-line.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-stale-line.json) |
| Gemma 4 (31B) | pi-agent-ide | ✅ | recovered | `read replace read replace read` | [trace](traces/gemma4_31b/pi-agent-ide-stale-line.json) |
| Nemotron 3 Nano (30B) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/nemotron-3-nano_30b/builtin-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | ❌ | error (crashed) | `read replace✗ read replace read` | - |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-pro-diff0-stale-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read read edit read read` | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-stale-line.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-stale-line.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | ✅ | recovered | `read edit read read read read read edit read` | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read grep edit read read read grep` | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | ❌ | applied (silent-wrong-line) | `read replace read write replace delete read✗ search✗ write read` | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-stale-line.json) |

## Failed runs — traces for validation

Every failed run is listed with its full transcript link (system prompt, user task, model reasoning, every tool call with arguments, every tool result, and the final file state).

| Model | Contender | Scenario | Outcome | Trace |
| --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-empty-file.json) |
| DeepSeek V4.1 Flash | builtin-edit | b8-blind-edit | error (crashed) | - |
| DeepSeek V4.1 Flash | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-long-line.json) |
| DeepSeek V4.1 Flash | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-long-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit | crlf-bom | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-long-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-context-edit | crlf-bom | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-context-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-diff0 | b18-boundary-dup | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-diff0-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-insert-eof.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-empty-file.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | insert-eof | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-insert-eof.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-empty-file.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | long-line | applied (noop) | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-long-line.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | empty-file | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-empty-file.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | bom | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-bom.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | whitespace-only | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-agent-ide | crlf-bom | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-agent-ide-crlf-bom.json) |
| GLM 5.3 Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-nth.json) |
| GLM 5.3 Flash | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-stale-line.json) |
| GLM 5.3 Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-import.json) |
| GLM 5.3 Flash | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit | crlf-bom | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-edit-crlf-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-hashline-edit-long-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | crlf-bom | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-crlf-bom.json) |
| GLM 5.3 Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-long-line.json) |
| GLM 5.3 Flash | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-long-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | crlf | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-empty-file.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | crlf-bom | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf-bom.json) |
| GLM 5.3 Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-empty-file.json) |
| GLM 5.3 Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-semantic-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-semantic-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-empty-file.json) |
| GLM 5.3 Flash | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| GLM 5.3 Flash | pi-agent-ide | empty-file | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-agent-ide-empty-file.json) |
| GLM 5.3 Flash | pi-agent-ide | bom | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-agent-ide-bom.json) |
| GLM 5.3 Flash | pi-agent-ide | crlf-bom | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-agent-ide-crlf-bom.json) |
| GLM 5.3 Flash | pi-semantic-edit | long-line | error (crashed) | - |
| GLM 5.3 Flash | @xynogen/pix-edit | long-line | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-long-line.json) |
| Qwen3.8-Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-import.json) |
| Qwen3.8-Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-edit-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-hashline-edit-long-line.json) |
| Qwen3.8-Flash | pi-hashline-edit | crlf-bom | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-edit-crlf-bom.json) |
| Qwen3.8-Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-bom.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | crlf-bom | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-crlf-bom.json) |
| Qwen3.8-Flash | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-hashline-context-edit-long-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-insert-eof.json) |
| Qwen3.8-Flash | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | insert-eof | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-insert-eof.json) |
| Qwen3.8-Flash | pi-semantic-edit | b7-paged-read-gap | error (crashed) | - |
| Qwen3.8-Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-empty-file.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-empty-file.json) |
| Qwen3.8-Flash | pi-agent-ide | bom | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-agent-ide-bom.json) |
| Qwen3.8-Flash | pi-agent-ide | empty-file | applied (noop) | [trace](traces/qwen3.8-flash/pi-agent-ide-empty-file.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| Qwen3.8-Flash | pi-agent-ide | long-line | applied (noop) | [trace](traces/qwen3.8-flash/pi-agent-ide-long-line.json) |
| Qwen3.8-Flash | pi-agent-ide | crlf-bom | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-agent-ide-crlf-bom.json) |
| Qwen3.8-Flash | pi-agent-ide | undo | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-agent-ide-undo.json) |
| Qwen3.8-Flash | builtin-edit | long-line | error (crashed) | - |
| Qwen3.8-Flash | pi-agent-ide | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-agent-ide-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | long-line | error (crashed) | - |
| Muse Spark 1.3 Contributor | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-bom.json) |
| Muse Spark 1.3 Contributor | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | crlf-bom | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | crlf-bom | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-diff0 | b18-boundary-dup | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-diff0-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-empty-file.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | long-line | applied (noop) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | bom | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-bom.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | empty-file | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-empty-file.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | long-line | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | duplicate-nth | applied (noop) | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-agent-ide | crlf-bom | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-agent-ide-crlf-bom.json) |
| Gemma 4 (31B) | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-duplicate-import.json) |
| Gemma 4 (31B) | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-duplicate-nth.json) |
| Gemma 4 (31B) | builtin-edit | b10-duplicate-drift | error (crashed) | - |
| Gemma 4 (31B) | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-empty-file.json) |
| Gemma 4 (31B) | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-long-line.json) |
| Gemma 4 (31B) | builtin-edit | stale-range | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-stale-range.json) |
| Gemma 4 (31B) | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma4_31b/builtin-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-edit-bom.json) |
| Gemma 4 (31B) | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-hashline-edit-long-line.json) |
| Gemma 4 (31B) | pi-hashline-edit | crlf-bom | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-edit-crlf-bom.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-context-edit-bom.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-hashline-context-edit-long-line.json) |
| Gemma 4 (31B) | pi-hashline-context-edit | crlf-bom | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-context-edit-crlf-bom.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-edit-pro-diff0-b18-boundary-dup.json) |
| Gemma 4 (31B) | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-hashline-readmap-insert-eof.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-hashline-edit-pro-diff0 | stale-range | error (crashed) | - |
| Gemma 4 (31B) | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-empty-file.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | crlf | applied (applied-wrong) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-crlf.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-error-guidance.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | insert-eof | applied (applied-wrong) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-insert-eof.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/gemma4_31b/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma4_31b/_xynogen_pix-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | @cortexkit/aft-pi | b17-reversed-range | error (crashed) | - |
| Gemma 4 (31B) | @xynogen/pix-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma4_31b/_xynogen_pix-edit-b18-boundary-dup.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/gemma4_31b/_xynogen_pix-edit-empty-file.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | long-line | applied (noop) | [trace](traces/gemma4_31b/_xynogen_pix-edit-long-line.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma4_31b/_xynogen_pix-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-semantic-edit | b6-change-then-revert | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-semantic-edit-b6-change-then-revert.json) |
| Gemma 4 (31B) | @xynogen/pix-edit | crlf | error (crashed) | - |
| Gemma 4 (31B) | pi-semantic-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-b9-boundary-changed.json) |
| Gemma 4 (31B) | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-b10-duplicate-drift.json) |
| Gemma 4 (31B) | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-duplicate-import.json) |
| Gemma 4 (31B) | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-duplicate-nth.json) |
| Gemma 4 (31B) | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-empty-file.json) |
| Gemma 4 (31B) | pi-semantic-edit | stale-line | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-stale-line.json) |
| Gemma 4 (31B) | pi-semantic-edit | stale-range | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-stale-range.json) |
| Gemma 4 (31B) | pi-semantic-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-error-guidance.json) |
| Gemma 4 (31B) | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/gemma4_31b/pi-semantic-edit-insert-race-stale-boundary.json) |
| Gemma 4 (31B) | pi-semantic-edit | long-line | error (crashed) | - |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/gemma4_31b/_agimon-ai_doompi-edit-insert-eof.json) |
| Gemma 4 (31B) | @agimon-ai/doompi-edit | tabs | error (crashed) | - |
| Gemma 4 (31B) | pi-agent-ide | bom | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-agent-ide-bom.json) |
| Gemma 4 (31B) | pi-agent-ide | empty-file | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-agent-ide-empty-file.json) |
| Gemma 4 (31B) | pi-agent-ide | crlf-bom | applied (applied-wrong) | [trace](traces/gemma4_31b/pi-agent-ide-crlf-bom.json) |
| Nemotron 3 Nano (30B) | builtin-edit | whitespace-only | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/builtin-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | builtin-edit | long-line | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-long-line.json) |
| Nemotron 3 Nano (30B) | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-stale-line.json) |
| Nemotron 3 Nano (30B) | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-error-guidance.json) |
| Nemotron 3 Nano (30B) | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | builtin-edit | stale-range | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/builtin-edit-stale-range.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | bom | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | duplicate-nth | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | tabs | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | long-line | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | b12-noop-with-drift | error (crashed) | - |
| Nemotron 3 Nano (30B) | pi-hashline-edit | crlf-bom | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-edit-crlf-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | bom | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit | insert-race-stale-boundary | error (crashed) | - |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | tabs | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-tabs.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | long-line | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | crlf-bom | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-crlf-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-context-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-hashline-context-edit-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro | stale-line | error (crashed) | - |
| Nemotron 3 Nano (30B) | pi-hashline-edit-pro-diff0 | duplicate-nth | error (crashed) | - |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | b6-change-then-revert | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b6-change-then-revert.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b18-boundary-dup.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | b13-chained-diff-edit | error (crashed) | - |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | bom | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-bom.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-insert-eof.json) |
| Nemotron 3 Nano (30B) | pi-hashline-readmap | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | insert-eof | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-insert-eof.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | tabs | applied (noop) | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-tabs.json) |
| Nemotron 3 Nano (30B) | @cortexkit/aft-pi | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | whitespace-only | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | @xynogen/pix-edit | long-line | applied (noop) | [trace](traces/nemotron-3-nano_30b/_xynogen_pix-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | whitespace-only | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-whitespace-only.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | long-line | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-long-line.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-empty-file.json) |
| Nemotron 3 Nano (30B) | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-semantic-edit-insert-race-stale-boundary.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | insert-after | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-insert-after.json) |
| Nemotron 3 Nano (30B) | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/_agimon-ai_doompi-edit-insert-eof.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | duplicate-nth | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-duplicate-nth.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | bom | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-bom.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-b10-duplicate-drift.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | long-line | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-long-line.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | duplicate-import | applied (noop) | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-duplicate-import.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | error-guidance | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-error-guidance.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | external-far | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-external-far.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | stale-line | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-stale-line.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | crlf-bom | applied (applied-wrong) | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-crlf-bom.json) |
| Nemotron 3 Nano (30B) | pi-agent-ide | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/nemotron-3-nano_30b/pi-agent-ide-insert-race-stale-boundary.json) |
