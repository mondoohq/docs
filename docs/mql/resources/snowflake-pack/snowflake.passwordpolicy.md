---
title: snowflake.passwordPolicy
id: snowflake.passwordPolicy
sidebar_label: snowflake.passwordPolicy
displayed_sidebar: MQL
description: Snowflake Password Policy
---

# snowflake.passwordPolicy

**Description**

Snowflake Password Policy

**Fields**

| ID                        | TYPE   | DESCRIPTION                                                                        |
| ------------------------- | ------ | ---------------------------------------------------------------------------------- |
| name                      | string | Name of the password policy                                                        |
| databaseName              | string | Name of the database                                                               |
| schemaName                | string | Name of the schema                                                                 |
| kind                      | string | Name of the kind                                                                   |
| owner                     | string | Name of the owner                                                                  |
| comment                   | string | Comment for the password policy                                                    |
| createdAt                 | time   | When the password policy was created                                               |
| passwordMinLength         | int    | Minimum number of characters for password                                          |
| passwordMaxLength         | int    | Maximum number of characters for password                                          |
| passwordMinUpperCaseChars | int    | Minimum number of uppercase characters for password                                |
| passwordMinLowerCaseChars | int    | Minimum number of lowercase characters for password                                |
| passwordMinNumericChars   | int    | Minimum number of numeric characters for password                                  |
| passwordMinSpecialChars   | int    | Minimum number of special characters for password                                  |
| passwordMinAgeDays        | int    | Minimum number of days before password can be changed                              |
| passwordMaxAgeDays        | int    | Maximum number of days before password must be changed                             |
| passwordMaxRetries        | int    | Maximum number of attempts to enter a password before locking out the user account |
| passwordLockoutTimeMins   | int    | How long (in minutes) to lock out the user account                                 |
| passwordHistory           | int    | Number of recent passwords to retain                                               |
