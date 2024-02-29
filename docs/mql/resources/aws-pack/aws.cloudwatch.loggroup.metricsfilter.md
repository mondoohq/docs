---
title: aws.cloudwatch.loggroup.metricsfilter
id: aws.cloudwatch.loggroup.metricsfilter
sidebar_label: aws.cloudwatch.loggroup.metricsfilter
displayed_sidebar: MQL
description: Amazon CloudWatch log group metrics filter
---

# aws.cloudwatch.loggroup.metricsfilter

**Supported platform**

- aws

**Description**

Amazon CloudWatch log group metrics filter

The `aws.cloudwatch.metricsfilter` object represents an individual AWS CloudWatch metrics filter configured within an account. For usage, read the `aws.cloudwatch` resource documentation.

**Fields**

| ID            | TYPE                                                        | DESCRIPTION                               |
| ------------- | ----------------------------------------------------------- | ----------------------------------------- |
| id            | string                                                      | Unique ID for the metric                  |
| filterName    | string                                                      | Filter name associated with the metric    |
| filterPattern | string                                                      | Filter pattern associated with the metric |
| metrics       | &#91;&#93;[aws.cloudwatch.metric](aws.cloudwatch.metric.md) | List of CloudWatch metrics                |
