---
title: azure.subscription.mySqlService.flexibleServer
id: azure.subscription.mySqlService.flexibleServer
sidebar_label: azure.subscription.mySqlService.flexibleServer
displayed_sidebar: MQL
description: Azure Database for MySQL flexible server
---

# azure.subscription.mySqlService.flexibleServer

**Supported platform**

- azure

**Description**

Azure Database for MySQL flexible server

**Fields**

| ID            | TYPE                                                                                                    | DESCRIPTION                          |
| ------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| id            | string                                                                                                  | MySQL flexible server ID             |
| name          | string                                                                                                  | MySQL flexible server name           |
| location      | string                                                                                                  | MySQL flexible server location       |
| tags          | map[string]string                                                                                       | MySQL flexible server tags           |
| type          | string                                                                                                  | MySQL flexible server type           |
| properties    | dict                                                                                                    | MySQL flexible server properties     |
| configuration | &#91;&#93;[azure.subscription.sqlService.configuration](azure.subscription.sqlservice.configuration.md) | MySQL flexible server configuration  |
| databases     | &#91;&#93;[azure.subscription.mySqlService.database](azure.subscription.mysqlservice.database.md)       | MySQL flexible server databases      |
| firewallRules | &#91;&#93;[azure.subscription.sqlService.firewallrule](azure.subscription.sqlservice.firewallrule.md)   | MySQL flexible server firewall rules |

**References**

- [Azure Database for MySQL - Flexible Server documentation](https://learn.microsoft.com/en-us/azure/mysql/)
