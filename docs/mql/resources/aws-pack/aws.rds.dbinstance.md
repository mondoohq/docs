---
title: aws.rds.dbinstance
id: aws.rds.dbinstance
sidebar_label: aws.rds.dbinstance
displayed_sidebar: MQL
description: Amazon RDS database instance
---

# aws.rds.dbinstance

**Supported platform**

- aws

**Description**

Amazon RDS database instance

The `aws.rds.dbinstance` resource provides fields for assessing the configuration of RDS instances. For usage, read the `aws.rds` resource documentation.

**Fields**

| ID                            | TYPE                                                        | DESCRIPTION                                                                                                                                              |
| ----------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| arn                           | string                                                      | ARN for the database instance                                                                                                                            |
| name                          | string                                                      | Name of the database instance                                                                                                                            |
| backupRetentionPeriod         | int                                                         | Number of days for which automated snapshots are retained                                                                                                |
| snapshots                     | &#91;&#93;[aws.rds.snapshot](aws.rds.snapshot.md)           | List of snapshots for the database instance                                                                                                              |
| storageEncrypted              | bool                                                        | Whether the instance is encrypted                                                                                                                        |
| storageAllocated              | int                                                         | The amount of storage, in GiB, provisioned on the instance                                                                                               |
| storageIops                   | int                                                         | The storage IOPS provisioned on the instance                                                                                                             |
| storageType                   | string                                                      | The type of storage provisioned on the instance                                                                                                          |
| region                        | string                                                      | Region where the instance exists                                                                                                                         |
| availabilityZone              | string                                                      | Availability zone where the instance exists                                                                                                              |
| publiclyAccessible            | bool                                                        | Whether the instance is publicly accessible                                                                                                              |
| enabledCloudwatchLogsExports  | &#91;&#93;string                                            | List of log types the instance is configured to export to CloudWatch logs                                                                                |
| deletionProtection            | bool                                                        | Whether deletion protection is enabled                                                                                                                   |
| multiAZ                       | bool                                                        | Whether the instance is a Multi-AZ deployment                                                                                                            |
| id                            | string                                                      | Identifier for the database instance                                                                                                                     |
| enhancedMonitoringResourceArn | string                                                      | ARN of the CloudWatch log stream that receives the enhanced monitoring metrics data                                                                      |
| tags                          | map[string]string                                           | Tags for the database instance                                                                                                                           |
| dbInstanceClass               | string                                                      | Name of the compute and memory capacity class of the database instance                                                                                   |
| dbInstanceIdentifier          | string                                                      | User-supplied unique key that identifies a database instance                                                                                             |
| engine                        | string                                                      | Name of the database engine for this database instance                                                                                                   |
| engineVersion                 | string                                                      | The version of the database engine for this database instance                                                                                            |
| securityGroups                | &#91;&#93;[aws.ec2.securitygroup](aws.ec2.securitygroup.md) | List of VPC security group elements that the database instance belongs to                                                                                |
| status                        | string                                                      | Current state of this database                                                                                                                           |
| autoMinorVersionUpgrade       | bool                                                        | Whether minor version patches are applied automatically                                                                                                  |
| createdTime                   | time                                                        | The creation date of the RDS instance                                                                                                                    |
| port                          | int                                                         | The port that the database instance listens on. If the database instance is part of a DB cluster, this can be a different port than the DB cluster port. |
| endpoint                      | string                                                      | The connection endpoint for the database instance                                                                                                        |
| masterUsername                | string                                                      | The master username for the database instance                                                                                                            |
| latestRestorableTime          | time                                                        | The latest time to which a database can be restored with point-in-time restore                                                                           |
| backupSettings                | &#91;&#93;[aws.rds.backupsetting](aws.rds.backupsetting.md) | Backup setting for the database instance                                                                                                                 |
| subnets                       | &#91;&#93;[aws.vpc.subnet](aws.vpc.subnet.md)               | Subnet for the RDS instance                                                                                                                              |
