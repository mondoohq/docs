---
title: azure.subscription.networkService.natGateway
id: azure.subscription.networkService.natGateway
sidebar_label: azure.subscription.networkService.natGateway
displayed_sidebar: MQL
description: Azure NAT gateway
---

# azure.subscription.networkService.natGateway

**Supported platform**

- azure

**Description**

Azure NAT gateway

**Fields**

| ID                | TYPE                                                                                                    | DESCRIPTION                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| id                | string                                                                                                  | NAT Gateway ID                                                 |
| name              | string                                                                                                  | NAT Gateway name                                               |
| location          | string                                                                                                  | NAT Gateway location                                           |
| tags              | map[string]string                                                                                       | NAT Gateway tags                                               |
| type              | string                                                                                                  | NAT Gateway type                                               |
| etag              | string                                                                                                  | NAT Gateway etag                                               |
| properties        | dict                                                                                                    | NAT Gateway properties                                         |
| zones             | &#91;&#93;string                                                                                        | NAT Gateway availability zones                                 |
| publicIpAddresses | &#91;&#93;[azure.subscription.networkService.ipAddress](azure.subscription.networkservice.ipaddress.md) | List of public IP addresses the NAT Gateway is associated with |
| subnets           | &#91;&#93;[azure.subscription.networkService.subnet](azure.subscription.networkservice.subnet.md)       | List of subnets the NAT Gateway is associated with             |

**References**

- [Azure NAT Gateway documentation](https://learn.microsoft.com/en-us/azure/nat-gateway/)
