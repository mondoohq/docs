---
title: azure.subscription.storageService.account.dataProtection
id: azure.subscription.storageService.account.dataProtection
sidebar_label: azure.subscription.storageService.account.dataProtection
displayed_sidebar: MQL
description: Azure Storage account data protection
---

# azure.subscription.storageService.account.dataProtection

**Supported platform**

- azure

**Description**

Azure Storage account data protection

**Fields**

| ID                           | TYPE   | DESCRIPTION                                     |
| ---------------------------- | ------ | ----------------------------------------------- |
| storageAccountId             | string | ID of the storage account                       |
| blobSoftDeletionEnabled      | bool   | Whether soft deletion of blobs is enabled       |
| blobRetentionDays            | int    | Retention period in days for deleted blobs      |
| containerSoftDeletionEnabled | bool   | Whether soft deletion of containers is enabled  |
| containerRetentionDays       | int    | Retention period in days for deleted containers |

**References**

- [Azure Storage documentation](https://learn.microsoft.com/en-us/azure/storage/)
