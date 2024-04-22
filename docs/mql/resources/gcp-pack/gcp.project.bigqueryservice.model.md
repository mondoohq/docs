---
title: gcp.project.bigqueryService.model
id: gcp.project.bigqueryService.model
sidebar_label: gcp.project.bigqueryService.model
displayed_sidebar: MQL
description: Google Cloud (GCP) BigQuery ML model
---

# gcp.project.bigqueryService.model

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) BigQuery ML model

**Fields**

| ID             | TYPE              | DESCRIPTION                                                     |
| -------------- | ----------------- | --------------------------------------------------------------- |
| id             | string            | Model ID                                                        |
| datasetId      | string            | Dataset ID                                                      |
| projectId      | string            | Project ID                                                      |
| name           | string            | User-friendly name of the model                                 |
| location       | string            | Geographic location                                             |
| description    | string            | User-friendly description of the model                          |
| labels         | map[string]string | User-provided labels                                            |
| created        | time              | Creation timestamp                                              |
| modified       | time              | Modified timestamp                                              |
| type           | string            | Type of the mode                                                |
| expirationTime | time              | Expiration time of the model                                    |
| kmsName        | string            | Cloud KMS encryption key that is used to protect BigQuery model |

**References**

- [Introduction to BigQuery ML](https://cloud.google.com/bigquery/docs/bqml-introduction)
