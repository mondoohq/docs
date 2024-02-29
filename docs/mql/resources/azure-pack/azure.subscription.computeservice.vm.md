---
title: azure.subscription.computeService.vm
id: azure.subscription.computeService.vm
sidebar_label: azure.subscription.computeService.vm
displayed_sidebar: MQL
description: Azure compute virtual machine
---

# azure.subscription.computeService.vm

**Supported platform**

- azure

**Description**

Azure compute virtual machine

**Fields**

| ID                | TYPE                                                                                                    | DESCRIPTION                    |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------ |
| id                | string                                                                                                  | VM ID                          |
| name              | string                                                                                                  | VM name                        |
| location          | string                                                                                                  | VM location                    |
| zones             | &#91;&#93;string                                                                                        | VM zones                       |
| state             | string                                                                                                  | VM state                       |
| isRunning         | bool                                                                                                    | Indicates if the VM is running |
| tags              | map[string]string                                                                                       | VM tags                        |
| type              | string                                                                                                  | VM type                        |
| properties        | dict                                                                                                    | VM properties                  |
| extensions        | &#91;&#93;dict                                                                                          | VM extension                   |
| osDisk            | [azure.subscription.computeService.disk](azure.subscription.computeservice.disk.md)                     | VM compute disk                |
| dataDisks         | &#91;&#93;[azure.subscription.computeService.disk](azure.subscription.computeservice.disk.md)           | VM compute data disk           |
| publicIpAddresses | &#91;&#93;[azure.subscription.networkService.ipAddress](azure.subscription.networkservice.ipaddress.md) | VM public IP addresses         |

**References**

- [Virtual machines in Azure](https://learn.microsoft.com/en-us/azure/virtual-machines/)
