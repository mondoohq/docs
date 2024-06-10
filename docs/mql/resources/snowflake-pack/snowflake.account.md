---
title: snowflake.account
id: snowflake.account
sidebar_label: snowflake.account
displayed_sidebar: MQL
description: Snowflake Account
---

# snowflake.account

**Description**

Snowflake Account

**Fields**

| ID                   | TYPE                                                                        | DESCRIPTION                          |
| -------------------- | --------------------------------------------------------------------------- | ------------------------------------ |
| accountId            | string                                                                      | Account ID                           |
| region               | string                                                                      | Account region                       |
| url                  | string                                                                      | Account URL                          |
| users                | &#91;&#93;[snowflake.user](snowflake.user.md)                               | Users in the account                 |
| roles                | &#91;&#93;[snowflake.role](snowflake.role.md)                               | Roles in the account                 |
| securityIntegrations | &#91;&#93;[snowflake.securityIntegration](snowflake.securityintegration.md) | Security integrations in the account |
| passwordPolicies     | &#91;&#93;[snowflake.passwordPolicy](snowflake.passwordpolicy.md)           | Password policies in the account     |
| networkPolicies      | &#91;&#93;[snowflake.networkPolicy](snowflake.networkpolicy.md)             | Network policies in the account      |
| procedures           | &#91;&#93;[snowflake.procedure](snowflake.procedure.md)                     | Procedures in the account            |
| parameters           | &#91;&#93;[snowflake.parameter](snowflake.parameter.md)                     | Parameters in the account            |
| stages               | &#91;&#93;[snowflake.stage](snowflake.stage.md)                             | Stages in the account                |
| databases            | &#91;&#93;[snowflake.database](snowflake.database.md)                       | Databases in the account             |
| warehouses           | &#91;&#93;[snowflake.warehouse](snowflake.warehouse.md)                     | Warehouses in the account            |
