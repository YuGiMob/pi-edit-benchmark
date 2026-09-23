# pi edit-tool benchmark — LLM runs

Generated 2026-09-23T11:12:57.082Z. Real-model runs against opencode-go + llamacpp; the model drives each contender's actual tools through a tool-calling loop. Total API cost: $3.8027. Read mandate off.

## Models

| Model | Runs | Passed | Pass rate | Avg steps | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | 380 | 360/380 | 95% | 3.1 | 7945 | $0.5455 |
| GLM 5.3 Flash | 380 | 353/380 | 93% | 3.1 | 6068 | $0.3943 |
| Qwen3.8-Flash | 380 | 357/380 | 94% | 3.5 | 8200 | $0.5462 |
| MiMo 2.6 Flash | 380 | 359/380 | 94% | 3.7 | 7978 | $0.4533 |
| MiMo-V2.6-Pro | 380 | 357/380 | 94% | 3.4 | 7615 | $1.3592 |
| Muse Spark 1.3 Contributor | 380 | 353/380 | 93% | 3.1 | 11688 | $0.5043 |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | 380 | 357/380 | 94% | 3.3 | 8141 | $0.0000 |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | 380 | 327/380 | 86% | 3.3 | 6492 | $0.0000 |

## Results — pass rate by model (rows) × tool (columns)

| Model | builtin-edit | pi-hashline-edit-pro | pi-hashline-edit-pro-nodedup | pi-hashline-readmap | @cortexkit/aft-pi | @xynogen/pix-edit | pi-semantic-edit | @agimon-ai/doompi-edit | builtin-bash | pi-edit-guard | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | 34/38 | 37/38 | 38/38 | 35/38 | 36/38 | 37/38 | 34/38 | 38/38 | 37/38 | 34/38 | 360/380 (95%) |
| GLM 5.3 Flash | 33/38 | 37/38 | 38/38 | 36/38 | 33/38 | 36/38 | 32/38 | 35/38 | 37/38 | 36/38 | 353/380 (93%) |
| Qwen3.8-Flash | 35/38 | 37/38 | 38/38 | 35/38 | 35/38 | 37/38 | 33/38 | 37/38 | 36/38 | 34/38 | 357/380 (94%) |
| MiMo 2.6 Flash | 34/38 | 37/38 | 38/38 | 36/38 | 36/38 | 36/38 | 33/38 | 37/38 | 37/38 | 35/38 | 359/380 (94%) |
| MiMo-V2.6-Pro | 33/38 | 37/38 | 38/38 | 36/38 | 35/38 | 37/38 | 33/38 | 37/38 | 36/38 | 35/38 | 357/380 (94%) |
| Muse Spark 1.3 Contributor | 30/38 | 37/38 | 38/38 | 35/38 | 36/38 | 36/38 | 33/38 | 37/38 | 36/38 | 35/38 | 353/380 (93%) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | 34/38 | 37/38 | 38/38 | 35/38 | 35/38 | 37/38 | 33/38 | 37/38 | 36/38 | 35/38 | 357/380 (94%) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | 29/38 | 38/38 | 38/38 | 33/38 | 33/38 | 30/38 | 27/38 | 36/38 | 34/38 | 29/38 | 327/380 (86%) |

## Per-tool totals (all models)

| Tool | Core (20) | Staleness (11) | Served-state (7) | Passed | Total | Pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| builtin-edit | 136/160 | 72/88 | 54/56 | 262 | 304 | 86% |
| pi-hashline-edit-pro | 160/160 | 88/88 | 49/56 | 297 | 304 | 98% |
| pi-hashline-edit-pro-nodedup | 160/160 | 88/88 | 56/56 | 304 | 304 | 100% |
| pi-hashline-readmap | 152/160 | 80/88 | 49/56 | 281 | 304 | 92% |
| @cortexkit/aft-pi | 140/160 | 83/88 | 56/56 | 279 | 304 | 92% |
| @xynogen/pix-edit | 152/160 | 79/88 | 55/56 | 286 | 304 | 94% |
| pi-semantic-edit | 136/160 | 67/88 | 55/56 | 258 | 304 | 85% |
| @agimon-ai/doompi-edit | 153/160 | 86/88 | 55/56 | 294 | 304 | 97% |
| builtin-bash | 151/160 | 82/88 | 56/56 | 289 | 304 | 95% |
| pi-edit-guard | 152/160 | 67/88 | 54/56 | 273 | 304 | 90% |

## Per-tool process (all models)

| Tool | Version | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- | --- |
| builtin-edit | 0.87.0 | 3.8 | 7016 | $0.0012 | 31 |
| pi-hashline-edit-pro | 4.3.8 | 2.9 | 8417 | $0.0013 | 7 |
| pi-hashline-edit-pro-nodedup | 4.3.8 | 2.8 | 8231 | $0.0012 | 7 |
| pi-hashline-readmap | 0.14.0 | 3.2 | 7599 | $0.0012 | 15 |
| @cortexkit/aft-pi | 0.57.1 | 3.6 | 12358 | $0.0019 | 10 |
| @xynogen/pix-edit | 0.2.5 | 3.5 | 7095 | $0.0013 | 27 |
| pi-semantic-edit | 0.4.0 | 3.0 | 6023 | $0.0009 | 10 |
| @agimon-ai/doompi-edit | 0.0.1-alpha.52 | 3.9 | 7946 | $0.0013 | 24 |
| builtin-bash | 0.87.0 | 3.4 | 7822 | $0.0011 | 16 |
| pi-edit-guard | 0.1.5 | 3.2 | 7652 | $0.0012 | 15 |

## Scenario detail

### b8-blind-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b8-blind-edit.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b8-blind-edit.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-b8-blind-edit.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/builtin-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b8-blind-edit.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b8-blind-edit.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b8-blind-edit.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b8-blind-edit.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b8-blind-edit.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b8-blind-edit.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b8-blind-edit.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b8-blind-edit.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b8-blind-edit.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b8-blind-edit.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b8-blind-edit.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b8-blind-edit.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b8-blind-edit.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b8-blind-edit.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b8-blind-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b8-blind-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b8-blind-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b8-blind-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b8-blind-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b8-blind-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b8-blind-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b8-blind-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b8-blind-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b8-blind-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b8-blind-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b8-blind-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b8-blind-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b8-blind-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b8-blind-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b8-blind-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b8-blind-edit.json) |

### b7-paged-read-gap

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b7-paged-read-gap.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-b7-paged-read-gap.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read read read` | [trace](traces/qwen3.8-flash/builtin-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b7-paged-read-gap.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b7-paged-read-gap.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b7-paged-read-gap.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read edit✗` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b7-paged-read-gap.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b7-paged-read-gap.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b7-paged-read-gap.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b7-paged-read-gap.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b7-paged-read-gap.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b7-paged-read-gap.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b7-paged-read-gap.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b7-paged-read-gap.json) |

### b6-change-then-revert

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b6-change-then-revert.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-b6-change-then-revert.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read read` | [trace](traces/qwen3.8-flash/builtin-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b6-change-then-revert.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b6-change-then-revert.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b6-change-then-revert.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b6-change-then-revert.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash✗ bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b6-change-then-revert.json) |

### b9-boundary-changed

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b9-boundary-changed.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash bash✗ bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-b9-boundary-changed.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b9-boundary-changed.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b9-boundary-changed.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read✗ read edit✗ edit read✗ read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b9-boundary-changed.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash✗ bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b9-boundary-changed.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | recovered | `read edit edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit read read edit read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `grep edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b9-boundary-changed.json) |

### b17-reversed-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b17-reversed-range.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b17-reversed-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-b17-reversed-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b17-reversed-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b17-reversed-range.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b17-reversed-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b17-reversed-range.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b17-reversed-range.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b17-reversed-range.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b17-reversed-range.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b17-reversed-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b17-reversed-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b17-reversed-range.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b17-reversed-range.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b17-reversed-range.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b17-reversed-range.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b17-reversed-range.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b17-reversed-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b17-reversed-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b17-reversed-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b17-reversed-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b17-reversed-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b17-reversed-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b17-reversed-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b17-reversed-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b17-reversed-range.json) |

### b13-chained-diff-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit grep edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/builtin-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/builtin-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/pi-edit-guard-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-flash/builtin-edit-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit✗ read✗ read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit edit edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit edit✗ edit✗ edit✗ edit` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-pro/builtin-edit-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit grep edit` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit edit edit✗` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit edit✗ grep edit` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b13-chained-diff-edit.json) |

### b10-duplicate-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b10-duplicate-drift.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-b10-duplicate-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ read edit✗ edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/mimo-v2.6-pro/builtin-edit-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit✗ edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ read edit✗ edit✗ read read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b10-duplicate-drift.json) |

### b18-boundary-dup

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b18-boundary-dup.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit edit edit✗ read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read✗` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read read read edit read read read read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read read` | [trace](traces/glm-5.3-flash/pi-edit-guard-b18-boundary-dup.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b18-boundary-dup.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b18-boundary-dup.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace✗ replace insert read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read✗ read✗` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b18-boundary-dup.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b18-boundary-dup.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace insert read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit✗ read read read edit✗ edit✗ edit✗ edit✗ edit✗ edit read edit✗` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace insert read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit edit✗ read read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (applied-wrong) | `read edit edit✗ read edit edit read read read read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit edit✗ read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b18-boundary-dup.json) |

### single-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-single-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-single-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-single-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-single-line.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-single-line.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-single-line.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-single-line.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-single-line.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-single-line.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-single-line.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-single-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-single-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-single-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-single-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-single-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-single-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-single-line.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-single-line.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-single-line.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-single-line.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-single-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-single-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-single-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-single-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-single-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-single-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-single-line.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-single-line.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-single-line.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-single-line.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-single-line.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-single-line.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-single-line.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-single-line.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-single-line.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-single-line.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-single-line.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-single-line.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-single-line.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-single-line.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-single-line.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-single-line.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-single-line.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-single-line.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-single-line.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-single-line.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-single-line.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-single-line.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-single-line.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-single-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-single-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit✗ edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-single-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-single-line.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-single-line.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-single-line.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-single-line.json) |

### range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-range.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-range.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-range.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-range.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-range.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-range.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-range.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-range.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-range.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-range.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read edit✗` | [trace](traces/qwen3.8-flash/builtin-edit-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-semantic-edit-range.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-range.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-range.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-range.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-range.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-range.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-range.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-range.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-range.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-range.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-range.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-range.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-range.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-range.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-range.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-range.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-range.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-range.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-range.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-range.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-range.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-range.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash✗ bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-range.json) |

### delete-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-delete-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-delete-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-delete-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-delete-line.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-delete-line.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-delete-line.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-delete-line.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-delete-line.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-delete-line.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-delete-line.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-delete-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ edit read✗ read edit read edit✗ edit✗ edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-delete-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-delete-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-delete-line.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-delete-line.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-delete-line.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-delete-line.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-delete-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-delete-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-delete-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-delete-line.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-delete-line.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-delete-line.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-delete-line.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-delete-line.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-delete-line.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-delete-line.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-delete-line.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-delete-line.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-delete-line.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-delete-line.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-delete-line.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-delete-line.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-delete-line.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-delete-line.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-delete-line.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-delete-line.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-delete-line.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-delete-line.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-delete-line.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-delete-line.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-delete-line.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-delete-line.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-delete-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-delete-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read✗ read✗ read✗ read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-delete-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash✗ bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-delete-line.json) |

### duplicate-import

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-duplicate-import.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-duplicate-import.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-duplicate-import.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-duplicate-import.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-duplicate-import.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-import.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-duplicate-import.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-duplicate-import.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-duplicate-import.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-duplicate-import.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-duplicate-import.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-import.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-duplicate-import.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-duplicate-import.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-duplicate-import.json) |
| MiMo 2.6 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-duplicate-import.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-duplicate-import.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-duplicate-import.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read✗ edit read✗` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-duplicate-import.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-duplicate-import.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-duplicate-import.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-duplicate-import.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-duplicate-import.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-duplicate-import.json) |
| MiMo-V2.6-Pro | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-pro/builtin-edit-duplicate-import.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-duplicate-import.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-duplicate-import.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-duplicate-import.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-duplicate-import.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-duplicate-import.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-duplicate-import.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-duplicate-import.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-duplicate-import.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-duplicate-import.json) |

### duplicate-nth

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-duplicate-nth.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-duplicate-nth.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-duplicate-nth.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read✗` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-nth.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-duplicate-nth.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-duplicate-nth.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-duplicate-nth.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-duplicate-nth.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-duplicate-nth.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-edit-guard-duplicate-nth.json) |
| MiMo 2.6 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-duplicate-nth.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-duplicate-nth.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-duplicate-nth.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-duplicate-nth.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-duplicate-nth.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-duplicate-nth.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-duplicate-nth.json) |
| MiMo-V2.6-Pro | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-duplicate-nth.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-duplicate-nth.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-duplicate-nth.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-duplicate-nth.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-duplicate-nth.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-duplicate-nth.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-duplicate-nth.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-duplicate-nth.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit✗ edit read edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash✗ bash bash bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-duplicate-nth.json) |

### whitespace-only

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-whitespace-only.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-whitespace-only.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-whitespace-only.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-whitespace-only.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-whitespace-only.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-whitespace-only.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-whitespace-only.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-whitespace-only.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-whitespace-only.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-whitespace-only.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-whitespace-only.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-whitespace-only.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-whitespace-only.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-whitespace-only.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-whitespace-only.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-whitespace-only.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-whitespace-only.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-whitespace-only.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-whitespace-only.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-whitespace-only.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-whitespace-only.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-whitespace-only.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-whitespace-only.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-whitespace-only.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-whitespace-only.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-whitespace-only.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-whitespace-only.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-whitespace-only.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-whitespace-only.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read✗ read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-whitespace-only.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-whitespace-only.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-whitespace-only.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-whitespace-only.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-whitespace-only.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-whitespace-only.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-whitespace-only.json) |

### bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-bom.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-bom.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-bom.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-bom.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-bom.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash✗ bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-bom.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-bom.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-bom.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-bom.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-bom.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-bom.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-bom.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-bom.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-bom.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-bom.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-bom.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-bom.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read bash✗` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-bom.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-bom.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-bom.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-bom.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash✗ bash` | [trace](traces/qwen3.8-flash/builtin-bash-bom.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-bom.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-bom.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-bom.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-bom.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-bom.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-bom.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-bom.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-bom.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-bom.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-bom.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-bom.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-bom.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-bom.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-bom.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-bom.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-bom.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-bom.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-bom.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-bom.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-bom.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-bom.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-bom.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-bom.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-bom.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-bom.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-bom.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit read edit✗ read read edit✗ read edit✗` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-bom.json) |

### crlf

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-crlf.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-crlf.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-crlf.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-crlf.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-crlf.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-crlf.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-crlf.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read grep` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-crlf.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash✗ bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-crlf.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-crlf.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-crlf.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-crlf.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-crlf.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-crlf.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-crlf.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-crlf.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-crlf.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-crlf.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-crlf.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-crlf.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-crlf.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-crlf.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-crlf.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit bash✗ read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-crlf.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-crlf.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-crlf.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-crlf.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-crlf.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-crlf.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-crlf.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-crlf.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-crlf.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read read edit read read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-crlf.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read read read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-crlf.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-crlf.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-crlf.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read grep grep edit read grep grep grep grep grep grep grep grep grep grep grep grep edit read grep grep grep grep grep` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-crlf.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-crlf.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-crlf.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-crlf.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-crlf.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-crlf.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-crlf.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read✗ read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-crlf.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-crlf.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-crlf.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read grep grep` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-crlf.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash✗ bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-crlf.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-crlf.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-crlf.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit✗ read✗ edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-crlf.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-crlf.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-crlf.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-crlf.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read edit✗ read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-crlf.json) |

### b12-noop-with-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit✗ edit edit read read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit✗ read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | noop | `bash bash bash✗ bash bash bash bash bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit✗` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b12-noop-with-drift.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/builtin-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read edit✗ read edit✗` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | noop | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | noop | `read edit✗ read edit edit✗ edit edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | noop | `bash bash bash✗ bash bash bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/pi-edit-guard-b12-noop-with-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/builtin-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ read edit✗ read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | noop | `read edit read edit✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | noop | `read edit✗ edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit✗ read read edit edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit✗ edit undo read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ read edit✗ edit edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ read read edit edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ read read read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash bash bash bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | noop | `read edit✗ edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | noop | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit✗ edit edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | noop | `bash bash bash bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit✗ edit edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit✗ read read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ read read read read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ read read edit✗ read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read✗` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗ read read read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ edit edit read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | error (crashed) | `read edit✗` | - |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | noop | `read edit✗ edit edit edit read read read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b12-noop-with-drift.json) |

### sub-line-token

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-sub-line-token.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-sub-line-token.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-sub-line-token.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-sub-line-token.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-sub-line-token.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-sub-line-token.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-sub-line-token.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-sub-line-token.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-sub-line-token.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-sub-line-token.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-sub-line-token.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-sub-line-token.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read✗ read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-sub-line-token.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-sub-line-token.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-sub-line-token.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-sub-line-token.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-sub-line-token.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-sub-line-token.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-sub-line-token.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-sub-line-token.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-sub-line-token.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-sub-line-token.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-sub-line-token.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-sub-line-token.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-sub-line-token.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-sub-line-token.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-sub-line-token.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-sub-line-token.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-sub-line-token.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-sub-line-token.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit✗ edit✗ edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-sub-line-token.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-sub-line-token.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-sub-line-token.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep glob✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-sub-line-token.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-sub-line-token.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-sub-line-token.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/builtin-edit-sub-line-token.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-sub-line-token.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-sub-line-token.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-sub-line-token.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-sub-line-token.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-sub-line-token.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `grep grep edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-sub-line-token.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-sub-line-token.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-sub-line-token.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-sub-line-token.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-sub-line-token.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-sub-line-token.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-sub-line-token.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-sub-line-token.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-sub-line-token.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-sub-line-token.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-sub-line-token.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/builtin-edit-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-sub-line-token.json) |

### replace-all

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-replace-all.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-replace-all.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-replace-all.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-replace-all.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-replace-all.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-replace-all.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-replace-all.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-replace-all.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-replace-all.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-replace-all.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-replace-all.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-replace-all.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-replace-all.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-replace-all.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read✗ read edit✗ edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-replace-all.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-replace-all.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-replace-all.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-replace-all.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-replace-all.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-replace-all.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-replace-all.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-replace-all.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-replace-all.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-replace-all.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-replace-all.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-replace-all.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-semantic-edit-replace-all.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep edit grep` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-replace-all.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash✗` | [trace](traces/qwen3.8-flash/builtin-bash-replace-all.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-replace-all.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-replace-all.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-replace-all.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-replace-all.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-replace-all.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read✗ read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-replace-all.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-replace-all.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-replace-all.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read grep` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-replace-all.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-replace-all.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-replace-all.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-replace-all.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-replace-all.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-replace-all.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-replace-all.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read✗ read✗` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-replace-all.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-replace-all.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-replace-all.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-replace-all.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-replace-all.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-replace-all.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-replace-all.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-replace-all.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-replace-all.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-replace-all.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read✗ read✗ read✗ edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-replace-all.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-replace-all.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-replace-all.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-replace-all.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-replace-all.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-replace-all.json) |

### batch-edits

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-batch-edits.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-batch-edits.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-batch-edits.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ❌ | applied (noop) | `read edit edit✗ read edit edit✗ read edit edit edit✗` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-batch-edits.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-batch-edits.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-batch-edits.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-batch-edits.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-batch-edits.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-batch-edits.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-batch-edits.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-batch-edits.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-batch-edits.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (noop) | `read✗ read edit edit read edit✗ edit✗ edit read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-batch-edits.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-batch-edits.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-batch-edits.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-batch-edits.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-batch-edits.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-batch-edits.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-batch-edits.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-batch-edits.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-batch-edits.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-batch-edits.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-batch-edits.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-batch-edits.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-batch-edits.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash✗ bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-batch-edits.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-batch-edits.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-batch-edits.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-batch-edits.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-batch-edits.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-batch-edits.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit edit edit edit edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-batch-edits.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-batch-edits.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-batch-edits.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-batch-edits.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-batch-edits.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-batch-edits.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-batch-edits.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-batch-edits.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit edit edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-batch-edits.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-batch-edits.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-batch-edits.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-batch-edits.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-batch-edits.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-batch-edits.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-batch-edits.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-batch-edits.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-batch-edits.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (noop) | `read edit✗ edit✗ read✗ read✗ edit read edit✗ read✗ read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-batch-edits.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-batch-edits.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-batch-edits.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-batch-edits.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-batch-edits.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/builtin-edit-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read read edit edit✗ edit edit read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (noop) | `read edit edit edit✗ edit edit edit read edit edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-batch-edits.json) |

### noop

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-noop.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-noop.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-noop.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-noop.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-noop.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit✗` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-noop.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-noop.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-noop.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-noop.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-noop.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/builtin-edit-noop.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-noop.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-noop.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-noop.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read✗ edit✗ read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-noop.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-noop.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit✗ edit edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-noop.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-noop.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-noop.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/pi-edit-guard-noop.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/builtin-edit-noop.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-noop.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-noop.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-noop.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-noop.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-noop.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read✗ read edit✗ edit edit` | [trace](traces/qwen3.8-flash/pi-semantic-edit-noop.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-noop.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-noop.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/pi-edit-guard-noop.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-flash/builtin-edit-noop.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-noop.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-noop.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-noop.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-noop.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-noop.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-noop.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-noop.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-noop.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit✗` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-noop.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-pro/builtin-edit-noop.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-noop.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-noop.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-noop.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit✗ read edit✗ edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-noop.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-noop.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit✗ edit edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-noop.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-noop.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-noop.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-noop.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-noop.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-noop.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-noop.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-noop.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-noop.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ read edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ edit✗ edit edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-noop.json) |

### unicode

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-unicode.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-unicode.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-unicode.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-unicode.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-unicode.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-unicode.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-unicode.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-unicode.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-unicode.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-unicode.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-unicode.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-unicode.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-unicode.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-unicode.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-unicode.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ edit✗ edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-unicode.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-unicode.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-unicode.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-unicode.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-unicode.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-unicode.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-unicode.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read bash✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-unicode.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-unicode.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-unicode.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-unicode.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-unicode.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-unicode.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-unicode.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-unicode.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-unicode.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-unicode.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-unicode.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-unicode.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-unicode.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-unicode.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-unicode.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-unicode.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-unicode.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-unicode.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-unicode.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-unicode.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit✗ read✗ read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-unicode.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-unicode.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-unicode.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `grep grep edit grep` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-unicode.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash bash✗ bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-unicode.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-unicode.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-unicode.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-unicode.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-unicode.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-unicode.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-unicode.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read✗ read✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-unicode.json) |

### insert-after

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-insert-after.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-insert-after.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-insert-after.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-insert-after.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-insert-after.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-insert-after.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-insert-after.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-insert-after.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-insert-after.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-insert-after.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-insert-after.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-insert-after.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-insert-after.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-after.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-after.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-insert-after.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-insert-after.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read edit✗` | [trace](traces/qwen3.8-flash/builtin-edit-insert-after.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-insert-after.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-insert-after.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-insert-after.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-insert-after.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-insert-after.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-insert-after.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-insert-after.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-insert-after.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-insert-after.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-insert-after.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-insert-after.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-insert-after.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-insert-after.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-insert-after.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-insert-after.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-insert-after.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-insert-after.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-insert-after.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-insert-after.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-insert-after.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-insert-after.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-insert-after.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-insert-after.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit✗ read✗ edit read edit read✗` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-insert-after.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-insert-after.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-insert-after.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-insert-after.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-insert-after.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-insert-after.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-after.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-insert-after.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-insert-after.json) |

### tabs

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-tabs.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-tabs.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-tabs.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-tabs.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-tabs.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-tabs.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-tabs.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-tabs.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-tabs.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-tabs.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-tabs.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-tabs.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-tabs.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-tabs.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-tabs.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-tabs.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-tabs.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-tabs.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-tabs.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-tabs.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-tabs.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-tabs.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-tabs.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-tabs.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-tabs.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-tabs.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash✗` | [trace](traces/qwen3.8-flash/builtin-bash-tabs.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-tabs.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-tabs.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-tabs.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-tabs.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-tabs.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-tabs.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-tabs.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-tabs.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `glob✗ grep read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-tabs.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-tabs.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-tabs.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-tabs.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-tabs.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-tabs.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-tabs.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit✗ edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-tabs.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-tabs.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-tabs.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-tabs.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-tabs.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-tabs.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-tabs.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read✗ read✗ edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-tabs.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-tabs.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-tabs.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-tabs.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read✗ read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-tabs.json) |

### no-trailing-newline

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash✗ bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-no-trailing-newline.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-no-trailing-newline.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-no-trailing-newline.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-no-trailing-newline.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit bash✗ read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash✗ bash bash✗ bash` | [trace](traces/qwen3.8-flash/builtin-bash-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-no-trailing-newline.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-no-trailing-newline.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-no-trailing-newline.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-no-trailing-newline.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read grep grep grep✗ grep grep grep grep grep✗ grep✗` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-no-trailing-newline.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-no-trailing-newline.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-no-trailing-newline.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-no-trailing-newline.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-no-trailing-newline.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-no-trailing-newline.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-no-trailing-newline.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-no-trailing-newline.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-no-trailing-newline.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash✗ bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-no-trailing-newline.json) |

### external-far

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-external-far.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-external-far.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-external-far.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-external-far.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-external-far.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-external-far.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-external-far.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-external-far.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-external-far.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-external-far.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-external-far.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-external-far.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-external-far.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-external-far.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-external-far.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-external-far.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-external-far.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-external-far.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-external-far.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-external-far.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-external-far.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-external-far.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-external-far.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-external-far.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-external-far.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-external-far.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-external-far.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-external-far.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-external-far.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-external-far.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-external-far.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-external-far.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-external-far.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-external-far.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-external-far.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-external-far.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-external-far.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-external-far.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-external-far.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-external-far.json) |
| MiMo-V2.6-Pro | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-external-far.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-external-far.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-external-far.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-external-far.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-external-far.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-external-far.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-external-far.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-external-far.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-external-far.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-external-far.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-external-far.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-external-far.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-external-far.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-external-far.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-external-far.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-external-far.json) |

### stale-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-stale-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-stale-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-stale-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-stale-range.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-stale-range.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-stale-range.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-stale-range.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-stale-range.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-stale-range.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-stale-range.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-stale-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read✗ read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-stale-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-stale-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-stale-range.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-stale-range.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-stale-range.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-stale-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-stale-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-stale-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-stale-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-stale-range.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-stale-range.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-stale-range.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-stale-range.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-stale-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-stale-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-stale-range.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-stale-range.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-stale-range.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit edit edit edit✗ edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-stale-range.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-stale-range.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-stale-range.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-stale-range.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-stale-range.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit edit✗ read read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-stale-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-stale-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-stale-range.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-stale-range.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read✗ read edit✗ read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-stale-range.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-stale-range.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-stale-range.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read grep edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-stale-range.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-stale-range.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | recovered | `read edit✗ read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-stale-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-stale-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read✗ read✗` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-stale-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | rejected | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read read✗ edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read edit read read read read read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `grep grep read edit✗ read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ read read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-stale-range.json) |

### formatter-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-formatter-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-formatter-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-formatter-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-formatter-drift.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-formatter-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-formatter-drift.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-formatter-drift.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-formatter-drift.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-formatter-drift.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-formatter-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-formatter-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-formatter-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-formatter-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-formatter-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-formatter-drift.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `grep edit✗ edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-formatter-drift.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-formatter-drift.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-formatter-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-formatter-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-formatter-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-formatter-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-formatter-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read read read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-formatter-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-formatter-drift.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-formatter-drift.json) |
| Qwen3.8-Flash | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash✗ bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-formatter-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-formatter-drift.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-formatter-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-formatter-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-formatter-drift.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-formatter-drift.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-formatter-drift.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-formatter-drift.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep glob✗ grep read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-formatter-drift.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-formatter-drift.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-formatter-drift.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read read edit read read` | [trace](traces/mimo-v2.6-pro/builtin-edit-formatter-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-formatter-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-formatter-drift.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit✗ edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-formatter-drift.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-formatter-drift.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-formatter-drift.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `grep grep read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-formatter-drift.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-formatter-drift.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-formatter-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-formatter-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-formatter-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-formatter-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-formatter-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-formatter-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-formatter-drift.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-formatter-drift.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash bash bash bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-formatter-drift.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `grep grep edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read✗ edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-formatter-drift.json) |

### anchor-stability

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-anchor-stability.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-anchor-stability.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-anchor-stability.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-anchor-stability.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit✗ edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-anchor-stability.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-anchor-stability.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-anchor-stability.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-anchor-stability.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-anchor-stability.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-anchor-stability.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ structure✗ read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-anchor-stability.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-semantic-edit-anchor-stability.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-anchor-stability.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-anchor-stability.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-edit-guard-anchor-stability.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-anchor-stability.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-anchor-stability.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-anchor-stability.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-anchor-stability.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-anchor-stability.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-anchor-stability.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-anchor-stability.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-anchor-stability.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-anchor-stability.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-anchor-stability.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-anchor-stability.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-anchor-stability.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-anchor-stability.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-anchor-stability.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-anchor-stability.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-anchor-stability.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-anchor-stability.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-anchor-stability.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-anchor-stability.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-anchor-stability.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-anchor-stability.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-anchor-stability.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-anchor-stability.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-anchor-stability.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-anchor-stability.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-anchor-stability.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-anchor-stability.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-anchor-stability.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-anchor-stability.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-anchor-stability.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-anchor-stability.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-anchor-stability.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-anchor-stability.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-anchor-stability.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-anchor-stability.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-anchor-stability.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-anchor-stability.json) |

### stale-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-stale-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-stale-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-stale-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit✗ edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-stale-line.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-stale-line.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-stale-line.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-stale-line.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-stale-line.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-stale-line.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-stale-line.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-stale-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-stale-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-stale-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-stale-line.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-stale-line.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-stale-line.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-stale-line.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-stale-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-stale-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-stale-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-stale-line.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-stale-line.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-stale-line.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-stale-line.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-stale-line.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-stale-line.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-stale-line.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-stale-line.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read✗ read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-stale-line.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-stale-line.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-stale-line.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-stale-line.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-stale-line.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-stale-line.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | recovered | `read edit read edit read read` | [trace](traces/mimo-v2.6-pro/builtin-edit-stale-line.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-stale-line.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-stale-line.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-stale-line.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read✗` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-stale-line.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-stale-line.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | recovered | `read edit edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-stale-line.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-stale-line.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-stale-line.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-stale-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-stale-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-stale-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit✗ edit` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-stale-line.json) |

### undo

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-undo.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-undo.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace undo_last_change` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-undo.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | undo | `read edit edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-undo.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | undo | `read edit edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-undo.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-undo.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-undo.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-undo.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | undo | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-undo.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-undo.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-undo.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-undo.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace undo_last_change` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-undo.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-undo.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-undo.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | undo | `read edit edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-undo.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-undo.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-undo.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | undo | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-undo.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | undo | `read edit read undo read` | [trace](traces/glm-5.3-flash/pi-edit-guard-undo.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/builtin-edit-undo.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-undo.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace undo_last_change read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-undo.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-undo.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | undo | `read edit edit read✗ read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-undo.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-undo.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-undo.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-undo.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | undo | `bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-undo.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | undo | `read edit undo read read✗ edit✗` | [trace](traces/qwen3.8-flash/pi-edit-guard-undo.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-undo.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-undo.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace undo_last_change read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-undo.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-undo.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | undo | `read edit edit read✗ read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-undo.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-undo.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-undo.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-undo.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | undo | `bash bash bash✗ bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-undo.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-undo.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-undo.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-undo.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace undo_last_change read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-undo.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | undo | `read edit edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-undo.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | undo | `read edit edit✗ edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-undo.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-undo.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-undo.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-undo.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | undo | `bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-undo.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-undo.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | undo | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace undo_last_change` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-undo.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | undo | `read edit edit✗ read✗ read✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-undo.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | undo | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | undo | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-undo.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-undo.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | undo | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-undo.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read read read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace undo_last_change` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | undo | `read edit edit edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | undo | `grep read edit read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | undo | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | undo | `read edit read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace undo_last_change` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | undo | `read edit read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | undo | `read edit edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | undo | `read edit edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | undo | `read edit edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | undo | `bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-undo.json) |

### delete-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-delete-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-delete-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-delete-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-delete-range.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-delete-range.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-delete-range.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-delete-range.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-delete-range.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-delete-range.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-delete-range.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-delete-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-delete-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-delete-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-delete-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-delete-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-delete-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-delete-range.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-delete-range.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-delete-range.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-delete-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-delete-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-delete-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-delete-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-delete-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-delete-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-delete-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-delete-range.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-delete-range.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-delete-range.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-delete-range.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-delete-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-delete-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-delete-range.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-delete-range.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-delete-range.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-delete-range.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-delete-range.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-delete-range.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash✗ bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-delete-range.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-delete-range.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-delete-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-delete-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-delete-range.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-delete-range.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-delete-range.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-delete-range.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-delete-range.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-delete-range.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-delete-range.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-delete-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-delete-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit✗ read edit read✗ read✗ read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-delete-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep grep read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-delete-range.json) |

### b15-large-range-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit read read edit edit✗ read read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b15-large-range-drift.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit edit edit edit edit edit edit✗` | [trace](traces/glm-5.3-flash/builtin-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read edit✗ edit read read read read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-b15-large-range-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read read read read read read read read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read read read edit read read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit edit read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b15-large-range-drift.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/mimo-v2.6-flash/builtin-edit-b15-large-range-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read read read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit read✗ read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read read read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b15-large-range-drift.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b15-large-range-drift.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read read read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | recovered | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ edit read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read read edit read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read edit edit edit edit edit✗` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit edit✗ read read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit edit✗ read edit read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read✗ read✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `grep grep read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read undo edit read edit✗ read read read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b15-large-range-drift.json) |

### error-guidance

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-error-guidance.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read✗ read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-error-guidance.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-error-guidance.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-error-guidance.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read✗ read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-error-guidance.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-error-guidance.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-error-guidance.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-error-guidance.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-error-guidance.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-error-guidance.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-error-guidance.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-error-guidance.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-error-guidance.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-error-guidance.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-error-guidance.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-error-guidance.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace✗ read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-error-guidance.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-error-guidance.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-error-guidance.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-error-guidance.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-error-guidance.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read edit` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-error-guidance.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-error-guidance.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-error-guidance.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | recovered | `read edit read edit read read` | [trace](traces/mimo-v2.6-pro/builtin-edit-error-guidance.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-error-guidance.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-error-guidance.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-error-guidance.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-error-guidance.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-error-guidance.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-error-guidance.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-error-guidance.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-error-guidance.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-error-guidance.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-error-guidance.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit read read edit read read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash✗ bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-error-guidance.json) |

### insert-eof

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read read edit read read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-insert-eof.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-insert-eof.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read grep grep read✗ grep edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-insert-eof.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-insert-eof.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-insert-eof.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-insert-eof.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-insert-eof.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-insert-eof.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-eof.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-insert-eof.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read grep edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-insert-eof.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-insert-eof.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-insert-eof.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-insert-eof.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read bash✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-insert-eof.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-insert-eof.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-insert-eof.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-insert-eof.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-insert-eof.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-insert-eof.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-insert-eof.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert✗ insert` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-insert-eof.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-insert-eof.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-insert-eof.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-insert-eof.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-insert-eof.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-insert-eof.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-insert-eof.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-insert-eof.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-insert-eof.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-insert-eof.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-insert-eof.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-insert-eof.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-insert-eof.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-insert-eof.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read edit undo read edit read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-insert-eof.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-eof.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-insert-eof.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read grep grep` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | error (crashed) | `read edit read` | - |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-insert-eof.json) |

### crlf-bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-crlf-bom.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-crlf-bom.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read grep grep grep grep read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash✗ bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-crlf-bom.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-crlf-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-crlf-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-crlf-bom.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf-bom.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-crlf-bom.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-crlf-bom.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-crlf-bom.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-crlf-bom.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-crlf-bom.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-crlf-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-crlf-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-crlf-bom.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read bash✗` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-crlf-bom.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-crlf-bom.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-crlf-bom.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-crlf-bom.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash✗ bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-crlf-bom.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-crlf-bom.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-crlf-bom.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-crlf-bom.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-crlf-bom.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-crlf-bom.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-crlf-bom.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read read✗ edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-crlf-bom.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read grep grep grep grep grep grep` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-crlf-bom.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash✗ bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-crlf-bom.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-crlf-bom.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-crlf-bom.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-crlf-bom.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-crlf-bom.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-crlf-bom.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-crlf-bom.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-crlf-bom.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read grep grep grep grep✗ grep grep grep grep grep grep grep grep` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-crlf-bom.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-crlf-bom.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-crlf-bom.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-crlf-bom.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-crlf-bom.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read read✗ read edit edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read✗ read✗ read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read✗ read✗ read✗ read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-crlf-bom.json) |

### insert-race-stale-boundary

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read edit read read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read read edit read read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash✗ bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit read read read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit✗ bash✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash bash bash✗ bash` | [trace](traces/qwen3.8-flash/builtin-bash-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit read read read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | recovered | `read read✗ edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read grep read grep read grep read grep edit read grep` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash bash bash bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash✗ bash bash bash bash bash bash bash bash bash✗` | [trace](traces/mimo-v2.6-pro/builtin-bash-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert read read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read✗ read edit read✗` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit read read read read read read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read read read read edit read read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read read read edit read read` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read read read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read grep edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | rejected | `read edit read read undo read read read read read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-insert-race-stale-boundary.json) |

### empty-file

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read✗ read read✗ edit✗ read edit✗ edit✗` | [trace](traces/deepseek-v4.1-flash/builtin-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-empty-file.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-empty-file.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-empty-file.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-empty-file.json) |
| DeepSeek V4.1 Flash | builtin-bash | ❌ | applied (applied-wrong) | `bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-empty-file.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ read✗ edit✗ edit✗ edit✗` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-empty-file.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `edit✗ edit✗ read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/glm-5.3-flash/builtin-edit-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-empty-file.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `edit✗ edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-empty-file.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (noop) | `edit✗ read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-empty-file.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-empty-file.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-empty-file.json) |
| GLM 5.3 Flash | builtin-bash | ❌ | applied (applied-wrong) | `bash` | [trace](traces/glm-5.3-flash/builtin-bash-empty-file.json) |
| GLM 5.3 Flash | pi-edit-guard | ❌ | applied (noop) | `read edit✗ edit✗` | [trace](traces/glm-5.3-flash/pi-edit-guard-empty-file.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ read edit✗ edit✗ read edit✗ read✗` | [trace](traces/qwen3.8-flash/builtin-edit-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace✗ replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-empty-file.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read read read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-empty-file.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ read read✗ edit✗ edit✗ read✗ edit✗ edit✗ read edit✗` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-empty-file.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-empty-file.json) |
| Qwen3.8-Flash | builtin-bash | ❌ | applied (applied-wrong) | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-empty-file.json) |
| Qwen3.8-Flash | pi-edit-guard | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ read edit✗ read` | [trace](traces/qwen3.8-flash/pi-edit-guard-empty-file.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-empty-file.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-empty-file.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-empty-file.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-empty-file.json) |
| MiMo 2.6 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read` | [trace](traces/mimo-v2.6-flash/builtin-edit-empty-file.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-empty-file.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-empty-file.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ❌ | applied (noop) | `edit✗ read read✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read✗ read✗ read✗` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-empty-file.json) |
| MiMo 2.6 Flash | builtin-bash | ❌ | applied (applied-wrong) | `bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-empty-file.json) |
| MiMo 2.6 Flash | pi-edit-guard | ❌ | applied (noop) | `edit✗ read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-empty-file.json) |
| MiMo-V2.6-Pro | builtin-edit | ❌ | applied (silent-wrong-line) | `edit✗ read` | [trace](traces/mimo-v2.6-pro/builtin-edit-empty-file.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-empty-file.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-empty-file.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-empty-file.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-empty-file.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-empty-file.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-empty-file.json) |
| MiMo-V2.6-Pro | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-empty-file.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ read✗ edit✗ edit✗ edit✗ read edit✗ edit✗ edit✗ edit✗ read read✗ read✗ read read read read read read✗` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-empty-file.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-empty-file.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read edit✗ read✗` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-empty-file.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read✗ edit✗ edit read✗ read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ❌ | applied (applied-wrong) | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ❌ | applied (noop) | `read edit✗ edit✗ undo✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit✗ edit✗ edit✗` | [trace](traces/qwen3.8-27b-q2/builtin-edit-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-nodedup-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | error (crashed) | `read edit✗ read edit✗ edit✗ edit✗ edit✗` | - |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-nodedup-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | error (crashed) | `read edit✗ read✗ edit✗ read✗ edit✗ edit✗` | - |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ read✗ read✗ edit✗ read edit✗ edit✗ edit✗ read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (noop) | `read edit✗ read✗ read edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-empty-file.json) |

## Failed runs — traces for validation

Every failed run is listed with its full transcript link (system prompt, user task, model reasoning, every tool call with arguments, every tool result, and the final file state).

| Model | Contender | Scenario | Outcome | Trace |
| --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | formatter-drift | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-formatter-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-insert-eof.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | batch-edits | applied (noop) | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-batch-edits.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-empty-file.json) |
| DeepSeek V4.1 Flash | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/builtin-bash-empty-file.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | formatter-drift | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-formatter-drift.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | empty-file | applied (noop) | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-empty-file.json) |
| GLM 5.3 Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-nth.json) |
| GLM 5.3 Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-import.json) |
| GLM 5.3 Flash | builtin-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-empty-file.json) |
| GLM 5.3 Flash | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-readmap | formatter-drift | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-readmap-formatter-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | crlf | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | delete-line | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-delete-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-empty-file.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | batch-edits | applied (noop) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-batch-edits.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-empty-file.json) |
| GLM 5.3 Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-semantic-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-empty-file.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | formatter-drift | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-formatter-drift.json) |
| GLM 5.3 Flash | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/glm-5.3-flash/builtin-bash-empty-file.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| GLM 5.3 Flash | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-edit-guard-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-edit-guard | empty-file | applied (noop) | [trace](traces/glm-5.3-flash/pi-edit-guard-empty-file.json) |
| Qwen3.8-Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-nth.json) |
| Qwen3.8-Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-import.json) |
| Qwen3.8-Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-readmap | formatter-drift | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-formatter-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | batch-edits | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-batch-edits.json) |
| Qwen3.8-Flash | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-insert-eof.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-empty-file.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-empty-file.json) |
| Qwen3.8-Flash | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| Qwen3.8-Flash | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/qwen3.8-flash/builtin-bash-empty-file.json) |
| Qwen3.8-Flash | builtin-bash | formatter-drift | applied (applied-wrong) | [trace](traces/qwen3.8-flash/builtin-bash-formatter-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-edit-guard-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | empty-file | applied (noop) | [trace](traces/qwen3.8-flash/pi-edit-guard-empty-file.json) |
| Qwen3.8-Flash | pi-edit-guard | formatter-drift | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-edit-guard-formatter-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/builtin-edit-duplicate-nth.json) |
| MiMo 2.6 Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/builtin-edit-duplicate-import.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| MiMo 2.6 Flash | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/builtin-edit-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-insert-eof.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-empty-file.json) |
| MiMo 2.6 Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/builtin-edit-empty-file.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | batch-edits | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-batch-edits.json) |
| MiMo 2.6 Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-duplicate-import.json) |
| MiMo 2.6 Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-duplicate-nth.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | stale-range | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-stale-range.json) |
| MiMo 2.6 Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-empty-file.json) |
| MiMo 2.6 Flash | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-empty-file.json) |
| MiMo 2.6 Flash | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/builtin-bash-empty-file.json) |
| MiMo 2.6 Flash | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | pi-edit-guard | empty-file | applied (noop) | [trace](traces/mimo-v2.6-flash/pi-edit-guard-empty-file.json) |
| MiMo-V2.6-Pro | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/builtin-edit-duplicate-nth.json) |
| MiMo-V2.6-Pro | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/builtin-edit-duplicate-import.json) |
| MiMo-V2.6-Pro | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/builtin-edit-empty-file.json) |
| MiMo-V2.6-Pro | builtin-edit | external-far | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/builtin-edit-external-far.json) |
| MiMo-V2.6-Pro | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/builtin-edit-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-empty-file.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | formatter-drift | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-formatter-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-insert-eof.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | batch-edits | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-batch-edits.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-duplicate-import.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-duplicate-nth.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-empty-file.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-insert-eof.json) |
| MiMo-V2.6-Pro | builtin-bash | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/builtin-bash-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/builtin-bash-empty-file.json) |
| MiMo-V2.6-Pro | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-empty-file.json) |
| MiMo-V2.6-Pro | pi-edit-guard | empty-file | applied (noop) | [trace](traces/mimo-v2.6-pro/pi-edit-guard-empty-file.json) |
| MiMo-V2.6-Pro | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/pi-edit-guard-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | builtin-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | formatter-drift | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-formatter-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-eof.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | batch-edits | applied (noop) | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-batch-edits.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/builtin-bash-empty-file.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | builtin-bash | stale-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-bash-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | empty-file | applied (noop) | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/builtin-edit-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/builtin-edit-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/builtin-edit-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/builtin-edit-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | formatter-drift | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | insert-eof | error (crashed) | - |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | batch-edits | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | empty-file | error (crashed) | - |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/builtin-bash-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | stale-line | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/builtin-bash-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | empty-file | applied (noop) | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | b17-reversed-range | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | b6-change-then-revert | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | stale-range | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | bom | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | empty-file | error (crashed) | - |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | stale-range | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | formatter-drift | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | whitespace-only | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | b6-change-then-revert | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | crlf-bom | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | b17-reversed-range | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | batch-edits | applied (noop) | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | stale-line | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | b6-change-then-revert | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | b17-reversed-range | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | b12-noop-with-drift | error (crashed) | - |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | stale-line | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | stale-range | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | formatter-drift | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | sub-line-token | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | b6-change-then-revert | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | b17-reversed-range | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b17-reversed-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | stale-line | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | empty-file | applied (noop) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-empty-file.json) |
