---
title: Vulnerability Export Schema
sidebar_label: Vulnerability
description: Vulnerability schema for the Mondoo JSONL export
---

This is the schema Mondoo uses when exporting vulnerability data to JSONL.

## Vulnerability type

`object`

## Vulnerability properties

| Property                                         | Type     | Required? | Nullable? |
| :----------------------------------------------- | :------- | :-------- | :-------- |
| [asset_mrn](#asset_mrn-property)                 | `string` | Yes       | No        |
| [vuln_mrn](#vuln_mrn-property)                   | `string` | Yes       | No        |
| [vuln_id](#vuln_id-property)                     | `string` | Yes       | No        |
| [type](#type-property)                           | `string` | Yes       | No        |
| [summary](#summary-property)                     | `string` | Yes       | No        |
| [first_detected_on](#first_detected_on-property) | `string` | Yes       | No        |
| [resolved_on](#resolved_on-property)             | `string` | Yes       | No        |
| [exported_at](#exported_at-property)             | `string` | Yes       | No        |

### asset_mrn property

Unique identifier for the vulnerability item's asset

`asset_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### vuln_mrn property

Unique identifier for the vulnerability

`vuln_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### vuln_id property

Unique CVE number or advisory number

`vuln_id`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### type property

The type of the vulnerability: CVE or Advisory

`type`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### summary property

Brief summary of the vulnerability

`summary`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### first_detected_on property

Timestamp from when the vulnerability was first detected. This is a date-time string matching [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification").

`first_detected_on`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### resolved_on property

Optional timestamp from when the vulnerability was resolved. This is a date-time string matching [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification").

`resolved_on`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### exported_at property

Timestamp from when this vulnerability data was exported. This is a date-time string matching [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification").

`exported_at`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

---
