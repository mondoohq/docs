---
title: azure.subscription.monitorService.diagnosticsetting
id: azure.subscription.monitorService.diagnosticsetting
sidebar_label: azure.subscription.monitorService.diagnosticsetting
displayed_sidebar: MQL
description: Azure Monitor diagnostic setting
---

# azure.subscription.monitorService.diagnosticsetting

**Supported platform**

- azure

**Description**

Azure Monitor diagnostic setting

**Fields**

| ID               | TYPE                                                                                      | DESCRIPTION                                  |
| ---------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------- |
| id               | string                                                                                    | Diagnostic setting ID                        |
| name             | string                                                                                    | Diagnostic setting name                      |
| type             | string                                                                                    | Diagnostic setting type                      |
| properties       | dict                                                                                      | Diagnostic setting properties                |
| storageAccountId | string                                                                                    | ID of the diagnostic setting storage account |
| storageAccount   | [azure.subscription.storageService.account](azure.subscription.storageservice.account.md) | Diagnostic setting storage account           |

**References**

- [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/)
