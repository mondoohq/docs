---
title: aws.ec2.instance.device
id: aws.ec2.instance.device
sidebar_label: aws.ec2.instance.device
displayed_sidebar: MQL
description: Amazon EC2 instance block device
---

# aws.ec2.instance.device

**Supported platform**

- aws

**Description**

Amazon EC2 instance block device

The `aws.ec2.instance.device` resource provides fields for assessing the configuration of devices attached to EC2 instances within an account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID                  | TYPE   | DESCRIPTION                                                  |
| ------------------- | ------ | ------------------------------------------------------------ |
| deleteOnTermination | bool   | Whether the volume should be deleted on instance termination |
| status              | string | Status of the device                                         |
| volumeId            | string | Volume ID for the device                                     |
| deviceName          | string | Name for the device                                          |
