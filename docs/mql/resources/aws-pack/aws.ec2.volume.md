---
title: aws.ec2.volume
id: aws.ec2.volume
sidebar_label: aws.ec2.volume
displayed_sidebar: MQL
description: Amazon EC2 (EBS) volume
---

# aws.ec2.volume

**Supported platform**

- aws

**Description**

Amazon EC2 (EBS) volume

The `aws.ec2.volume` resource provides fields for assessing the configuration of EBS volumes within an AWS account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID                 | TYPE              | DESCRIPTION                                                                                                                                                                                                                                                                                           |
| ------------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| arn                | string            | ARN for the EC2 volume                                                                                                                                                                                                                                                                                |
| id                 | string            | ID of the EC2 volume                                                                                                                                                                                                                                                                                  |
| attachments        | &#91;&#93;dict    | Information about the volume attachments                                                                                                                                                                                                                                                              |
| encrypted          | bool              | Whether the volume is encrypted                                                                                                                                                                                                                                                                       |
| state              | string            | State of the volume: creating, available, in-use, and so on                                                                                                                                                                                                                                           |
| tags               | map[string]string | A map of tags associated with the EBS volume                                                                                                                                                                                                                                                          |
| availabilityZone   | string            | Availability Zone in which the volume was created                                                                                                                                                                                                                                                     |
| volumeType         | string            | EBS volume type: gp2, gp3, io1, io2, st1, sc1, or standard                                                                                                                                                                                                                                            |
| createTime         | time              | Time the volume was created                                                                                                                                                                                                                                                                           |
| region             | string            | Region where the EC2 volume is stored                                                                                                                                                                                                                                                                 |
| multiAttachEnabled | bool              | Whether Amazon EBS Multi-Attach is enabled                                                                                                                                                                                                                                                            |
| throughput         | int               | The throughput that the volume supports, in MiB/s.                                                                                                                                                                                                                                                    |
| size               | int               | The size of the volume, in GiBs.                                                                                                                                                                                                                                                                      |
| iops               | int               | The number of I/O operations per second (IOPS). For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting. |
