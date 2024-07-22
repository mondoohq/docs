---
title: aws.elb.targetgroup
id: aws.elb.targetgroup
sidebar_label: aws.elb.targetgroup
displayed_sidebar: MQL
description: AWS Elastic Load Balancer (ELB) Target Group
---

# aws.elb.targetgroup

**Supported platform**

- aws

**Description**

AWS Elastic Load Balancer (ELB) Target Group

**Fields**

| ID                         | TYPE                                                    | DESCRIPTION                                                                        |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| name                       | string                                                  | Name for the load balancer target group                                            |
| arn                        | string                                                  | ARN for the load balancer target group                                             |
| port                       | int                                                     | Port for the load balancer target group                                            |
| protocol                   | string                                                  | Protocol for the load balancer target group                                        |
| protocolVersion            | string                                                  | Protocol version for the load balancer target group                                |
| ipAddressType              | string                                                  | IP address type for the load balancer target group (IPv4, IPv6)                    |
| healthCheckEnabled         | bool                                                    | Whether health check is enabled for the load balancer target group                 |
| healthCheckIntervalSeconds | int                                                     | Health check interval for the load balancer target group                           |
| healthCheckPath            | string                                                  | Health check path for the load balancer target group                               |
| healthCheckPort            | string                                                  | Health check port for the load balancer target group                               |
| healthCheckProtocol        | string                                                  | Health check protocol for the load balancer target group                           |
| healthCheckTimeoutSeconds  | int                                                     | Health check timeout seconds for the load balancer target group                    |
| targetType                 | string                                                  | Target type for the for the load balancer target group (instance, IP, Lambda, ALB) |
| unhealthyThresholdCount    | int                                                     | Unhealthy threshold count for the load balancer target group                       |
| vpc                        | [aws.vpc](aws.vpc.md)                                   | VPC for the load balancer target group                                             |
| ec2Targets                 | &#91;&#93;[aws.ec2.instance](aws.ec2.instance.md)       | EC2 targets for the load balancer target group                                     |
| lambdaTargets              | &#91;&#93;[aws.lambda.function](aws.lambda.function.md) | Lambda targets for the load balancer target group                                  |
