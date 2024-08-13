---
title: aws.elasticache.serverlessCache
id: aws.elasticache.serverlessCache
sidebar_label: aws.elasticache.serverlessCache
displayed_sidebar: MQL
description: Amazon ElastiCache serverless cache
---

# aws.elasticache.serverlessCache

**Supported platform**

- aws

**Description**

Amazon ElastiCache serverless cache

**Fields**

| ID                     | TYPE                                                        | DESCRIPTION                                                                         |
| ---------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| arn                    | string                                                      | ARN for the cache                                                                   |
| name                   | string                                                      | Unique identifier of the serverless cache                                           |
| description            | string                                                      | Description of the serverless cache                                                 |
| engine                 | string                                                      | Cache engine used for this cluster: Memcached or Redis                              |
| engineVersion          | string                                                      | Version of the cache engine that is used in this cluster                            |
| majorEngineVersion     | string                                                      | Version number of the engine with which the serverless cache is compatible          |
| kmsKeyId               | string                                                      | ID of the Amazon Web Services Key Management Service (KMS) key                      |
| securityGroups         | &#91;&#93;[aws.ec2.securitygroup](aws.ec2.securitygroup.md) | A list of VPC security groups associated with the cluster                           |
| snapshotRetentionLimit | int                                                         | Number of days ElastiCache retains automatic cluster snapshots before deleting them |
| dailySnapshotTime      | string                                                      | Time each day that a cache snapshot is created                                      |
| status                 | string                                                      | Status of the serverless cache                                                      |
| region                 | string                                                      | Region where the cache exists                                                       |
| createdAt              | time                                                        | Time when the serverless cache was created                                          |
