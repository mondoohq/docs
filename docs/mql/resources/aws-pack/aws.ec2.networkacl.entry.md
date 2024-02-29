---
title: aws.ec2.networkacl.entry
id: aws.ec2.networkacl.entry
sidebar_label: aws.ec2.networkacl.entry
displayed_sidebar: MQL
description: Amazon EC2 network ACL entry
---

# aws.ec2.networkacl.entry

**Supported platform**

- aws

**Description**

Amazon EC2 network ACL entry

The `aws.ec2.networkacl.entry` resource provides fields for assessing the configuration of network ACL entries within an AWS account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID            | TYPE                                                                        | DESCRIPTION                               |
| ------------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| egress        | bool                                                                        | Whether this is an entry for egress rules |
| ruleAction    | string                                                                      | Allow or deny                             |
| ruleNumber    | int                                                                         | The rule number                           |
| portRange     | [aws.ec2.networkacl.entry.portrange](aws.ec2.networkacl.entry.portrange.md) | Port range for the ACL entry              |
| cidrBlock     | string                                                                      | CIDR block for the ACL entry              |
| ipv6CidrBlock | string                                                                      | IPv6 CIDR block for the ACL entry         |
| id            | string                                                                      | ID for the ACL entry rule                 |
