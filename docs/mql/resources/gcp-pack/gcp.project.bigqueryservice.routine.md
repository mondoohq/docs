---
title: gcp.project.bigqueryService.routine
id: gcp.project.bigqueryService.routine
sidebar_label: gcp.project.bigqueryService.routine
displayed_sidebar: MQL
description: Google Cloud (GCP) BigQuery routine
---

# gcp.project.bigqueryService.routine

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) BigQuery routine

**Fields**

| ID          | TYPE   | DESCRIPTION                                        |
| ----------- | ------ | -------------------------------------------------- |
| id          | string | Routine ID                                         |
| datasetId   | string | Dataset ID                                         |
| projectId   | string | Project ID                                         |
| language    | string | Language of the routine, such as SQL or JAVASCRIPT |
| description | string | User-friendly description of the routine           |
| created     | time   | Creation timestamp                                 |
| modified    | time   | Modified timestamp                                 |
| type        | string | Type of routine                                    |

**References**

- [Manage routines](https://cloud.google.com/bigquery/docs/routines)
