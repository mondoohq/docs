---
title: azure.subscription.networkService.virtualNetworkGateway
id: azure.subscription.networkService.virtualNetworkGateway
sidebar_label: azure.subscription.networkService.virtualNetworkGateway
displayed_sidebar: MQL
description: Azure Virtual Network (VNet) gateway
---

# azure.subscription.networkService.virtualNetworkGateway

**Supported platform**

- azure

**Description**

Azure Virtual Network (VNet) gateway

**Fields**

| ID                              | TYPE                                                                                                                                                  | DESCRIPTION                                                                 |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| id                              | string                                                                                                                                                | VNet gateway ID                                                             |
| name                            | string                                                                                                                                                | VNet gateway name                                                           |
| location                        | string                                                                                                                                                | VNet gateway location                                                       |
| tags                            | map[string]string                                                                                                                                     | VNet gateway tags                                                           |
| type                            | string                                                                                                                                                | VNet gateway resource type                                                  |
| etag                            | string                                                                                                                                                | VNet gateway etag                                                           |
| properties                      | dict                                                                                                                                                  | VNet gateway properties                                                     |
| active                          | bool                                                                                                                                                  | Whether the virtual network gateway is active                               |
| enableBgp                       | bool                                                                                                                                                  | Whether BGP is enabled for this virtual network gateway                     |
| enableBgpRouteTranslationForNat | bool                                                                                                                                                  | Whether BGP route translation is enabled for this VNet gateway              |
| enableDNSForwarding             | bool                                                                                                                                                  | Whether DNS forwarding is enabled for this VNet gateway                     |
| enablePrivateIPAddress          | bool                                                                                                                                                  | Whether private IP must be enabled for connections                          |
| disableIPSecReplayProtection    | bool                                                                                                                                                  | Whether IP sec replay protection is disabled for this VNet gateway          |
| provisioningState               | string                                                                                                                                                | VNet gateway provisioning state                                             |
| inboundDNSForwardingEndpoint    | string                                                                                                                                                | The IP address allocated by the gateway to which DNS requests can be sent   |
| skuName                         | string                                                                                                                                                | VNet gateway SKU name                                                       |
| skuCapacity                     | int                                                                                                                                                   | VNet gateway SKU capacity                                                   |
| addressPrefixes                 | &#91;&#93;string                                                                                                                                      | A list of address blocks reserved for this virtual network in CIDR notation |
| gatewayType                     | string                                                                                                                                                | VNet gateway type                                                           |
| vpnGatewayGeneration            | string                                                                                                                                                | VNet gateway generation                                                     |
| vpnType                         | string                                                                                                                                                | VNet gateway VPN type                                                       |
| ipConfigurations                | &#91;&#93;[azure.subscription.networkService.virtualNetworkGateway.ipConfig](azure.subscription.networkservice.virtualnetworkgateway.ipconfig.md)     | VNet gateway IP configurations                                              |
| bgpSettings                     | [azure.subscription.networkService.bgpSettings](azure.subscription.networkservice.bgpsettings.md)                                                     | VNet gateway BGP settings                                                   |
| natRules                        | &#91;&#93;azure.subscription.networkService.virtualNetworkGateway.natRule                                                                             | VNet gateway NAT rules                                                      |
| connections                     | &#91;&#93;[azure.subscription.networkService.virtualNetworkGateway.connection](azure.subscription.networkservice.virtualnetworkgateway.connection.md) | Applicable connections for the gateway                                      |
| vpnClientConfiguration          | dict                                                                                                                                                  | VPN client configuration (only set if P2S is configured for the gateway)    |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
