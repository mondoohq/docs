---
title: azure.subscription.sqlService.databaseusage
id: azure.subscription.sqlService.databaseusage
sidebar_label: azure.subscription.sqlService.databaseusage
displayed_sidebar: MQL
description: Azure SQL Database service database usage
---

# azure.subscription.sqlService.databaseusage

**Supported platform**

- azure

**Description**

Azure SQL Database service database usage

**Fields**

| ID           | TYPE   | DESCRIPTION                  |
| ------------ | ------ | ---------------------------- |
| id           | string | Database usage ID            |
| name         | string | Database usage name          |
| resourceName | string | Database usage resource name |
| displayName  | string | Database usage display name  |
| currentValue | float  | Database usage current value |
| limit        | float  | Database usage limit         |
| unit         | string | Database usage unit          |

**References**

- [Azure SQL documentation](https://learn.microsoft.com/en-us/azure/azure-sql/)
