---
title: gcp.project.pubsubService
id: gcp.project.pubsubService
sidebar_label: gcp.project.pubsubService
displayed_sidebar: MQL
description: Google Cloud (GCP) Pub/Sub resources
---

# gcp.project.pubsubService

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Pub/Sub resources

**Fields**

| ID            | TYPE                                                                                          | DESCRIPTION                                  |
| ------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------- |
| projectId     | string                                                                                        | Project ID                                   |
| topics        | &#91;&#93;[gcp.project.pubsubService.topic](gcp.project.pubsubservice.topic.md)               | List of topics in the current project        |
| subscriptions | &#91;&#93;[gcp.project.pubsubService.subscription](gcp.project.pubsubservice.subscription.md) | List of subscriptions in the current project |
| snapshots     | &#91;&#93;[gcp.project.pubsubService.snapshot](gcp.project.pubsubservice.snapshot.md)         | List of snapshots in the current project     |

**References**

- [Alerting overview](https://cloud.google.com/monitoring/alerts)
