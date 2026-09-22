# pi edit-tool benchmark — LLM runs

Generated 2026-09-22T18:17:43.962Z. Real-model runs against opencode-go; the model drives each contender's actual tools through a tool-calling loop. Total API cost: $3.5903.

## Models

| Model | Runs | Passed | Pass rate | Avg steps | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | 380 | 357/380 | 94% | 3.0 | 7825 | $0.5314 |
| GLM 5.3 Flash | 380 | 354/380 | 93% | 2.9 | 5650 | $0.3548 |
| Qwen3.8-Flash | 380 | 356/380 | 94% | 3.6 | 8422 | $0.5621 |
| MiMo 2.6 Flash | 380 | 358/380 | 94% | 3.4 | 7240 | $0.4072 |
| MiMo-V2.6-Pro | 380 | 356/380 | 94% | 3.3 | 7259 | $1.2963 |
| Muse Spark 1.3 Contributor | 380 | 356/380 | 94% | 2.9 | 10126 | $0.4385 |

## Results — pass rate by model (rows) × tool (columns)

| Model | builtin-edit | pi-hashline-edit-pro | pi-hashline-edit-pro-nodedup | pi-hashline-readmap | @cortexkit/aft-pi | @xynogen/pix-edit | pi-semantic-edit | @agimon-ai/doompi-edit | builtin-bash | pi-edit-guard | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | 34/38 | 37/38 | 38/38 | 36/38 | 35/38 | 36/38 | 32/38 | 37/38 | 37/38 | 35/38 | 357/380 (94%) |
| GLM 5.3 Flash | 34/38 | 37/38 | 38/38 | 36/38 | 35/38 | 34/38 | 34/38 | 36/38 | 36/38 | 34/38 | 354/380 (93%) |
| Qwen3.8-Flash | 35/38 | 38/38 | 38/38 | 36/38 | 34/38 | 35/38 | 33/38 | 37/38 | 37/38 | 33/38 | 356/380 (94%) |
| MiMo 2.6 Flash | 35/38 | 37/38 | 38/38 | 35/38 | 35/38 | 36/38 | 33/38 | 37/38 | 37/38 | 35/38 | 358/380 (94%) |
| MiMo-V2.6-Pro | 31/38 | 37/38 | 38/38 | 35/38 | 36/38 | 36/38 | 34/38 | 37/38 | 37/38 | 35/38 | 356/380 (94%) |
| Muse Spark 1.3 Contributor | 33/38 | 37/38 | 38/38 | 35/38 | 36/38 | 36/38 | 33/38 | 37/38 | 36/38 | 35/38 | 356/380 (94%) |

## Per-tool totals (all models)

| Tool | Core (20) | Staleness (11) | Served-state (7) | Passed | Total | Pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| builtin-edit | 102/120 | 58/66 | 42/42 | 202 | 228 | 89% |
| pi-hashline-edit-pro | 120/120 | 66/66 | 37/42 | 223 | 228 | 98% |
| pi-hashline-edit-pro-nodedup | 120/120 | 66/66 | 42/42 | 228 | 228 | 100% |
| pi-hashline-readmap | 116/120 | 60/66 | 37/42 | 213 | 228 | 93% |
| @cortexkit/aft-pi | 107/120 | 63/66 | 41/42 | 211 | 228 | 93% |
| @xynogen/pix-edit | 114/120 | 57/66 | 42/42 | 213 | 228 | 93% |
| pi-semantic-edit | 102/120 | 55/66 | 42/42 | 199 | 228 | 87% |
| @agimon-ai/doompi-edit | 114/120 | 65/66 | 42/42 | 221 | 228 | 97% |
| builtin-bash | 113/120 | 65/66 | 42/42 | 220 | 228 | 96% |
| pi-edit-guard | 113/120 | 52/66 | 42/42 | 207 | 228 | 91% |

## Per-tool process (all models)

| Tool | Version | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- | --- |
| builtin-edit | 0.87.0 | 3.6 | 6552 | $0.0014 | 13 |
| pi-hashline-edit-pro | 4.3.8 | 2.9 | 8550 | $0.0016 | 7 |
| pi-hashline-edit-pro-nodedup | 4.3.8 | 2.9 | 8423 | $0.0016 | 7 |
| pi-hashline-readmap | 0.14.0 | 3.2 | 7365 | $0.0015 | 10 |
| @cortexkit/aft-pi | 0.57.1 | 3.2 | 11342 | $0.0023 | 10 |
| @xynogen/pix-edit | 0.2.5 | 3.4 | 6673 | $0.0015 | 37 |
| pi-semantic-edit | 0.4.0 | 3.0 | 6191 | $0.0013 | 12 |
| @agimon-ai/doompi-edit | 0.0.1-alpha.52 | 3.8 | 7644 | $0.0016 | 16 |
| builtin-bash | 0.87.0 | 3.2 | 7520 | $0.0013 | 12 |
| pi-edit-guard | 0.1.4 | 3.0 | 7277 | $0.0016 | 10 |

## Scenario detail

### b7-paged-read-gap

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b7-paged-read-gap.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b7-paged-read-gap.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-b7-paged-read-gap.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read bash✗` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b7-paged-read-gap.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b7-paged-read-gap.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b7-paged-read-gap.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b7-paged-read-gap.json) |

### single-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-single-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-single-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-single-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-single-line.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-single-line.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-single-line.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-single-line.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-single-line.json) |
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
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-single-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-single-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-single-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-single-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-single-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-single-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-single-line.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-single-line.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-single-line.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-single-line.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-single-line.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-single-line.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-single-line.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-single-line.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-single-line.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-single-line.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-single-line.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-single-line.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-single-line.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-single-line.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/builtin-edit-single-line.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-single-line.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-single-line.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-single-line.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-single-line.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-single-line.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-single-line.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-single-line.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-single-line.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-single-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-single-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-single-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-single-line.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-single-line.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-single-line.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-single-line.json) |

### b9-boundary-changed

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b9-boundary-changed.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-b9-boundary-changed.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash bash✗` | [trace](traces/qwen3.8-flash/builtin-bash-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b9-boundary-changed.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b9-boundary-changed.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b9-boundary-changed.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b9-boundary-changed.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-pro/builtin-edit-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b9-boundary-changed.json) |

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
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b8-blind-edit.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b8-blind-edit.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b8-blind-edit.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-b8-blind-edit.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b8-blind-edit.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b8-blind-edit.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b8-blind-edit.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b8-blind-edit.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b8-blind-edit.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b8-blind-edit.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b8-blind-edit.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b8-blind-edit.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b8-blind-edit.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b8-blind-edit.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b8-blind-edit.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b8-blind-edit.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b8-blind-edit.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b8-blind-edit.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b8-blind-edit.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b8-blind-edit.json) |

### duplicate-import

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-duplicate-import.json) |
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
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-duplicate-import.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-duplicate-import.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-duplicate-import.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-duplicate-import.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-duplicate-import.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-duplicate-import.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-import.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-duplicate-import.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-duplicate-import.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-duplicate-import.json) |
| MiMo 2.6 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-duplicate-import.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-duplicate-import.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-duplicate-import.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-duplicate-import.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-duplicate-import.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-duplicate-import.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-duplicate-import.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-duplicate-import.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-duplicate-import.json) |
| MiMo-V2.6-Pro | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-duplicate-import.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-duplicate-import.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-duplicate-import.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-duplicate-import.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-duplicate-import.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-duplicate-import.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-duplicate-import.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-duplicate-import.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-duplicate-import.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-duplicate-import.json) |

### b17-reversed-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b17-reversed-range.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b17-reversed-range.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b17-reversed-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-b17-reversed-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b17-reversed-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b17-reversed-range.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b17-reversed-range.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b17-reversed-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b17-reversed-range.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b17-reversed-range.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b17-reversed-range.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b17-reversed-range.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b17-reversed-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b17-reversed-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b17-reversed-range.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b17-reversed-range.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b17-reversed-range.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b17-reversed-range.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b17-reversed-range.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b17-reversed-range.json) |

### range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-range.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-range.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-range.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-range.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-range.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-range.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-range.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-range.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-range.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-range.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-range.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-range.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-range.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-range.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-range.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-range.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-range.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-range.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-range.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-range.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-range.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-range.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-range.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-range.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-range.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-range.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-range.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-range.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash✗ bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-range.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-range.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-range.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-range.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-range.json) |

### b13-chained-diff-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b13-chained-diff-edit.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/builtin-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit grep edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit grep edit` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b13-chained-diff-edit.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-flash/pi-edit-guard-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-flash/builtin-edit-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read edit` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b13-chained-diff-edit.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit grep edit grep` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b13-chained-diff-edit.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b13-chained-diff-edit.json) |

### duplicate-nth

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-duplicate-nth.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-duplicate-nth.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-duplicate-nth.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-nth.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-duplicate-nth.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-duplicate-nth.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-duplicate-nth.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-duplicate-nth.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-duplicate-nth.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-duplicate-nth.json) |
| MiMo 2.6 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-duplicate-nth.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-duplicate-nth.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-duplicate-nth.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-duplicate-nth.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-duplicate-nth.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-duplicate-nth.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-duplicate-nth.json) |
| MiMo-V2.6-Pro | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-duplicate-nth.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-duplicate-nth.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-duplicate-nth.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-duplicate-nth.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-duplicate-nth.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-duplicate-nth.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-duplicate-nth.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-duplicate-nth.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-duplicate-nth.json) |

### b12-noop-with-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit✗ read read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit✗` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b12-noop-with-drift.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash bash✗ bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b12-noop-with-drift.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/builtin-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit✗ read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | noop | `bash bash bash bash✗ bash bash bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-edit-guard-b12-noop-with-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit✗ read read` | [trace](traces/qwen3.8-flash/builtin-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read read read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ read read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit✗ edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b12-noop-with-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | noop | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/mimo-v2.6-flash/builtin-edit-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | noop | `read edit read read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | noop | `read edit✗ edit edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | noop | `bash bash bash bash bash bash bash bash bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b12-noop-with-drift.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | noop | `read edit✗ edit edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | noop | `read edit✗ edit edit read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit✗ read edit✗ read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit✗ read edit✗ read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit✗ edit edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b12-noop-with-drift.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit✗ read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b12-noop-with-drift.json) |

### delete-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-delete-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-delete-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-delete-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-delete-line.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-delete-line.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-delete-line.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-delete-line.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-delete-line.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-delete-line.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-delete-line.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-delete-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-delete-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-delete-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-delete-line.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-delete-line.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-delete-line.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-delete-line.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-delete-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-delete-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read read✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-delete-line.json) |
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
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-delete-line.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-delete-line.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-delete-line.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-delete-line.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-delete-line.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-delete-line.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-delete-line.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-delete-line.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-delete-line.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-delete-line.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-delete-line.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-delete-line.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-delete-line.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-delete-line.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-delete-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-delete-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-delete-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-delete-line.json) |

### whitespace-only

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-whitespace-only.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-whitespace-only.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-whitespace-only.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-whitespace-only.json) |
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
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-whitespace-only.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-whitespace-only.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-whitespace-only.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-whitespace-only.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-whitespace-only.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-whitespace-only.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-whitespace-only.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-whitespace-only.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-whitespace-only.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-whitespace-only.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-whitespace-only.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-whitespace-only.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-whitespace-only.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-whitespace-only.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-whitespace-only.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-whitespace-only.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-whitespace-only.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-whitespace-only.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-whitespace-only.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/builtin-edit-whitespace-only.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-whitespace-only.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-whitespace-only.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-whitespace-only.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-whitespace-only.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-whitespace-only.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-whitespace-only.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-whitespace-only.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-whitespace-only.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-whitespace-only.json) |

### b6-change-then-revert

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b6-change-then-revert.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b6-change-then-revert.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-b6-change-then-revert.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b6-change-then-revert.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b6-change-then-revert.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b6-change-then-revert.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b6-change-then-revert.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b6-change-then-revert.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b6-change-then-revert.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b6-change-then-revert.json) |

### b18-boundary-dup

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b18-boundary-dup.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read read` | [trace](traces/glm-5.3-flash/pi-edit-guard-b18-boundary-dup.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read edit edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b18-boundary-dup.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b18-boundary-dup.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace insert read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b18-boundary-dup.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b18-boundary-dup.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b18-boundary-dup.json) |

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
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-sub-line-token.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-sub-line-token.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-sub-line-token.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-sub-line-token.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-sub-line-token.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-sub-line-token.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-sub-line-token.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-sub-line-token.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-sub-line-token.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-sub-line-token.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-sub-line-token.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-sub-line-token.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-sub-line-token.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-sub-line-token.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-sub-line-token.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `bash✗ read edit read edit edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-sub-line-token.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-sub-line-token.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-sub-line-token.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-sub-line-token.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-sub-line-token.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read read read edit` | [trace](traces/qwen3.8-flash/pi-edit-guard-sub-line-token.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-sub-line-token.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-sub-line-token.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-sub-line-token.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-sub-line-token.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-sub-line-token.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-sub-line-token.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `glob✗ grep read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-sub-line-token.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-sub-line-token.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-sub-line-token.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-sub-line-token.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-sub-line-token.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-sub-line-token.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-sub-line-token.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-sub-line-token.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-sub-line-token.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-sub-line-token.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash bash✗` | [trace](traces/mimo-v2.6-pro/builtin-bash-sub-line-token.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-sub-line-token.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-sub-line-token.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-sub-line-token.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-sub-line-token.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-sub-line-token.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-sub-line-token.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-sub-line-token.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-sub-line-token.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-sub-line-token.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-sub-line-token.json) |

### unicode

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-unicode.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-unicode.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-unicode.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-unicode.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-unicode.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-unicode.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-unicode.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-unicode.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-unicode.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-unicode.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-unicode.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-unicode.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-unicode.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-unicode.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-unicode.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-unicode.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-unicode.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-unicode.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-unicode.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-unicode.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-unicode.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-unicode.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-unicode.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-unicode.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-unicode.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-unicode.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-unicode.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-unicode.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-unicode.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-unicode.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-unicode.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-unicode.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-unicode.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-unicode.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-unicode.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-unicode.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash✗ bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-unicode.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-unicode.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-unicode.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-unicode.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-unicode.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-unicode.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-unicode.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-unicode.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-unicode.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-unicode.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-unicode.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-unicode.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-unicode.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-unicode.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-unicode.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-unicode.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-unicode.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-unicode.json) |

### tabs

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-tabs.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-tabs.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-tabs.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-tabs.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-tabs.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-tabs.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-tabs.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-tabs.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-tabs.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-tabs.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-tabs.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-tabs.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-tabs.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-tabs.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-tabs.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-tabs.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-tabs.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-tabs.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-tabs.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-tabs.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-tabs.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-tabs.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-tabs.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-tabs.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-tabs.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-tabs.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-tabs.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-tabs.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-tabs.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-tabs.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-tabs.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-tabs.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-tabs.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-tabs.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-tabs.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-tabs.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-tabs.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-tabs.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-tabs.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-tabs.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-tabs.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-tabs.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-tabs.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-tabs.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-tabs.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-tabs.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-tabs.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-tabs.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-tabs.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-tabs.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-tabs.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-tabs.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-tabs.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-tabs.json) |

### bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-bom.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-bom.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-bom.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-bom.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-bom.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-bom.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-bom.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-bom.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-bom.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-bom.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-bom.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-bom.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-bom.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-bom.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-bom.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-bom.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-bom.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-bom.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-bom.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-bom.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-bom.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-bom.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-bom.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-bom.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-bom.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-bom.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-bom.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-bom.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-bom.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-bom.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-bom.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-bom.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-bom.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-bom.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-bom.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-bom.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-bom.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-bom.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-bom.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-bom.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-bom.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-bom.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-bom.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-bom.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-bom.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-bom.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-bom.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-bom.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-bom.json) |

### noop

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-noop.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-noop.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-noop.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read read✗ edit✗ read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-noop.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-noop.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-noop.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit✗ read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-noop.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-noop.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-noop.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-noop.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/builtin-edit-noop.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-noop.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-noop.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-noop.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-noop.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-noop.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-semantic-edit-noop.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-noop.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-noop.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-edit-guard-noop.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/builtin-edit-noop.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-noop.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-noop.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-noop.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-noop.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-noop.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit✗ edit edit edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-noop.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-noop.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-noop.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit✗ edit✗ read` | [trace](traces/qwen3.8-flash/pi-edit-guard-noop.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/mimo-v2.6-flash/builtin-edit-noop.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-noop.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-noop.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-noop.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-noop.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-noop.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-noop.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-noop.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-noop.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-noop.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-pro/builtin-edit-noop.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-noop.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-noop.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-noop.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-noop.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-noop.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-noop.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ edit edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-noop.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-noop.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit✗ edit edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-noop.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-noop.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-noop.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-noop.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-noop.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-noop.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-noop.json) |

### replace-all

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-replace-all.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-replace-all.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-replace-all.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-replace-all.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-replace-all.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-replace-all.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-replace-all.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-replace-all.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-replace-all.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-replace-all.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-replace-all.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-replace-all.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-replace-all.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-replace-all.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-replace-all.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-replace-all.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-replace-all.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-replace-all.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-replace-all.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-replace-all.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-replace-all.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-replace-all.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-replace-all.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-replace-all.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-replace-all.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-replace-all.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-replace-all.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-replace-all.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-replace-all.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-replace-all.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-replace-all.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-replace-all.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-replace-all.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-replace-all.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-replace-all.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-replace-all.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-replace-all.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read grep` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-replace-all.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-replace-all.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-replace-all.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-replace-all.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-replace-all.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-replace-all.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-replace-all.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-replace-all.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-replace-all.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-replace-all.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read grep` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-replace-all.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-replace-all.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-replace-all.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-replace-all.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-replace-all.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-replace-all.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-replace-all.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-replace-all.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-replace-all.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-replace-all.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-replace-all.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-replace-all.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-replace-all.json) |

### insert-after

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-insert-after.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-insert-after.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-insert-after.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-insert-after.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-insert-after.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-insert-after.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-insert-after.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-insert-after.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-insert-after.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-insert-after.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-insert-after.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-insert-after.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-insert-after.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-after.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-after.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-insert-after.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-insert-after.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-insert-after.json) |
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
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-insert-after.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-insert-after.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-insert-after.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-insert-after.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-insert-after.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-insert-after.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-insert-after.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read insert✗ insert read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-insert-after.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-insert-after.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-insert-after.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-insert-after.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-insert-after.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-insert-after.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-insert-after.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-insert-after.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-insert-after.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-after.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-insert-after.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-insert-after.json) |

### no-trailing-newline

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-no-trailing-newline.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-no-trailing-newline.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-no-trailing-newline.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-no-trailing-newline.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-no-trailing-newline.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read bash✗ read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-no-trailing-newline.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-no-trailing-newline.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-no-trailing-newline.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-no-trailing-newline.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-no-trailing-newline.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-no-trailing-newline.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-no-trailing-newline.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-no-trailing-newline.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-no-trailing-newline.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-no-trailing-newline.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-no-trailing-newline.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-no-trailing-newline.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-no-trailing-newline.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-no-trailing-newline.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-no-trailing-newline.json) |

### batch-edits

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-batch-edits.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-batch-edits.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-batch-edits.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-batch-edits.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-batch-edits.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-batch-edits.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-batch-edits.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-batch-edits.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-batch-edits.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-batch-edits.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-batch-edits.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-batch-edits.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit edit edit edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-batch-edits.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-batch-edits.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-batch-edits.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-batch-edits.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-batch-edits.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-batch-edits.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-batch-edits.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-batch-edits.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-batch-edits.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit edit edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-batch-edits.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-batch-edits.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-batch-edits.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-batch-edits.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-batch-edits.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-batch-edits.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-batch-edits.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-batch-edits.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-batch-edits.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-batch-edits.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-batch-edits.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-batch-edits.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-batch-edits.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-batch-edits.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-batch-edits.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-batch-edits.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-batch-edits.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-batch-edits.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-batch-edits.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit edit edit edit edit✗ edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-batch-edits.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-batch-edits.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-batch-edits.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-batch-edits.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-batch-edits.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-batch-edits.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-batch-edits.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace replace replace replace replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-batch-edits.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit edit read edit read edit read edit edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-batch-edits.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-batch-edits.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-batch-edits.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-batch-edits.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-batch-edits.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-batch-edits.json) |

### external-far

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-external-far.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-external-far.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-external-far.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-external-far.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-external-far.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-external-far.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-external-far.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-external-far.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-external-far.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-external-far.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-external-far.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-external-far.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-external-far.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-external-far.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-external-far.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-external-far.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-external-far.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-external-far.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-external-far.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-external-far.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-external-far.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-external-far.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-external-far.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-external-far.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-external-far.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-external-far.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-external-far.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-external-far.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-external-far.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-external-far.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-external-far.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-external-far.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-external-far.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-external-far.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-external-far.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-external-far.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-external-far.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `glob✗ grep read edit✗ read edit` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-external-far.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-external-far.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-external-far.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/builtin-edit-external-far.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-external-far.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-external-far.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-external-far.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-external-far.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-external-far.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-external-far.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-external-far.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-external-far.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-external-far.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-external-far.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-external-far.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-external-far.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-external-far.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-external-far.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-external-far.json) |

### crlf

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-crlf.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-crlf.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-crlf.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-crlf.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-crlf.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-crlf.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-crlf.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-crlf.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash bash bash bash✗ bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-crlf.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-crlf.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-crlf.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-crlf.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-crlf.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-crlf.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-crlf.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-crlf.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-crlf.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-crlf.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-crlf.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-crlf.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-crlf.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-crlf.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-crlf.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read bash✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-crlf.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit edit✗ read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-crlf.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-crlf.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-crlf.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-crlf.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-crlf.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-crlf.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-crlf.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-crlf.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-crlf.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-crlf.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-crlf.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-crlf.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read grep grep grep` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-crlf.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-crlf.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-crlf.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-crlf.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-crlf.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-crlf.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-crlf.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-crlf.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-crlf.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-crlf.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read grep` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-crlf.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-crlf.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-crlf.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-crlf.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-crlf.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-crlf.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-crlf.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-crlf.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-crlf.json) |

### anchor-stability

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-anchor-stability.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-anchor-stability.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-anchor-stability.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-anchor-stability.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-anchor-stability.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-anchor-stability.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-anchor-stability.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-anchor-stability.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-anchor-stability.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-anchor-stability.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-anchor-stability.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-anchor-stability.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-anchor-stability.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-anchor-stability.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-anchor-stability.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-anchor-stability.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-anchor-stability.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-anchor-stability.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-anchor-stability.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-anchor-stability.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-anchor-stability.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-anchor-stability.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-anchor-stability.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-anchor-stability.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-anchor-stability.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-anchor-stability.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-anchor-stability.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-anchor-stability.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-anchor-stability.json) |
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
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-anchor-stability.json) |

### formatter-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-formatter-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-formatter-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-formatter-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-formatter-drift.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-formatter-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-formatter-drift.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-formatter-drift.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-formatter-drift.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-formatter-drift.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-formatter-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-formatter-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-formatter-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-formatter-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-formatter-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-formatter-drift.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-formatter-drift.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-formatter-drift.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-formatter-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-formatter-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-formatter-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-formatter-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-formatter-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-formatter-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-formatter-drift.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-formatter-drift.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash✗ bash bash bash bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-formatter-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit read edit read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-formatter-drift.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-formatter-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-formatter-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-formatter-drift.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-formatter-drift.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-formatter-drift.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-formatter-drift.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `glob✗ grep grep read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-formatter-drift.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash bash bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-formatter-drift.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-formatter-drift.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/builtin-edit-formatter-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-formatter-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-formatter-drift.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-formatter-drift.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-formatter-drift.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-formatter-drift.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-formatter-drift.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-formatter-drift.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-formatter-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-formatter-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-formatter-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-formatter-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-formatter-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-formatter-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-formatter-drift.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-formatter-drift.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-formatter-drift.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-formatter-drift.json) |

### undo

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-undo.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-undo.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace undo_last_change read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-undo.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-undo.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | undo | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-undo.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | undo | `read edit edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-undo.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | undo | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-undo.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-undo.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | undo | `bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-undo.json) |
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
| GLM 5.3 Flash | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/glm-5.3-flash/pi-edit-guard-undo.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/builtin-edit-undo.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-undo.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace read undo_last_change read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-undo.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-undo.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-undo.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | undo | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-undo.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-undo.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | undo | `read grep edit read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-undo.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | undo | `bash bash bash bash✗ bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-undo.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/qwen3.8-flash/pi-edit-guard-undo.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-undo.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-undo.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace undo_last_change read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-undo.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-undo.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-undo.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-undo.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-undo.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-undo.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | undo | `bash bash bash bash bash bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-undo.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-undo.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-undo.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-undo.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace undo_last_change read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-undo.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-undo.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | undo | `read edit edit read edit✗ read edit` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-undo.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-undo.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-undo.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-undo.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | undo | `bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-undo.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-undo.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace undo_last_change read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-undo.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-undo.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-undo.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-undo.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | undo | `bash bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-undo.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | undo | `read edit undo` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-undo.json) |

### insert-eof

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-insert-eof.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-insert-eof.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-insert-eof.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-insert-eof.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-insert-eof.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-insert-eof.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit edit✗ read edit read edit read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-insert-eof.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-insert-eof.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-insert-eof.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-eof.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-insert-eof.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-insert-eof.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-insert-eof.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-insert-eof.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-insert-eof.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read bash✗ edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-insert-eof.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-insert-eof.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-insert-eof.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read grep grep edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-insert-eof.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-insert-eof.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-insert-eof.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-insert-eof.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-insert-eof.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-insert-eof.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-insert-eof.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-insert-eof.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read grep grep edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-insert-eof.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-insert-eof.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-insert-eof.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-insert-eof.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-insert-eof.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-insert-eof.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-insert-eof.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ❌ | error (crashed) | `read edit read` | - |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-insert-eof.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-insert-eof.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-insert-eof.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-eof.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-insert-eof.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-insert-eof.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-insert-eof.json) |

### delete-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-delete-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-delete-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-delete-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-delete-range.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-delete-range.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-delete-range.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-delete-range.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-delete-range.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-delete-range.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-delete-range.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-delete-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-delete-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-delete-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-delete-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-delete-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-delete-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-delete-range.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-delete-range.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-delete-range.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-delete-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-delete-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-delete-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-delete-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-delete-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read edit` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-delete-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-delete-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-delete-range.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-delete-range.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-delete-range.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-delete-range.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-delete-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-delete-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-delete-range.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-delete-range.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-delete-range.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-delete-range.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-delete-range.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-delete-range.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-delete-range.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-delete-range.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-delete-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-delete-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-delete-range.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-delete-range.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-delete-range.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-delete-range.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-delete-range.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-delete-range.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-delete-range.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-delete-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-delete-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-delete-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-delete-range.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-delete-range.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read read edit` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-delete-range.json) |

### stale-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-stale-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-stale-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-stale-range.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-stale-range.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-stale-range.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-stale-range.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-stale-range.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-stale-range.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-stale-range.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-stale-range.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-stale-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-stale-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-stale-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-stale-range.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-stale-range.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-stale-range.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-stale-range.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-stale-range.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-stale-range.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ bash✗ read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-stale-range.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-stale-range.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-stale-range.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-stale-range.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash✗ bash bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-stale-range.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-stale-range.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-stale-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace✗ replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-stale-range.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-stale-range.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-stale-range.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-stale-range.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-stale-range.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-stale-range.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-stale-range.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-stale-range.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-stale-range.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-stale-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-stale-range.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-stale-range.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-stale-range.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-stale-range.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-stale-range.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-stale-range.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-stale-range.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-stale-range.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-stale-range.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-stale-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-stale-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-stale-range.json) |

### stale-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-stale-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-stale-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-stale-line.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-stale-line.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-stale-line.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-stale-line.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-stale-line.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-stale-line.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-stale-line.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-stale-line.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-stale-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-stale-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-stale-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-stale-line.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-stale-line.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-stale-line.json) |
| GLM 5.3 Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-stale-line.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-stale-line.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-stale-line.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-stale-line.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-stale-line.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-stale-line.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-stale-line.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-stale-line.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-stale-line.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-stale-line.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-stale-line.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-stale-line.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-stale-line.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-stale-line.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-stale-line.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-stale-line.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `glob✗ grep read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-stale-line.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-stale-line.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-stale-line.json) |
| MiMo-V2.6-Pro | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-pro/builtin-edit-stale-line.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-stale-line.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-stale-line.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-stale-line.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-stale-line.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-stale-line.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-stale-line.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-stale-line.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-stale-line.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-stale-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-stale-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-stale-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-stale-line.json) |

### crlf-bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-crlf-bom.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-crlf-bom.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-crlf-bom.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | applied | `bash✗ bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-crlf-bom.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-crlf-bom.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-crlf-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-crlf-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-crlf-bom.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf-bom.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-crlf-bom.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-crlf-bom.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-crlf-bom.json) |
| GLM 5.3 Flash | builtin-bash | ❌ | applied (applied-wrong) | `bash✗ bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-crlf-bom.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-crlf-bom.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-crlf-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-crlf-bom.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-crlf-bom.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `Read✗ read read read read read read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-crlf-bom.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-crlf-bom.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-crlf-bom.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-crlf-bom.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-crlf-bom.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-crlf-bom.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-crlf-bom.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace✗ replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-crlf-bom.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read read edit read read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-crlf-bom.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-crlf-bom.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read edit✗` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-crlf-bom.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-crlf-bom.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read grep edit read grep grep grep grep grep grep grep grep read grep grep grep` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-crlf-bom.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-crlf-bom.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-crlf-bom.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-crlf-bom.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-crlf-bom.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-crlf-bom.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-crlf-bom.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-crlf-bom.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-crlf-bom.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read grep grep edit read grep grep grep grep grep grep grep` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-crlf-bom.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-crlf-bom.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-crlf-bom.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-crlf-bom.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-crlf-bom.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-crlf-bom.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-crlf-bom.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-crlf-bom.json) |

### error-guidance

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-error-guidance.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-error-guidance.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-error-guidance.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-error-guidance.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-error-guidance.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-error-guidance.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-error-guidance.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-error-guidance.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-error-guidance.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-error-guidance.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit` | [trace](traces/glm-5.3-flash/pi-edit-guard-error-guidance.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read str_replace_editor✗ edit read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-error-guidance.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-error-guidance.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-error-guidance.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-error-guidance.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-error-guidance.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-error-guidance.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-error-guidance.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-error-guidance.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-error-guidance.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-error-guidance.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-error-guidance.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-error-guidance.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-error-guidance.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-error-guidance.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-error-guidance.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-error-guidance.json) |
| MiMo-V2.6-Pro | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-pro/builtin-edit-error-guidance.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-error-guidance.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-error-guidance.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-error-guidance.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-error-guidance.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-error-guidance.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-error-guidance.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-error-guidance.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-error-guidance.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-error-guidance.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-error-guidance.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-error-guidance.json) |

### insert-race-stale-boundary

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit read edit✗ edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read edit read edit read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | recovered | `read edit read read edit read read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read edit read read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-insert-race-stale-boundary.json) |

### b10-duplicate-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/glm-5.3-flash/builtin-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-b10-duplicate-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/qwen3.8-flash/builtin-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace read` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit read read read read read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b10-duplicate-drift.json) |

### empty-file

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-empty-file.json) |
| DeepSeek V4.1 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read read edit✗ read edit✗ read✗ edit✗` | [trace](traces/deepseek-v4.1-flash/builtin-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-empty-file.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-empty-file.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-empty-file.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-empty-file.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ read edit✗ edit✗ edit✗ edit✗ edit✗ read edit✗` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-empty-file.json) |
| DeepSeek V4.1 Flash | builtin-bash | ❌ | applied (applied-wrong) | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-empty-file.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ❌ | applied (noop) | `read edit✗ edit✗` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-empty-file.json) |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/glm-5.3-flash/builtin-edit-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-empty-file.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-empty-file.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-empty-file.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-empty-file.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-empty-file.json) |
| GLM 5.3 Flash | builtin-bash | ❌ | applied (applied-wrong) | `bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-empty-file.json) |
| GLM 5.3 Flash | pi-edit-guard | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/glm-5.3-flash/pi-edit-guard-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-empty-file.json) |
| Qwen3.8-Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read edit✗ edit✗ read✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/qwen3.8-flash/builtin-edit-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-empty-file.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ write✗ edit✗ edit✗ edit✗ edit✗ read✗ edit✗` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-empty-file.json) |
| Qwen3.8-Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-empty-file.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-empty-file.json) |
| Qwen3.8-Flash | builtin-bash | ❌ | applied (applied-wrong) | `bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-empty-file.json) |
| Qwen3.8-Flash | pi-edit-guard | ❌ | applied (noop) | `read edit✗ edit✗ read edit✗` | [trace](traces/qwen3.8-flash/pi-edit-guard-empty-file.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-empty-file.json) |
| MiMo 2.6 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit✗ edit✗ edit✗` | [trace](traces/mimo-v2.6-flash/builtin-edit-empty-file.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-empty-file.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-empty-file.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-empty-file.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ read✗ read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-empty-file.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit✗ read edit✗ read edit✗ read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-empty-file.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-empty-file.json) |
| MiMo 2.6 Flash | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash` | [trace](traces/mimo-v2.6-flash/builtin-bash-empty-file.json) |
| MiMo 2.6 Flash | pi-edit-guard | ❌ | applied (noop) | `read edit✗ edit✗ edit✗` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-empty-file.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-empty-file.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-empty-file.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-empty-file.json) |
| MiMo-V2.6-Pro | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read read✗ read` | [trace](traces/mimo-v2.6-pro/builtin-edit-empty-file.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-empty-file.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-empty-file.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-empty-file.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-empty-file.json) |
| MiMo-V2.6-Pro | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-empty-file.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ❌ | applied (noop) | `read edit✗ read✗ read edit✗ edit✗ edit✗ edit✗` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-empty-file.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-empty-file.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-empty-file.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ❌ | applied (applied-wrong) | `bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ❌ | applied (noop) | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-empty-file.json) |

### b15-large-range-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/builtin-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read edit✗ edit✗ read read read edit read` | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/deepseek-v4.1-flash/builtin-bash-b15-large-range-drift.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit edit✗ read read read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit read read read read read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read grep edit read` | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/glm-5.3-flash/builtin-bash-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-edit-guard | ✅ | recovered | `read edit read undo read edit read` | [trace](traces/glm-5.3-flash/pi-edit-guard-b15-large-range-drift.json) |
| Qwen3.8-Flash | builtin-edit | ✅ | recovered | `read read read edit✗ read read edit read read` | [trace](traces/qwen3.8-flash/builtin-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read read replace✗ read read replace read` | [trace](traces/qwen3.8-flash/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit edit read edit read` | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | ✅ | recovered | `read read read read edit read` | [trace](traces/qwen3.8-flash/pi-semantic-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Qwen3.8-Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash` | [trace](traces/qwen3.8-flash/builtin-bash-b15-large-range-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | ✅ | recovered | `read read read read read read edit read` | [trace](traces/qwen3.8-flash/pi-edit-guard-b15-large-range-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| MiMo 2.6 Flash | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit read edit read` | [trace](traces/mimo-v2.6-flash/builtin-edit-b15-large-range-drift.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit read` | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| MiMo 2.6 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b15-large-range-drift.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ grep read edit read` | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| MiMo 2.6 Flash | builtin-bash | ✅ | recovered | `bash bash bash bash bash✗` | [trace](traces/mimo-v2.6-flash/builtin-bash-b15-large-range-drift.json) |
| MiMo 2.6 Flash | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace` | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit edit edit✗ edit read edit read` | [trace](traces/mimo-v2.6-pro/builtin-edit-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit edit✗ edit edit✗ edit✗ read` | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | builtin-bash | ✅ | recovered | `bash bash bash bash bash` | [trace](traces/mimo-v2.6-pro/builtin-bash-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/mimo-v2.6-pro/pi-edit-guard-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ edit read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read edit✗ edit read read read read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash` | [trace](traces/muse-spark-1.3-contributor/builtin-bash-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b15-large-range-drift.json) |

## Failed runs — traces for validation

Every failed run is listed with its full transcript link (system prompt, user task, model reasoning, every tool call with arguments, every tool result, and the final file state).

| Model | Contender | Scenario | Outcome | Trace |
| --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-b9-boundary-changed.json) |
| DeepSeek V4.1 Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/builtin-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| DeepSeek V4.1 Flash | pi-hashline-readmap | formatter-drift | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/pi-hashline-readmap-formatter-drift.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-empty-file.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | stale-line | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-stale-line.json) |
| DeepSeek V4.1 Flash | @cortexkit/aft-pi | batch-edits | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/_cortexkit_aft-pi-batch-edits.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-duplicate-nth.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-duplicate-import.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | stale-line | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-stale-line.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-empty-file.json) |
| DeepSeek V4.1 Flash | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/deepseek-v4.1-flash/_xynogen_pix-edit-empty-file.json) |
| DeepSeek V4.1 Flash | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| DeepSeek V4.1 Flash | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/deepseek-v4.1-flash/builtin-bash-empty-file.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-b10-duplicate-drift.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| DeepSeek V4.1 Flash | pi-edit-guard | empty-file | applied (noop) | [trace](traces/deepseek-v4.1-flash/pi-edit-guard-empty-file.json) |
| GLM 5.3 Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-nth.json) |
| GLM 5.3 Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-import.json) |
| GLM 5.3 Flash | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| GLM 5.3 Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/builtin-edit-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-readmap | formatter-drift | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-readmap-formatter-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | b17-reversed-range | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/glm-5.3-flash/pi-hashline-readmap-insert-eof.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-empty-file.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | crlf-bom | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf-bom.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-empty-file.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-error-guidance.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-semantic-edit-empty-file.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| GLM 5.3 Flash | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/glm-5.3-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| GLM 5.3 Flash | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/glm-5.3-flash/builtin-bash-empty-file.json) |
| GLM 5.3 Flash | builtin-bash | crlf-bom | applied (applied-wrong) | [trace](traces/glm-5.3-flash/builtin-bash-crlf-bom.json) |
| GLM 5.3 Flash | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-edit-guard-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-edit-guard | empty-file | applied (noop) | [trace](traces/glm-5.3-flash/pi-edit-guard-empty-file.json) |
| GLM 5.3 Flash | pi-edit-guard | stale-line | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-edit-guard-stale-line.json) |
| GLM 5.3 Flash | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/glm-5.3-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-nth.json) |
| Qwen3.8-Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-duplicate-import.json) |
| Qwen3.8-Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/builtin-edit-empty-file.json) |
| Qwen3.8-Flash | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.8-Flash | pi-hashline-readmap | formatter-drift | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-hashline-readmap-formatter-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | batch-edits | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-batch-edits.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | formatter-drift | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-formatter-drift.json) |
| Qwen3.8-Flash | @cortexkit/aft-pi | crlf-bom | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_cortexkit_aft-pi-crlf-bom.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | formatter-drift | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-formatter-drift.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.8-Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-duplicate-import.json) |
| Qwen3.8-Flash | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/qwen3.8-flash/_xynogen_pix-edit-empty-file.json) |
| Qwen3.8-Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-empty-file.json) |
| Qwen3.8-Flash | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| Qwen3.8-Flash | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/qwen3.8-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| Qwen3.8-Flash | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/qwen3.8-flash/builtin-bash-empty-file.json) |
| Qwen3.8-Flash | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-edit-guard-b10-duplicate-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-edit-guard-b9-boundary-changed.json) |
| Qwen3.8-Flash | pi-edit-guard | empty-file | applied (noop) | [trace](traces/qwen3.8-flash/pi-edit-guard-empty-file.json) |
| Qwen3.8-Flash | pi-edit-guard | formatter-drift | applied (applied-wrong) | [trace](traces/qwen3.8-flash/pi-edit-guard-formatter-drift.json) |
| Qwen3.8-Flash | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/builtin-edit-duplicate-import.json) |
| MiMo 2.6 Flash | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/builtin-edit-duplicate-nth.json) |
| MiMo 2.6 Flash | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| MiMo 2.6 Flash | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/builtin-edit-empty-file.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | stale-line | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-stale-line.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-empty-file.json) |
| MiMo 2.6 Flash | @cortexkit/aft-pi | batch-edits | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/_cortexkit_aft-pi-batch-edits.json) |
| MiMo 2.6 Flash | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/pi-hashline-readmap-insert-eof.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-error-guidance.json) |
| MiMo 2.6 Flash | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/mimo-v2.6-flash/_xynogen_pix-edit-empty-file.json) |
| MiMo 2.6 Flash | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-duplicate-nth.json) |
| MiMo 2.6 Flash | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-duplicate-import.json) |
| MiMo 2.6 Flash | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-empty-file.json) |
| MiMo 2.6 Flash | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-semantic-edit-insert-race-stale-boundary.json) |
| MiMo 2.6 Flash | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/_agimon-ai_doompi-edit-insert-eof.json) |
| MiMo 2.6 Flash | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/mimo-v2.6-flash/builtin-bash-empty-file.json) |
| MiMo 2.6 Flash | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-edit-guard-b10-duplicate-drift.json) |
| MiMo 2.6 Flash | pi-edit-guard | empty-file | applied (noop) | [trace](traces/mimo-v2.6-flash/pi-edit-guard-empty-file.json) |
| MiMo 2.6 Flash | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-flash/pi-edit-guard-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/builtin-edit-b9-boundary-changed.json) |
| MiMo-V2.6-Pro | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/builtin-edit-duplicate-import.json) |
| MiMo-V2.6-Pro | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/builtin-edit-duplicate-nth.json) |
| MiMo-V2.6-Pro | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/builtin-edit-stale-line.json) |
| MiMo-V2.6-Pro | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/builtin-edit-error-guidance.json) |
| MiMo-V2.6-Pro | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/builtin-edit-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/pi-hashline-edit-pro-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-b18-boundary-dup.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | formatter-drift | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/pi-hashline-readmap-formatter-drift.json) |
| MiMo-V2.6-Pro | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/builtin-edit-empty-file.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-empty-file.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-empty-file.json) |
| MiMo-V2.6-Pro | @cortexkit/aft-pi | batch-edits | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/_cortexkit_aft-pi-batch-edits.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-b10-duplicate-drift.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-duplicate-nth.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-duplicate-import.json) |
| MiMo-V2.6-Pro | @xynogen/pix-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/_xynogen_pix-edit-b15-large-range-drift.json) |
| MiMo-V2.6-Pro | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/pi-semantic-edit-empty-file.json) |
| MiMo-V2.6-Pro | pi-hashline-readmap | insert-eof | error (crashed) | - |
| MiMo-V2.6-Pro | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/_agimon-ai_doompi-edit-insert-eof.json) |
| MiMo-V2.6-Pro | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/builtin-bash-empty-file.json) |
| MiMo-V2.6-Pro | pi-edit-guard | crlf-bom | applied (applied-wrong) | [trace](traces/mimo-v2.6-pro/pi-edit-guard-crlf-bom.json) |
| MiMo-V2.6-Pro | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/mimo-v2.6-pro/pi-edit-guard-insert-race-stale-boundary.json) |
| MiMo-V2.6-Pro | pi-edit-guard | empty-file | applied (noop) | [trace](traces/mimo-v2.6-pro/pi-edit-guard-empty-file.json) |
| Muse Spark 1.3 Contributor | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | builtin-edit | empty-file | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | builtin-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | formatter-drift | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-formatter-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-eof.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | batch-edits | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-batch-edits.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-race-stale-boundary.json) |
| Muse Spark 1.3 Contributor | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/_agimon-ai_doompi-edit-insert-eof.json) |
| Muse Spark 1.3 Contributor | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/muse-spark-1.3-contributor/builtin-bash-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | builtin-bash | stale-line | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/builtin-bash-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | empty-file | applied (noop) | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/muse-spark-1.3-contributor/pi-edit-guard-insert-race-stale-boundary.json) |
