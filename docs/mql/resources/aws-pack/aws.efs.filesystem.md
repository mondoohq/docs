---
title: aws.efs.filesystem
id: aws.efs.filesystem
sidebar_label: aws.efs.filesystem
displayed_sidebar: MQL
description: AWS Elastic File System (EFS) file system
---

# aws.efs.filesystem

**Supported platform**

- aws

**Description**

AWS Elastic File System (EFS) file system

The `aws.efs.filesystem` resource provides fields for assessing the configuration of individual EFS deployments. For usage, read the `aws.efs` resource documentation.

**Fields**

| ID               | TYPE                          | DESCRIPTION                                                                |
| ---------------- | ----------------------------- | -------------------------------------------------------------------------- |
| name             | string                        | Name of the file system                                                    |
| id               | string                        | ID of the file system                                                      |
| arn              | string                        | ARN of the file system                                                     |
| encrypted        | bool                          | Whether the file system is encrypted                                       |
| kmsKey           | [aws.kms.key](aws.kms.key.md) | KMS key used for encryption of the file system                             |
| backupPolicy     | dict                          | Backup policy for the file system                                          |
| region           | string                        | Region in which the file system exists                                     |
| availabilityZone | string                        | Availability zone where the file system exists if a specific AZ is defined |
| tags             | map[string]string             | Tags for the file system                                                   |
| createdAt        | time                          | Creation timestamp                                                         |
