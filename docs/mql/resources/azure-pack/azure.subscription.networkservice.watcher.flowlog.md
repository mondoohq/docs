---
title: azure.subscription.networkService.watcher.flowlog
id: azure.subscription.networkService.watcher.flowlog
sidebar_label: azure.subscription.networkService.watcher.flowlog
displayed_sidebar: MQL
description: Azure Network Watcher flow log
---

# azure.subscription.networkService.watcher.flowlog

**Supported platform**

- azure

**Description**

Azure Network Watcher flow log

**Fields**

| ID                 | TYPE              | DESCRIPTION                                         |
| ------------------ | ----------------- | --------------------------------------------------- |
| id                 | string            | Network watcher flow log ID                         |
| name               | string            | Network watcher flow log name                       |
| location           | string            | Network watcher flow log location                   |
| tags               | map[string]string | Network watcher flow log tags                       |
| type               | string            | Network watcher flow log type                       |
| etag               | string            | Network watcher flow log etag                       |
| provisioningState  | string            | Network watcher flow log provisioning state         |
| enabled            | bool              | Whether the network watcher flow log is enabled     |
| storageAccountId   | string            | Network watcher flow log storage account identifier |
| targetResourceId   | string            | Network watcher flow log target resource identifier |
| targetResourceGuid | string            | Network watcher flow log target resource guid       |
| version            | int               | Network watcher flow log version                    |
| format             | string            | Network watcher flow log format                     |
| retentionPolicy    | dict              | Network watcher flow log retention policy           |
| analytics          | dict              | Network watcher flow log analytics                  |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
