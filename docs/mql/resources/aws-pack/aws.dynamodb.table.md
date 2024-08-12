---
title: aws.dynamodb.table
id: aws.dynamodb.table
sidebar_label: aws.dynamodb.table
displayed_sidebar: MQL
description: Amazon DynamoDB table
---

# aws.dynamodb.table

**Supported platform**

- aws

**Description**

Amazon DynamoDB table

The `aws.dynamodb.table` resource provides fields representing a DynamoDB table. For usage, see `aws.dynamodb` resource documentation.

**Fields**

| ID                        | TYPE              | DESCRIPTION                                                                                                                   |
| ------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| arn                       | string            | ARN for the table                                                                                                             |
| id                        | string            | Table ID                                                                                                                      |
| name                      | string            | Table name                                                                                                                    |
| region                    | string            | Region where the table exists                                                                                                 |
| backups                   | &#91;&#93;dict    | Backups for the table                                                                                                         |
| sseDescription            | dict              | Description of server-side encryption for the table                                                                           |
| provisionedThroughput     | dict              | Provisioned throughput settings for the table                                                                                 |
| continuousBackups         | dict              | Continuous backups and point-in-time recovery settings for the table                                                          |
| tags                      | map[string]string | Tags for the table                                                                                                            |
| createdTime               | time              | Creation time of the table                                                                                                    |
| deletionProtectionEnabled | bool              | Whether deletion protection is enabled                                                                                        |
| globalTableVersion        | string            | Global table version                                                                                                          |
| items                     | int               | Number of items in the table                                                                                                  |
| sizeBytes                 | int               | Total size of the specified table, in bytes. DynamoDB updates this value approximately every six hours.                       |
| latestStreamArn           | string            | Latest stream for this table                                                                                                  |
| status                    | string            | Current state of the table: CREATING, UPDATING, DELETING, ACTIVE, INACCESSIBLE_ENCRYPTION_CREDENTIALS, ARCHIVING, or ARCHIVED |
