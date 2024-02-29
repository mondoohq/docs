---
title: azure.subscription.keyVaultService.key
id: azure.subscription.keyVaultService.key
sidebar_label: azure.subscription.keyVaultService.key
displayed_sidebar: MQL
description: Azure Key Vault key
---

# azure.subscription.keyVaultService.key

**Supported platform**

- azure

**Description**

Azure Key Vault key

**Fields**

| ID            | TYPE                                                                                          | DESCRIPTION                      |
| ------------- | --------------------------------------------------------------------------------------------- | -------------------------------- |
| kid           | string                                                                                        | Key ID                           |
| tags          | map[string]string                                                                             | Key tags                         |
| managed       | bool                                                                                          | Whether the key is managed       |
| enabled       | bool                                                                                          | Whether the key is enabled       |
| notBefore     | time                                                                                          | Date the key begins to be usable |
| expires       | time                                                                                          | Date the key expires             |
| created       | time                                                                                          | Key creation time                |
| updated       | time                                                                                          | Key last update time             |
| recoveryLevel | string                                                                                        | Key recovery level               |
| keyName       | string                                                                                        | Key name                         |
| version       | string                                                                                        | Key version                      |
| versions      | &#91;&#93;[azure.subscription.keyVaultService.key](azure.subscription.keyvaultservice.key.md) | List of key versions             |

**References**

- [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/)
