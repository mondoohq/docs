---
title: azure.subscription.sqlService.database
id: azure.subscription.sqlService.database
sidebar_label: azure.subscription.sqlService.database
displayed_sidebar: MQL
description: Azure SQL Database service database
---

# azure.subscription.sqlService.database

**Supported platform**

- azure

**Description**

Azure SQL Database service database

**Fields**

| ID                                      | TYPE                                                                                                    | DESCRIPTION                                      |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| id                                      | string                                                                                                  | SQL database ID                                  |
| name                                    | string                                                                                                  | SQL database name                                |
| type                                    | string                                                                                                  | SQL database type                                |
| collation                               | string                                                                                                  | SQL database collation                           |
| creationDate                            | time                                                                                                    | SQL database create date                         |
| databaseId                              | string                                                                                                  | Database ID                                      |
| earliestRestoreDate                     | time                                                                                                    | SQL database earliest restore date               |
| createMode                              | string                                                                                                  | SQL database create mode                         |
| sourceDatabaseId                        | string                                                                                                  | SQL database source database ID                  |
| sourceDatabaseDeletionDate              | time                                                                                                    | SQL database deletion date                       |
| restorePointInTime                      | time                                                                                                    | SQL database restore point in time               |
| recoveryServicesRecoveryPointResourceId | string                                                                                                  | SQL database recovery services recovery point ID |
| edition                                 | string                                                                                                  | SQL database edition                             |
| maxSizeBytes                            | int                                                                                                     | SQL database maximum byte size                   |
| requestedServiceObjectiveName           | string                                                                                                  | SQL database requested objective name            |
| serviceLevelObjective                   | string                                                                                                  | SQL database service level objective             |
| status                                  | string                                                                                                  | SQL database status                              |
| elasticPoolName                         | string                                                                                                  | SQL database elastic pool name                   |
| defaultSecondaryLocation                | string                                                                                                  | SQL database default secondary location          |
| failoverGroupId                         | string                                                                                                  | SQL database failover group ID                   |
| readScale                               | string                                                                                                  | SQL database read scale                          |
| sampleName                              | string                                                                                                  | SQL database sample name                         |
| zoneRedundant                           | bool                                                                                                    | Whether the database is zone redundant           |
| transparentDataEncryption               | dict                                                                                                    | SQL database transparent data encryption         |
| advisor                                 | &#91;&#93;dict                                                                                          | SQL database advisor                             |
| threatDetectionPolicy                   | dict                                                                                                    | SQL database threat detection policy             |
| connectionPolicy                        | dict                                                                                                    | SQL database connection policy                   |
| auditingPolicy                          | dict                                                                                                    | SQL database auditing policy                     |
| usage                                   | &#91;&#93;[azure.subscription.sqlService.databaseusage](azure.subscription.sqlservice.databaseusage.md) | SQL database usage                               |

**References**

- [Azure SQL documentation](https://learn.microsoft.com/en-us/azure/azure-sql/)
