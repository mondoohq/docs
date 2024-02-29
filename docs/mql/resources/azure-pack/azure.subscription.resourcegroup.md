---
title: azure.subscription.resourcegroup
id: azure.subscription.resourcegroup
sidebar_label: azure.subscription.resourcegroup
displayed_sidebar: MQL
description: Azure resource group
---

# azure.subscription.resourcegroup

**Supported platform**

- azure

**Description**

Azure resource group

**Fields**

| ID                | TYPE              | DESCRIPTION                                         |
| ----------------- | ----------------- | --------------------------------------------------- |
| id                | string            | Resource group ID                                   |
| name              | string            | Resource group name                                 |
| location          | string            | Resource group location                             |
| tags              | map[string]string | Resource group tags                                 |
| type              | string            | Resource group type                                 |
| managedBy         | string            | ID of the resource that manages this resource group |
| provisioningState | string            | Resource group provisioning state                   |

**References**

- [Azure Resource Manager documentation](https://learn.microsoft.com/en-us/azure/azure-resource-manager/)
