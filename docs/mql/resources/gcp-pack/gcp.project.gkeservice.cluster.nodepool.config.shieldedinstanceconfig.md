---
title: gcp.project.gkeService.cluster.nodepool.config.shieldedInstanceConfig
id: gcp.project.gkeService.cluster.nodepool.config.shieldedInstanceConfig
sidebar_label: gcp.project.gkeService.cluster.nodepool.config.shieldedInstanceConfig
displayed_sidebar: MQL
description: GCP GKE node pool shielded instance configuration
---

# gcp.project.gkeService.cluster.nodepool.config.shieldedInstanceConfig

**Supported platform**

- gcp

**Description**

GCP GKE node pool shielded instance configuration

**Fields**

| ID                        | TYPE   | DESCRIPTION                                           |
| ------------------------- | ------ | ----------------------------------------------------- |
| id                        | string | Internal ID                                           |
| enableSecureBoot          | bool   | Whether the instance has Secure Boot enabled          |
| enableIntegrityMonitoring | bool   | Whether the instance has integrity monitoring enabled |

**References**

- [Add and manage node pools](https://cloud.google.com/kubernetes-engine/docs/how-to/node-pools)
