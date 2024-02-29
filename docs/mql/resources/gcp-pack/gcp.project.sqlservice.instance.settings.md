---
title: gcp.project.sqlService.instance.settings
id: gcp.project.sqlService.instance.settings
sidebar_label: gcp.project.sqlService.instance.settings
displayed_sidebar: MQL
description: GCP Cloud SQL instance settings
---

# gcp.project.sqlService.instance.settings

**Supported platform**

- gcp

**Description**

GCP Cloud SQL instance settings

**Fields**

| ID                          | TYPE                                                                                                                                          | DESCRIPTION                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| projectId                   | string                                                                                                                                        | Project ID                                                                                      |
| instanceName                | string                                                                                                                                        | Instance name                                                                                   |
| activationPolicy            | string                                                                                                                                        | When the instance is activated                                                                  |
| activeDirectoryConfig       | dict                                                                                                                                          | Entra ID (formerly Active Directory) configuration (relevant only for Cloud SQL for SQL Server) |
| availabilityType            | string                                                                                                                                        | Availability type                                                                               |
| backupConfiguration         | [gcp.project.sqlService.instance.settings.backupconfiguration](gcp.project.sqlservice.instance.settings.backupconfiguration.md)               | Daily backup configuration for the instance                                                     |
| collation                   | string                                                                                                                                        | Name of the server collation                                                                    |
| connectorEnforcement        | string                                                                                                                                        | Whether connections must use Cloud SQL connectors                                               |
| crashSafeReplicationEnabled | bool                                                                                                                                          | Whether database flags for crash-safe replication are enabled                                   |
| dataDiskSizeGb              | int                                                                                                                                           | Size of the data disk, in GB                                                                    |
| dataDiskType                | string                                                                                                                                        | Type of the data disk                                                                           |
| databaseFlags               | map[string]string                                                                                                                             | Database flags passed to the instance at startup                                                |
| databaseReplicationEnabled  | bool                                                                                                                                          | Whether replication is enabled                                                                  |
| deletionProtectionEnabled   | bool                                                                                                                                          | Whether to protect against accidental instance deletion                                         |
| denyMaintenancePeriods      | &#91;&#93;[gcp.project.sqlService.instance.settings.denyMaintenancePeriod](gcp.project.sqlservice.instance.settings.denymaintenanceperiod.md) | Deny maintenance periods                                                                        |
| insightsConfig              | dict                                                                                                                                          | Insights configuration                                                                          |
| ipConfiguration             | [gcp.project.sqlService.instance.settings.ipConfiguration](gcp.project.sqlservice.instance.settings.ipconfiguration.md)                       | IP management settings                                                                          |
| locationPreference          | dict                                                                                                                                          | Location preference settings                                                                    |
| maintenanceWindow           | [gcp.project.sqlService.instance.settings.maintenanceWindow](gcp.project.sqlservice.instance.settings.maintenancewindow.md)                   | Maintenance window                                                                              |
| passwordValidationPolicy    | [gcp.project.sqlService.instance.settings.passwordValidationPolicy](gcp.project.sqlservice.instance.settings.passwordvalidationpolicy.md)     | Local user password validation policy                                                           |
| pricingPlan                 | string                                                                                                                                        | Pricing plan                                                                                    |
| replicationType             | string                                                                                                                                        | Replication type                                                                                |
| settingsVersion             | int                                                                                                                                           | Instance settings version                                                                       |
| sqlServerAuditConfig        | dict                                                                                                                                          | SQL-server-specific audit configuration                                                         |
| storageAutoResize           | bool                                                                                                                                          | Configuration to increase storage size automatically                                            |
| storageAutoResizeLimit      | int                                                                                                                                           | Maximum size to which storage capacity can be automatically increased                           |
| tier                        | string                                                                                                                                        | Service tier for this instance                                                                  |
| timeZone                    | string                                                                                                                                        | Server timezone                                                                                 |
| userLabels                  | map[string]string                                                                                                                             | User-provided labels                                                                            |

**References**

- [Cloud SQL overview](https://cloud.google.com/sql/docs/introduction)
