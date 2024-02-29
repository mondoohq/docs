---
title: aws.cloudwatch.metricstatistics
id: aws.cloudwatch.metricstatistics
sidebar_label: aws.cloudwatch.metricstatistics
displayed_sidebar: MQL
description: Amazon CloudWatch metric statistics
---

# aws.cloudwatch.metricstatistics

**Supported platform**

- aws

**Description**

Amazon CloudWatch metric statistics

**Init**

aws.cloudwatch.metricstatistics(namespace string)
aws.cloudwatch.metricstatistics(region string)
aws.cloudwatch.metricstatistics(name string)

**Fields**

| ID         | TYPE                                                                            | DESCRIPTION                                                           |
| ---------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| namespace  | string                                                                          | Namespace for the metric                                              |
| name       | string                                                                          | Name for the metric                                                   |
| region     | string                                                                          | Region for the metrics                                                |
| label      | string                                                                          | Label for the statistics                                              |
| datapoints | &#91;&#93;[aws.cloudwatch.metric.datapoint](aws.cloudwatch.metric.datapoint.md) | Datapoints for the statistic over the last 24 hours in hour intervals |
