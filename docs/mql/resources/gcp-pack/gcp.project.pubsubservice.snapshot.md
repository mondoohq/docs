---
title: gcp.project.pubsubService.snapshot
id: gcp.project.pubsubService.snapshot
sidebar_label: gcp.project.pubsubService.snapshot
displayed_sidebar: MQL
description: Google Cloud (GCP) Pub/Sub snapshot
---

# gcp.project.pubsubService.snapshot

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Pub/Sub snapshot

**Fields**

| ID         | TYPE                                                                  | DESCRIPTION                         |
| ---------- | --------------------------------------------------------------------- | ----------------------------------- |
| projectId  | string                                                                | Project ID                          |
| name       | string                                                                | Subscription name                   |
| topic      | [gcp.project.pubsubService.topic](gcp.project.pubsubservice.topic.md) | The topic for which the snapshot is |
| expiration | time                                                                  | When the snapshot expires           |

**References**

- [Overview of the Pub/Sub service](https://cloud.google.com/pubsub/docs/pubsub-basics)
