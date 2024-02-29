---
title: azure.subscription.networkService.firewallPolicy
id: azure.subscription.networkService.firewallPolicy
sidebar_label: azure.subscription.networkService.firewallPolicy
displayed_sidebar: MQL
description: Azure network firewall policy
---

# azure.subscription.networkService.firewallPolicy

**Supported platform**

- azure

**Description**

Azure network firewall policy

**Fields**

| ID                | TYPE                                                                                                              | DESCRIPTION                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| id                | string                                                                                                            | Firewall policy ID                                        |
| name              | string                                                                                                            | Firewall policy name                                      |
| location          | string                                                                                                            | Firewall policy location                                  |
| tags              | map[string]string                                                                                                 | Firewall policy tags                                      |
| type              | string                                                                                                            | Firewall policy type                                      |
| etag              | string                                                                                                            | Firewall policy etag                                      |
| properties        | dict                                                                                                              | Firewall policy properties                                |
| provisioningState | string                                                                                                            | Firewall policy provisioning state                        |
| basePolicy        | [azure.subscription.networkService.firewallPolicy](azure.subscription.networkservice.firewallpolicy.md)           | The parent firewall policy from which rules are inherited |
| childPolicies     | &#91;&#93;[azure.subscription.networkService.firewallPolicy](azure.subscription.networkservice.firewallpolicy.md) | List of child policies this policy is associated with     |
| firewalls         | &#91;&#93;[azure.subscription.networkService.firewall](azure.subscription.networkservice.firewall.md)             | List of firewalls the policy is associated with           |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
