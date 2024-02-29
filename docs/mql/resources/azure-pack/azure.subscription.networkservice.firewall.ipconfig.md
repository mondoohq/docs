---
title: azure.subscription.networkService.firewall.ipConfig
id: azure.subscription.networkService.firewall.ipConfig
sidebar_label: azure.subscription.networkService.firewall.ipConfig
displayed_sidebar: MQL
description: Azure network firewall IP configuration
---

# azure.subscription.networkService.firewall.ipConfig

**Supported platform**

- azure

**Description**

Azure network firewall IP configuration

**Fields**

| ID               | TYPE                                                                                          | DESCRIPTION                                             |
| ---------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| id               | string                                                                                        | Firewall IP configuration ID                            |
| name             | string                                                                                        | Firewall IP configuration name                          |
| etag             | string                                                                                        | Firewall IP configuration etag                          |
| privateIpAddress | string                                                                                        | Firewall IP configuration private IP address            |
| properties       | dict                                                                                          | Firewall IP configuration properties                    |
| publicIpAddress  | [azure.subscription.networkService.ipAddress](azure.subscription.networkservice.ipaddress.md) | Public IP address associated with this IP configuration |
| subnet           | [azure.subscription.networkService.subnet](azure.subscription.networkservice.subnet.md)       | Subnet associated with this IP configuration            |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
