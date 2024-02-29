---
title: gcp.project.gkeService.cluster.nodepool.config.advancedMachineFeatures
id: gcp.project.gkeService.cluster.nodepool.config.advancedMachineFeatures
sidebar_label: gcp.project.gkeService.cluster.nodepool.config.advancedMachineFeatures
displayed_sidebar: MQL
description: GCP GKE node pool advanced machine features configuration
---

# gcp.project.gkeService.cluster.nodepool.config.advancedMachineFeatures

**Supported platform**

- gcp

**Description**

GCP GKE node pool advanced machine features configuration

**Fields**

| ID             | TYPE   | DESCRIPTION                                                                                                                          |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| id             | string | Internal ID                                                                                                                          |
| threadsPerCore | int    | Number of threads per physical core (if unset, assumes the maximum number of threads supported per core by the underlying processor) |

**References**

- [Add and manage node pools](https://cloud.google.com/kubernetes-engine/docs/how-to/node-pools)
