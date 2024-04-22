---
title: gcp.project.gkeService.cluster.nodepool.config.linuxNodeConfig
id: gcp.project.gkeService.cluster.nodepool.config.linuxNodeConfig
sidebar_label: gcp.project.gkeService.cluster.nodepool.config.linuxNodeConfig
displayed_sidebar: MQL
description: Google Kubernetes Engine (GKE) node pool parameters that can be configured on Linux nodes
---

# gcp.project.gkeService.cluster.nodepool.config.linuxNodeConfig

**Supported platform**

- gcp

**Description**

Google Kubernetes Engine (GKE) node pool parameters that can be configured on Linux nodes

**Fields**

| ID      | TYPE              | DESCRIPTION                                                                    |
| ------- | ----------------- | ------------------------------------------------------------------------------ |
| id      | string            | Internal ID                                                                    |
| sysctls | map[string]string | The Linux kernel parameters to apply to the nodes and all pods running on them |

**References**

- [Add and manage node pools](https://cloud.google.com/kubernetes-engine/docs/how-to/node-pools)
