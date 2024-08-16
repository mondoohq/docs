---
title: Vulnerability Export Schema
sidebar_label: Vulnerabilities
description: Vulnerability schema for the Mondoo JSONL export
---

This is the schema Mondoo uses when exporting vulnerability data to JSONL.

## Vulnerability type

`object`

## Vulnerability properties

| Property                                         | Type     | Required? | Nullable? |
| :----------------------------------------------- | :------- | :-------- | :-------- |
| [space_mrn](#space_mrn-property)     | `string`      | Yes       | No        |
| [space_id](#space_id-property)     | `string`      | Yes       | No        |
| [space_name](#space_name-property)     | `string`      | Yes       | No        |
| [asset_id](#asset_id-property)     | `string`      | Yes       | No        |
| [asset_mrn](#asset_mrn-property)     | `string`      | Yes       | No        |
| [vuln_mrn](#vuln_mrn-property)                   | `string` | Yes       | No        |
| [vuln_id](#vuln_id-property)                     | `string` | Yes       | No        |
| [type](#type-property)                           | `string` | Yes       | No        |
| [summary](#summary-property)                     | `string` | Yes       | No        |
| [cvss_score](#cvss_score-property)                     | `integer` | No       | No        |
| [cvss_severity](#cvss_severity-property)                     | `string` | No       | No        |
| [first_detected_on](#first_detected_on-property) | `string` | Yes       | No        |
| [resolved_on](#resolved_on-property)             | `string` | Yes       | No        |
| [exported_at](#exported_at-property)             | `string` | Yes       | No        |
| [risk_factors](#risk_factors-property)       | `JSON`     | No       | Yes        |
| [references](#references-property)        | `JSON`     | No       | Yes        |
| [base_score](#base_score-property)       | `integer`     | Yes       | No        |
| [risk_score](#risk_score-property)        | `integer`     | Yes       | No        |

### space_mrn property

Mondoo identifier for the space containing the asset

`space_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### space_id property

Unique identifier for the space containing the asset

`space_id`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### space_name property

Name of the space containing the asset

`space_name`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### asset_id property

Unique identifier for the asset

`asset_id`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### asset_mrn property

Mondoo identifier for the asset

`asset_mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### vuln_mrn property

Mondoo identifier for the vulnerability

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

### cvss_score property

CVSS score (0 to 10)

`cvss_score`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| Integer | Yes       | No        |

### cvss_severity property

CVSS severity (Critical, High, Medium, Low, None)

`cvss_score`

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

### risk_factors property

Read [Risk Factors](/platform/maintain/export/schema/risk/).

### references property

CVE and advisory references

`references`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | No       | Yes        |

### base_score property

CVE or advisory score based on the most recent policy-based scan

`base_score`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| Integer | Yes       | No        |

### risk_score property

CVE or advisory's risk score

`risk_score`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| Integer | Yes       | No        |

---
