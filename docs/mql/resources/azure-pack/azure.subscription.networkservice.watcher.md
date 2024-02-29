---
title: azure.subscription.networkService.watcher
id: azure.subscription.networkService.watcher
sidebar_label: azure.subscription.networkService.watcher
displayed_sidebar: MQL
description: Azure Network Watcher
---

# azure.subscription.networkService.watcher

**Supported platform**

- azure

**Description**

Azure Network Watcher

**Fields**

| ID                | TYPE                                                                                                                | DESCRIPTION                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| id                | string                                                                                                              | Network watcher ID                 |
| name              | string                                                                                                              | Network watcher name               |
| location          | string                                                                                                              | Network watcher location           |
| tags              | map[string]string                                                                                                   | Network watcher tags               |
| type              | string                                                                                                              | Network watcher type               |
| etag              | string                                                                                                              | Network watcher etag               |
| properties        | dict                                                                                                                | Network watcher properties         |
| flowLogs          | &#91;&#93;[azure.subscription.networkService.watcher.flowlog](azure.subscription.networkservice.watcher.flowlog.md) | Network watcher flow logs          |
| provisioningState | string                                                                                                              | Network watcher provisioning state |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
