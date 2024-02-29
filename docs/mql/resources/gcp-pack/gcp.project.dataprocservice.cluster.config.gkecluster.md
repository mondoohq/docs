---
title: gcp.project.dataprocService.cluster.config.gkeCluster
id: gcp.project.dataprocService.cluster.config.gkeCluster
sidebar_label: gcp.project.dataprocService.cluster.config.gkeCluster
displayed_sidebar: MQL
description: GCP Dataproc cluster GKE cluster config
---

# gcp.project.dataprocService.cluster.config.gkeCluster

**Supported platform**

- gcp

**Description**

GCP Dataproc cluster GKE cluster config

**Fields**

| ID               | TYPE           | DESCRIPTION                                  |
| ---------------- | -------------- | -------------------------------------------- |
| id               | string         | Internal ID                                  |
| gkeClusterTarget | string         | Target GKE cluster                           |
| nodePoolTarget   | &#91;&#93;dict | GKE node pools where workloads are scheduled |

**References**

- [GKE cluster architecture](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture)
