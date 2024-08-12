---
title: aws.neptune.cluster
id: aws.neptune.cluster
sidebar_label: aws.neptune.cluster
displayed_sidebar: MQL
description: Amazon Neptune cluster
---

# aws.neptune.cluster

**Supported platform**

- aws

**Description**

Amazon Neptune cluster

**Fields**

| ID                               | TYPE             | DESCRIPTION                                                                                             |
| -------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| arn                              | string           | ARN for the cluster                                                                                     |
| name                             | string           | Name of the cluster                                                                                     |
| clusterIdentifier                | string           | User-supplied DB cluster identifier                                                                     |
| globalClusterIdentifier          | string           | User-supplied global database cluster identifier                                                        |
| engine                           | string           | Name of the database engine                                                                             |
| engineVersion                    | string           | Database engine version                                                                                 |
| kmsKeyId                         | string           | Amazon KMS key identifier for the encrypted DB cluster                                                  |
| region                           | string           | Region where the cluster exists                                                                         |
| automaticRestartTime             | time             | Time when the cluster was created                                                                       |
| availabilityZones                | &#91;&#93;string | List of EC2 Availability Zones                                                                          |
| backupRetentionPeriod            | int              | Number of days for which automatic DB snapshots are retained                                            |
| createdAt                        | time             | Time when the cluster was created                                                                       |
| crossAccountClone                | bool             | Whether the DB cluster can be cloned across accounts                                                    |
| clusterParameterGroup            | string           | DB cluster parameter group for the DB cluster                                                           |
| subnetGroup                      | string           | Subnet group associated with the DB cluster                                                             |
| clusterResourceId                | string           | Amazon Region-unique, immutable identifier for the DB cluster                                           |
| deletionProtection               | bool             | Whether the DB cluster has deletion protection enabled                                                  |
| earliestRestorableTime           | time             | Earliest time to which a database can be restored                                                       |
| endpoint                         | string           | Connection endpoint for the primary instance                                                            |
| iamDatabaseAuthenticationEnabled | bool             | Whether mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled |
| latestRestorableTime             | time             | Latest time to which a database can be restored                                                         |
| masterUsername                   | string           | Username                                                                                                |
| multiAZ                          | bool             | Whether the cluster has instances in multiple availability zones                                        |
| port                             | int              | Port that the database engine is listening on                                                           |
| preferredBackupWindow            | string           | Daily time range during which automated backups are created                                             |
| preferredMaintenanceWindow       | string           | Weekly time range during which system maintenance can occur                                             |
| status                           | string           | Status of the cluster                                                                                   |
| storageEncrypted                 | bool             | Whether the DB cluster is encrypted                                                                     |
| storageType                      | string           | Storage type                                                                                            |
