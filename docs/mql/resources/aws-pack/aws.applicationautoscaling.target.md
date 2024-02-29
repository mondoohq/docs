---
title: aws.applicationautoscaling.target
id: aws.applicationautoscaling.target
sidebar_label: aws.applicationautoscaling.target
displayed_sidebar: MQL
description: AWS Application Auto Scaling target
---

# aws.applicationautoscaling.target

**Supported platform**

- aws

**Description**

AWS Application Auto Scaling target

**Fields**

| ID                | TYPE   | DESCRIPTION                                      |
| ----------------- | ------ | ------------------------------------------------ |
| namespace         | string | Namespace for the target                         |
| arn               | string | ARN of the auto scaling target                   |
| scalableDimension | string | Scalable dimension for the target                |
| minCapacity       | int    | Minimum capacity set for the auto scaling target |
| maxCapacity       | int    | Maximum capacity set for the auto scaling target |
| suspendedState    | dict   | suspendedState for the auto scaling target       |

**References**

- [What is Application Auto Scaling?](https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html)
