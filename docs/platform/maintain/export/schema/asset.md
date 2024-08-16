---
title: Asset Export Schema
sidebar_label: Asset
description: Asset schema for the Mondoo JSONL export
---

This is the schema Mondoo uses when exporting asset data to JSONL.

## Asset type

`object`

## Asset properties

| Property                                       | Type      | Required? | Nullable? |
| :--------------------------------------------- | :-------- | :-------- | :-------- |
| mrn (deprecated)                               |           |           |           |
| [asset_mrn](#asset_mrn-property)               | `string`  | Yes       | No        |
| [asset_id](#asset_id-property)                 | `string`  | Yes       | No        |
| [space_mrn](#space_mrn-property)               | `string`  | Yes       | No        |
| [space_id](#space_id-property)                 | `string`  | Yes       | No        |
| [space_name](#space_name-property)             | `string`  | Yes       | No        |
| [name](#name-property)                         | `string`  | Yes       | No        |
| [platform_name](#platform_name-property)       | `string`  | Yes       | No        |
| [error](#error-property)                       | `string`  | Yes       | Yes       |
| [score_updated_at](#score_updated_at-property) | `string`  | Yes       | No        |
| [updated_at](#updated_at-property)             | `string`  | Yes       | No        |
| [labels](#labels-property)                     | `object`  | Yes       | No        |
| [annotations](#annotations-property)           | `object`  | Yes       | No        |
| [exported_at](#exported_at-property)           | `string`  | Yes       | No        |
| [base_score](#base_score-property)             | `integer` | Yes       | Yes       |
| [risk_score](#risk_score-property)             | `integer` | Yes       | Yes       |

### mrn property

Deprecated: Use `asset_mrn` instead.

### asset_mrn property

Unique identifier for the asset

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

### name property

Name of the asset

`name`
| Type | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes | No |

### platform_name property

Name of the asset's platform

`platform_name`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### error property

Error, if any

`error`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | Yes       |

### score_updated_at property

Timestamp when the score of this asset was last updated. This is a date-time string matching [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification").

`score_updated_at`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### updated_at property

Timestamp when this asset was last updated. This is a date-time string matching [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification").

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### labels property

Metadata that Mondoo users add to assets

`labels`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| Object | Yes       | No        |

### annotations property

Metadata that Mondoo adds to assets

`annotations`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| Object | Yes       | No        |

### exported_at property

Timestamp when this data was exported. This is a date-time string matching [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification").

`exported_at`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### risk_factors

Read [Risk Factor Export Schema](/platform/maintain/export/schema/risk/).

### base_score property

Asset's score from most recent policy-based scan

`base_score`

| Type    | Required? | Nullable? |
| :------ | :-------- | :-------- |
| Integer | Yes       | Yes       |

### risk_score property

Asset's risk score

`risk_score`

| Type    | Required? | Nullable? |
| :------ | :-------- | :-------- |
| Integer | Yes       | Yes       |

---
