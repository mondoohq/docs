---
title: azure.subscription.mySqlService.server
id: azure.subscription.mySqlService.server
sidebar_label: azure.subscription.mySqlService.server
displayed_sidebar: MQL
description: Azure Database for MySQL server
---

# azure.subscription.mySqlService.server

**Supported platform**

- azure

**Description**

Azure Database for MySQL server

**Fields**

| ID            | TYPE                                                                                                    | DESCRIPTION                 |
| ------------- | ------------------------------------------------------------------------------------------------------- | --------------------------- |
| id            | string                                                                                                  | MySQL server ID             |
| name          | string                                                                                                  | MySQL server name           |
| location      | string                                                                                                  | MySQL server location       |
| tags          | map[string]string                                                                                       | MySQL server tags           |
| type          | string                                                                                                  | MySQL server type           |
| properties    | dict                                                                                                    | MySQL server properties     |
| configuration | &#91;&#93;[azure.subscription.sqlService.configuration](azure.subscription.sqlservice.configuration.md) | MySQL server configuration  |
| databases     | &#91;&#93;[azure.subscription.mySqlService.database](azure.subscription.mysqlservice.database.md)       | MySQL server databases      |
| firewallRules | &#91;&#93;[azure.subscription.sqlService.firewallrule](azure.subscription.sqlservice.firewallrule.md)   | MySQL server firewall rules |

**References**

- [Azure Database for MySQL - Flexible Server documentation](https://learn.microsoft.com/en-us/azure/mysql/)
