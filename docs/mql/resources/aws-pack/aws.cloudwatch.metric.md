---
title: aws.cloudwatch.metric
id: aws.cloudwatch.metric
sidebar_label: aws.cloudwatch.metric
displayed_sidebar: MQL
description: Amazon CloudWatch metric
---

# aws.cloudwatch.metric

**Supported platform**

- aws

**Description**

Amazon CloudWatch metric

The `aws.cloudwatch.metric` object represents an individual AWS CloudWatch metric configured within an account. For usage, read the `aws.cloudwatch` resource documentation.

**Fields**

| ID         | TYPE                                                                          | DESCRIPTION                                     |
| ---------- | ----------------------------------------------------------------------------- | ----------------------------------------------- |
| name       | string                                                                        | Name of the metric                              |
| namespace  | string                                                                        | Namespace for the metric                        |
| region     | string                                                                        | Region where the metric exists                  |
| alarms     | &#91;&#93;[aws.cloudwatch.metricsalarm](aws.cloudwatch.metricsalarm.md)       | List of CloudWatch metric alarms for the metric |
| dimensions | &#91;&#93;[aws.cloudwatch.metricdimension](aws.cloudwatch.metricdimension.md) | Dimensions that apply to the metric             |
| statistics | [aws.cloudwatch.metricstatistics](aws.cloudwatch.metricstatistics.md)         | Statistics for the metric                       |
