---
title: gcp.project.gkeService.cluster.nodepool.networkConfig
id: gcp.project.gkeService.cluster.nodepool.networkConfig
sidebar_label: gcp.project.gkeService.cluster.nodepool.networkConfig
displayed_sidebar: MQL
description: GCP GKE node pool-Level network configuration
---

# gcp.project.gkeService.cluster.nodepool.networkConfig

**Supported platform**

- gcp

**Description**

GCP GKE node pool-Level network configuration

**Fields**

| ID                | TYPE                                                                                                                                                  | DESCRIPTION                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| id                | string                                                                                                                                                | Internal ID                                        |
| podRange          | string                                                                                                                                                | The ID of the secondary range for pod IPs          |
| podIpv4CidrBlock  | string                                                                                                                                                | The IP address range for pod IPs in this node pool |
| performanceConfig | [gcp.project.gkeService.cluster.nodepool.networkConfig.performanceConfig](gcp.project.gkeservice.cluster.nodepool.networkconfig.performanceconfig.md) | Network performance tier configuration             |

**References**

- [Add and manage node pools](https://cloud.google.com/kubernetes-engine/docs/how-to/node-pools)
