---
title: azure.subscription.networkService.applicationGateway
id: azure.subscription.networkService.applicationGateway
sidebar_label: azure.subscription.networkService.applicationGateway
displayed_sidebar: MQL
description: Azure Application Gateway
---

# azure.subscription.networkService.applicationGateway

**Supported platform**

- azure

**Description**

Azure Application Gateway

**Fields**

| ID         | TYPE                                                                                                                          | DESCRIPTION                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| id         | string                                                                                                                        | Application Gateway ID                        |
| name       | string                                                                                                                        | Application Gateway name                      |
| location   | string                                                                                                                        | Application Gateway location                  |
| tags       | map[string]string                                                                                                             | Application Gateway tags                      |
| type       | string                                                                                                                        | Application Gateway resource type             |
| etag       | string                                                                                                                        | Application Gateway etag                      |
| properties | dict                                                                                                                          | Application Gateway properties                |
| policy     | [azure.subscription.networkService.applicationFirewallPolicy](azure.subscription.networkservice.applicationfirewallpolicy.md) | Gets the attached application firewall policy |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
