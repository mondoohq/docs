---
title: aws.ec2.securitygroup
id: aws.ec2.securitygroup
sidebar_label: aws.ec2.securitygroup
displayed_sidebar: MQL
description: Amazon EC2 security group
---

# aws.ec2.securitygroup

**Supported platform**

- aws

**Description**

Amazon EC2 security group

The `aws.ec2.securitygroup` resource provides fields for assessing the configuration of security groups within an AWS account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID                           | TYPE                                                                                  | DESCRIPTION                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| arn                          | string                                                                                | Security group ARN                                                     |
| id                           | string                                                                                | Security group ID                                                      |
| name                         | string                                                                                | Name of the security group                                             |
| description                  | string                                                                                | Description of the security group                                      |
| tags                         | map[string]string                                                                     | A map of tags associated with the security group                       |
| vpc                          | [aws.vpc](aws.vpc.md)                                                                 | VPC associated with the security group                                 |
| ipPermissions                | &#91;&#93;[aws.ec2.securitygroup.ippermission](aws.ec2.securitygroup.ippermission.md) | IP permissions (ingress) for the security group                        |
| ipPermissionsEgress          | &#91;&#93;[aws.ec2.securitygroup.ippermission](aws.ec2.securitygroup.ippermission.md) | IP permissions (egress) for the security group                         |
| region                       | string                                                                                | Region associated with the security group                              |
| isAttachedToNetworkInterface | bool                                                                                  | Whether the security group is attached to Amazon Elastic Compute Cloud |
