---
title: azure.subscription.mySqlService
id: azure.subscription.mySqlService
sidebar_label: azure.subscription.mySqlService
displayed_sidebar: MQL
description: Azure Database for MySQL
---

# azure.subscription.mySqlService

**Supported platform**

- azure

**Description**

Azure Database for MySQL

**Fields**

| ID              | TYPE                                                                                                          | DESCRIPTION                    |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| subscriptionId  | string                                                                                                        | Subscription identifier        |
| servers         | &#91;&#93;[azure.subscription.mySqlService.server](azure.subscription.mysqlservice.server.md)                 | List of MySQL servers          |
| flexibleServers | &#91;&#93;[azure.subscription.mySqlService.flexibleServer](azure.subscription.mysqlservice.flexibleserver.md) | List of Flexible MySQL servers |

**References**

- [Azure Database for MySQL - Flexible Server documentation](https://learn.microsoft.com/en-us/azure/mysql/)
