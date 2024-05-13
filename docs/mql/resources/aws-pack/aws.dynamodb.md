---
title: aws.dynamodb
id: aws.dynamodb
sidebar_label: aws.dynamodb
displayed_sidebar: MQL
description: Amazon DynamoDB
---

# aws.dynamodb

**Supported platform**

- aws

**Description**

Amazon DynamoDB

Use the `aws.dynamodb` resource to assess the configuration of the AWS DynamoDB.

**Fields**

| ID           | TYPE                                                              | DESCRIPTION                                  |
| ------------ | ----------------------------------------------------------------- | -------------------------------------------- |
| backups      | &#91;&#93;dict                                                    | List of backups for DynamoDB                 |
| globalTables | &#91;&#93;[aws.dynamodb.globaltable](aws.dynamodb.globaltable.md) | List of global tables for DynamoDB           |
| tables       | &#91;&#93;[aws.dynamodb.table](aws.dynamodb.table.md)             | List of tables for DynamoDB                  |
| limits       | &#91;&#93;[aws.dynamodb.limit](aws.dynamodb.limit.md)             | List of DynamoDB settings across all regions |

**Examples**

Return a list of `aws.dynamodb.table` resources and the values for specified fields

```coffeescript
aws.dynamodb.tables {
  arn
  name
  region
  backups
  sseDescription
  provisionedThroughput
  continuousBackups
}
```

Return a list of `aws.dynamodb.limit` resources and the values for specified fields

```coffeescript
aws.dynamodb.limits {
  arn
  region
  accountMaxRead
  accountMaxWrite
  tableMaxRead
  tableMaxWrite
}
```

Return a list of `aws.dynamodb.globaltable` resources and the value for specified fields

```coffeescript
aws.dynamodb.globaltables {
  arn
  name
  replicaSettings
}
```

Check that all DynamoDB tables are encrypted with AWS Key Management Service (KMS)

```coffeescript
aws.dynamodb.tables.all(
  sseDescription['SSEType'] == 'KMS' && sseDescription['Status'] == 'ENABLED'
)
```

**References**

- [Security and Compliance in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/security.html)
