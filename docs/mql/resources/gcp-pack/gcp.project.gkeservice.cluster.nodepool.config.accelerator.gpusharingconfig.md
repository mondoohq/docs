---
title: gcp.project.gkeService.cluster.nodepool.config.accelerator.gpuSharingConfig
id: gcp.project.gkeService.cluster.nodepool.config.accelerator.gpuSharingConfig
sidebar_label: gcp.project.gkeService.cluster.nodepool.config.accelerator.gpuSharingConfig
displayed_sidebar: MQL
description: GPU sharing configuration
---

# gcp.project.gkeService.cluster.nodepool.config.accelerator.gpuSharingConfig

**Supported platform**

- gcp

**Description**

GPU sharing configuration

**Fields**

| ID                     | TYPE   | DESCRIPTION                                       |
| ---------------------- | ------ | ------------------------------------------------- |
| id                     | string | Internal ID                                       |
| maxSharedClientsPerGpu | int    | The max number of containers that can share a GPU |
| strategy               | string | The GPU sharing strategy                          |

**References**

- [Run GPUs in GKE Standard node pools](https://cloud.google.com/kubernetes-engine/docs/how-to/gpus)
