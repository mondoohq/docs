---
title: aws.ecs.instance
id: aws.ecs.instance
sidebar_label: aws.ecs.instance
displayed_sidebar: MQL
description: AWS ECS container instance
---

# aws.ecs.instance

**Supported platform**

- aws

**Description**

AWS ECS container instance

**Fields**

| ID               | TYPE                                    | DESCRIPTION                                                              |
| ---------------- | --------------------------------------- | ------------------------------------------------------------------------ |
| agentConnected   | bool                                    | Whether the agent is connected to ECS                                    |
| id               | string                                  | ID for the container instance                                            |
| arn              | string                                  | ARN for the container instance                                           |
| capacityProvider | string                                  | Capacity provider associated with the container instance                 |
| ec2Instance      | [aws.ec2.instance](aws.ec2.instance.md) | If container instance is EC2 instance, this is the EC2 instance resource |
| region           | string                                  | Region for the container instance                                        |
