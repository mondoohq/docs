---
title: gcp.project.loggingservice.metric
id: gcp.project.loggingservice.metric
sidebar_label: gcp.project.loggingservice.metric
displayed_sidebar: MQL
description: Google Cloud (GCP) Logging metric
---

# gcp.project.loggingservice.metric

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Logging metric

**Fields**

| ID            | TYPE                                                                                                | DESCRIPTION                    |
| ------------- | --------------------------------------------------------------------------------------------------- | ------------------------------ |
| id            | string                                                                                              | Metric ID                      |
| projectId     | string                                                                                              | Project ID                     |
| description   | string                                                                                              | Metric description             |
| filter        | string                                                                                              | Advanced log filter            |
| alertPolicies | &#91;&#93;[gcp.project.monitoringService.alertPolicy](gcp.project.monitoringservice.alertpolicy.md) | Alert policies for this metric |

**References**

- [Cloud Logging overview](https://cloud.google.com/logging/docs/overview)
