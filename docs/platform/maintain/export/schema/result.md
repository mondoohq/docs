---
title: Result Export Schema
sidebar_label: Result
description: Result schema for the Mondoo JSONL export
---

This is the schema Mondoo uses when exporting result data to JSONL.

## Result type

`object`

## Result properties

| Property                             | Type          | Required? | Nullable? |
| :----------------------------------- | :------------ | :-------- | :-------- |
| [asset_mrn](#asset_mrn-property)     | `string`      | Yes       | No        |
| [query_mrn](#query_mrn-property)     | `string`      | Yes       | No        |
| [title](#title-property)             | `string`      | Yes       | No        |
| [mql](#mql-property)                 | `string`      | Yes       | No        |
| [data](#data-property)               | Not specified | Yes       | No        |
| [exported_at](#exported_at-property) | `string`      | Yes       | No        |
| [score](#score-property)             | `integer`     | Yes       | No        |
| [status](#status-property)           | `string`      | Yes       | No        |
| [modified_at](#modified_at-property) | `string`      | Yes       | No        |
| [failed_at](#failed_at-property)     | `string`      | Yes       | No        |

### asset_mrn property

Unique identifier for the query result item's asset

`asset_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### query_mrn property

Unique identifier for the query

`query_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### title property

The title of the query result item

`title`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### mql property

MQL of the query result item

`mql`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### data property

The data of the query result item

`data`

| Type    | Required? | Nullable? |
| :------ | :-------- | :-------- |
| Unknown | Yes       | No        |

### exported_at property

Timestamp from when the data was exported. This is a date-time string matching [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification").

`exported_at`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### score property

Score of the check result item

`score`

| Type    | Required? | Nullable? |
| :------ | :-------- | :-------- |
| Integer | Yes       | No        |

### status property

Status of the check result item

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

Optional timestamp from when this check result item failed This is a date-time string matching [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification").

`failed_at`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

---
