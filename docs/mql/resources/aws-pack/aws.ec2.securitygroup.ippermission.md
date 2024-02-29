---
title: aws.ec2.securitygroup.ippermission
id: aws.ec2.securitygroup.ippermission
sidebar_label: aws.ec2.securitygroup.ippermission
displayed_sidebar: MQL
description: Amazon EC2 security group IP permission
---

# aws.ec2.securitygroup.ippermission

**Supported platform**

- aws

**Description**

Amazon EC2 security group IP permission

The `aws.ec2.securitygroup.ippermission` resource provides fields for assessing the configuration of ip permissions for security groups within an AWS account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID         | TYPE             | DESCRIPTION                               |
| ---------- | ---------------- | ----------------------------------------- |
| id         | string           | Unique ID for the IP permission           |
| fromPort   | int              | Start of port range for TCP/UDP protocols |
| toPort     | int              | End of port range for TCP/UDP protocols   |
| ipProtocol | string           | IP protocol name                          |
| ipRanges   | &#91;&#93;string | IPv4 ranges                               |
| ipv6Ranges | &#91;&#93;string | IPv6 ranges                               |
