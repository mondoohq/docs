---
title: Risk Factor Export Schema
sidebar_label: Risk Factors
description: Risk factors schema for the Mondoo JSONL export
---

This is the schema Mondoo uses when exporting risk factor data to JSONL.

## RiskFactor type

`object`

## RiskFactor properties

| Property               | Type     | Required? | Nullable? |
| :--------------------- | :------- | :-------- | :-------- |
| [id](#id-property)     | `string` | Yes       | No        |
| [mrn](#mrn-property)   | `string` | Yes       | No        |
| [name](#name-property) | `string` | Yes       | No        |

### id property

Unique identifier for the risk factor

`id`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### mrn property

Mondoo identifier for the risk factor

`mrn`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

### name property

Name of the risk factor

`name`

| Type   | Required? | Nullable? |
| :----- | :-------- | :-------- |
| String | Yes       | No        |

---
