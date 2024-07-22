---
title: aws.cloudtrail.trail
id: aws.cloudtrail.trail
sidebar_label: aws.cloudtrail.trail
displayed_sidebar: MQL
description: AWS CloudTrail trail
---

# aws.cloudtrail.trail

**Supported platform**

- aws

**Description**

AWS CloudTrail trail

The `aws.cloudtrail.trail` object represents an individual AWS CloudTrail configured within an account. For usage, read the `aws.cloudtrail` resource documentation.

**Fields**

| ID                         | TYPE                                                  | DESCRIPTION                                                                                                     |
| -------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| arn                        | string                                                | ARN of the trail                                                                                                |
| name                       | string                                                | Name of the trail                                                                                               |
| kmsKey                     | [aws.kms.key](aws.kms.key.md)                         | KMS key used to encrypt the logs                                                                                |
| isMultiRegionTrail         | bool                                                  | Whether the trail exists in multiple regions (false if single region)                                           |
| isOrganizationTrail        | bool                                                  | Whether the trail is an organization trail (logs events for management and member accounts of the organization) |
| logFileValidationEnabled   | bool                                                  | Whether log file validation is enabled                                                                          |
| includeGlobalServiceEvents | bool                                                  | Whether API calls from global services are included                                                             |
| s3bucket                   | [aws.s3.bucket](aws.s3.bucket.md)                     | S3 bucket where trail files are delivered                                                                       |
| snsTopicARN                | string                                                | ARN of the SNS topic that the trail uses to send notifications                                                  |
| status                     | dict                                                  | JSON list of information about the trail                                                                        |
| logGroup                   | [aws.cloudwatch.loggroup](aws.cloudwatch.loggroup.md) | Log group where trail files are delivered                                                                       |
| cloudWatchLogsRoleArn      | string                                                | Role for logs endpoint to assume when writing to log group                                                      |
| cloudWatchLogsLogGroupArn  | string                                                | Group for logs endpoint to assume when writing to log group                                                     |
| eventSelectors             | &#91;&#93;dict                                        | Settings for the trail's configured event selectors                                                             |
| region                     | string                                                | Region in which the trail was created (home region)                                                             |
