---
title: aws.rds.dbcluster
id: aws.rds.dbcluster
sidebar_label: aws.rds.dbcluster
displayed_sidebar: MQL
description: Amazon RDS database cluster
---

# aws.rds.dbcluster

**Supported platform**

- aws

**Description**

Amazon RDS database cluster

The `aws.rds.dbcluster` resource provides fields for assessing the configuration of AWS RDS Clusters.

**Fields**

| ID                      | TYPE                                                        | DESCRIPTION                                                                       |
| ----------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------- |
| arn                     | string                                                      | ARN for the database cluster                                                      |
| region                  | string                                                      | Region where the database cluster exists                                          |
| id                      | string                                                      | Identifier for the database cluster                                               |
| members                 | &#91;&#93;[aws.rds.dbinstance](aws.rds.dbinstance.md)       | List of database instances that belong to the cluster                             |
| snapshots               | &#91;&#93;[aws.rds.snapshot](aws.rds.snapshot.md)           | List of snapshots for the cluster                                                 |
| tags                    | map[string]string                                           | Tags for the database cluster                                                     |
| storageEncrypted        | bool                                                        | Whether the cluster is encrypted                                                  |
| storageAllocated        | int                                                         | The amount of storage, in GiB, provisioned on the cluster                         |
| storageIops             | int                                                         | The storage IOPS provisioned on the cluster                                       |
| storageType             | string                                                      | The type of storage provisioned on the cluster                                    |
| status                  | string                                                      | Current state of the cluster                                                      |
| createdTime             | time                                                        | The creation date of the RDS cluster                                              |
| backupRetentionPeriod   | int                                                         | Number of days for which automated snapshots are retained                         |
| autoMinorVersionUpgrade | bool                                                        | Whether minor version patches are applied automatically                           |
| clusterDbInstanceClass  | string                                                      | Name of the compute and memory capacity class of the Cluster DB instances         |
| engine                  | string                                                      | Name of the database engine for this DB cluster                                   |
| engineVersion           | string                                                      | The version of the database engine for this DB cluster                            |
| publiclyAccessible      | bool                                                        | Whether the cluster is publicly accessible                                        |
| multiAZ                 | bool                                                        | Whether the cluster is a Multi-AZ deployment                                      |
| deletionProtection      | bool                                                        | Whether deletion protection is enabled                                            |
| securityGroups          | &#91;&#93;[aws.ec2.securitygroup](aws.ec2.securitygroup.md) | List of VPC security group elements that the DB cluster belongs to                |
| availabilityZones       | &#91;&#93;string                                            | List of Availability Zones (AZs) where instances in the DB cluster can be created |
| port                    | int                                                         | The port that the database engine is listening on                                 |
| endpoint                | string                                                      | The connection endpoint for the primary instance of the DB cluster                |
| hostedZoneId            | string                                                      | The cluster hosted zone ID                                                        |
| masterUsername          | string                                                      | The master username for the DB instance                                           |
| latestRestorableTime    | time                                                        | The latest time to which a database can be restored with point-in-time restore    |
