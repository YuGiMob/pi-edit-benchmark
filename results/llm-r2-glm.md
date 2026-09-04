# pi edit-tool benchmark — LLM runs

Generated 2026-09-04T11:02:44.931Z. Real-model runs against opencode-go; the model drives each contender's actual tools through a tool-calling loop. Total API cost: $0.2137.

## Models

| Model | Runs | Passed | Pass rate | Avg steps | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | 272 | 216/272 | 79% | 3.0 | 9363 | $0.2137 |

## Results — pass rate by model (rows) × tool (columns)

| Model | builtin-edit | pi-hashline-edit | pi-hashline-context-edit | pi-hashline-edit-pro | pi-hashline-readmap | @cortexkit/aft-pi | @xynogen/pix-edit | pi-semantic-edit | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | 22/34 | 27/34 | 27/34 | 30/34 | 29/34 | 27/34 | 28/34 | 26/34 | 216/272 (79%) |

## Per-tool totals (all models)

| Tool | Core (15) | Staleness (11) | Served-state (8) | Passed | Total | Pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| builtin-edit | 8/15 | 7/11 | 7/8 | 22 | 34 | 65% |
| pi-hashline-edit | 10/15 | 10/11 | 7/8 | 27 | 34 | 79% |
| pi-hashline-context-edit | 10/15 | 10/11 | 7/8 | 27 | 34 | 79% |
| pi-hashline-edit-pro | 12/15 | 10/11 | 8/8 | 30 | 34 | 88% |
| pi-hashline-readmap | 12/15 | 10/11 | 7/8 | 29 | 34 | 85% |
| @cortexkit/aft-pi | 10/15 | 10/11 | 7/8 | 27 | 34 | 79% |
| @xynogen/pix-edit | 10/15 | 11/11 | 7/8 | 28 | 34 | 82% |
| pi-semantic-edit | 9/15 | 10/11 | 7/8 | 26 | 34 | 76% |

## Per-tool process (all models)

| Tool | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- |
| builtin-edit | 3.5 | 5339 | $0.0005 | 10 |
| pi-hashline-edit | 2.9 | 9335 | $0.0008 | 8 |
| pi-hashline-context-edit | 2.7 | 7597 | $0.0006 | 7 |
| pi-hashline-edit-pro | 2.9 | 7781 | $0.0006 | 12 |
| pi-hashline-readmap | 3.1 | 6715 | $0.0006 | 10 |
| @cortexkit/aft-pi | 3.1 | 6620 | $0.0006 | 5 |
| @xynogen/pix-edit | 2.9 | 4843 | $0.0004 | 7 |
| pi-semantic-edit | 2.9 | 26677 | $0.0022 | 10 |

## Scenario detail

### b6-change-then-revert

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b6-change-then-revert.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b6-change-then-revert.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b6-change-then-revert.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b6-change-then-revert.json) |

### b7-paged-read-gap

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b7-paged-read-gap.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b7-paged-read-gap.json) |

### b8-blind-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b8-blind-edit.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b8-blind-edit.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b8-blind-edit.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b8-blind-edit.json) |

### b9-boundary-changed

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b9-boundary-changed.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b9-boundary-changed.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b9-boundary-changed.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b9-boundary-changed.json) |

### b10-duplicate-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b10-duplicate-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b10-duplicate-drift.json) |

### b12-noop-with-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/builtin-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit edit✗ read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read edit✗ read edit✗ read edit✗ edit✗ read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | noop | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b12-noop-with-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b12-noop-with-drift.json) |

### b13-chained-diff-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b13-chained-diff-edit.json) |

### b15-large-range-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read read edit✗ edit✗ read edit✗ edit` | [trace](traces/glm-5.3-flash/builtin-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b15-large-range-drift.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read read read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b15-large-range-drift.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit✗ edit✗ read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b15-large-range-drift.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b15-large-range-drift.json) |

### b16b-undo-stale

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (applied-wrong) | `read edit edit read read` | [trace](traces/glm-5.3-flash/builtin-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | undo-refused | `read replace undo_last_change✗ read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b16b-undo-stale.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b16b-undo-stale.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b16b-undo-stale.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b16b-undo-stale.json) |

### b17-reversed-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b17-reversed-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b17-reversed-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b17-reversed-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b17-reversed-range.json) |

### b18-boundary-dup

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read edit read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-b18-boundary-dup.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-b18-boundary-dup.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-b18-boundary-dup.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-b18-boundary-dup.json) |

### single-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-single-line.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-single-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-single-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-single-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-single-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-single-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-single-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-single-line.json) |

### range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-range.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-range.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-range.json) |

### delete-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-delete-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-delete-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-delete-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-delete-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-delete-line.json) |

### duplicate-nth

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-duplicate-nth.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-duplicate-nth.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-duplicate-nth.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-duplicate-nth.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-nth.json) |

### duplicate-import

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-duplicate-import.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-duplicate-import.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-duplicate-import.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-duplicate-import.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-duplicate-import.json) |

### whitespace-only

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-whitespace-only.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-whitespace-only.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-whitespace-only.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-whitespace-only.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-whitespace-only.json) |

### crlf

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-crlf.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-crlf.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-crlf.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-crlf.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-crlf.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-crlf.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-crlf.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-crlf.json) |

### bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/builtin-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-bom.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-bom.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-bom.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-bom.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-bom.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-bom.json) |

### empty-file

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ edit✗ read` | [trace](traces/glm-5.3-flash/builtin-edit-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-empty-file.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-empty-file.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-empty-file.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | error (crashed) | `read edit✗ edit✗` | - |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-empty-file.json) |

### long-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ❌ | error (crashed) | `read read read read read read edit✗` | - |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read edit✗ read read read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-long-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-long-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-long-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-long-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-long-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | error (crashed) | `read read read edit✗` | - |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read read read edit✗ read edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-long-line.json) |

### noop

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/builtin-edit-noop.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-noop.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-noop.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-noop.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-noop.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-noop.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit✗ read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-noop.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit✗` | [trace](traces/glm-5.3-flash/pi-semantic-edit-noop.json) |

### insert-after

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-insert-after.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-insert-after.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-insert-after.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-insert-after.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-insert-after.json) |

### unicode

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-unicode.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-unicode.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-unicode.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-unicode.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-unicode.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-unicode.json) |

### tabs

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-tabs.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-tabs.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-tabs.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-tabs.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-tabs.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-tabs.json) |

### no-trailing-newline

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-no-trailing-newline.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit edit edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-no-trailing-newline.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-no-trailing-newline.json) |
| GLM 5.3 Flash | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-no-trailing-newline.json) |

### stale-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-stale-line.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-stale-line.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-stale-line.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-stale-line.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-stale-line.json) |

### target-deleted

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ❌ | applied (silent-wrong-line) | `read read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read read✗ read✗ read✗ replace✗ read insert read replace undo_last_change read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-target-deleted.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-target-deleted.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read read edit` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-target-deleted.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | rejected | `read read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-target-deleted.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | rejected | `read read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-target-deleted.json) |

### stale-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-stale-range.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-stale-range.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-stale-range.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-stale-range.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-stale-range.json) |

### shift-above

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read read` | [trace](traces/glm-5.3-flash/builtin-edit-shift-above.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-shift-above.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-shift-above.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-shift-above.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-shift-above.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-shift-above.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-shift-above.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-shift-above.json) |

### external-far

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-external-far.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-external-far.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-external-far.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-external-far.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-external-far.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-external-far.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-external-far.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-external-far.json) |

### anchor-stability

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | applied | `read replace read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-anchor-stability.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-anchor-stability.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-anchor-stability.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-anchor-stability.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/glm-5.3-flash/pi-semantic-edit-anchor-stability.json) |

### undo

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | undo | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-undo.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | undo | `read edit edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-undo.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-undo.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-undo.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-undo.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-undo.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-undo.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | undo | `read edit edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-undo.json) |

### error-guidance

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| GLM 5.3 Flash | builtin-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/builtin-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/glm-5.3-flash/pi-hashline-context-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/glm-5.3-flash/pi-hashline-edit-pro-error-guidance.json) |
| GLM 5.3 Flash | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/glm-5.3-flash/pi-hashline-readmap-error-guidance.json) |
| GLM 5.3 Flash | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_cortexkit_aft-pi-error-guidance.json) |
| GLM 5.3 Flash | @xynogen/pix-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/_xynogen_pix-edit-error-guidance.json) |
| GLM 5.3 Flash | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/glm-5.3-flash/pi-semantic-edit-error-guidance.json) |

## Failed runs — traces for validation

Every failed run is listed with its full transcript link (system prompt, user task, model reasoning, every tool call with arguments, every tool result, and the final file state).

| Model | Contender | Scenario | Outcome | Trace |
| --- | --- | --- | --- | --- |
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
