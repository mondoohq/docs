---
title: gcp.project.pubsubService.subscription.config
id: gcp.project.pubsubService.subscription.config
sidebar_label: gcp.project.pubsubService.subscription.config
displayed_sidebar: MQL
description: Google Cloud (GCP) Pub/Sub subscription configuration
---

# gcp.project.pubsubService.subscription.config

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Pub/Sub subscription configuration

**Fields**

| ID                  | TYPE                                                                                                                    | DESCRIPTION                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| projectId           | string                                                                                                                  | Project ID                                                                             |
| subscriptionName    | string                                                                                                                  | Subscription name                                                                      |
| topic               | [gcp.project.pubsubService.topic](gcp.project.pubsubservice.topic.md)                                                   | Topic to which the subscription points                                                 |
| pushConfig          | [gcp.project.pubsubService.subscription.config.pushconfig](gcp.project.pubsubservice.subscription.config.pushconfig.md) | Configuration for subscriptions that operate in push mode                              |
| ackDeadline         | time                                                                                                                    | Default maximum time a subscriber can take to acknowledge a message after receiving it |
| retainAckedMessages | bool                                                                                                                    | Whether to retain acknowledged messages                                                |
| retentionDuration   | time                                                                                                                    | How long to retain messages in the backlog after they're published                     |
| expirationPolicy    | time                                                                                                                    | Conditions for a subscription's expiration                                             |
| labels              | map[string]string                                                                                                       | The labels associated with this subscription                                           |

**References**

- [Subscription overview](https://cloud.google.com/pubsub/docs/subscription-overview)
