---
title: Asset Export Schema
sidebar_label: Asset
description: Asset schema for the Mondoo JSONL export
---

This is the schema Mondoo uses when exporting asset data to JSONL.

## Asset type

`object`

## Asset properties

| Property                                       | Type   | Required? | Nullable? |
| :--------------------------------------------- | :----- | :-------- | :-------- |
| [annotations](#annotations-property)           | Object | Yes       | No        |
| [asset_mrn](#asset_mrn-property)               | String | Yes       | No        |
| [error](#error-property)                       | String | Yes       | Yes       |
| [exported_at](#exported_at-property)           | String | Yes       | No        |
| [labels](#labels-property)                     | Object | Yes       | No        |
| mrn (deprecated)                               | String | Yes       | No        |
| [name](#name-property)                         | String | Yes       | No        |
| [platform_name](#platform_name-property)       | String | Yes       | No        |
| [score_updated_at](#score_updated_at-property) | String | Yes       | No        |
| [updated_at](#updated_at-property)             | String | Yes       | No        |

### annotations property

Metadata that Mondoo adds to assets

`annotations`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| Object | Yes       | No        |

### asset_mrn property

Unique identifier for the asset

`asset_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### error property

The error if any (needs better description)

`error`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | Yes       |

### exported_at property

Timestamp when this data was exported. This is a date-time string matching [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification").

`exported_at`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### labels property

Metadata that Mondoo users add to assets

`labels`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| Object | Yes       | No        |

### mrn

Deprecated. Use `asset_mrn` instead.

### name property

The name of the asset

`name`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### platform_name property

The name of the platform

`platform_name`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

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

---
