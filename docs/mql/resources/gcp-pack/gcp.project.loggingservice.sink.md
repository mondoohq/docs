---
title: gcp.project.loggingservice.sink
id: gcp.project.loggingservice.sink
sidebar_label: gcp.project.loggingservice.sink
displayed_sidebar: MQL
description: GCP Logging sink
---

# gcp.project.loggingservice.sink

**Supported platform**

- gcp

**Description**

GCP Logging sink

**Fields**

| ID              | TYPE                                                                      | DESCRIPTION                                                                                                                                                    |
| --------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id              | string                                                                    | Sink ID                                                                                                                                                        |
| projectId       | string                                                                    | Project ID                                                                                                                                                     |
| destination     | string                                                                    | Export destination                                                                                                                                             |
| storageBucket   | [gcp.project.storageService.bucket](gcp.project.storageservice.bucket.md) | Storage bucket to which the sink exports (only set for sinks with a destination storage bucket)                                                                |
| filter          | string                                                                    | Optional advanced logs filter                                                                                                                                  |
| writerIdentity  | string                                                                    | When exporting logs, logging adopts this identity for authorization                                                                                            |
| includeChildren | bool                                                                      | Whether to allow the sink to export log entries from the organization or folder, plus (recursively) from any contained folders, billings accounts, or projects |

**References**

- [Cloud Logging overview](https://cloud.google.com/logging/docs/overview)
