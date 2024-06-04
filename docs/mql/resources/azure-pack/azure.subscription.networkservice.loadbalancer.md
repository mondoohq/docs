---
title: azure.subscription.networkService.loadBalancer
id: azure.subscription.networkService.loadBalancer
sidebar_label: azure.subscription.networkService.loadBalancer
displayed_sidebar: MQL
description: Azure Load Balancer
---

# azure.subscription.networkService.loadBalancer

**Supported platform**

- azure

**Description**

Azure Load Balancer

**Fields**

| ID                | TYPE                                                                                                                      | DESCRIPTION                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| id                | string                                                                                                                    | Load Balancer ID                                 |
| name              | string                                                                                                                    | Load Balancer name                               |
| location          | string                                                                                                                    | Load Balancer location                           |
| tags              | map[string]string                                                                                                         | Load Balancer tags                               |
| type              | string                                                                                                                    | Load Balancer type                               |
| properties        | dict                                                                                                                      | Load Balancer properties                         |
| etag              | string                                                                                                                    | Load Balancer etag                               |
| sku               | string                                                                                                                    | Load Balancer SKU                                |
| probes            | &#91;&#93;[azure.subscription.networkService.probe](azure.subscription.networkservice.probe.md)                           | List of Load Balancer probes                     |
| backendPools      | &#91;&#93;[azure.subscription.networkService.backendAddressPool](azure.subscription.networkservice.backendaddresspool.md) | List of Load Balancer backend address pools      |
| frontendIpConfigs | &#91;&#93;[azure.subscription.networkService.frontendIpConfig](azure.subscription.networkservice.frontendipconfig.md)     | List of Load Balancer frontend IP configurations |
| inboundNatPools   | &#91;&#93;[azure.subscription.networkService.inboundNatPool](azure.subscription.networkservice.inboundnatpool.md)         | List of Load Balancer inbound NAT pools          |
| inboundNatRules   | &#91;&#93;[azure.subscription.networkService.inboundNatRule](azure.subscription.networkservice.inboundnatrule.md)         | List of Load Balancer inbound NAT rules          |
| outboundRules     | &#91;&#93;[azure.subscription.networkService.outboundRule](azure.subscription.networkservice.outboundrule.md)             | List of Load Balancer outbound rules             |
| loadBalancerRules | &#91;&#93;[azure.subscription.networkService.loadBalancerRule](azure.subscription.networkservice.loadbalancerrule.md)     | List of Load Balancer rules                      |

**References**

- [Load Balancer documentation](https://learn.microsoft.com/en-us/azure/load-balancer/)
