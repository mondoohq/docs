---
title: aws.cloudwatch.metricsalarm
id: aws.cloudwatch.metricsalarm
sidebar_label: aws.cloudwatch.metricsalarm
displayed_sidebar: MQL
description: Amazon CloudWatch metrics alarm
---

# aws.cloudwatch.metricsalarm

**Supported platform**

- aws

**Description**

Amazon CloudWatch metrics alarm

The `aws.cloudwatch.metricsalarm` object represents an individual AWS CloudWatch metric alarm configured within an account. For usage, read the `aws.cloudwatch` resource documentation.

**Fields**

| ID                      | TYPE                                        | DESCRIPTION                                                      |
| ----------------------- | ------------------------------------------- | ---------------------------------------------------------------- |
| arn                     | string                                      | ARN for the metric alarm                                         |
| metricName              | string                                      | Metric name associated with the alarm                            |
| metricNamespace         | string                                      | Metric namespace associated with the alarm                       |
| region                  | string                                      | Region where the alarm exists                                    |
| actions                 | &#91;&#93;[aws.sns.topic](aws.sns.topic.md) | List of alarm actions (SNS topic ARNs) associated with the alarm |
| state                   | string                                      | State of the alarm                                               |
| stateReason             | string                                      | Description of the reason for the state                          |
| insufficientDataActions | &#91;&#93;[aws.sns.topic](aws.sns.topic.md) | List of SNS topic ARNs to trigger for insufficient data actions  |
| okActions               | &#91;&#93;[aws.sns.topic](aws.sns.topic.md) | List of SNS topic ARNs to trigger for OK actions                 |
| name                    | string                                      | Name of the alarm                                                |
