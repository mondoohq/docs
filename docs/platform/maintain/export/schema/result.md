---
title: Query Result Export Schema
sidebar_label: Query Results
description: Query result schema for the Mondoo JSONL export
---

This is the schema Mondoo uses when exporting query result data to JSONL.

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
| [query_mrn](#query_mrn-property)     | `string`      | Yes       | No        |
| [title](#title-property)             | `string`      | Yes       | No        |
| [mql](#mql-property)                 | `string`      | Yes       | No        |
| [data](#data-property)               | `JSON` | Yes       | No        |
| [exported_at](#exported_at-property) | `string`      | Yes       | No        |

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

### query_mrn property

Mondoo identifier for the query

`query_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### title property

Title of the query

`title`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### mql property

MQL of the query

`mql`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### data property

Data of the query result

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

---
