---
title: azure.subscription.monitorService.logprofile
id: azure.subscription.monitorService.logprofile
sidebar_label: azure.subscription.monitorService.logprofile
displayed_sidebar: MQL
description: Azure Monitor log profile
---

# azure.subscription.monitorService.logprofile

**Supported platform**

- azure

**Description**

Azure Monitor log profile

**Fields**

| ID               | TYPE                                                                                      | DESCRIPTION                           |
| ---------------- | ----------------------------------------------------------------------------------------- | ------------------------------------- |
| id               | string                                                                                    | Log profile ID                        |
| name             | string                                                                                    | Log profile name                      |
| location         | string                                                                                    | Log profile location                  |
| type             | string                                                                                    | Log profile type                      |
| tags             | map[string]string                                                                         | Log profile tags                      |
| properties       | dict                                                                                      | Log profile properties                |
| storageAccountId | string                                                                                    | ID of the log profile storage account |
| storageAccount   | [azure.subscription.storageService.account](azure.subscription.storageservice.account.md) | Log profile storage account           |

**References**

- [Azure Database for MariaDB documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/)
