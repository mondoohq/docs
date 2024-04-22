---
title: gcp.project.computeService.subnetwork.logConfig
id: gcp.project.computeService.subnetwork.logConfig
sidebar_label: gcp.project.computeService.subnetwork.logConfig
displayed_sidebar: MQL
description: Google Cloud (GCP) Compute VPC network partitioning log configuration
---

# gcp.project.computeService.subnetwork.logConfig

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Compute VPC network partitioning log configuration

**Fields**

| ID                  | TYPE             | DESCRIPTION                                                                                                                          |
| ------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| id                  | string           | Internal ID                                                                                                                          |
| aggregationInterval | string           | Toggles the aggregation interval for collecting flow logs                                                                            |
| enable              | bool             | Whether to enable flow logging for this subnetwork                                                                                   |
| filterExpression    | string           | Which VPC flow logs are exported to Cloud Logging                                                                                    |
| flowSampling        | float            | Sampling rate of VPC flow logs within the subnetwork (1.0 means all collected logs are reported and 0.0 means no logs are reported.) |
| metadata            | string           | Whether all, none, or a subset of metadata are added to the reported VPC flow logs                                                   |
| metadataFields      | &#91;&#93;string | Metadata fields to be added to the reported VPC flow logs                                                                            |

**References**

- [Create and manage VPC networks](https://cloud.google.com/vpc/docs/create-modify-vpc-networks)
