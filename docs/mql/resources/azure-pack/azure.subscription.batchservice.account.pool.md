---
title: azure.subscription.batchService.account.pool
id: azure.subscription.batchService.account.pool
sidebar_label: azure.subscription.batchService.account.pool
displayed_sidebar: MQL
description: Azure Batch pool
---

# azure.subscription.batchService.account.pool

**Supported platform**

- azure

**Description**

Azure Batch pool

**Fields**

| ID                          | TYPE   | DESCRIPTION                        |
| --------------------------- | ------ | ---------------------------------- |
| id                          | string | Pool resource ID                   |
| name                        | string | Pool name                          |
| type                        | string | Pool resource type                 |
| etag                        | string | Pool etag                          |
| identity                    | dict   | Pool identity configuration        |
| properties                  | dict   | Pool properties                    |
| provisioningState           | string | Pool provisioning state            |
| vmSize                      | string | Pool virtual machine size          |
| deploymentConfiguration     | dict   | Pool deployment configuration      |
| virtualMachineConfiguration | dict   | Pool virtual machine configuration |
