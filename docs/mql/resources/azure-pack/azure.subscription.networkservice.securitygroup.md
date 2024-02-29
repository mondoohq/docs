---
title: azure.subscription.networkService.securityGroup
id: azure.subscription.networkService.securityGroup
sidebar_label: azure.subscription.networkService.securityGroup
displayed_sidebar: MQL
description: Azure network security group
---

# azure.subscription.networkService.securityGroup

**Supported platform**

- azure

**Description**

Azure network security group

**Fields**

| ID                   | TYPE                                                                                                          | DESCRIPTION                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| id                   | string                                                                                                        | Security group ID                     |
| name                 | string                                                                                                        | Security group name                   |
| location             | string                                                                                                        | Security group location               |
| tags                 | map[string]string                                                                                             | Security group tags                   |
| type                 | string                                                                                                        | Security group type                   |
| etag                 | string                                                                                                        | Security group etag                   |
| properties           | dict                                                                                                          | Security group properties             |
| interfaces           | &#91;&#93;[azure.subscription.networkService.interface](azure.subscription.networkservice.interface.md)       | Security group interfaces             |
| securityRules        | &#91;&#93;[azure.subscription.networkService.securityrule](azure.subscription.networkservice.securityrule.md) | Security group rules                  |
| defaultSecurityRules | &#91;&#93;[azure.subscription.networkService.securityrule](azure.subscription.networkservice.securityrule.md) | Security group default security rules |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
