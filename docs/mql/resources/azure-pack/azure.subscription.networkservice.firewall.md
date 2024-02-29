---
title: azure.subscription.networkService.firewall
id: azure.subscription.networkService.firewall
sidebar_label: azure.subscription.networkService.firewall
displayed_sidebar: MQL
description: Azure network firewall
---

# azure.subscription.networkService.firewall

**Supported platform**

- azure

**Description**

Azure network firewall

**Fields**

| ID                        | TYPE                                                                                                                                  | DESCRIPTION                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| id                        | string                                                                                                                                | Firewall ID                                      |
| name                      | string                                                                                                                                | Firewall name                                    |
| location                  | string                                                                                                                                | Firewall location                                |
| tags                      | map[string]string                                                                                                                     | Firewall tags                                    |
| type                      | string                                                                                                                                | Firewall type                                    |
| etag                      | string                                                                                                                                | Firewall etag                                    |
| properties                | dict                                                                                                                                  | Firewall properties                              |
| provisioningState         | string                                                                                                                                | Firewall provisioning state                      |
| skuName                   | string                                                                                                                                | Firewall SKU name                                |
| skuTier                   | string                                                                                                                                | Firewall SKU tier                                |
| threatIntelMode           | string                                                                                                                                | Firewall threat intel mode                       |
| policy                    | [azure.subscription.networkService.firewallPolicy](azure.subscription.networkservice.firewallpolicy.md)                               | Policy associated with this firewall             |
| ipConfigurations          | &#91;&#93;[azure.subscription.networkService.firewall.ipConfig](azure.subscription.networkservice.firewall.ipconfig.md)               | List of IP configurations for the firewall       |
| managementIpConfiguration | [azure.subscription.networkService.firewall.ipConfig](azure.subscription.networkservice.firewall.ipconfig.md)                         | The IP configuration used for management traffic |
| networkRules              | &#91;&#93;[azure.subscription.networkService.firewall.networkRule](azure.subscription.networkservice.firewall.networkrule.md)         | List of network rules for the firewall           |
| natRules                  | &#91;&#93;[azure.subscription.networkService.firewall.natRule](azure.subscription.networkservice.firewall.natrule.md)                 | List of NAT rules for the firewall               |
| applicationRules          | &#91;&#93;[azure.subscription.networkService.firewall.applicationRule](azure.subscription.networkservice.firewall.applicationrule.md) | List of application rules for the firewall       |
