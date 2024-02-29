---
title: aws.dynamodb.limit
id: aws.dynamodb.limit
sidebar_label: aws.dynamodb.limit
displayed_sidebar: MQL
description: Amazon DynamoDB limits
---

# aws.dynamodb.limit

**Supported platform**

- aws

**Description**

Amazon DynamoDB limits

The `aws.dynamodb.limit` resource provides fields representing a DynamoDB limit configuration. For usage, see `aws.dynamodb` resource documentation.

**Fields**

| ID              | TYPE   | DESCRIPTION                                                   |
| --------------- | ------ | ------------------------------------------------------------- |
| arn             | string | ARN representing the account + region where the limit applies |
| region          | string | Region where the limits apply                                 |
| accountMaxRead  | int    | Account max read limit                                        |
| accountMaxWrite | int    | Account max write limit                                       |
| tableMaxRead    | int    | Table max read limit                                          |
| tableMaxWrite   | int    | Table max write limit                                         |
