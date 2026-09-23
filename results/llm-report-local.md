# pi edit-tool benchmark — LLM runs

Generated 2026-09-23T21:10:22.460Z. Real-model runs against llamacpp; the model drives each contender's actual tools through a tool-calling loop. Total API cost: $0.0000. Read mandate off.

## Models

| Model | Runs | Passed | Pass rate | Avg steps | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | 306 | 289/306 | 94% | 3.5 | 8453 | $0.0000 |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | 306 | 260/306 | 85% | 3.5 | 6821 | $0.0000 |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | 306 | 231/306 | 75% | 3.7 | 6780 | $0.0000 |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | 306 | 245/306 | 80% | 4.4 | 7713 | $0.0000 |

## Results — pass rate by model (rows) × tool (columns)

| Model | builtin-edit | pi-hashline-readmap | @cortexkit/aft-pi | @xynogen/pix-edit | pi-semantic-edit | @agimon-ai/doompi-edit | builtin-bash | pi-edit-guard | pi-hashline-edit-pro | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | 32/34 | 32/34 | 31/34 | 33/34 | 31/34 | 33/34 | 32/34 | 31/34 | 34/34 | 289/306 (94%) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | 28/34 | 28/34 | 29/34 | 27/34 | 26/34 | 32/34 | 30/34 | 26/34 | 34/34 | 260/306 (85%) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | 28/34 | 20/34 | 20/34 | 27/34 | 26/34 | 24/34 | 29/34 | 25/34 | 32/34 | 231/306 (75%) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | 32/34 | 21/34 | 31/34 | 30/34 | 28/34 | 11/34 | 30/34 | 28/34 | 34/34 | 245/306 (80%) |

## Per-tool totals (all models)

| Tool | Core (23) | Staleness (11) | Passed | Total | Pass rate |
| --- | --- | --- | --- | --- | --- |
| builtin-edit | 86/92 | 34/44 | 120 | 136 | 88% |
| pi-hashline-readmap | 68/92 | 33/44 | 101 | 136 | 74% |
| @cortexkit/aft-pi | 73/92 | 38/44 | 111 | 136 | 82% |
| @xynogen/pix-edit | 85/92 | 32/44 | 117 | 136 | 86% |
| pi-semantic-edit | 88/92 | 23/44 | 111 | 136 | 82% |
| @agimon-ai/doompi-edit | 69/92 | 31/44 | 100 | 136 | 74% |
| builtin-bash | 84/92 | 37/44 | 121 | 136 | 89% |
| pi-edit-guard | 82/92 | 28/44 | 110 | 136 | 81% |
| pi-hashline-edit-pro | 90/92 | 44/44 | 134 | 136 | 99% |

## Per-tool process (all models)

| Tool | Version | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- | --- |
| builtin-edit | 0.87.0 | 3.8 | 6071 | $0.0000 | 10 |
| pi-hashline-readmap | 0.14.0 | 4.7 | 9195 | $0.0000 | 10 |
| @cortexkit/aft-pi | 0.57.1 | 4.1 | 12843 | $0.0000 | 10 |
| @xynogen/pix-edit | 0.2.5 | 3.5 | 5705 | $0.0000 | 10 |
| pi-semantic-edit | 0.4.0 | 3.2 | 5660 | $0.0000 | 10 |
| @agimon-ai/doompi-edit | 0.0.1-alpha.52 | 4.4 | 7836 | $0.0000 | 10 |
| builtin-bash | 0.87.0 | 3.7 | 3809 | $0.0000 | 10 |
| pi-edit-guard | 0.1.5 | 3.4 | 7234 | $0.0000 | 15 |
| pi-hashline-edit-pro | 4.4.1 | 3.0 | 8623 | $0.0000 | 15 |

## Scenario detail

### b6-change-then-revert

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b6-change-then-revert.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash✗ bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b6-change-then-revert.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-b6-change-then-revert.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ read edit✗ read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-b6-change-then-revert.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-b6-change-then-revert.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-b6-change-then-revert.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-b6-change-then-revert.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-b6-change-then-revert.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-b6-change-then-revert.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-b6-change-then-revert.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ❌ | applied (noop) | `read edit read edit` | [trace](traces/k2-horizon-7b-q4/builtin-edit-b6-change-then-revert.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-b6-change-then-revert.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-b6-change-then-revert.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-b6-change-then-revert.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-b6-change-then-revert.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-b6-change-then-revert.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-b6-change-then-revert.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-b6-change-then-revert.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-b6-change-then-revert.json) |

### b9-boundary-changed

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b9-boundary-changed.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit read read edit read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `grep edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace✗ read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-b9-boundary-changed.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-b9-boundary-changed.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-b9-boundary-changed.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | rejected | `read edit✗ read edit✗ read read read read read read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-b9-boundary-changed.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit read✗ edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-b9-boundary-changed.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit read read read edit read read read read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-b9-boundary-changed.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read read read read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-b9-boundary-changed.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-b9-boundary-changed.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read edit read undo read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-b9-boundary-changed.json) |

### b13-chained-diff-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit edit edit✗` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit edit✗ grep edit` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b13-chained-diff-edit.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b13-chained-diff-edit.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-b13-chained-diff-edit.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-b13-chained-diff-edit.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (noop) | `read✗ read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-b13-chained-diff-edit.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ edit read` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-b13-chained-diff-edit.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-b13-chained-diff-edit.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-b13-chained-diff-edit.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ read edit✗ read edit✗ read read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-b13-chained-diff-edit.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-b13-chained-diff-edit.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit edit✗ read read read✗ grep grep grep grep` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-b13-chained-diff-edit.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-b13-chained-diff-edit.json) |

### single-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-single-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-single-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-single-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-single-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-single-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-single-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-single-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-single-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-single-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-single-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-single-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-single-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-single-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-single-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ read edit✗ read read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-single-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-single-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-single-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-single-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-single-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-single-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-single-line.json) |

### b18-boundary-dup

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit edit✗ read read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b18-boundary-dup.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (applied-wrong) | `read edit edit✗ read edit edit read read read read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit edit✗ read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b18-boundary-dup.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-b18-boundary-dup.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-b18-boundary-dup.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit✗ edit✗ edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-b18-boundary-dup.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-b18-boundary-dup.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-b18-boundary-dup.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read✗ read edit read` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-b18-boundary-dup.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-b18-boundary-dup.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-b18-boundary-dup.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-b18-boundary-dup.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-b18-boundary-dup.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit read read edit✗ edit✗ edit✗ read edit✗` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-b18-boundary-dup.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-b18-boundary-dup.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-b18-boundary-dup.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-b18-boundary-dup.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-b18-boundary-dup.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-b18-boundary-dup.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-b18-boundary-dup.json) |

### range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash✗ bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash✗ bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-range.json) |

### delete-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash✗ bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-delete-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-delete-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-delete-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-delete-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ read edit✗ edit edit✗ read read read read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-delete-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ read read edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-delete-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-delete-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-delete-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-delete-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-delete-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-delete-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-delete-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-delete-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-delete-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit✗ read edit read edit✗ read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-delete-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-delete-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-delete-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-delete-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-delete-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-delete-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-delete-line.json) |

### duplicate-import

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-duplicate-import.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-duplicate-import.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-duplicate-import.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-duplicate-import.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-duplicate-import.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit✗ edit✗ read edit✗` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-duplicate-import.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-duplicate-import.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-duplicate-import.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-duplicate-import.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash✗ bash bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-duplicate-import.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-duplicate-import.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-duplicate-import.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-duplicate-import.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-duplicate-import.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-duplicate-import.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-duplicate-import.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-duplicate-import.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-duplicate-import.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit✗ read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-duplicate-import.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-duplicate-import.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-duplicate-import.json) |

### whitespace-only

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-whitespace-only.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-whitespace-only.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit✗ read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read✗ read edit✗ edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ read edit✗ read edit✗ read edit✗` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-whitespace-only.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-whitespace-only.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-whitespace-only.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-whitespace-only.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-whitespace-only.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-whitespace-only.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-whitespace-only.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read edit read edit read edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-whitespace-only.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-whitespace-only.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-whitespace-only.json) |

### duplicate-nth

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-duplicate-nth.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit✗ edit read edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash✗ bash bash bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-duplicate-nth.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-duplicate-nth.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-duplicate-nth.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit✗ edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-duplicate-nth.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-duplicate-nth.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-duplicate-nth.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-duplicate-nth.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-duplicate-nth.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-duplicate-nth.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-duplicate-nth.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-duplicate-nth.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-duplicate-nth.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-duplicate-nth.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-duplicate-nth.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-duplicate-nth.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read edit✗ read edit✗ read read read read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-duplicate-nth.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-duplicate-nth.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-duplicate-nth.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-duplicate-nth.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-duplicate-nth.json) |

### b10-duplicate-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit✗ edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ read edit✗ edit✗ read read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-b10-duplicate-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-b10-duplicate-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit✗ edit read` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-b10-duplicate-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-b10-duplicate-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-b10-duplicate-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-b10-duplicate-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read✗ read edit` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read edit read edit read edit` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read read grep read read✗ read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash bash bash bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-b10-duplicate-drift.json) |

### bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace✗ replace✗ read replace✗ replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit read edit✗ read read edit✗ read edit✗` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ read edit✗ edit✗ edit✗ edit read edit✗` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ edit edit✗ edit read edit read` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ read edit✗ read✗ read edit read edit✗ edit✗` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash✗ bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-bom.json) |

### sub-line-token

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/builtin-edit-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-sub-line-token.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-sub-line-token.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-sub-line-token.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-sub-line-token.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-sub-line-token.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-sub-line-token.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-sub-line-token.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-sub-line-token.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep edit✗ edit✗ read edit✗ read edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-sub-line-token.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-sub-line-token.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-sub-line-token.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-sub-line-token.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-sub-line-token.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-sub-line-token.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-sub-line-token.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-sub-line-token.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-sub-line-token.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-sub-line-token.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-sub-line-token.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-sub-line-token.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-sub-line-token.json) |

### noop

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-noop.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ read edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ edit✗ edit edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-noop.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-noop.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-noop.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ read✗ edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-noop.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit read` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-noop.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-noop.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ read read read read read read read` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-noop.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-noop.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-noop.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-noop.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-noop.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-noop.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-noop.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-noop.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-noop.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-noop.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗ read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-noop.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-noop.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-noop.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗ read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-noop.json) |

### b12-noop-with-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ read read edit✗ read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read✗` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗ read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗ read read read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b12-noop-with-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ edit edit read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | error (crashed) | `read edit✗` | - |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | noop | `read edit✗ edit edit edit read read read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b12-noop-with-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-b12-noop-with-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-b12-noop-with-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | noop | `read edit✗ edit edit read edit read` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit✗` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-b12-noop-with-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-b12-noop-with-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | noop | `bash bash bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-b12-noop-with-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit✗` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-b12-noop-with-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ read edit✗ read edit✗ read edit✗ read edit✗` | [trace](traces/k2-horizon-7b-q4/builtin-edit-b12-noop-with-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read replace read replace read replace read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ read edit✗ read edit✗ read edit✗ read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-b12-noop-with-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | noop | `read edit✗ read edit✗ read edit read edit read edit✗` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ read edit✗ read edit✗ read edit✗ read edit✗` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-b12-noop-with-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗ read edit✗ read edit✗` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-b12-noop-with-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ read edit read edit✗ read edit read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash✗ bash bash bash bash bash bash✗ bash✗` | [trace](traces/k2-horizon-7b-q4/builtin-bash-b12-noop-with-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | noop | `read edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-b12-noop-with-drift.json) |

### insert-after

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-insert-after.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-insert-after.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-insert-after.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-insert-after.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-insert-after.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-insert-after.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-insert-after.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-insert-after.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-insert-after.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-insert-after.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-insert-after.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-insert-after.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-insert-after.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-insert-after.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-insert-after.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-insert-after.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-insert-after.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-insert-after.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read edit read edit read edit read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-insert-after.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-insert-after.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-insert-after.json) |

### batch-edits

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/builtin-edit-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read read edit edit✗ edit edit read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (noop) | `read edit edit edit✗ edit edit edit read edit edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-batch-edits.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-batch-edits.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-batch-edits.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ edit read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-batch-edits.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-batch-edits.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-batch-edits.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-batch-edits.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-batch-edits.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-batch-edits.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace replace replace replace replace replace read replace replace replace read replace read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-batch-edits.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-batch-edits.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-batch-edits.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-batch-edits.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read edit edit read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-batch-edits.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-batch-edits.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-batch-edits.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-batch-edits.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-batch-edits.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-batch-edits.json) |

### replace-all

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-replace-all.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-replace-all.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-replace-all.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-replace-all.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit edit edit edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-replace-all.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-replace-all.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-replace-all.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-replace-all.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read edit edit✗ read edit edit✗ read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-replace-all.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-replace-all.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-replace-all.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace replace replace read replace read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-replace-all.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-replace-all.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-replace-all.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-replace-all.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-replace-all.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-replace-all.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-replace-all.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-replace-all.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-replace-all.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-replace-all.json) |

### tabs

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-tabs.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read✗ read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-tabs.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-tabs.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-tabs.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-tabs.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-tabs.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-tabs.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-tabs.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-tabs.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-tabs.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-tabs.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-tabs.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-tabs.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace replace read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-tabs.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-tabs.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-tabs.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-tabs.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-tabs.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `grep edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-tabs.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-tabs.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-tabs.json) |

### unicode

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-unicode.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read✗ read✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-unicode.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-unicode.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-unicode.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-unicode.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-unicode.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-unicode.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-unicode.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (noop) | `read edit✗ grep edit✗ read edit✗ read edit✗ read edit✗` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-unicode.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-unicode.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-unicode.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-unicode.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-unicode.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-unicode.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-unicode.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit read edit✗ read read edit✗ edit✗` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-unicode.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-unicode.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-unicode.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read read grep read read read grep read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-unicode.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-unicode.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-unicode.json) |

### crlf

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-crlf.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read edit✗ read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-crlf.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-crlf.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-crlf.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ read edit✗ read edit✗ read edit✗ read read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-crlf.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (noop) | `read edit✗ read edit✗ edit✗ read edit✗ read edit✗ read` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-crlf.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-crlf.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-crlf.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-crlf.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-crlf.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read read read read` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-crlf.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-crlf.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read edit✗ read edit✗ edit✗ read edit✗ read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-crlf.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-crlf.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-crlf.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read✗ read✗ read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-crlf.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read read edit read edit✗ read edit✗ edit✗ read edit✗` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-crlf.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-crlf.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read edit✗ read edit✗ read edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-crlf.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-crlf.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (noop) | `read read edit read undo read edit read undo read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-crlf.json) |

### no-trailing-newline

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash✗ bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-no-trailing-newline.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-no-trailing-newline.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-no-trailing-newline.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-no-trailing-newline.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-no-trailing-newline.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read edit✗ edit✗ read edit✗ edit read` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-no-trailing-newline.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-no-trailing-newline.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-no-trailing-newline.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-no-trailing-newline.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-no-trailing-newline.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-no-trailing-newline.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-no-trailing-newline.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-no-trailing-newline.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-no-trailing-newline.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-no-trailing-newline.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-no-trailing-newline.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-no-trailing-newline.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read edit read edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-no-trailing-newline.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-no-trailing-newline.json) |

### formatter-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `grep grep edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read✗ edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-formatter-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-formatter-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-formatter-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-formatter-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ read read edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-formatter-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-formatter-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-formatter-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit✗ read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-formatter-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-formatter-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-formatter-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-formatter-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-formatter-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace✗ read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-formatter-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-formatter-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-formatter-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-formatter-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-formatter-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `grep edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-formatter-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-formatter-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | rejected (no-recovery) | `read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗ read✗` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-formatter-drift.json) |

### external-far

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-external-far.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-external-far.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-external-far.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-external-far.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ read edit✗ read edit✗ read edit✗ read edit✗` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-external-far.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read✗ read edit✗ read edit✗ read edit✗ read edit✗ read` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-external-far.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-external-far.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-external-far.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep read edit✗ read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-external-far.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-external-far.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-external-far.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-external-far.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/builtin-edit-external-far.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-external-far.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ read edit✗ read edit✗ read edit✗ edit✗` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-external-far.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-external-far.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-external-far.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-external-far.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `grep read edit✗ read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-external-far.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-external-far.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-external-far.json) |

### undo

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | undo | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | undo | `read edit edit edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | undo | `grep read edit read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | undo | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-undo.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | undo | `read edit read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | undo | `read edit read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | undo | `read edit edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | undo | `read edit edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | undo | `read edit edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | undo | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | undo | `bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-undo.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-undo.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-undo.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ read edit✗ read edit✗ read edit edit✗` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-undo.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ edit edit✗ edit✗ edit✗ edit edit edit✗ edit✗` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-undo.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | undo | `read edit edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-undo.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-undo.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `grep read edit edit✗ read edit read edit read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-undo.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | undo | `bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-undo.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-undo.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-undo.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | undo | `read edit edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-undo.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-undo.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ read edit✗ edit✗ edit✗ read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-undo.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | undo | `read edit edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-undo.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-undo.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-undo.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit edit✗ read read edit read read read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-undo.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | undo | `bash bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-undo.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | undo | `read edit undo read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-undo.json) |

### stale-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read read✗ edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-stale-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read edit read read read read read` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `grep grep read edit✗ read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ read read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-stale-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-stale-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-stale-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-stale-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-stale-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-stale-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-stale-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-stale-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash✗ bash bash bash bash bash bash✗ bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-stale-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-stale-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-stale-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-stale-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-stale-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-stale-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-stale-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-stale-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-stale-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit✗ edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-stale-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash✗ bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-stale-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-stale-range.json) |

### stale-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit✗ edit` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit✗ read edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | rejected | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read read read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-stale-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-stale-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-stale-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | rejected | `read edit✗ read edit✗ read edit✗ read edit✗ read edit✗` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-stale-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-stale-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-stale-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read read read read read read read read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-stale-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-stale-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-stale-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit undo read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-stale-line.json) |

### delete-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-delete-range.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `grep grep read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-delete-range.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-delete-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-delete-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ edit✗ edit✗ edit✗ read edit✗ edit✗ edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-delete-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit✗ edit edit read edit read edit✗ read edit✗` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-delete-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-delete-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-delete-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-delete-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-delete-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-delete-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-delete-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-delete-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-delete-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-delete-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read✗ read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-delete-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-delete-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-delete-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-delete-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-delete-range.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-delete-range.json) |

### crlf-bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-crlf-bom.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read read✗ read edit edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read✗ read✗ read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read✗ read✗ read✗ read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-crlf-bom.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read read read edit✗ read edit read read read read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ❌ | applied (noop) | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-crlf-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read edit✗ read read read read read read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-crlf-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-crlf-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (noop) | `read edit✗ read read edit✗ read read edit✗ read read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-crlf-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read✗ read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-crlf-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-crlf-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-crlf-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read read edit read grep read read read read read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-crlf-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash✗ bash bash bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-crlf-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-crlf-bom.json) |

### insert-eof

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | error (crashed) | `read edit read` | - |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-insert-eof.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-insert-eof.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-insert-eof.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-insert-eof.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-insert-eof.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-insert-eof.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-insert-eof.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-insert-eof.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | applied | `bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-insert-eof.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-insert-eof.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit✗ read edit read edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | applied | `read✗ read edit` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (applied-wrong) | `read✗ read edit read edit read edit read edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-insert-eof.json) |

### error-guidance

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit read read edit read read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash✗ bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-error-guidance.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ edit✗ read edit read` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | rejected (no-recovery) | `read edit✗ edit✗ edit✗ read edit✗ edit✗ edit✗ read edit✗` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit✗ edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-error-guidance.json) |

### insert-race-stale-boundary

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit read read read read read read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read read read read edit read read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read read insert read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read read read edit read read` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read read read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `grep read edit✗ read grep edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ✅ | rejected | `read edit read read undo read read read read read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit read edit✗ edit edit✗ edit edit✗` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read edit read edit read` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-insert-race-stale-boundary.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read insert✗ read insert read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-insert-race-stale-boundary.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-insert-race-stale-boundary.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `edit✗ read edit✗ read edit` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-insert-race-stale-boundary.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ❌ | applied (silent-wrong-line) | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-insert-race-stale-boundary.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-insert-race-stale-boundary.json) |

### b15-large-range-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit✗ read read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/builtin-edit-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit edit✗ read read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_xynogen_pix-edit-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash bash bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b15-large-range-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ edit edit✗ read edit read edit` | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read✗ read✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `grep grep read edit✗ read edit` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (silent-wrong-line) | `read edit read undo edit read edit✗ read read read` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-b15-large-range-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-b15-large-range-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | recovered | `read edit✗ read read edit✗ edit` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-b15-large-range-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit read edit✗ read` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-b15-large-range-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-b15-large-range-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-b15-large-range-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-b15-large-range-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-b15-large-range-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-b15-large-range-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-b15-large-range-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ✅ | rejected | `read edit✗ read read edit✗ read read edit✗ edit✗ read` | [trace](traces/k2-horizon-7b-q4/builtin-edit-b15-large-range-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit read✗ read edit read` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-b15-large-range-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-b15-large-range-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read read edit` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-b15-large-range-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-b15-large-range-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read edit✗ read edit read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ✅ | recovered | `bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-b15-large-range-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ✅ | recovered | `read edit read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-b15-large-range-drift.json) |

### empty-file

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit✗ edit✗ edit✗` | [trace](traces/qwen3.8-27b-q2/builtin-edit-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read edit read` | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit✗ edit✗ read edit✗ edit read` | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | error (crashed) | `read edit✗ read edit✗ edit✗ edit✗ edit✗` | - |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash` | [trace](traces/qwen3.8-27b-q2/builtin-bash-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/qwen3.8-27b-q2/pi-hashline-edit-pro-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | ❌ | error (crashed) | `read edit✗ read✗ edit✗ read✗ edit✗ edit✗` | - |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit✗ edit read` | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ read✗ read✗ edit✗ read edit✗ edit✗ edit✗ read` | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit read` | [trace](traces/gemma-4-26b-a4b-q4/_agimon-ai_doompi-edit-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash` | [trace](traces/gemma-4-26b-a4b-q4/builtin-bash-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | ❌ | applied (noop) | `read edit✗ read✗ read edit✗ edit✗` | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-edit-pro-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `edit` | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ❌ | applied (noop) | `edit✗ read read edit✗ read edit✗ read edit✗ read edit✗` | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ edit✗ edit✗ edit✗ read edit read` | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash` | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (noop) | `edit✗ read read read read read read read read read` | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-7b-q4/builtin-edit-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/k2-horizon-7b-q4/pi-hashline-edit-pro-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | ❌ | applied (noop) | `edit✗ read edit✗ edit✗ edit✗ read edit✗ edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | ✅ | applied | `edit read` | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | ❌ | applied (noop) | `read edit✗ edit✗ edit✗ read edit✗ read edit✗ edit✗ edit✗` | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | ✅ | applied | `read edit` | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | ❌ | applied (applied-wrong) | `bash bash bash` | [trace](traces/k2-horizon-7b-q4/builtin-bash-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | ❌ | applied (noop) | `edit✗ read read edit✗ read edit✗ read read read read` | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-empty-file.json) |

## Failed runs — traces for validation

Every failed run is listed with its full transcript link (system prompt, user task, model reasoning, every tool call with arguments, every tool result, and the final file state).

| Model | Contender | Scenario | Outcome | Trace |
| --- | --- | --- | --- | --- |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/builtin-edit-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-edit | empty-file | applied (noop) | [trace](traces/qwen3.8-27b-q2/builtin-edit-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | formatter-drift | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/pi-hashline-readmap-formatter-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-hashline-readmap | insert-eof | error (crashed) | - |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | batch-edits | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-batch-edits.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | empty-file | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @cortexkit/aft-pi | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/pi-semantic-edit-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @xynogen/pix-edit | empty-file | error (crashed) | - |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/_agimon-ai_doompi-edit-insert-eof.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/qwen3.8-27b-q2/builtin-bash-empty-file.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-b10-duplicate-drift.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | builtin-bash | stale-line | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/builtin-bash-stale-line.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-insert-race-stale-boundary.json) |
| Qwen3.8-27B (UD-Q2_K_XL, llama.cpp) | pi-edit-guard | empty-file | applied (noop) | [trace](traces/qwen3.8-27b-q2/pi-edit-guard-empty-file.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/builtin-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | b6-change-then-revert | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-hashline-readmap | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-hashline-readmap-b18-boundary-dup.json) |
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
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @cortexkit/aft-pi | batch-edits | applied (noop) | [trace](traces/gemma-4-26b-a4b-q4/_cortexkit_aft-pi-batch-edits.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | stale-line | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | b6-change-then-revert | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b6-change-then-revert.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b9-boundary-changed.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | @xynogen/pix-edit | b12-noop-with-drift | error (crashed) | - |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-semantic-edit | empty-file | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-semantic-edit-empty-file.json) |
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
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | b18-boundary-dup | applied (applied-wrong) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b18-boundary-dup.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b10-duplicate-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | stale-line | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-stale-line.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | error-guidance | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-error-guidance.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-b15-large-range-drift.json) |
| Gemma 4 26B A4B (UD-Q4_K_XL, llama.cpp) | pi-edit-guard | empty-file | applied (noop) | [trace](traces/gemma-4-26b-a4b-q4/pi-edit-guard-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | whitespace-only | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | empty-file | applied (noop) | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | stale-line | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/builtin-edit-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | b6-change-then-revert | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-b6-change-then-revert.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | delete-line | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-delete-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | duplicate-import | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-duplicate-import.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | duplicate-nth | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-duplicate-nth.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | whitespace-only | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | crlf | applied (noop) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-crlf.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | insert-after | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-insert-after.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | error-guidance | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-insert-eof.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | external-far | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-external-far.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | undo | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-undo.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | crlf-bom | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | delete-range | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-readmap-delete-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | b13-chained-diff-edit | applied (noop) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | whitespace-only | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | empty-file | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | crlf | applied (noop) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-crlf.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | bom | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | tabs | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-tabs.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | batch-edits | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-batch-edits.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | external-far | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-external-far.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | insert-eof | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-insert-eof.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | crlf-bom | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | undo | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-undo.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | delete-range | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-delete-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-b15-large-range-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/_cortexkit_aft-pi-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | duplicate-nth | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-duplicate-nth.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | whitespace-only | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | stale-line | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/_xynogen_pix-edit-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-b10-duplicate-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | duplicate-nth | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-duplicate-nth.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-b15-large-range-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | stale-line | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | stale-range | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-stale-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-semantic-edit-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | b13-chained-diff-edit | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | insert-after | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-insert-after.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | whitespace-only | applied (noop) | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | unicode | applied (noop) | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-unicode.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | formatter-drift | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-formatter-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | replace-all | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-replace-all.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-insert-eof.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | undo | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-undo.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | insert-after | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-insert-after.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-b9-boundary-changed.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | stale-range | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-stale-range.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-b10-duplicate-drift.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | crlf-bom | applied (noop) | [trace](traces/k2-horizon-3.7b-q4/builtin-bash-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | b18-boundary-dup | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-b18-boundary-dup.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | whitespace-only | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-whitespace-only.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | empty-file | applied (noop) | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-empty-file.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | stale-line | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-stale-line.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | error-guidance | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-error-guidance.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-insert-race-stale-boundary.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | crlf-bom | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-edit-guard-crlf-bom.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | b18-boundary-dup | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-b18-boundary-dup.json) |
| K2 Horizon 3.7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-edit-pro | batch-edits | applied (applied-wrong) | [trace](traces/k2-horizon-3.7b-q4/pi-hashline-edit-pro-batch-edits.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | b6-change-then-revert | applied (noop) | [trace](traces/k2-horizon-7b-q4/builtin-edit-b6-change-then-revert.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-edit | empty-file | applied (noop) | [trace](traces/k2-horizon-7b-q4/builtin-edit-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-b15-large-range-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | b13-chained-diff-edit | applied (noop) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-b13-chained-diff-edit.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | single-line | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-single-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | duplicate-nth | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-duplicate-nth.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | delete-line | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-delete-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | bom | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | empty-file | applied (noop) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | crlf | applied (noop) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-crlf.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | undo | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-undo.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | external-far | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-external-far.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | error-guidance | rejected (no-recovery) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | insert-eof | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-hashline-readmap | crlf-bom | applied (noop) | [trace](traces/k2-horizon-7b-q4/pi-hashline-readmap-crlf-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | stale-line | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-stale-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | unicode | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-unicode.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @cortexkit/aft-pi | insert-eof | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_cortexkit_aft-pi-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | whitespace-only | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-whitespace-only.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | empty-file | applied (noop) | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @xynogen/pix-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/_xynogen_pix-edit-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-b9-boundary-changed.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | empty-file | applied (noop) | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | stale-line | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-stale-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-semantic-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/pi-semantic-edit-insert-race-stale-boundary.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | b9-boundary-changed | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-b9-boundary-changed.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | b12-noop-with-drift | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-b12-noop-with-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | single-line | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-single-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | b13-chained-diff-edit | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-b13-chained-diff-edit.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | b15-large-range-drift | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-b15-large-range-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | bom | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | whitespace-only | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-whitespace-only.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | noop | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-noop.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | crlf | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-crlf.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | replace-all | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-replace-all.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | tabs | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-tabs.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | stale-line | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-stale-line.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | unicode | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-unicode.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | formatter-drift | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-formatter-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | no-trailing-newline | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-no-trailing-newline.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | external-far | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-external-far.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | insert-after | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-insert-after.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | error-guidance | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-error-guidance.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-insert-race-stale-boundary.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/builtin-bash-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | crlf-bom | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-crlf-bom.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | undo | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-undo.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | @agimon-ai/doompi-edit | insert-eof | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/_agimon-ai_doompi-edit-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | empty-file | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/builtin-bash-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | insert-eof | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/builtin-bash-insert-eof.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | builtin-bash | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/builtin-bash-insert-race-stale-boundary.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | b10-duplicate-drift | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-b10-duplicate-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | duplicate-import | applied (applied-wrong) | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-duplicate-import.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | crlf | applied (noop) | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-crlf.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | empty-file | applied (noop) | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-empty-file.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | formatter-drift | rejected (no-recovery) | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-formatter-drift.json) |
| K2 Horizon 7B (Q4_K_M, IFM fork, llama.cpp) | pi-edit-guard | insert-race-stale-boundary | applied (silent-wrong-line) | [trace](traces/k2-horizon-7b-q4/pi-edit-guard-insert-race-stale-boundary.json) |
