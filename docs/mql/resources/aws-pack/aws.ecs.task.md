---
title: aws.ecs.task
id: aws.ecs.task
sidebar_label: aws.ecs.task
displayed_sidebar: MQL
description: Amazon ECS task
---

# aws.ecs.task

**Supported platform**

- aws

**Description**

Amazon ECS task

**Fields**

| ID              | TYPE                                                | DESCRIPTION                                    |
| --------------- | --------------------------------------------------- | ---------------------------------------------- |
| arn             | string                                              | ARN of the ECS task                            |
| clusterName     | string                                              | Cluster associated with the ECS task           |
| connectivity    | dict                                                | Connectivity status of the ECS task            |
| lastStatus      | string                                              | Last reported status for the ECS task          |
| platformFamily  | string                                              | Platform Family assigned to the ECS task       |
| platformVersion | string                                              | Platform Version assigned to the ECS task      |
| tags            | map[string]string                                   | User-defined tags associated with the ECS task |
| containers      | &#91;&#93;[aws.ecs.container](aws.ecs.container.md) | List of AWS ECS containers                     |
