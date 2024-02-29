---
title: azure.subscription.storageService.account.service.properties.metrics
id: azure.subscription.storageService.account.service.properties.metrics
sidebar_label: azure.subscription.storageService.account.service.properties.metrics
displayed_sidebar: MQL
description: Azure Storage account service properties metrics
---

# azure.subscription.storageService.account.service.properties.metrics

**Supported platform**

- azure

**Description**

Azure Storage account service properties metrics

**Fields**

| ID              | TYPE                                                                                                                                                            | DESCRIPTION                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| id              | string                                                                                                                                                          | ID of the metrics                                                     |
| includeAPIs     | bool                                                                                                                                                            | Whether metrics generate summary statistics for called API operations |
| retentionPolicy | [azure.subscription.storageService.account.service.properties.retentionPolicy](azure.subscription.storageservice.account.service.properties.retentionpolicy.md) | Retention policy for the metrics                                      |
| enabled         | bool                                                                                                                                                            | Whether the metrics are enabled                                       |
| version         | string                                                                                                                                                          | Version of the metrics                                                |

**References**

- [Azure Storage documentation](https://learn.microsoft.com/en-us/azure/storage/)
