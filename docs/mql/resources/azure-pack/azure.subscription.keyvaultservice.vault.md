---
title: azure.subscription.keyVaultService.vault
id: azure.subscription.keyVaultService.vault
sidebar_label: azure.subscription.keyVaultService.vault
displayed_sidebar: MQL
description: Azure Key Vault vault
---

# azure.subscription.keyVaultService.vault

**Supported platform**

- azure

**Description**

Azure Key Vault vault

**Fields**

| ID                       | TYPE                                                                                                                    | DESCRIPTION                                 |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| id                       | string                                                                                                                  | Vault ID                                    |
| vaultName                | string                                                                                                                  | Vault name                                  |
| type                     | string                                                                                                                  | Vault type                                  |
| location                 | string                                                                                                                  | Vault location                              |
| tags                     | map[string]string                                                                                                       | Vault tags                                  |
| vaultUri                 | string                                                                                                                  | Vault URL                                   |
| properties               | dict                                                                                                                    | Vault properties                            |
| rbacAuthorizationEnabled | bool                                                                                                                    | Whether RBAC access to the vault is enabled |
| keys                     | &#91;&#93;[azure.subscription.keyVaultService.key](azure.subscription.keyvaultservice.key.md)                           | Vault keys                                  |
| certificates             | &#91;&#93;[azure.subscription.keyVaultService.certificate](azure.subscription.keyvaultservice.certificate.md)           | Vault certificates                          |
| secrets                  | &#91;&#93;[azure.subscription.keyVaultService.secret](azure.subscription.keyvaultservice.secret.md)                     | Vault secrets                               |
| diagnosticSettings       | &#91;&#93;[azure.subscription.monitorService.diagnosticsetting](azure.subscription.monitorservice.diagnosticsetting.md) | Vault diagnostic settings                   |

**References**

- [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/)
