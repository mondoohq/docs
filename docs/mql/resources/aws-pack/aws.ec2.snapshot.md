---
title: aws.ec2.snapshot
id: aws.ec2.snapshot
sidebar_label: aws.ec2.snapshot
displayed_sidebar: MQL
description: Amazon EC2 (EBS) snapshot
---

# aws.ec2.snapshot

**Supported platform**

- aws

**Description**

Amazon EC2 (EBS) snapshot

The `aws.ec2.snapshot` resource provides fields for assessing the configuration of EBS snapshots within an AWS account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID                     | TYPE              | DESCRIPTION                                                                  |
| ---------------------- | ----------------- | ---------------------------------------------------------------------------- |
| arn                    | string            | ARN for the snapshot                                                         |
| id                     | string            | ID for the snapshot                                                          |
| region                 | string            | Region where the snapshot exists                                             |
| createVolumePermission | &#91;&#93;dict    | Users/groups that have the permissions to create volumes from the snapshot   |
| volumeId               | string            | ID of the volume used to create the snapshot                                 |
| startTime              | time              | Time when the snapshot began                                                 |
| completionTime         | time              | Time when the snapshot completed                                             |
| tags                   | map[string]string | Tags for the snapshot                                                        |
| state                  | string            | State of the snapshot: pending, completed, error, recoverable, or recovering |
| volumeSize             | int               | Size of the volume, in GiB                                                   |
| description            | string            | Description of the snapshot                                                  |
| encrypted              | bool              | Whether the snapshot is encrypted                                            |
| storageTier            | string            | The storage tier in which the snapshot is stored                             |
