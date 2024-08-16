---
title: Check Result Export Schema
sidebar_label: Check Results
description: Query result schema for the Mondoo JSONL export
---

This is the schema Mondoo uses when exporting check result data to JSONL.

## Result type

`object`

## Result properties

| Property                             | Type          | Required? | Nullable? |
| :----------------------------------- | :------------ | :-------- | :-------- |
| [space_mrn](#space_mrn-property)     | `string`      | Yes       | No        |
| [space_id](#space_id-property)     | `string`      | Yes       | No        |
| [space_name](#space_name-property)     | `string`      | Yes       | No        |
| [asset_id](#asset_id-property)     | `string`      | Yes       | No        |
| [asset_mrn](#asset_mrn-property)     | `string`      | Yes       | No        |
| [score](#score-property)             | Deprecated     |        |         |
| [base_score](#base_score-property)       | `integer`     | Yes       | Yes        |
| [risk_score](#risk_score-property)        | `integer`     | Yes       |Yes        |
| [status](#status-property)           | `string`      | Yes       | No        |
| [modified_at](#modified_at-property) | `string`      | Yes       | No        |
| [failed_at](#failed_at-property)     | `string`      | Yes       | No        |

### space_mrn property

Mondoo identifier for the space containing the asset

`asset_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### space_id property

Unique identifier for the space containing the asset

`asset_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### space_name property

Name of the space containing the asset

`asset_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### asset_id property

Unique identifier for the asset

`asset_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### asset_mrn property

Mondoo identifier for the asset

`asset_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### score property

Deprecated: Use `base_score` instead.

### base_score property

Asset's score for this check in the most recent policy-based scan

`base_score`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| Integer | Yes       | Yes        |

### risk_score property

Check risk score

`risk_score`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| Integer | Yes       | Yes        |

### status property

Translation of the check base score value:

- If the check base score is 100, the status is `pass`.

- If the check base score is lower than 100, the status is `fail`.

`status`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### modified_at property

Timestamp from when this check result item was last modified. This is a date-time string matching [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification").

`modified_at`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### failed_at property

Optional timestamp from when this check result item failed This is a date-time string matching [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification"). If the check has never failed, the value is Unix epoch 0, which is shown in the export as `1970-01-01T01:00:00+01:00`.

`failed_at`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

---
