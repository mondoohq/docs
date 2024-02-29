---
title: azure.subscription.resource
id: azure.subscription.resource
sidebar_label: azure.subscription.resource
displayed_sidebar: MQL
description: Azure resource
---

# azure.subscription.resource

**Supported platform**

- azure

**Description**

Azure resource

**Fields**

| ID                | TYPE              | DESCRIPTION                                   |
| ----------------- | ----------------- | --------------------------------------------- |
| id                | string            | Resource ID                                   |
| name              | string            | Resource name                                 |
| kind              | string            | Resource kind                                 |
| location          | string            | Resource location                             |
| tags              | map[string]string | Resource tags                                 |
| type              | string            | Resource type                                 |
| managedBy         | string            | ID of the resource that manages this resource |
| sku               | dict              | Resource SKU                                  |
| plan              | dict              | Resource plan                                 |
| identity          | dict              | Resource identity                             |
| provisioningState | string            | Resource provisioning state                   |
| createdTime       | time              | When the resource was created                 |
| changedTime       | time              | When the resource was last changed            |

**References**

- [Azure Resource Manager documentation](https://learn.microsoft.com/en-us/azure/azure-resource-manager/)
