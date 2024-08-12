---
title: aws.ecs.cluster
id: aws.ecs.cluster
sidebar_label: aws.ecs.cluster
displayed_sidebar: MQL
description: Amazon ECS cluster
---

# aws.ecs.cluster

**Supported platform**

- aws

**Description**

Amazon ECS cluster

**Fields**

| ID                                | TYPE                                              | DESCRIPTION                                            |
| --------------------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| arn                               | string                                            | ARN of the ECS cluster                                 |
| name                              | string                                            | Name of the ECS cluster                                |
| tags                              | map[string]string                                 | Tags of the ECS cluster                                |
| runningTasksCount                 | int                                               | Count of running tasks in the cluster                  |
| pendingTasksCount                 | int                                               | Count of pending tasks in the cluster                  |
| registeredContainerInstancesCount | int                                               | Count of container instances registered to the cluster |
| configuration                     | dict                                              | Configuration for the cluster                          |
| status                            | string                                            | Status of the cluster                                  |
| tasks                             | &#91;&#93;[aws.ecs.task](aws.ecs.task.md)         | List of AWS ECS task definitions                       |
| containerInstances                | &#91;&#93;[aws.ecs.instance](aws.ecs.instance.md) | List of AWS ECS container instances                    |
| region                            | string                                            | Region where the cluster is located                    |
