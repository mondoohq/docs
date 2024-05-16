---
title: azure.subscription.postgreSqlService.flexibleServer
id: azure.subscription.postgreSqlService.flexibleServer
sidebar_label: azure.subscription.postgreSqlService.flexibleServer
displayed_sidebar: MQL
description: Azure Database for PostgreSQL flexible server
---

# azure.subscription.postgreSqlService.flexibleServer

**Supported platform**

- azure

**Description**

Azure Database for PostgreSQL flexible server

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
