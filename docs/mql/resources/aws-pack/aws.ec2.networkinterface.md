---
title: aws.ec2.networkinterface
id: aws.ec2.networkinterface
sidebar_label: aws.ec2.networkinterface
displayed_sidebar: MQL
description: AWS EC2 network interface
---

# aws.ec2.networkinterface

**Supported platform**

- aws

**Description**

AWS EC2 network interface

**Fields**

| ID               | TYPE                                                        | DESCRIPTION                                                                                                                                                                                                                                                       |
| ---------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id               | string                                                      | ID of the network interface                                                                                                                                                                                                                                       |
| description      | string                                                      | Description of the network interface                                                                                                                                                                                                                              |
| subnet           | [aws.vpc.subnet](aws.vpc.subnet.md)                         | Subnet of the network interface                                                                                                                                                                                                                                   |
| vpc              | [aws.vpc](aws.vpc.md)                                       | VPC of the network interface                                                                                                                                                                                                                                      |
| status           | string                                                      | Status of the network interface. If the network interface is not attached to an instance, the status is available; if a network interface is attached to an instance the status is in-use                                                                         |
| sourceDestCheck  | bool                                                        | Whether the network interface performs source/destination checking (A value of true means checking is enabled, and false means checking is disabled. The value must be false for the network interface to perform network address translation (NAT) in your VPC.) |
| requesterManaged | bool                                                        | Whether the network interface is being managed by an AWS service (for example, AWS Management Console, Auto Scaling, and so on)                                                                                                                                   |
| tags             | map[string]string                                           | Tags set on the interface                                                                                                                                                                                                                                         |
| availabilityZone | string                                                      | Availability zone of the network interface                                                                                                                                                                                                                        |
| securityGroups   | &#91;&#93;[aws.ec2.securitygroup](aws.ec2.securitygroup.md) | Security groups associated with the network interface                                                                                                                                                                                                             |
| ipv6Native       | bool                                                        | Whether this is an IPv6 only network interface                                                                                                                                                                                                                    |
| macAddress       | string                                                      | MAC address of the network interface                                                                                                                                                                                                                              |
| privateDnsName   | string                                                      | Private DNS name of the network interface (IPv4)                                                                                                                                                                                                                  |
| privateIpAddress | string                                                      | Private IPv4 address of the network interface                                                                                                                                                                                                                     |
