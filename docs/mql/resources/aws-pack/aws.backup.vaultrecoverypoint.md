---
title: aws.backup.vaultRecoveryPoint
id: aws.backup.vaultRecoveryPoint
sidebar_label: aws.backup.vaultRecoveryPoint
displayed_sidebar: MQL
description: AWS Backup vault recovery point
---

# aws.backup.vaultRecoveryPoint

**Supported platform**

- aws

**Description**

AWS Backup vault recovery point

**Fields**

| ID               | TYPE   | DESCRIPTION                                                    |
| ---------------- | ------ | -------------------------------------------------------------- |
| arn              | string | ARN of the recovery point                                      |
| resourceType     | string | Resource type for the recovery point: EFS, DynamoDB, and so on |
| createdBy        | dict   | Information about who created the recovery point               |
| iamRoleArn       | string | ARN of the IAM role used to create the recovery point          |
| status           | string | Status of the recovery point                                   |
| createdAt        | time   | Date the recovery point was created                            |
| creationDate     | time   | Deprecated (use `createdAt` instead)                           |
| completionDate   | time   | Date the recovery point completed                              |
| encryptionKeyArn | string | ARN of the key used to encrypt the recovery point              |
| isEncrypted      | bool   | Whether the recovery point is encrypted                        |
