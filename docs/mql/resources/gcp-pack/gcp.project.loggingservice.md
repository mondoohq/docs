---
title: gcp.project.loggingservice
id: gcp.project.loggingservice
sidebar_label: gcp.project.loggingservice
displayed_sidebar: MQL
description: Google Cloud (GCP) Logging resources
---

# gcp.project.loggingservice

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Logging resources

**Fields**

| ID        | TYPE                                                                                | DESCRIPTION             |
| --------- | ----------------------------------------------------------------------------------- | ----------------------- |
| projectId | string                                                                              | Project ID              |
| buckets   | &#91;&#93;[gcp.project.loggingservice.bucket](gcp.project.loggingservice.bucket.md) | List of logging buckets |
| metrics   | &#91;&#93;[gcp.project.loggingservice.metric](gcp.project.loggingservice.metric.md) | List of metrics         |
| sinks     | &#91;&#93;[gcp.project.loggingservice.sink](gcp.project.loggingservice.sink.md)     | List of log sinks       |

**References**

- [Cloud Logging overview](https://cloud.google.com/logging/docs/overview)
