---
title: gcp.project.sqlService.instance.settings.backupconfiguration
id: gcp.project.sqlService.instance.settings.backupconfiguration
sidebar_label: gcp.project.sqlService.instance.settings.backupconfiguration
displayed_sidebar: MQL
description: Google Cloud (GCP) SQL instance settings backup configuration
---

# gcp.project.sqlService.instance.settings.backupconfiguration

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) SQL instance settings backup configuration

**Fields**

| ID                          | TYPE   | DESCRIPTION                                                                            |
| --------------------------- | ------ | -------------------------------------------------------------------------------------- |
| id                          | string | Internal ID                                                                            |
| backupRetentionSettings     | dict   | Backup retention settings                                                              |
| binaryLogEnabled            | bool   | Whether binary log is enabled                                                          |
| enabled                     | bool   | Whether this configuration is enabled                                                  |
| location                    | string | Location of the backup                                                                 |
| pointInTimeRecoveryEnabled  | bool   | Whether point-in-time recovery is enabled                                              |
| startTime                   | string | Start time for the daily backup configuration (in UTC timezone, in the 24 hour format) |
| transactionLogRetentionDays | int    | Number of days of transaction logs retained for point-in-time restore                  |

**References**

- [Cloud SQL overview](https://cloud.google.com/sql/docs/introduction)
