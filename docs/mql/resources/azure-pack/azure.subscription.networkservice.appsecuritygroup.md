---
title: azure.subscription.networkService.appSecurityGroup
id: azure.subscription.networkService.appSecurityGroup
sidebar_label: azure.subscription.networkService.appSecurityGroup
displayed_sidebar: MQL
description: Azure network application security group
---

# azure.subscription.networkService.appSecurityGroup

**Supported platform**

- azure

**Description**

Azure network application security group

**Fields**

| ID         | TYPE              | DESCRIPTION                           |
| ---------- | ----------------- | ------------------------------------- |
| id         | string            | Application security group ID         |
| name       | string            | Application security group name       |
| location   | string            | Application security group location   |
| tags       | map[string]string | Application security group tags       |
| type       | string            | Application security group type       |
| etag       | string            | Application security group etag       |
| properties | dict              | Application security group properties |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
