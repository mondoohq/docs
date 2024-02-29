---
title: aws.dynamodb.globaltable
id: aws.dynamodb.globaltable
sidebar_label: aws.dynamodb.globaltable
displayed_sidebar: MQL
description: Amazon DynamoDB global table
---

# aws.dynamodb.globaltable

**Supported platform**

- aws

**Description**

Amazon DynamoDB global table

The `aws.dynamodb.globaltable` resource provides fields representing a DynamoDB global table. For usage, see `aws.dynamodb` resource documentation.

**Fields**

| ID              | TYPE           | DESCRIPTION                            |
| --------------- | -------------- | -------------------------------------- |
| arn             | string         | ARN for the global table               |
| name            | string         | Table name                             |
| replicaSettings | &#91;&#93;dict | List of replica settings for the table |
