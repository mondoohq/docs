---
title: gcp.project.pubsubService.topic.config.messagestoragepolicy
id: gcp.project.pubsubService.topic.config.messagestoragepolicy
sidebar_label: gcp.project.pubsubService.topic.config.messagestoragepolicy
displayed_sidebar: MQL
description: GCP Pub/Sub topic message storage policy
---

# gcp.project.pubsubService.topic.config.messagestoragepolicy

**Supported platform**

- gcp

**Description**

GCP Pub/Sub topic message storage policy

**Fields**

| ID                        | TYPE             | DESCRIPTION                                                                      |
| ------------------------- | ---------------- | -------------------------------------------------------------------------------- |
| configId                  | string           | Parent configuration ID                                                          |
| allowedPersistenceRegions | &#91;&#93;string | List of GCP regions where messages published to the topic can persist in storage |

**References**

- [Monitor topics within Pub/Sub](https://cloud.google.com/pubsub/docs/monitor-topic)
