# pi edit-tool benchmark — LLM runs

Generated 2026-09-04T10:32:20.179Z. Real-model runs against opencode-go; the model drives each contender's actual tools through a tool-calling loop. Total API cost: $0.5369.

## Models

| Model | Runs | Passed | Pass rate | Avg steps | Avg tokens/run | Cost |
| --- | --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | 272 | 214/272 | 79% | 3.2 | 17837 | $0.5369 |

## Results — pass rate by model (rows) × tool (columns)

| Model | builtin-edit | pi-hashline-edit | pi-hashline-context-edit | pi-hashline-edit-pro | pi-hashline-readmap | @cortexkit/aft-pi | @xynogen/pix-edit | pi-semantic-edit | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | 23/34 | 28/34 | 28/34 | 29/34 | 29/34 | 27/34 | 27/34 | 23/34 | 214/272 (79%) |

## Per-tool totals (all models)

| Tool | Core (15) | Staleness (11) | Served-state (8) | Passed | Total | Pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| builtin-edit | 9/15 | 7/11 | 7/8 | 23 | 34 | 68% |
| pi-hashline-edit | 11/15 | 10/11 | 7/8 | 28 | 34 | 82% |
| pi-hashline-context-edit | 11/15 | 10/11 | 7/8 | 28 | 34 | 82% |
| pi-hashline-edit-pro | 12/15 | 10/11 | 7/8 | 29 | 34 | 85% |
| pi-hashline-readmap | 13/15 | 10/11 | 6/8 | 29 | 34 | 85% |
| @cortexkit/aft-pi | 11/15 | 9/11 | 7/8 | 27 | 34 | 79% |
| @xynogen/pix-edit | 11/15 | 9/11 | 7/8 | 27 | 34 | 79% |
| pi-semantic-edit | 8/15 | 8/11 | 7/8 | 23 | 34 | 68% |

## Per-tool process (all models)

| Tool | Avg steps | Avg tokens/run | Avg cost | Max steps |
| --- | --- | --- | --- | --- |
| builtin-edit | 3.2 | 8571 | $0.0011 | 10 |
| pi-hashline-edit | 3.0 | 11898 | $0.0013 | 5 |
| pi-hashline-context-edit | 2.8 | 10243 | $0.0011 | 6 |
| pi-hashline-edit-pro | 3.4 | 11883 | $0.0013 | 9 |
| pi-hashline-readmap | 3.3 | 10457 | $0.0013 | 10 |
| @cortexkit/aft-pi | 3.0 | 8852 | $0.0010 | 6 |
| @xynogen/pix-edit | 3.7 | 13059 | $0.0017 | 10 |
| pi-semantic-edit | 3.3 | 67729 | $0.0069 | 10 |

## Scenario detail

### b6-change-then-revert

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b6-change-then-revert.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b6-change-then-revert.json) |

### b7-paged-read-gap

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b7-paged-read-gap.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b7-paged-read-gap.json) |

### b8-blind-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b8-blind-edit.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b8-blind-edit.json) |

### b9-boundary-changed

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b9-boundary-changed.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b9-boundary-changed.json) |

### b10-duplicate-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | rejected | `read edit✗ edit✗ edit✗ edit✗ edit✗ edit✗ read read read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b10-duplicate-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b10-duplicate-drift.json) |

### b12-noop-with-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit✗ read read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b12-noop-with-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ read read read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b12-noop-with-drift.json) |

### b13-chained-diff-edit

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b13-chained-diff-edit.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b13-chained-diff-edit.json) |

### b15-large-range-drift

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | rejected | `read edit✗ read read edit✗ edit✗ edit✗ read read read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read read edit read read read read read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b15-large-range-drift.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b15-large-range-drift.json) |

### b16b-undo-stale

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | undo-refused | `read replace undo_last_change✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b16b-undo-stale.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b16b-undo-stale.json) |

### b17-reversed-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b17-reversed-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b17-reversed-range.json) |

### b18-boundary-dup

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read replace read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-b18-boundary-dup.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-b18-boundary-dup.json) |

### single-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-single-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-single-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-single-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-single-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-single-line.json) |

### range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-range.json) |

### delete-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-delete-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-delete-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-delete-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-delete-line.json) |

### duplicate-nth

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-duplicate-nth.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-nth.json) |

### duplicate-import

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-duplicate-import.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-duplicate-import.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-duplicate-import.json) |

### whitespace-only

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-whitespace-only.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-whitespace-only.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-whitespace-only.json) |

### crlf

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-crlf.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-crlf.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-crlf.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-crlf.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-crlf.json) |

### bom

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-bom.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-bom.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-bom.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-bom.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-bom.json) |

### empty-file

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit✗ read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read insert` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-empty-file.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-empty-file.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (noop) | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-empty-file.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (silent-wrong-line) | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-empty-file.json) |

### long-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read read read read read read read read read read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read read read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-long-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-long-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-long-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read read read edit read edit read edit edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-long-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read read read read edit✗ edit read read read read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-long-line.json) |

### noop

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-noop.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit✗ read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-noop.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-noop.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit✗` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-noop.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit✗ edit✗ read read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-noop.json) |

### insert-after

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-insert-after.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-insert-after.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-insert-after.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-insert-after.json) |

### unicode

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read read✗ read✗ read read✗ insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-unicode.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-unicode.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-unicode.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-unicode.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-unicode.json) |

### tabs

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read insert✗ insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-tabs.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-tabs.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-tabs.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-tabs.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | error (crashed) | `read read edit read` | - |

### no-trailing-newline

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (applied-wrong) | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (applied-wrong) | `read read✗ read✗ read✗ read✗ read read✗ replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (applied-wrong) | `read read✗ edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-no-trailing-newline.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-no-trailing-newline.json) |

### stale-line

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-stale-line.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-stale-line.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-stale-line.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-stale-line.json) |

### target-deleted

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read read edit read` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ❌ | applied (silent-wrong-line) | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ❌ | applied (silent-wrong-line) | `read read read insert✗ read read insert read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ❌ | applied (silent-wrong-line) | `read read read✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-target-deleted.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (silent-wrong-line) | `read read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-target-deleted.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ❌ | applied (silent-wrong-line) | `read read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-target-deleted.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | error (crashed) | `read read` | - |

### stale-range

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-stale-range.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-stale-range.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-stale-range.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-stale-range.json) |

### shift-above

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-shift-above.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit✗ read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-shift-above.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit✗ edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-shift-above.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace read read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-shift-above.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit read edit read read read edit read read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-shift-above.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ❌ | applied (applied-wrong) | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-shift-above.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-shift-above.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ❌ | applied (applied-wrong) | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-shift-above.json) |

### external-far

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-external-far.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-external-far.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit read read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-external-far.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-external-far.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-external-far.json) |

### anchor-stability

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | applied | `read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-anchor-stability.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-anchor-stability.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | applied | `read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-anchor-stability.json) |

### undo

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | undo | `read edit edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | undo | `read replace undo_last_change read` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-undo.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-undo.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | undo | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-undo.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | undo | `read read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-undo.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | undo | `read edit read edit` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-undo.json) |

### error-guidance

| Model | Contender | Pass | Outcome | Steps | Trace |
| --- | --- | --- | --- | --- | --- |
| Muse Spark 1.3 Contributor | builtin-edit | ❌ | applied (silent-wrong-line) | `read edit` | [trace](traces/muse-spark-1.3-contributor/builtin-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-context-edit | ✅ | recovered | `read edit✗ edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-context-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-edit-pro | ✅ | recovered | `read replace✗ read replace` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-edit-pro-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-hashline-readmap | ✅ | recovered | `read edit✗ read edit` | [trace](traces/muse-spark-1.3-contributor/pi-hashline-readmap-error-guidance.json) |
| Muse Spark 1.3 Contributor | @cortexkit/aft-pi | ✅ | recovered | `read edit read edit read` | [trace](traces/muse-spark-1.3-contributor/_cortexkit_aft-pi-error-guidance.json) |
| Muse Spark 1.3 Contributor | @xynogen/pix-edit | ✅ | recovered | `read edit read read edit read` | [trace](traces/muse-spark-1.3-contributor/_xynogen_pix-edit-error-guidance.json) |
| Muse Spark 1.3 Contributor | pi-semantic-edit | ✅ | recovered | `read edit read read read edit read` | [trace](traces/muse-spark-1.3-contributor/pi-semantic-edit-error-guidance.json) |

## Failed runs — traces for validation

Every failed run is listed with its full transcript link (system prompt, user task, model reasoning, every tool call with arguments, every tool result, and the final file state).

| Model | Contender | Scenario | Outcome | Trace |
| --- | --- | --- | --- | --- |
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
