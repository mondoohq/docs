---
title: aws.rds.snapshot
id: aws.rds.snapshot
sidebar_label: aws.rds.snapshot
displayed_sidebar: MQL
description: Amazon RDS snapshot
---

# aws.rds.snapshot

**Supported platform**

- aws

**Description**

Amazon RDS snapshot

The `aws.rds.snapshot` resource provides fields for assessing the configuration of RDS snapshots. For usage, read the `aws.rds` resource documentation.

**Fields**

| ID                | TYPE              | DESCRIPTION                                                        |
| ----------------- | ----------------- | ------------------------------------------------------------------ |
| arn               | string            | ARN of the snapshot                                                |
| id                | string            | ID of the snapshot                                                 |
| attributes        | &#91;&#93;dict    | Attribute values that describe permissions to restore the snapshot |
| type              | string            | Type of snapshot: manual or automated                              |
| encrypted         | bool              | Whether the snapshot is encrypted                                  |
| region            | string            | Region where the snapshot exists                                   |
| isClusterSnapshot | bool              | Whether the snapshot is for a cluster                              |
| tags              | map[string]string | Tags for the snapshot                                              |
| engine            | string            | The snapshot DB engine                                             |
| engineVersion     | string            | The snapshot DB engine version                                     |
| status            | string            | The snapshot status                                                |
| port              | int               | The port that the database instance or cluster listens on          |
| allocatedStorage  | int               | Allocated storage size in gibibytes (GiB)                          |
| createdAt         | time              | The creation date of the snapshot                                  |
