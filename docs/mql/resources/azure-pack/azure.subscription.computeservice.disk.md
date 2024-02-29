---
title: azure.subscription.computeService.disk
id: azure.subscription.computeService.disk
sidebar_label: azure.subscription.computeService.disk
displayed_sidebar: MQL
description: Azure disk resource
---

# azure.subscription.computeService.disk

**Supported platform**

- azure

**Description**

Azure disk resource

**Fields**

| ID                | TYPE              | DESCRIPTION                                                                     |
| ----------------- | ----------------- | ------------------------------------------------------------------------------- |
| id                | string            | Disk resource ID                                                                |
| name              | string            | Disk resource name                                                              |
| location          | string            | Disk resource location                                                          |
| tags              | map[string]string | Disk resource tags                                                              |
| type              | string            | Disk resource type                                                              |
| managedBy         | string            | A relative URI containing the ID of the VM that has the disk attached           |
| managedByExtended | &#91;&#93;string  | List of relative URIs containing the IDs of the VMs that have the disk attached |
| zones             | &#91;&#93;string  | The logical zone list for disk                                                  |
| sku               | dict              | The disk SKU name and tier                                                      |
| properties        | dict              | Disk resource properties                                                        |
