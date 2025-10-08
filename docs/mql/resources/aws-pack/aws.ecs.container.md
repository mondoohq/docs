---
title: aws.ecs.container
id: aws.ecs.container
sidebar_label: aws.ecs.container
displayed_sidebar: MQL
description: Amazon ECS container
---

# aws.ecs.container

**Supported platform**

- aws

**Description**

Amazon ECS container

**Fields**

| ID                | TYPE             | DESCRIPTION                                                                                                                                                   |
| ----------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name              | string           | Name of the ECS container + IP for unique identification                                                                                                      |
| arn               | string           | ARN of the ECS container                                                                                                                                      |
| publicIp          | string           | Public IP address of the ECS container                                                                                                                        |
| image             | string           | Image used for the ECS container                                                                                                                              |
| clusterName       | string           | Cluster associated with the ECS container                                                                                                                     |
| taskDefinitionArn | string           | ARN for the task definition associated with the ECS container                                                                                                 |
| logDriver         | string           | logDriver setting for the ECS container                                                                                                                       |
| platformFamily    | string           | Platform family associated with the ECS container                                                                                                             |
| platformVersion   | string           | Platform version assigned to the ECS container                                                                                                                |
| status            | string           | Status of the ECS container                                                                                                                                   |
| region            | string           | Region where the ECS Container is located                                                                                                                     |
| command           | &#91;&#93;string | Command used to start the container                                                                                                                           |
| taskArn           | string           | ARN for the task used to create the container                                                                                                                 |
| runtimeId         | string           | Runtime ID for the container                                                                                                                                  |
| containerName     | string           | Name of the ECS container                                                                                                                                     |
| cpuUnits          | string           | The number of CPU units set for the container. The value is 0 if no value was, specified in the container definition when the task definition was registered. |
| memorySoftLimit   | string           | The soft limit (in MiB) of memory set for the container.                                                                                                      |
| memoryHardLimit   | string           | The hard limit (in MiB) of memory set for the container.                                                                                                      |
| reason            | string           | Short (1024 characters max) description of the running or stopped container                                                                                   |
