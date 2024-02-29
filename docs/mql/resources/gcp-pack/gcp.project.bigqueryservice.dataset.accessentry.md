---
title: gcp.project.bigqueryService.dataset.accessEntry
id: gcp.project.bigqueryService.dataset.accessEntry
sidebar_label: gcp.project.bigqueryService.dataset.accessEntry
displayed_sidebar: MQL
description: GCP BigQuery dataset access entry
---

# gcp.project.bigqueryService.dataset.accessEntry

**Supported platform**

- gcp

**Description**

GCP BigQuery dataset access entry

**Fields**

| ID         | TYPE   | DESCRIPTION                                           |
| ---------- | ------ | ----------------------------------------------------- |
| id         | string | Internal ID                                           |
| datasetId  | string | Dataset ID                                            |
| role       | string | Role of the entity                                    |
| entityType | string | Type of the entity                                    |
| entity     | string | Entity (individual or group) granted access           |
| viewRef    | dict   | View granted access (entityType must be ViewEntity)   |
| routineRef | dict   | Routine granted access (only UDF currently supported) |
| datasetRef | dict   | Resources within a dataset granted access             |

**References**

- [Control access to resources](https://cloud.google.com/bigquery/docs/control-access-to-resources-iam)
