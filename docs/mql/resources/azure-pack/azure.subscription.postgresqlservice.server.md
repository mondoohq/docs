---
title: azure.subscription.postgreSqlService.server
id: azure.subscription.postgreSqlService.server
sidebar_label: azure.subscription.postgreSqlService.server
displayed_sidebar: MQL
description: Azure Database for PostgreSQL server
---

# azure.subscription.postgreSqlService.server

**Supported platform**

- azure

**Description**

Azure Database for PostgreSQL server

**Fields**

| ID            | TYPE                                                                                                        | DESCRIPTION                      |
| ------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id            | string                                                                                                      | PostgreSQL server ID             |
| name          | string                                                                                                      | PostgreSQL server name           |
| location      | string                                                                                                      | PostgreSQL server location       |
| tags          | map[string]string                                                                                           | PostgreSQL server tags           |
| type          | string                                                                                                      | PostgreSQL server type           |
| properties    | dict                                                                                                        | PostgreSQL server properties     |
| configuration | &#91;&#93;[azure.subscription.sqlService.configuration](azure.subscription.sqlservice.configuration.md)     | PostgreSQL server configuration  |
| databases     | &#91;&#93;[azure.subscription.postgreSqlService.database](azure.subscription.postgresqlservice.database.md) | PostgreSQL server databases      |
| firewallRules | &#91;&#93;[azure.subscription.sqlService.firewallrule](azure.subscription.sqlservice.firewallrule.md)       | PostgreSQL server firewall rules |

**References**

- [Azure Database for PostgreSQL - Flexible Server documentation](https://learn.microsoft.com/en-us/azure/postgresql/)
