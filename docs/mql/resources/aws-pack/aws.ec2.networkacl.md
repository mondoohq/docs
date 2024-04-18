---
title: aws.ec2.networkacl
id: aws.ec2.networkacl
sidebar_label: aws.ec2.networkacl
displayed_sidebar: MQL
description: Amazon EC2 network ACL
---

# aws.ec2.networkacl

**Supported platform**

- aws

**Description**

Amazon EC2 network ACL

The `aws.ec2.networkacl` resource provides fields for assessing the configuration of VPC network ACLs within an AWS account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID           | TYPE                                                                          | DESCRIPTION                                            |
| ------------ | ----------------------------------------------------------------------------- | ------------------------------------------------------ |
| arn          | string                                                                        | ARN for the network ACL                                |
| id           | string                                                                        | ID for the network ACL                                 |
| region       | string                                                                        | Region for the network ACL                             |
| entries      | &#91;&#93;[aws.ec2.networkacl.entry](aws.ec2.networkacl.entry.md)             | Entries for the network ACL                            |
| isDefault    | bool                                                                          | Whether the ACL is the default network ACL for the VPC |
| tags         | map[string]string                                                             | Tags for the network ACL                               |
| associations | &#91;&#93;[aws.ec2.networkacl.association](aws.ec2.networkacl.association.md) | Associations for the network ACL                       |
