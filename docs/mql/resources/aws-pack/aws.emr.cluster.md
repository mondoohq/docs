---
title: aws.emr.cluster
id: aws.emr.cluster
sidebar_label: aws.emr.cluster
displayed_sidebar: MQL
description: Amazon EMR cluster
---

# aws.emr.cluster

**Supported platform**

- aws

**Description**

Amazon EMR cluster

The `aws.emr.cluster` resource provides fields for assessing the configuration of individual Amazon EMR clusters. For usage, read the `aws.emr` resource documentation.

**Fields**

| ID                      | TYPE              | DESCRIPTION                                                                |
| ----------------------- | ----------------- | -------------------------------------------------------------------------- |
| arn                     | string            | ARN for the cluster                                                        |
| name                    | string            | Name of the cluster                                                        |
| normalizedInstanceHours | int               | An approximation of the cost of the cluster, represented in m1.small/hours |
| outpostArn              | string            | ARN of outpost where cluster is launched                                   |
| status                  | dict              | Details about the current status of the cluster                            |
| masterInstances         | &#91;&#93;dict    | List of master instances for the cluster                                   |
| id                      | string            | EMR cluster ID                                                             |
| tags                    | map[string]string | Tags for the cluster                                                       |
