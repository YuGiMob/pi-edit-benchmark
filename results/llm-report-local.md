# pi edit-tool benchmark — LLM runs

Generated 2026-09-23T11:07:52.505Z. Real-model runs against llamacpp; the model drives each contender's actual tools through a tool-calling loop. Total API cost: $0.0000. Read mandate off.

## Models

| Model | Runs | Passed | Pass rate | Avg steps | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | 380 | 357/380 | 94% | 3.3 | 8141 | $0.0000 |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | 380 | 327/380 | 86% | 3.3 | 6492 | $0.0000 |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | 380 | 281/380 | 74% | 5.4 | 12291 | $0.0000 |

## Results — pass rate by model (rows) × tool (columns)

| Model | builtin-edit | pi-hashline-edit-pro | pi-hashline-edit-pro-nodedup | pi-hashline-readmap | @cortexkit/aft-pi | @xynogen/pix-edit | pi-semantic-edit | @agimon-ai/doompi-edit | builtin-bash | pi-edit-guard | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | 34/38 | 37/38 | 38/38 | 35/38 | 35/38 | 37/38 | 33/38 | 37/38 | 36/38 | 35/38 | 357/380 (94%) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | 29/38 | 38/38 | 38/38 | 33/38 | 33/38 | 30/38 | 27/38 | 36/38 | 34/38 | 29/38 | 327/380 (86%) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | 32/38 | 26/38 | 24/38 | 24/38 | 31/38 | 33/38 | 30/38 | 14/38 | 33/38 | 34/38 | 281/380 (74%) |

## Per-tool totals (all models)

| Tool | Core (20) | Staleness (11) | Served-state (7) | Passed | Total | Pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| builtin-edit | 50/60 | 27/33 | 18/21 | 95 | 114 | 83% |
| pi-hashline-edit-pro | 52/60 | 31/33 | 18/21 | 101 | 114 | 89% |
| pi-hashline-edit-pro-nodedup | 52/60 | 29/33 | 19/21 | 100 | 114 | 88% |
| pi-hashline-readmap | 49/60 | 26/33 | 17/21 | 92 | 114 | 81% |
| @cortexkit/aft-pi | 50/60 | 29/33 | 20/21 | 99 | 114 | 87% |
| @xynogen/pix-edit | 55/60 | 26/33 | 19/21 | 100 | 114 | 88% |
| pi-semantic-edit | 50/60 | 21/33 | 19/21 | 90 | 114 | 79% |
| @agimon-ai/doompi-edit | 42/60 | 26/33 | 19/21 | 87 | 114 | 76% |
| builtin-bash | 55/60 | 29/33 | 19/21 | 103 | 114 | 90% |
| pi-edit-guard | 57/60 | 22/33 | 19/21 | 98 | 114 | 86% |

## Per-tool process (all models)

| Tool | Version | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- | --- |
| builtin-edit | 0.87.0 | 3.8 | 6504 | $0.0000 | 10 |
| pi-hashline-edit-pro | 4.3.8 | 4.3 | 12418 | $0.0000 | 18 |
| pi-hashline-edit-pro-nodedup | 4.3.8 | 3.8 | 11651 | $0.0000 | 13 |
| pi-hashline-readmap | 0.14.0 | 5.0 | 10988 | $0.0000 | 10 |
| @cortexkit/aft-pi | 0.57.1 | 3.6 | 11688 | $0.0000 | 11 |
| @xynogen/pix-edit | 0.2.5 | 3.4 | 6171 | $0.0000 | 10 |
| pi-semantic-edit | 0.4.0 | 3.3 | 6491 | $0.0000 | 10 |
| @agimon-ai/doompi-edit | 0.0.1-alpha.52 | 5.2 | 10906 | $0.0000 | 11 |
| builtin-bash | 0.87.0 | 4.0 | 4209 | $0.0000 | 10 |
| pi-edit-guard | 0.1.5 | 3.6 | 8721 | $0.0000 | 15 |

## Scenario detail

### b8-blind-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-b8-blind-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read read replace read undo_last_change read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-b8-blind-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-b8-blind-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit✗ edit edit✗ read read edit✗ read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-b8-blind-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-b8-blind-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-b8-blind-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b8-blind-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | noop | `read edit✗ read edit✗ edit✗ read edit✗ read edit✗ read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-b8-blind-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-b8-blind-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-b8-blind-edit.json) |

### b7-paged-read-gap

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-b7-paged-read-gap.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | noop | `read replace read undo_last_change undo_last_change✗ read replace read undo_last_change read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read replace` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-b7-paged-read-gap.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-b7-paged-read-gap.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-b7-paged-read-gap.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b7-paged-read-gap.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | noop | `read edit✗ grep edit✗ grep edit✗ read edit✗ read edit✗` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-b7-paged-read-gap.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-b7-paged-read-gap.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-b7-paged-read-gap.json) |

### b6-change-then-revert

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit edit✗ read` | [trace](traces/minicpm5-2b-q4/builtin-edit-b6-change-then-revert.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-b6-change-then-revert.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-b6-change-then-revert.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-b6-change-then-revert.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-b6-change-then-revert.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-b6-change-then-revert.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b6-change-then-revert.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit✗ read edit✗ edit read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-b6-change-then-revert.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-b6-change-then-revert.json) |

### b9-boundary-changed

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-b9-boundary-changed.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-b9-boundary-changed.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-b9-boundary-changed.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit✗ edit read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-b9-boundary-changed.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-b9-boundary-changed.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit read read edit edit✗ read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-b9-boundary-changed.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b9-boundary-changed.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-b9-boundary-changed.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-b9-boundary-changed.json) |

### b17-reversed-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-b17-reversed-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-b17-reversed-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-b17-reversed-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | noop | `read edit✗ edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-b17-reversed-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-b17-reversed-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-b17-reversed-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b17-reversed-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-b17-reversed-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-b17-reversed-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-b17-reversed-range.json) |

### b13-chained-diff-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-b13-chained-diff-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (applied-wrong) | `read replace read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-b13-chained-diff-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b13-chained-diff-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit✗ edit read read read read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-b13-chained-diff-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-b13-chained-diff-edit.json) |

### single-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-single-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read undo_last_change read replace read undo_last_change read replace` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-single-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (noop) | `read replace✗ replace read undo_last_change replace✗ read replace read undo_last_change` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-single-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read edit✗ read edit✗ read edit✗ read edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-single-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-single-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-single-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-single-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (noop) | `read edit✗ edit✗ read grep edit✗ edit✗ read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-single-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-single-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-single-line.json) |

### b18-boundary-dup

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (applied-wrong) | `read edit edit✗ read read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace replace✗ read replace replace read read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit edit✗ read read edit read edit read edit` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read read read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-b18-boundary-dup.json) |

### range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit edit✗ read` | [trace](traces/minicpm5-2b-q4/builtin-edit-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit✗ edit✗ edit` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (noop) | `read edit✗ edit✗ read edit✗ read read read edit✗ read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-range.json) |

### delete-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-delete-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-delete-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-delete-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit✗ edit edit✗ edit read edit✗ edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-delete-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit read edit✗ edit` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-delete-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-delete-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read edit` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-delete-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit✗ edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-delete-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-delete-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-delete-line.json) |

### duplicate-import

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-duplicate-import.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read undo_last_change read replace✗ read replace read insert` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-duplicate-import.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-duplicate-import.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit edit✗ read edit✗ read edit✗ read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-duplicate-import.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read✗ read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-duplicate-import.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-duplicate-import.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-duplicate-import.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-duplicate-import.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash✗ bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-duplicate-import.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit undo read edit read read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-duplicate-import.json) |

### whitespace-only

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit edit✗ read` | [trace](traces/minicpm5-2b-q4/builtin-edit-whitespace-only.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-whitespace-only.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-whitespace-only.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ read edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-whitespace-only.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-whitespace-only.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-whitespace-only.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-whitespace-only.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ read edit✗ edit✗ edit read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-whitespace-only.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-whitespace-only.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-whitespace-only.json) |

### duplicate-nth

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace✗ replace replace✗ read read replace✗ replace undo_last_change read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (applied-wrong) | `read replace` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read read read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ edit✗ grep grep edit✗ edit read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗ edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-duplicate-nth.json) |

### b10-duplicate-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read edit` | [trace](traces/minicpm5-2b-q4/builtin-edit-b10-duplicate-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | rejected | `read replace✗ replace read read read read read undo_last_change read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (silent-wrong-line) | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit✗ edit read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-b10-duplicate-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read edit` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-b10-duplicate-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b10-duplicate-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | error (crashed) | `read edit✗ edit✗ read edit✗ read` | - |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash✗ bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-b10-duplicate-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-b10-duplicate-drift.json) |

### bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read read read undo_last_change✗ read undo_last_change✗ read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read read read undo_last_change✗ read replace undo_last_change✗ read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ read read edit✗ edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ edit read read read read read read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read undo read edit edit✗ read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-bom.json) |

### sub-line-token

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read read read replace✗ read replace✗ replace✗ read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read replace undo_last_change read read read read replace` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit✗ edit✗ edit edit✗ edit✗ edit read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ edit read read read read read read grep` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash✗ bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-sub-line-token.json) |

### noop

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/minicpm5-2b-q4/builtin-edit-noop.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-noop.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-noop.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read edit✗ edit edit✗ read edit✗ read edit` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-noop.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-noop.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-noop.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-noop.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ edit read read read edit✗ read read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-noop.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-noop.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-noop.json) |

### b12-noop-with-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/minicpm5-2b-q4/builtin-edit-b12-noop-with-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-b12-noop-with-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-b12-noop-with-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-b12-noop-with-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b12-noop-with-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-b12-noop-with-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-b12-noop-with-drift.json) |

### insert-after

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert read read read read undo_last_change read read insert` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (applied-wrong) | `read replace read undo_last_change read insert read undo_last_change read insert` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ edit✗ read edit read read read read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-insert-after.json) |

### batch-edits

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace✗ replace✗ replace✗ replace✗ replace✗ replace replace replace replace replace read read insert✗ insert read replace✗ read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (applied-wrong) | `read read replace replace read read replace read replace undo_last_change` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit✗ edit read read read edit✗ edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (noop) | `read edit edit edit edit read edit edit✗ edit edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (noop) | `read edit✗ read edit✗ read edit✗ edit✗ read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-batch-edits.json) |

### replace-all

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-replace-all.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace replace read read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-replace-all.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (applied-wrong) | `read replace✗ replace✗ replace✗ replace✗ replace undo_last_change read replace✗ replace read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-replace-all.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ read edit✗ edit✗ read edit read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-replace-all.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-replace-all.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-replace-all.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-replace-all.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit✗ edit✗ edit read read read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-replace-all.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-replace-all.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-replace-all.json) |

### tabs

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace✗ replace read read read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit✗ edit read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (noop) | `read edit✗ edit✗ read edit✗` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-tabs.json) |

### unicode

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-unicode.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-unicode.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (applied-wrong) | `read replace read read read read read read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-unicode.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read edit✗ edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-unicode.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-unicode.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-unicode.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-unicode.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ read edit✗ edit✗ edit read read read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-unicode.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-unicode.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-unicode.json) |

### crlf

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-crlf.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-crlf.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace✗ replace read read replace✗ read replace read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-crlf.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit✗ read edit✗ edit✗ edit✗ edit read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-crlf.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit✗ edit✗ edit✗ read read read edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-crlf.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-crlf.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-crlf.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-crlf.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-crlf.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-crlf.json) |

### no-trailing-newline

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read read` | [trace](traces/minicpm5-2b-q4/builtin-edit-no-trailing-newline.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read replace read read read undo_last_change read replace` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-no-trailing-newline.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-no-trailing-newline.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-no-trailing-newline.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-no-trailing-newline.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-no-trailing-newline.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-no-trailing-newline.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ read edit read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-no-trailing-newline.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-no-trailing-newline.json) |

### formatter-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read edit✗` | [trace](traces/minicpm5-2b-q4/builtin-edit-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace✗ read replace read replace read read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (applied-wrong) | `read replace✗ read replace read insert read undo_last_change read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | rejected (no-recovery) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ grep edit read read read grep read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-formatter-drift.json) |

### external-far

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-external-far.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-external-far.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-external-far.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read read read read edit✗ read read edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-external-far.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-external-far.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-external-far.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-external-far.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ edit✗ read edit✗ edit read read read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-external-far.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-external-far.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-external-far.json) |

### anchor-stability

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit edit✗ read` | [trace](traces/minicpm5-2b-q4/builtin-edit-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read read read undo_last_change read replace read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (applied-wrong) | `read replace read replace read replace read undo_last_change read replace` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit read edit✗ edit✗ edit✗ edit✗ read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (noop) | `read edit✗ read edit✗ edit✗ read edit✗ edit✗ read edit✗` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-anchor-stability.json) |

### undo

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | undo | `read edit edit read edit edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-undo.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-undo.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | undo | `read replace✗ replace undo_last_change` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-undo.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | undo | `read edit✗ edit edit✗ read edit✗ edit✗ edit read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-undo.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ read edit read edit✗ edit✗ edit✗ edit✗ read read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-undo.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | undo | `read edit✗ edit read edit` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-undo.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | undo | `read edit edit✗ read edit` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-undo.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | undo | `bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-undo.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-undo.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | undo | `read edit✗ edit✗ read read read edit✗ edit✗ edit✗ read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-undo.json) |

### stale-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-stale-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-stale-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-stale-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-stale-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit✗ edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-stale-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-stale-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-stale-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read read edit read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-stale-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-stale-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-stale-range.json) |

### stale-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-stale-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | rejected | `read replace✗ read replace read undo_last_change read replace read undo_last_change` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-stale-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (silent-wrong-line) | `read replace✗ read replace read insert insert read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-stale-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-stale-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit✗ edit read edit edit✗ edit✗ edit✗ read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-stale-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit read edit edit✗ edit✗ read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-stale-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read read read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-stale-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | rejected | `read edit✗ edit✗ read read edit✗ read read read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-stale-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-stale-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read edit read read read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-stale-line.json) |

### delete-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-delete-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-delete-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-delete-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-delete-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-delete-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-delete-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-delete-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit read read read read read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-delete-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-delete-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-delete-range.json) |

### crlf-bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-crlf-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read read replace✗ read replace read read read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-crlf-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (applied-wrong) | `read read replace read read read read read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit edit✗ read read read read read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-crlf-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-crlf-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-crlf-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-crlf-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read read edit✗ read edit✗ edit read read read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-crlf-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-crlf-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-crlf-bom.json) |

### insert-eof

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-insert-eof.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-insert-eof.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | applied | `read insert read read read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-insert-eof.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-insert-eof.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-insert-eof.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-insert-eof.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-insert-eof.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-insert-eof.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (noop) | `read edit✗ edit✗ read edit✗ read read grep read edit✗` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-insert-eof.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-insert-eof.json) |

### error-guidance

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | recovered | `read edit edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read replace✗ read replace replace✗ read read read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (silent-wrong-line) | `read replace✗ read replace read replace read read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | rejected (no-recovery) | `read edit✗ edit✗ read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | rejected (no-recovery) | `read edit✗ read edit✗ read read read read read edit✗` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read edit edit✗ read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-error-guidance.json) |

### b15-large-range-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/minicpm5-2b-q4/builtin-edit-b15-large-range-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read undo_last_change✗ read replace read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-b15-large-range-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read replace✗ read read read replace read replace` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-b15-large-range-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit✗ edit read edit✗ read edit✗ read edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-b15-large-range-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-b15-large-range-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read read read edit read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-b15-large-range-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read edit✗ read read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b15-large-range-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit✗ read edit read read read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-b15-large-range-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ✅ | rejected | `read edit✗ read read read read read read read read read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-b15-large-range-drift.json) |

### insert-race-stale-boundary

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit read edit✗` | [trace](traces/minicpm5-2b-q4/builtin-edit-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ insert✗ read read read insert read read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ✅ | recovered | `read insert✗ read read insert read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ read edit✗ edit✗ edit read edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit read edit✗ edit read` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read edit read read read read` | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read read` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read read edit read read read read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-insert-race-stale-boundary.json) |

### empty-file

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | ❌ | error (crashed) | `read edit✗` | - |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert✗ read replace replace✗ read read replace read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-empty-file.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | ❌ | applied (noop) | `read insert✗ read read read read read replace✗ read read` | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-empty-file.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read read read read read read read edit✗` | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-empty-file.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit` | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-empty-file.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | ❌ | error (crashed) | `read edit✗ read edit✗` | - |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read read grep read grep read edit read edit✗ read read` | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-empty-file.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read edit✗ edit✗` | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-empty-file.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash` | [trace](traces/minicpm5-2b-q4/builtin-bash-empty-file.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | ❌ | applied (noop) | `read edit✗ read edit✗` | [trace](traces/minicpm5-2b-q4/pi-edit-guard-empty-file.json) |

## Failed runs — traces for validation

Every failed run is listed with its full transcript link (system prompt, user task, model reasoning, every tool call with arguments, every tool result, and the final file state).

| Model | Contender | Scenario | Outcome | Trace |
| --- | --- | --- | --- | --- |
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
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | delete-line | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/builtin-edit-delete-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/builtin-edit-duplicate-import.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/builtin-edit-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/builtin-edit-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/builtin-edit-b15-large-range-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | range | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | duplicate-nth | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | sub-line-token | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | bom | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | batch-edits | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-edit | empty-file | error (crashed) | - |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | formatter-drift | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | no-trailing-newline | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-no-trailing-newline.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | anchor-stability | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | insert-after | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | error-guidance | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro | tabs | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | b13-chained-diff-edit | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-b13-chained-diff-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | single-line | applied (noop) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-single-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-b10-duplicate-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | replace-all | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-replace-all.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | unicode | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-unicode.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | duplicate-nth | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | batch-edits | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | formatter-drift | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | insert-after | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | stale-line | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-stale-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | error-guidance | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | b7-paged-read-gap | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-b7-paged-read-gap.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | b8-blind-edit | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-b8-blind-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | anchor-stability | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | empty-file | applied (noop) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-empty-file.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | range | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | crlf | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-crlf.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | bom | applied (noop) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-edit-pro-nodedup | crlf-bom | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-edit-pro-nodedup-crlf-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | sub-line-token | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | insert-after | applied (noop) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | unicode | applied (noop) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-unicode.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | duplicate-import | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-duplicate-import.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | formatter-drift | rejected (no-recovery) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | anchor-stability | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | error-guidance | rejected (no-recovery) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | insert-eof | applied (noop) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-insert-eof.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-hashline-readmap | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-hashline-readmap-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | duplicate-nth | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | delete-line | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-delete-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | sub-line-token | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | stale-line | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-stale-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | batch-edits | applied (noop) | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @cortexkit/aft-pi | undo | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_cortexkit_aft-pi-undo.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | tabs | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | insert-eof | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-insert-eof.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/_xynogen_pix-edit-b15-large-range-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b10-duplicate-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | duplicate-import | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-duplicate-import.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | duplicate-nth | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | tabs | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-b15-large-range-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | b13-chained-diff-edit | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @xynogen/pix-edit | empty-file | error (crashed) | - |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | single-line | applied (noop) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-single-line.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | whitespace-only | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-whitespace-only.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | range | applied (noop) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | bom | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | b10-duplicate-drift | error (crashed) | - |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | sub-line-token | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-sub-line-token.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | empty-file | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-empty-file.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | duplicate-nth | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-duplicate-nth.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | replace-all | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-replace-all.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | batch-edits | applied (noop) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-batch-edits.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | tabs | applied (noop) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-tabs.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | noop | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-noop.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | formatter-drift | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-formatter-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | unicode | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-unicode.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | external-far | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-external-far.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | anchor-stability | applied (noop) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-anchor-stability.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | error-guidance | rejected (no-recovery) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-error-guidance.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | insert-after | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-insert-after.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-semantic-edit | empty-file | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-semantic-edit-empty-file.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | stale-range | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-stale-range.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | b8-blind-edit | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/builtin-bash-b8-blind-edit.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/builtin-bash-b10-duplicate-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | b18-boundary-dup | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/builtin-bash-b18-boundary-dup.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/builtin-bash-empty-file.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | crlf-bom | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-crlf-bom.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | builtin-bash | crlf | applied (applied-wrong) | [trace](traces/minicpm5-2b-q4/builtin-bash-crlf.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-edit-guard-b9-boundary-changed.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-edit-guard-b10-duplicate-drift.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | @agimon-ai/doompi-edit | insert-eof | applied (noop) | [trace](traces/minicpm5-2b-q4/_agimon-ai_doompi-edit-insert-eof.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/minicpm5-2b-q4/pi-edit-guard-insert-race-stale-boundary.json) |
| MiniCPM5-2B (Q4_K_M, llama.cpp) | pi-edit-guard | empty-file | applied (noop) | [trace](traces/minicpm5-2b-q4/pi-edit-guard-empty-file.json) |
