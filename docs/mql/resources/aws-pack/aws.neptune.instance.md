---
title: aws.neptune.instance
id: aws.neptune.instance
sidebar_label: aws.neptune.instance
displayed_sidebar: MQL
description: Amazon Neptune instance
---

# aws.neptune.instance

**Supported platform**

- aws

**Description**

Amazon Neptune instance

**Fields**

| ID                               | TYPE             | DESCRIPTION                                                                                             |
| -------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| arn                              | string           | ARN for the instance                                                                                    |
| name                             | string           | Name of the instance                                                                                    |
| clusterIdentifier                | string           | User-supplied DB cluster identifier                                                                     |
| autoMinorVersionUpgrade          | bool             | Whether minor version patches are applied automatically                                                 |
| availabilityZone                 | string           | Name of the availability zone                                                                           |
| backupRetentionPeriod            | int              | Number of days automatic DB snapshots are retained                                                      |
| instanceClass                    | string           | Name of the compute and memory capacity class                                                           |
| status                           | string           | Status of the instance                                                                                  |
| port                             | int              | Port on which the database engine is listening                                                          |
| deletionProtection               | bool             | Whether the instance has deletion protection enabled                                                    |
| enabledCloudwatchLogsExports     | &#91;&#93;string | List of log types that this DB instance is configured to export to CloudWatch logs                      |
| endpoint                         | dict             | Connection endpoint                                                                                     |
| engine                           | string           | Name of the database engine                                                                             |
| engineVersion                    | string           | Database engine version                                                                                 |
| enhancedMonitoringResourceArn    | string           | Amazon CloudWatch Log ARN log stream to which the database writes the audit log                         |
| iamDatabaseAuthenticationEnabled | bool             | Whether mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled |
| createdAt                        | time             | Time when the cluster was created                                                                       |
| kmsKeyId                         | string           | Amazon KMS key identifier for the encrypted DB instance                                                 |
| latestRestorableTime             | time             | Latest time to which a database can be restored                                                         |
| masterUsername                   | string           | Username                                                                                                |
| monitoringInterval               | int              | Interval, in seconds, between points when Enhanced Monitoring metrics are collected                     |
| monitoringRoleArn                | string           | ARN for the IAM role that permits Neptune to send Enhanced Monitoring metrics to Amazon CloudWatch Logs |
| multiAZ                          | bool             | Whether the cluster has instances in multiple availability zones                                        |
| preferredBackupWindow            | string           | Daily time range during which automated backups are created                                             |
| preferredMaintenanceWindow       | string           | Weekly time range during which system maintenance can occur                                             |
| promotionTier                    | int              | Order in which a Read Replica is promoted                                                               |
| region                           | string           | Region where the cluster exists                                                                         |
| storageEncrypted                 | bool             | Whether the DB cluster is encrypted                                                                     |
| storageType                      | string           | Storage type                                                                                            |
| tdeCredentialArn                 | string           | Key store with which the instance is associated for TDE encryption                                      |
