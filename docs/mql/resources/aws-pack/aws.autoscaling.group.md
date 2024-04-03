---
title: aws.autoscaling.group
id: aws.autoscaling.group
sidebar_label: aws.autoscaling.group
displayed_sidebar: MQL
description: AWS Auto Scaling group
---

# aws.autoscaling.group

**Supported platform**

- aws

**Description**

AWS Auto Scaling group

The `aws.autoscaling.group` resource provides fields representing an individual AWS auto scaling group within the account. For usage, read the `aws.autoscaling` resource documentation.

**Fields**

| ID                      | TYPE                                              | DESCRIPTION                                                                                 |
| ----------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| arn                     | string                                            | ARN for the autoscaling group                                                               |
| name                    | string                                            | Name of the group                                                                           |
| loadBalancerNames       | &#91;&#93;string                                  | List of load balancer names associated with the group                                       |
| healthCheckType         | string                                            | Health check type used by the group: ELB or EC2                                             |
| tags                    | map[string]string                                 | Tags for the asg                                                                            |
| region                  | string                                            | The region of the Auto Scaling group                                                        |
| minSize                 | int                                               | The minimum number of instances to scale down to                                            |
| maxSize                 | int                                               | The maximum number of instances to scale up to                                              |
| defaultCooldown         | int                                               | The time to wait after scaling up / down before the next scaling event is started           |
| launchConfigurationName | string                                            | The name of the launch configuration                                                        |
| healthCheckGracePeriod  | int                                               | The grace period in seconds before an instance with a failing health check will be replaced |
| createdAt               | time                                              | Time when the autoscaling group was created                                                 |
| maxInstanceLifetime     | int                                               | The maximum amount of time, in seconds, that an instance can be in service                  |
| desiredCapacity         | int                                               | The desired size of the group                                                               |
| availabilityZones       | &#91;&#93;string                                  | List of availability zones associated with the group                                        |
| capacityRebalance       | bool                                              | Indicates whether Capacity Rebalancing is enabled                                           |
| defaultInstanceWarmup   | int                                               | The duration of the default instance warmup, in seconds                                     |
| instances               | &#91;&#93;[aws.ec2.instance](aws.ec2.instance.md) | The EC2 instances associated with the group                                                 |
