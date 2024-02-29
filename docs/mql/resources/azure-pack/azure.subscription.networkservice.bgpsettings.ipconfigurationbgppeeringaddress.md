---
title: azure.subscription.networkService.bgpSettings.ipConfigurationBgpPeeringAddress
id: azure.subscription.networkService.bgpSettings.ipConfigurationBgpPeeringAddress
sidebar_label: azure.subscription.networkService.bgpSettings.ipConfigurationBgpPeeringAddress
displayed_sidebar: MQL
description: Azure BGP settings IP configuration
---

# azure.subscription.networkService.bgpSettings.ipConfigurationBgpPeeringAddress

**Supported platform**

- azure

**Description**

Azure BGP settings IP configuration

**Fields**

| ID                    | TYPE             | DESCRIPTION                                                  |
| --------------------- | ---------------- | ------------------------------------------------------------ |
| id                    | string           | BGP Settings IP Configuration ID                             |
| customBgpIpAddresses  | &#91;&#93;string | BGP Settings IP Configuration custom BGP IP addresses        |
| ipConfigurationId     | string           | BGP Settings IP Configuration ID                             |
| defaultBgpIpAddresses | &#91;&#93;string | BGP Settings IP Configuration default BGP IP addresses       |
| tunnelIpAddresses     | &#91;&#93;string | BGP Settings IP Configuration tunnel public BGP IP addresses |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
