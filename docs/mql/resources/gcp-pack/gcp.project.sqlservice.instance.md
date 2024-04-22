---
title: gcp.project.sqlService.instance
id: gcp.project.sqlService.instance
sidebar_label: gcp.project.sqlService.instance
displayed_sidebar: MQL
description: Google Cloud (GCP) SQL instance
---

# gcp.project.sqlService.instance

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) SQL instance

**Fields**

| ID                           | TYPE                                                                                                | DESCRIPTION                                                      |
| ---------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| projectId                    | string                                                                                              | Project ID                                                       |
| availableMaintenanceVersions | &#91;&#93;string                                                                                    | All maintenance versions applicable on the instance              |
| backendType                  | string                                                                                              | Backend type                                                     |
| connectionName               | string                                                                                              | Connection name of the instance used in connection strings       |
| created                      | time                                                                                                | Creation timestamp                                               |
| currentDiskSize              | int                                                                                                 | Deprecated                                                       |
| databaseInstalledVersion     | string                                                                                              | Current database version running on the instance                 |
| databaseVersion              | string                                                                                              | Database engine type and version                                 |
| diskEncryptionConfiguration  | dict                                                                                                | Disk encryption configuration                                    |
| diskEncryptionStatus         | dict                                                                                                | Disk encryption status                                           |
| failoverReplica              | dict                                                                                                | Name and status of the failover replica                          |
| gceZone                      | string                                                                                              | Compute Engine zone that the instance is currently serviced from |
| instanceType                 | string                                                                                              | Instance type                                                    |
| ipAddresses                  | &#91;&#93;[gcp.project.sqlService.instance.ipMapping](gcp.project.sqlservice.instance.ipmapping.md) | Assigned IP addresses                                            |
| maintenanceVersion           | string                                                                                              | Current software version on the instance                         |
| masterInstanceName           | string                                                                                              | Name of the instance that acts as primary in the replica         |
| maxDiskSize                  | int                                                                                                 | Maximum disk size in bytes                                       |
| name                         | string                                                                                              | Instance name                                                    |
| project                      | string                                                                                              | This is deprecated; use projectId instead.                       |
| region                       | string                                                                                              | Region                                                           |
| replicaNames                 | &#91;&#93;string                                                                                    | Replicas                                                         |
| settings                     | [gcp.project.sqlService.instance.settings](gcp.project.sqlservice.instance.settings.md)             | Settings                                                         |
| serviceAccountEmailAddress   | string                                                                                              | Service account email address                                    |
| state                        | string                                                                                              | Instance state                                                   |
| databases                    | &#91;&#93;[gcp.project.sqlService.instance.database](gcp.project.sqlservice.instance.database.md)   | List of the databases in the current SQL instance                |

**References**

- [Cloud SQL overview](https://cloud.google.com/sql/docs/introduction)
