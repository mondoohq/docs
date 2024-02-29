---
title: azure.subscription.computeService
id: azure.subscription.computeService
sidebar_label: azure.subscription.computeService
displayed_sidebar: MQL
description: Azure compute
---

# azure.subscription.computeService

**Supported platform**

- azure

**Description**

Azure compute

**Fields**

| ID             | TYPE                                                                                          | DESCRIPTION                                |
| -------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------ |
| subscriptionId | string                                                                                        | Subscription identifier                    |
| vms            | &#91;&#93;[azure.subscription.computeService.vm](azure.subscription.computeservice.vm.md)     | All compute instances under a subscription |
| disks          | &#91;&#93;[azure.subscription.computeService.disk](azure.subscription.computeservice.disk.md) | All the disks under a subscription         |
