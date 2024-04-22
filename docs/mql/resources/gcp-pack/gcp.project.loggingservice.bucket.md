---
title: gcp.project.loggingservice.bucket
id: gcp.project.loggingservice.bucket
sidebar_label: gcp.project.loggingservice.bucket
displayed_sidebar: MQL
description: Google Cloud (GCP) Logging bucket
---

# gcp.project.loggingservice.bucket

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Logging bucket

**Fields**

| ID               | TYPE                                                                                                        | DESCRIPTION                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| projectId        | string                                                                                                      | Project ID                                                                                            |
| cmekSettings     | dict                                                                                                        | CMEK settings of the log bucket                                                                       |
| created          | time                                                                                                        | Creation timestamp                                                                                    |
| description      | string                                                                                                      | Description of the bucket                                                                             |
| indexConfigs     | &#91;&#93;[gcp.project.loggingservice.bucket.indexConfig](gcp.project.loggingservice.bucket.indexconfig.md) | List of indexed fields and related configuration data                                                 |
| lifecycleState   | string                                                                                                      | Bucket lifecycle state                                                                                |
| locked           | bool                                                                                                        | Whether the bucket is locked                                                                          |
| name             | string                                                                                                      | Bucket name                                                                                           |
| restrictedFields | &#91;&#93;string                                                                                            | Log entry field paths that are denied access in this bucket                                           |
| retentionDays    | int                                                                                                         | Amount of time for which logs will be retained by default, after which they're' automatically deleted |
| updated          | time                                                                                                        | Last update timestamp of the bucket                                                                   |

**References**

- [Cloud Logging overview](https://cloud.google.com/logging/docs/overview)
