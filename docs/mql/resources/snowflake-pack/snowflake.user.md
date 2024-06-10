---
title: snowflake.user
id: snowflake.user
sidebar_label: snowflake.user
displayed_sidebar: MQL
description: Snowflake User
---

# snowflake.user

**Description**

Snowflake User

**Fields**

| ID                 | TYPE                                                    | DESCRIPTION                                         |
| ------------------ | ------------------------------------------------------- | --------------------------------------------------- |
| name               | string                                                  | User name                                           |
| login              | string                                                  | Login name                                          |
| displayName        | string                                                  | Display name                                        |
| firstName          | string                                                  | First name                                          |
| lastName           | string                                                  | Last name                                           |
| email              | string                                                  | Email address                                       |
| comment            | string                                                  | Comment for the user                                |
| defaultWarehouse   | string                                                  | Virtual warehouse that is active by default         |
| defaultNamespace   | string                                                  | Namespace that is active by default                 |
| defaultRole        | string                                                  | Default role for the user                           |
| disabled           | bool                                                    | Whether the user is disabled                        |
| hasPassword        | bool                                                    | Whether the user has a password                     |
| hasRsaPublicKey    | bool                                                    | Whether the user has MFA enabled                    |
| mustChangePassword | bool                                                    | Whether the user is forced to change their password |
| lastSuccessLogin   | time                                                    | Last time the user logged in                        |
| lockedUntil        | time                                                    | Time until the user is locked                       |
| createdAt          | time                                                    | When the user was created                           |
| expiresAt          | time                                                    | When the user expires                               |
| extAuthnDuo        | bool                                                    | Whether the user has MFA enabled                    |
| extAuthnUid        | string                                                  | MFA user ID                                         |
| parameters         | &#91;&#93;[snowflake.parameter](snowflake.parameter.md) | Parameters for the user                             |
