---
title: azure.subscription.networkService.bgpSettings
id: azure.subscription.networkService.bgpSettings
sidebar_label: azure.subscription.networkService.bgpSettings
displayed_sidebar: MQL
description: Azure network BGP settings
---

# azure.subscription.networkService.bgpSettings

**Supported platform**

- azure

**Description**

Azure network BGP settings

**Fields**

| ID                        | TYPE                                                                                                                                                                          | DESCRIPTION                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| id                        | string                                                                                                                                                                        | BGP Settings ID                                                |
| asn                       | int                                                                                                                                                                           | BGP Settings speaker ASN                                       |
| bgpPeeringAddress         | string                                                                                                                                                                        | The BGP peering address and BGP identifier of this BGP speaker |
| peerWeight                | int                                                                                                                                                                           | The weight added to routes learned from this BGP speaker       |
| bgpPeeringAddressesConfig | &#91;&#93;[azure.subscription.networkService.bgpSettings.ipConfigurationBgpPeeringAddress](azure.subscription.networkservice.bgpsettings.ipconfigurationbgppeeringaddress.md) | The BGP peering addresses with IP configuration                |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
