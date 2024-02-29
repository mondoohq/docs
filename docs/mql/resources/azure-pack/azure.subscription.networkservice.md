---
title: azure.subscription.networkService
id: azure.subscription.networkService
sidebar_label: azure.subscription.networkService
displayed_sidebar: MQL
description: Azure network
---

# azure.subscription.networkService

**Supported platform**

- azure

**Description**

Azure network

**Fields**

| ID                          | TYPE                                                                                                                                    | DESCRIPTION                           |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| subscriptionId              | string                                                                                                                                  | Subscription identifier               |
| interfaces                  | &#91;&#93;[azure.subscription.networkService.interface](azure.subscription.networkservice.interface.md)                                 | List of network interfaces            |
| securityGroups              | &#91;&#93;[azure.subscription.networkService.securityGroup](azure.subscription.networkservice.securitygroup.md)                         | List of network security groups       |
| watchers                    | &#91;&#93;[azure.subscription.networkService.watcher](azure.subscription.networkservice.watcher.md)                                     | List of network watchers              |
| publicIpAddresses           | &#91;&#93;[azure.subscription.networkService.ipAddress](azure.subscription.networkservice.ipaddress.md)                                 | List of public IP addresses           |
| bastionHosts                | &#91;&#93;[azure.subscription.networkService.bastionHost](azure.subscription.networkservice.bastionhost.md)                             | List of Bastion hosts                 |
| loadBalancers               | &#91;&#93;[azure.subscription.networkService.loadBalancer](azure.subscription.networkservice.loadbalancer.md)                           | List of load balancers                |
| natGateways                 | &#91;&#93;[azure.subscription.networkService.natGateway](azure.subscription.networkservice.natgateway.md)                               | List of NAT gateways                  |
| virtualNetworks             | &#91;&#93;[azure.subscription.networkService.virtualNetwork](azure.subscription.networkservice.virtualnetwork.md)                       | List of virtual networks              |
| virtualNetworkGateways      | &#91;&#93;[azure.subscription.networkService.virtualNetworkGateway](azure.subscription.networkservice.virtualnetworkgateway.md)         | List of virtual network gateways      |
| firewalls                   | &#91;&#93;[azure.subscription.networkService.firewall](azure.subscription.networkservice.firewall.md)                                   | List of network firewalls             |
| firewallPolicies            | &#91;&#93;[azure.subscription.networkService.firewallPolicy](azure.subscription.networkservice.firewallpolicy.md)                       | List of firewall policies             |
| applicationSecurityGroups   | &#91;&#93;[azure.subscription.networkService.appSecurityGroup](azure.subscription.networkservice.appsecuritygroup.md)                   | List of application security groups   |
| applicationGateways         | &#91;&#93;[azure.subscription.networkService.applicationGateway](azure.subscription.networkservice.applicationgateway.md)               | List of application gateways          |
| applicationFirewallPolicies | &#91;&#93;[azure.subscription.networkService.applicationFirewallPolicy](azure.subscription.networkservice.applicationfirewallpolicy.md) | List of application firewall policies |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
