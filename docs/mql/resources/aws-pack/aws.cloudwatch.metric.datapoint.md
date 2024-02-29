---
title: aws.cloudwatch.metric.datapoint
id: aws.cloudwatch.metric.datapoint
sidebar_label: aws.cloudwatch.metric.datapoint
displayed_sidebar: MQL
description: Amazon CloudWatch metric datapoint
---

# aws.cloudwatch.metric.datapoint

**Supported platform**

- aws

**Description**

Amazon CloudWatch metric datapoint

**Fields**

| ID        | TYPE   | DESCRIPTION                         |
| --------- | ------ | ----------------------------------- |
| id        | string | Unique identifier for the datapoint |
| timestamp | time   | Timestamp of the metric datapoint   |
| maximum   | float  | Maximum value for the statistic     |
| minimum   | float  | Minimum value for the statistic     |
| average   | float  | Average value for the statistic     |
| sum       | float  | Sum value for the statistic         |
| unit      | string | Unit of the statistic               |
