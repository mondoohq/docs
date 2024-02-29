---
title: azure.subscription.networkService.virtualNetworkGateway.ipConfig
id: azure.subscription.networkService.virtualNetworkGateway.ipConfig
sidebar_label: azure.subscription.networkService.virtualNetworkGateway.ipConfig
displayed_sidebar: MQL
description: Azure Virtual Network (VNet) gateway IP configuration
---

# azure.subscription.networkService.virtualNetworkGateway.ipConfig

**Supported platform**

- azure

**Description**

Azure Virtual Network (VNet) gateway IP configuration

**Fields**

| ID               | TYPE                                                                                          | DESCRIPTION                                                  |
| ---------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| id               | string                                                                                        | VNet gateway IP Configuration ID                             |
| name             | string                                                                                        | VNet gateway IP Configuration name                           |
| etag             | string                                                                                        | VNet gateway IP Configuration etag                           |
| privateIpAddress | string                                                                                        | VNet gateway IP Configuration private IP address             |
| properties       | dict                                                                                          | VNet gateway IP Configuration properties                     |
| publicIpAddress  | [azure.subscription.networkService.ipAddress](azure.subscription.networkservice.ipaddress.md) | The public IP address, associated with this IP configuration |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
