---
title: azure.subscription.networkService.interface
id: azure.subscription.networkService.interface
sidebar_label: azure.subscription.networkService.interface
displayed_sidebar: MQL
description: Azure network interface
---

# azure.subscription.networkService.interface

**Supported platform**

- azure

**Description**

Azure network interface

**Fields**

| ID         | TYPE                                                                            | DESCRIPTION                  |
| ---------- | ------------------------------------------------------------------------------- | ---------------------------- |
| id         | string                                                                          | Network interface ID         |
| name       | string                                                                          | Network interface name       |
| location   | string                                                                          | Network interface name       |
| tags       | map[string]string                                                               | Network interface tags       |
| type       | string                                                                          | Network interface type       |
| etag       | string                                                                          | Network interface etag       |
| properties | dict                                                                            | Network interface properties |
| vm         | [azure.subscription.computeService.vm](azure.subscription.computeservice.vm.md) | Network interface compute vm |

**References**

- [Virtual Network documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
