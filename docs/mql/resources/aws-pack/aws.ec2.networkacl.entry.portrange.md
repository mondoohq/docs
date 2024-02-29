---
title: aws.ec2.networkacl.entry.portrange
id: aws.ec2.networkacl.entry.portrange
sidebar_label: aws.ec2.networkacl.entry.portrange
displayed_sidebar: MQL
description: Amazon EC2 network ACL entry port range
---

# aws.ec2.networkacl.entry.portrange

**Supported platform**

- aws

**Description**

Amazon EC2 network ACL entry port range

The `aws.ec2.networkacl.portrange` resource provides fields for assessing the port range configuration of network ACL entries within an AWS account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID   | TYPE   | DESCRIPTION                  |
| ---- | ------ | ---------------------------- |
| from | int    | Starting port for port range |
| to   | int    | Ending port for port range   |
| id   | string | ID for the entry port range  |
