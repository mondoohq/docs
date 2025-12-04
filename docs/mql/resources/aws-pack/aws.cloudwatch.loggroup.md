---
title: aws.cloudwatch.loggroup
id: aws.cloudwatch.loggroup
sidebar_label: aws.cloudwatch.loggroup
displayed_sidebar: MQL
description: Amazon CloudWatch log group
---

# aws.cloudwatch.loggroup

**Supported platform**

- aws

**Description**

Amazon CloudWatch log group

The `aws.cloudwatch.loggroup` object represents an individual AWS CloudWatch log group configured within an account. For usage, read the `aws.cloudwatch` resource documentation.

**Fields**

| ID              | TYPE                                                                                        | DESCRIPTION                                                        |
| --------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| arn             | string                                                                                      | ARN of the log group                                               |
| name            | string                                                                                      | Name of the log group                                              |
| metricsFilters  | &#91;&#93;[aws.cloudwatch.loggroup.metricsfilter](aws.cloudwatch.loggroup.metricsfilter.md) | List of metric filters associated with the log group               |
| kmsKey          | [aws.kms.key](aws.kms.key.md)                                                               | KMS key used for log encryption                                    |
| region          | string                                                                                      | Region where the log group is stored                               |
| retentionInDays | int                                                                                         | Number of days to retain the log events in the specified log group |
| tags            | map[string]string                                                                           | Tags for the log group                                             |
