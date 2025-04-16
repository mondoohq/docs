---
title: gcp.project.gkeService.cluster.nodepool
id: gcp.project.gkeService.cluster.nodepool
sidebar_label: gcp.project.gkeService.cluster.nodepool
displayed_sidebar: MQL
description: Google Kubernetes Engine (GKE) cluster node pool
---

# gcp.project.gkeService.cluster.nodepool

**Supported platform**

- gcp

**Description**

Google Kubernetes Engine (GKE) cluster node pool

**Fields**

| ID                | TYPE                                                                                                              | DESCRIPTION                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| id                | string                                                                                                            | Internal ID                                                                             |
| name              | string                                                                                                            | The name of the node pool                                                               |
| config            | [gcp.project.gkeService.cluster.nodepool.config](gcp.project.gkeservice.cluster.nodepool.config.md)               | The node configuration of the pool                                                      |
| initialNodeCount  | int                                                                                                               | The initial node count for the pool                                                     |
| locations         | &#91;&#93;string                                                                                                  | The list of Google Compute Engine zones in which the NodePool's nodes should be located |
| networkConfig     | [gcp.project.gkeService.cluster.nodepool.networkConfig](gcp.project.gkeservice.cluster.nodepool.networkconfig.md) | Networking configuration for this node pool                                             |
| version           | string                                                                                                            | The Kubernetes version                                                                  |
| instanceGroupUrls | &#91;&#93;string                                                                                                  | The resource URLs of the managed instance groups associated with this node pool         |
| status            | string                                                                                                            | The current status of this node pool                                                    |
| management        | dict                                                                                                              | Node management configuration                                                           |
| autoscaling       | [gcp.project.gkeService.cluster.nodepool.autoscaling](gcp.project.gkeservice.cluster.nodepool.autoscaling.md)     | Autoscaler configuration for this NodePool                                              |

**References**

- [About node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools)
