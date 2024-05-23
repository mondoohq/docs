---
title: azure.subscription.networkService.subnet
id: azure.subscription.networkService.subnet
sidebar_label: azure.subscription.networkService.subnet
displayed_sidebar: MQL
description: Azure Virtual Network (VNet) subnet
---

# azure.subscription.networkService.subnet

**Supported platform**

- azure

**Description**

Azure Virtual Network (VNet) subnet

**Fields**

| ID               | TYPE                                                                                                                                              | DESCRIPTION                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| id               | string                                                                                                                                            | Subnet ID                                              |
| name             | string                                                                                                                                            | Subnet name                                            |
| type             | string                                                                                                                                            | Subnet type                                            |
| etag             | string                                                                                                                                            | Subnet etag                                            |
| addressPrefix    | string                                                                                                                                            | Subnet address prefix                                  |
| properties       | dict                                                                                                                                              | Subnet properties                                      |
| natGateway       | [azure.subscription.networkService.natGateway](azure.subscription.networkservice.natgateway.md)                                                   | The NAT gateway this subnet is associated with, if any |
| ipConfigurations | &#91;&#93;[azure.subscription.networkService.virtualNetworkGateway.ipConfig](azure.subscription.networkservice.virtualnetworkgateway.ipconfig.md) | List of IP configurations for the subnet               |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
