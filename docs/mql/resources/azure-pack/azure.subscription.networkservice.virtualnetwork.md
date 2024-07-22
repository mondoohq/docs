---
title: azure.subscription.networkService.virtualNetwork
id: azure.subscription.networkService.virtualNetwork
sidebar_label: azure.subscription.networkService.virtualNetwork
displayed_sidebar: MQL
description: Azure Virtual network (VNet)
---

# azure.subscription.networkService.virtualNetwork

**Supported platform**

- azure

**Description**

Azure Virtual network (VNet)

**Fields**

| ID                   | TYPE                                                                                                                            | DESCRIPTION                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| id                   | string                                                                                                                          | Virtual Network ID                                                                        |
| name                 | string                                                                                                                          | Virtual Network name                                                                      |
| location             | string                                                                                                                          | Virtual Network location                                                                  |
| tags                 | map[string]string                                                                                                               | Virtual Network tags                                                                      |
| type                 | string                                                                                                                          | Virtual Network type                                                                      |
| etag                 | string                                                                                                                          | Virtual Network etag                                                                      |
| properties           | dict                                                                                                                            | Virtual Network properties                                                                |
| subnets              | &#91;&#93;[azure.subscription.networkService.subnet](azure.subscription.networkservice.subnet.md)                               | List of subnets within the virtual network                                                |
| dhcpOptions          | [azure.subscription.networkService.virtualNetwork.dhcpOptions](azure.subscription.networkservice.virtualnetwork.dhcpoptions.md) | Virtual Network DHCP options                                                              |
| enableDdosProtection | bool                                                                                                                            | Whether DDoS protection is enabled for all the protected resources in the virtual network |
| enableVmProtection   | bool                                                                                                                            | Whether VM protection is enabled for all the subnets in the virtual network               |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
