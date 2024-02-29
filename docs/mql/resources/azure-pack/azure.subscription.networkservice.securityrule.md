---
title: azure.subscription.networkService.securityrule
id: azure.subscription.networkService.securityrule
sidebar_label: azure.subscription.networkService.securityrule
displayed_sidebar: MQL
description: Azure network security rule
---

# azure.subscription.networkService.securityrule

**Supported platform**

- azure

**Description**

Azure network security rule

**Fields**

| ID                   | TYPE           | DESCRIPTION                                   |
| -------------------- | -------------- | --------------------------------------------- |
| id                   | string         | Security rule ID                              |
| name                 | string         | Security rule name                            |
| etag                 | string         | Security rule etag                            |
| properties           | dict           | Security rule properties                      |
| destinationPortRange | &#91;&#93;dict | Security rule destination port range          |
| direction            | string         | Security rule direction (outbound or inbound) |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
