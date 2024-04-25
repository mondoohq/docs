---
title: aws.elb.loadbalancer
id: aws.elb.loadbalancer
sidebar_label: aws.elb.loadbalancer
displayed_sidebar: MQL
description: AWS Elastic Load Balancing load balancer
---

# aws.elb.loadbalancer

**Supported platform**

- aws

**Description**

AWS Elastic Load Balancing load balancer

The `aws.elb.loadbalancer` resource provides fields for assessing the configuration of individual classic, application, gateway, and network Amazon Elastic Load Balancers. For usage, read the `aws.elb` documentation.

**Fields**

| ID                   | TYPE                                                        | DESCRIPTION                                                                 |
| -------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------- |
| arn                  | string                                                      | ARN for the load balancer                                                   |
| dnsName              | string                                                      | DNS name for the load balancer                                              |
| listenerDescriptions | &#91;&#93;dict                                              | List of listener configurations for the load balancer                       |
| name                 | string                                                      | User-specified name for the load balancer                                   |
| scheme               | string                                                      | Scheme for the load balancer: internet-facing or internal                   |
| attributes           | &#91;&#93;dict                                              | A list of attributes for the load balancer                                  |
| vpcId                | string                                                      | Deprecated. Use vpc instead                                                 |
| createdTime          | time                                                        | Date and time when the load balancer was created                            |
| availabilityZones    | &#91;&#93;string                                            | Availability zone where the load balancer runs                              |
| securityGroups       | &#91;&#93;[aws.ec2.securitygroup](aws.ec2.securitygroup.md) | VPC security groups for the load balancer                                   |
| hostedZoneId         | string                                                      | The ID of the Amazon Route 53 hosted zone associated with the load balancer |
| region               | string                                                      | Region where the load balancer exists                                       |
| elbType              | string                                                      | The type of ELB. Possible values are `network`, `application`, or `gateway` |
| vpc                  | [aws.vpc](aws.vpc.md)                                       | VPC where the load balancer is located                                      |
