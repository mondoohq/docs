---
title: azure.subscription.networkService.bastionHost
id: azure.subscription.networkService.bastionHost
sidebar_label: azure.subscription.networkService.bastionHost
displayed_sidebar: MQL
description: Azure Network Bastion host
---

# azure.subscription.networkService.bastionHost

**Supported platform**

- azure

**Description**

Azure Network Bastion host

**Fields**

| ID         | TYPE              | DESCRIPTION             |
| ---------- | ----------------- | ----------------------- |
| id         | string            | Bastion Host ID         |
| name       | string            | Bastion Host name       |
| location   | string            | Bastion Host location   |
| tags       | map[string]string | Bastion Host tags       |
| type       | string            | Bastion Host type       |
| properties | dict              | Bastion host properties |
| sku        | dict              | Bastion host SKU        |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
