---
title: gcp.project.pubsubService.subscription.config.pushconfig
id: gcp.project.pubsubService.subscription.config.pushconfig
sidebar_label: gcp.project.pubsubService.subscription.config.pushconfig
displayed_sidebar: MQL
description: GCP Pub/Sub configuration for subscriptions that operate in push mode
---

# gcp.project.pubsubService.subscription.config.pushconfig

**Supported platform**

- gcp

**Description**

GCP Pub/Sub configuration for subscriptions that operate in push mode

**Fields**

| ID         | TYPE              | DESCRIPTION                                   |
| ---------- | ----------------- | --------------------------------------------- |
| configId   | string            | Parent configuration ID                       |
| endpoint   | string            | URL of the endpoint to which to push messages |
| attributes | map[string]string | Endpoint configuration attributes             |

**References**

- [Push subscriptions](https://cloud.google.com/pubsub/docs/push)
