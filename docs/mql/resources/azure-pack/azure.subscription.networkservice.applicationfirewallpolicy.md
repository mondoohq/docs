---
title: azure.subscription.networkService.applicationFirewallPolicy
id: azure.subscription.networkService.applicationFirewallPolicy
sidebar_label: azure.subscription.networkService.applicationFirewallPolicy
displayed_sidebar: MQL
description: Azure Application Firewall Policy (WAF)
---

# azure.subscription.networkService.applicationFirewallPolicy

**Supported platform**

- azure

**Description**

Azure Application Firewall Policy (WAF)

**Fields**

| ID         | TYPE                                                                                                                      | DESCRIPTION                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| id         | string                                                                                                                    | Application firewall policy ID            |
| name       | string                                                                                                                    | Application firewall policy name          |
| location   | string                                                                                                                    | Application firewall policy location      |
| tags       | map[string]string                                                                                                         | Application firewall policy tags          |
| type       | string                                                                                                                    | Application firewall policy resource type |
| etag       | string                                                                                                                    | Application firewall policy etag          |
| properties | dict                                                                                                                      | Application firewall policy properties    |
| gateways   | &#91;&#93;[azure.subscription.networkService.applicationGateway](azure.subscription.networkservice.applicationgateway.md) | List of associated application gateways   |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
