---
title: azure.subscription.keyVaultService.secret
id: azure.subscription.keyVaultService.secret
sidebar_label: azure.subscription.keyVaultService.secret
displayed_sidebar: MQL
description: Azure Key Vault secret
---

# azure.subscription.keyVaultService.secret

**Supported platform**

- azure

**Description**

Azure Key Vault secret

**Fields**

| ID          | TYPE                                                                                                | DESCRIPTION                         |
| ----------- | --------------------------------------------------------------------------------------------------- | ----------------------------------- |
| id          | string                                                                                              | Secret ID                           |
| tags        | map[string]string                                                                                   | Secret tags                         |
| contentType | string                                                                                              | Secret content type                 |
| managed     | bool                                                                                                | Whether the secret is managed       |
| enabled     | bool                                                                                                | Whether the secret is enabled       |
| notBefore   | time                                                                                                | Date the secret begins to be usable |
| expires     | time                                                                                                | Secret expiration date              |
| created     | time                                                                                                | Secret creation date                |
| updated     | time                                                                                                | Secret last updated date            |
| secretName  | string                                                                                              | Secret name                         |
| version     | string                                                                                              | Secret version                      |
| versions    | &#91;&#93;[azure.subscription.keyVaultService.secret](azure.subscription.keyvaultservice.secret.md) | List of secret versions             |

**References**

- [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/)
