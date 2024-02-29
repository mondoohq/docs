---
title: azure.subscription.storageService.account.service.properties.logging
id: azure.subscription.storageService.account.service.properties.logging
sidebar_label: azure.subscription.storageService.account.service.properties.logging
displayed_sidebar: MQL
description: Azure Storage account service properties logging
---

# azure.subscription.storageService.account.service.properties.logging

**Supported platform**

- azure

**Description**

Azure Storage account service properties logging

**Fields**

| ID              | TYPE                                                                                                                                                            | DESCRIPTION                              |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| id              | string                                                                                                                                                          | ID of the logging configuration          |
| delete          | bool                                                                                                                                                            | Whether delete requests are logged       |
| read            | bool                                                                                                                                                            | Whether read requests are logged         |
| write           | bool                                                                                                                                                            | Whether write requests are logged        |
| version         | string                                                                                                                                                          | Logging version                          |
| retentionPolicy | [azure.subscription.storageService.account.service.properties.retentionPolicy](azure.subscription.storageservice.account.service.properties.retentionpolicy.md) | Retention policy for the logging metrics |

**References**

- [Azure Storage documentation](https://learn.microsoft.com/en-us/azure/storage/)
