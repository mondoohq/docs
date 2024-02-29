---
title: azure.subscription.storageService.account
id: azure.subscription.storageService.account
sidebar_label: azure.subscription.storageService.account
displayed_sidebar: MQL
description: Azure Storage account
---

# azure.subscription.storageService.account

**Supported platform**

- azure

**Description**

Azure Storage account

**Fields**

| ID              | TYPE                                                                                                                            | DESCRIPTION                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id              | string                                                                                                                          | Storage account ID               |
| name            | string                                                                                                                          | Storage account name             |
| location        | string                                                                                                                          | Storage account location         |
| tags            | map[string]string                                                                                                               | Storage account tags             |
| type            | string                                                                                                                          | Storage account type             |
| properties      | dict                                                                                                                            | Storage account properties       |
| identity        | dict                                                                                                                            | Storage account identity         |
| sku             | dict                                                                                                                            | Storage account SKU              |
| kind            | string                                                                                                                          | Storage account kind             |
| containers      | &#91;&#93;[azure.subscription.storageService.account.container](azure.subscription.storageservice.account.container.md)         | Storage account containers       |
| queueProperties | [azure.subscription.storageService.account.service.properties](azure.subscription.storageservice.account.service.properties.md) | Storage account queue properties |
| tableProperties | [azure.subscription.storageService.account.service.properties](azure.subscription.storageservice.account.service.properties.md) | Storage account table properties |
| blobProperties  | [azure.subscription.storageService.account.service.properties](azure.subscription.storageservice.account.service.properties.md) | Storage account blob properties  |
| dataProtection  | [azure.subscription.storageService.account.dataProtection](azure.subscription.storageservice.account.dataprotection.md)         | Storage account data protection  |

**References**

- [Azure Storage documentation](https://learn.microsoft.com/en-us/azure/storage/)
