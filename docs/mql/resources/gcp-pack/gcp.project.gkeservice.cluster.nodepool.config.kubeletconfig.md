---
title: gcp.project.gkeService.cluster.nodepool.config.kubeletConfig
id: gcp.project.gkeService.cluster.nodepool.config.kubeletConfig
sidebar_label: gcp.project.gkeService.cluster.nodepool.config.kubeletConfig
displayed_sidebar: MQL
description: GCP GKE Node Pool kubelet configuration
---

# gcp.project.gkeService.cluster.nodepool.config.kubeletConfig

**Supported platform**

- gcp

**Description**

GCP GKE Node Pool kubelet configuration

**Fields**

| ID                | TYPE   | DESCRIPTION                                            |
| ----------------- | ------ | ------------------------------------------------------ |
| id                | string | Internal ID                                            |
| cpuManagerPolicy  | string | Control the CPU management policy on the node          |
| cpuCfsQuotaPeriod | string | Set the CPU CFS quota period value 'cpu.cfs_period_us' |
| podPidsLimit      | int    | Set the Pod PID limits                                 |

**References**

- [Add and manage node pools](https://cloud.google.com/kubernetes-engine/docs/how-to/node-pools)
