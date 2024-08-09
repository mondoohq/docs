---
title: microsoft.application
id: microsoft.application
sidebar_label: microsoft.application
displayed_sidebar: MQL
description: Microsoft Entra ID application registration
---

# microsoft.application

**Description**

Microsoft Entra ID application registration

**Init**

microsoft.application(name string)

**Fields**

| ID                    | TYPE                                                                      | DESCRIPTION                          |
| --------------------- | ------------------------------------------------------------------------- | ------------------------------------ |
| id                    | string                                                                    | Application ID                       |
| appId                 | string                                                                    | Application app ID                   |
| name                  | string                                                                    | Application display name             |
| displayName           | string                                                                    | Deprecated: Use `name` instead       |
| description           | string                                                                    | Description                          |
| notes                 | string                                                                    | Notes                                |
| tags                  | &#91;&#93;string                                                          | Tags                                 |
| createdAt             | time                                                                      | Application creation date            |
| createdDateTime       | time                                                                      | Deprecated: Use `createdAt` instead  |
| identifierUris        | &#91;&#93;string                                                          | Application identifier URIs          |
| publisherDomain       | string                                                                    | Application publisher domain         |
| signInAudience        | string                                                                    | Application sign-in audience         |
| info                  | dict                                                                      | Basic profile information            |
| secrets               | &#91;&#93;[microsoft.passwordCredential](microsoft.passwordcredential.md) | Client secrets                       |
| certificates          | &#91;&#93;[microsoft.keyCredential](microsoft.keycredential.md)           | Certificates                         |
| hasExpiredCredentials | bool                                                                      | Whether the credentials have expired |
