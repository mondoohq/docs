---
title: azure.subscription.keyVaultService.certificate
id: azure.subscription.keyVaultService.certificate
sidebar_label: azure.subscription.keyVaultService.certificate
displayed_sidebar: MQL
description: Azure Key Vault certificate
---

# azure.subscription.keyVaultService.certificate

**Supported platform**

- azure

**Description**

Azure Key Vault certificate

**Fields**

| ID            | TYPE                                                                                                          | DESCRIPTION                        |
| ------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| id            | string                                                                                                        | Certificate ID                     |
| tags          | map[string]string                                                                                             | Certificate tags                   |
| x5t           | string                                                                                                        | Certificate x5t                    |
| enabled       | bool                                                                                                          | Whether the certificate is enabled |
| notBefore     | time                                                                                                          | Certificate not before date        |
| expires       | time                                                                                                          | Certificate expiration date        |
| created       | time                                                                                                          | Certificate creation time          |
| updated       | time                                                                                                          | Certificate last update time       |
| recoveryLevel | string                                                                                                        | Certificate recovery level         |
| certName      | string                                                                                                        | Certificate name                   |
| version       | string                                                                                                        | Certificate version                |
| versions      | &#91;&#93;[azure.subscription.keyVaultService.certificate](azure.subscription.keyvaultservice.certificate.md) | List of certificate versions       |

**References**

- [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/)
