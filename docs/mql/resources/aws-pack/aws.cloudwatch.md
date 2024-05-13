---
title: aws.cloudwatch
id: aws.cloudwatch
sidebar_label: aws.cloudwatch
displayed_sidebar: MQL
description: Amazon CloudWatch
---

# aws.cloudwatch

**Supported platform**

- aws

**Description**

Amazon CloudWatch

Use the `aws.cloudwatch` resource to assess the configuration of the AWS CloudWatch service.

**Fields**

| ID        | TYPE                                                                    | DESCRIPTION                   |
| --------- | ----------------------------------------------------------------------- | ----------------------------- |
| logGroups | &#91;&#93;[aws.cloudwatch.loggroup](aws.cloudwatch.loggroup.md)         | List of CloudWatch log groups |
| alarms    | &#91;&#93;[aws.cloudwatch.metricsalarm](aws.cloudwatch.metricsalarm.md) | List of CloudWatch alarms     |
| metrics   | &#91;&#93;[aws.cloudwatch.metric](aws.cloudwatch.metric.md)             | List of CloudWatch metrics    |

**Examples**

Return a list of `aws.cloudwatch.loggroup` resources representing individual CloudWatch log groups configured across all enabled regions

```coffeescript
aws.cloudwatch.logGroups
```

Return a list of `aws.cloudwatch.metric` resources representing individual CloudWatch metrics configured across all enabled regions

```coffeescript
aws.cloudwatch.metrics
```

Check that all cloudwatch alarms have at least one action enabled

```coffeescript
aws.cloudwatch.alarms.all(
  actions.length > 0 == true &&
  insufficientDataActions.length > 0 == props.cloudwatchAlarmInsufficientDataActionRequired &&
  okActions.length > 0 == props.cloudwatchAlarmOkActionRequired
)
```
