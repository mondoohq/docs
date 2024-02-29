---
title: azure.subscription.mariaDbService.server
id: azure.subscription.mariaDbService.server
sidebar_label: azure.subscription.mariaDbService.server
displayed_sidebar: MQL
description: Azure Database for MariaDB server
---

# azure.subscription.mariaDbService.server

**Supported platform**

- azure

**Description**

Azure Database for MariaDB server

**Fields**

| ID            | TYPE                                                                                                    | DESCRIPTION                   |
| ------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------- |
| id            | string                                                                                                  | MariaDB server ID             |
| name          | string                                                                                                  | MariaDB server name           |
| location      | string                                                                                                  | MariaDB server location       |
| tags          | map[string]string                                                                                       | MariaDB server tags           |
| type          | string                                                                                                  | MariaDB server type           |
| properties    | dict                                                                                                    | MariaDB server properties     |
| configuration | &#91;&#93;[azure.subscription.sqlService.configuration](azure.subscription.sqlservice.configuration.md) | MariaDB server configuration  |
| databases     | &#91;&#93;[azure.subscription.mariaDbService.database](azure.subscription.mariadbservice.database.md)   | MariaDB server databases      |
| firewallRules | &#91;&#93;[azure.subscription.sqlService.firewallrule](azure.subscription.sqlservice.firewallrule.md)   | MariaDB server firewall rules |

**References**

- [Azure Database for MariaDB documentation](https://learn.microsoft.com/en-us/azure/mariadb/)
