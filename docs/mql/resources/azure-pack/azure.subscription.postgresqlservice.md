---
title: azure.subscription.postgreSqlService
id: azure.subscription.postgreSqlService
sidebar_label: azure.subscription.postgreSqlService
displayed_sidebar: MQL
description: Azure Database for PostgreSQL
---

# azure.subscription.postgreSqlService

**Supported platform**

- azure

**Description**

Azure Database for PostgreSQL

**Fields**

| ID              | TYPE                                                                                                                    | DESCRIPTION                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| subscriptionId  | string                                                                                                                  | Subscription identifier             |
| servers         | &#91;&#93;[azure.subscription.postgreSqlService.server](azure.subscription.postgresqlservice.server.md)                 | List of PostgreSQL servers          |
| flexibleServers | &#91;&#93;[azure.subscription.postgreSqlService.flexibleServer](azure.subscription.postgresqlservice.flexibleserver.md) | List of PostgreSQL flexible servers |
