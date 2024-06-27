---
title: aws.cloudtrail
id: aws.cloudtrail
sidebar_label: aws.cloudtrail
displayed_sidebar: MQL
description: AWS CloudTrail
---

# aws.cloudtrail

**Supported platform**

- aws

**Description**

AWS CloudTrail

Use the `aws.cloudtrail` resource to assess the configuration of AWS CloudTrails deployed within an AWS account. The resource provides the `.trails` field, which creates a list of `aws.cloudtrail.trail` resources representing all CloudTrails configured across every enabled region.

**Fields**

| ID     | TYPE                                                      | DESCRIPTION                                           |
| ------ | --------------------------------------------------------- | ----------------------------------------------------- |
| trails | &#91;&#93;[aws.cloudtrail.trail](aws.cloudtrail.trail.md) | List of CloudTrail trails associated with the account |

**Examples**

Return a list of `aws.cloudtrail.trail` resources representing all AWS Cloud Trails configured across all enabled regions and the values for specified fields

```coffee
aws.cloudtrail.trails {
  arn
  name
  kmsKey
  isMultiRegionTrail
  isOrganizationTrail
  logFileValidationEnabled
  includeGlobalServiceEvents
  s3bucket
  snsTopicARN
  status
  logGroup
  cloudWatchLogsRoleArn
  cloudWatchLogsLogGroupArn
  eventSelectors
  region
}
```

```coffee
aws.cloudtrail.trails.any(
  isMultiRegionTrail && status['IsLogging']
)
```

**References**

- [Security best practices in AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/best-practices-security.html)
