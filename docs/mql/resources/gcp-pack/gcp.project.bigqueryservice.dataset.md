---
title: gcp.project.bigqueryService.dataset
id: gcp.project.bigqueryService.dataset
sidebar_label: gcp.project.bigqueryService.dataset
displayed_sidebar: MQL
description: Google Cloud (GCP) BigQuery dataset
---

# gcp.project.bigqueryService.dataset

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) BigQuery dataset

**Fields**

| ID          | TYPE                                                                                                            | DESCRIPTION                                                          |
| ----------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| id          | string                                                                                                          | Dataset ID                                                           |
| projectId   | string                                                                                                          | Project ID                                                           |
| name        | string                                                                                                          | User-friendly name for this dataset                                  |
| description | string                                                                                                          | User-friendly description of this dataset                            |
| location    | string                                                                                                          | Geo location of the dataset                                          |
| labels      | map[string]string                                                                                               | User-provided labels                                                 |
| created     | time                                                                                                            | Creation timestamp                                                   |
| modified    | time                                                                                                            | Modified timestamp                                                   |
| tags        | map[string]string                                                                                               | Tags associated with this dataset                                    |
| kmsName     | string                                                                                                          | Cloud KMS encryption key that will be used to protect BigQuery table |
| access      | &#91;&#93;[gcp.project.bigqueryService.dataset.accessEntry](gcp.project.bigqueryservice.dataset.accessentry.md) | Access permissions                                                   |
| tables      | &#91;&#93;[gcp.project.bigqueryService.table](gcp.project.bigqueryservice.table.md)                             | Returns tables in the dataset                                        |
| models      | &#91;&#93;[gcp.project.bigqueryService.model](gcp.project.bigqueryservice.model.md)                             | Returns models in the dataset                                        |
| routines    | &#91;&#93;[gcp.project.bigqueryService.routine](gcp.project.bigqueryservice.routine.md)                         | Returns routines in the dataset                                      |

**References**

- [Introduction to datasets](https://cloud.google.com/bigquery/docs/datasets-intro)
