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

| ID                        | TYPE              | DESCRIPTION                                                                                                                       |
| ------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| arn                       | string            | ARN for the table                                                                                                                 |
| name                      | string            | Table name                                                                                                                        |
| region                    | string            | Region where the table exists                                                                                                     |
| backups                   | &#91;&#93;dict    | Backups for the table                                                                                                             |
| sseDescription            | dict              | Description of server-side encryption for the table                                                                               |
| provisionedThroughput     | dict              | Provisioned throughput settings for the table                                                                                     |
| continuousBackups         | dict              | Continuous backups and point-in-time recovery settings for the table                                                              |
| tags                      | map[string]string | Tags for the table                                                                                                                |
| createdTime               | time              | The creation time of the table                                                                                                    |
| deletionProtectionEnabled | bool              | Is deletion protection enabled                                                                                                    |
| globalTableVersion        | string            | The global table version                                                                                                          |
| id                        | string            | The table ID                                                                                                                      |
| sizeBytes                 | int               | The total size of the specified table, in bytes. DynamoDB updates this value approximately every six hours.                       |
| status                    | string            | The current state of the table: CREATING, UPDATING, DELETING, ACTIVE, INACCESSIBLE_ENCRYPTION_CREDENTIALS, ARCHIVING, or ARCHIVED |
