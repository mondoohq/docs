---
title: gcp.project.cloudRunService.condition
id: gcp.project.cloudRunService.condition
sidebar_label: gcp.project.cloudRunService.condition
displayed_sidebar: MQL
description: Google Cloud (GCP) Run condition
---

# gcp.project.cloudRunService.condition

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Run condition

**Fields**

| ID                 | TYPE   | DESCRIPTION                                                        |
| ------------------ | ------ | ------------------------------------------------------------------ |
| id                 | string | Internal ID                                                        |
| type               | string | Status of the reconciliation process                               |
| state              | string | Condition state                                                    |
| message            | string | Human-readable message indicating details about the current status |
| lastTransitionTime | time   | Last time the condition transitioned from one status to another    |
| severity           | string | How to interpret failures of this condition                        |

**References**

- [Condition](https://cloud.google.com/run/docs/reference/rest/v1/Condition)
