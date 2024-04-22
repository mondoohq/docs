---
title: gcp.project.pubsubService.topic.config
id: gcp.project.pubsubService.topic.config
sidebar_label: gcp.project.pubsubService.topic.config
displayed_sidebar: MQL
description: Google Cloud (GCP) Pub/Sub topic configuration
---

# gcp.project.pubsubService.topic.config

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Pub/Sub topic configuration

**Fields**

| ID                   | TYPE                                                                                                                          | DESCRIPTION                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| projectId            | string                                                                                                                        | Project ID                                                              |
| topicName            | string                                                                                                                        | Topic name                                                              |
| labels               | map[string]string                                                                                                             | Labels associated with this topic                                       |
| kmsKeyName           | string                                                                                                                        | Cloud KMS key used to protect access to messages published to the topic |
| messageStoragePolicy | [gcp.project.pubsubService.topic.config.messagestoragepolicy](gcp.project.pubsubservice.topic.config.messagestoragepolicy.md) | Message storage policy                                                  |

**References**

- [Monitor topics within Pub/Sub](https://cloud.google.com/pubsub/docs/monitor-topic)
