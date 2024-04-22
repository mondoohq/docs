---
title: gcp.project.gkeService.cluster.nodepool.config.accelerator
id: gcp.project.gkeService.cluster.nodepool.config.accelerator
sidebar_label: gcp.project.gkeService.cluster.nodepool.config.accelerator
displayed_sidebar: MQL
description: Google Kubernetes Engine (GKE) node pool hardware accelerators configuration
---

# gcp.project.gkeService.cluster.nodepool.config.accelerator

**Supported platform**

- gcp

**Description**

Google Kubernetes Engine (GKE) node pool hardware accelerators configuration

**Fields**

| ID               | TYPE                                                                                                                                                          | DESCRIPTION                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| id               | string                                                                                                                                                        | Internal ID                                                |
| count            | int                                                                                                                                                           | The number of the accelerator cards exposed to an instance |
| type             | string                                                                                                                                                        | The accelerator type resource name                         |
| gpuPartitionSize | string                                                                                                                                                        | Size of partitions to create on the GPU                    |
| gpuSharingConfig | [gcp.project.gkeService.cluster.nodepool.config.accelerator.gpuSharingConfig](gcp.project.gkeservice.cluster.nodepool.config.accelerator.gpusharingconfig.md) | The configuration for GPU sharing                          |

**References**

- [Run GPUs in GKE Standard node pools](https://cloud.google.com/kubernetes-engine/docs/how-to/gpus)
