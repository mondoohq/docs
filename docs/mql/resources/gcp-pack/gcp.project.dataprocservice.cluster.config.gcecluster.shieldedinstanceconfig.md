---
title: gcp.project.dataprocService.cluster.config.gceCluster.shieldedInstanceConfig
id: gcp.project.dataprocService.cluster.config.gceCluster.shieldedInstanceConfig
sidebar_label: gcp.project.dataprocService.cluster.config.gceCluster.shieldedInstanceConfig
displayed_sidebar: MQL
description: GCP Dataproc cluster GCE cluster shielded instance config
---

# gcp.project.dataprocService.cluster.config.gceCluster.shieldedInstanceConfig

**Supported platform**

- gcp

**Description**

GCP Dataproc cluster GCE cluster shielded instance config

**Fields**

| ID                        | TYPE   | DESCRIPTION                                             |
| ------------------------- | ------ | ------------------------------------------------------- |
| id                        | string | Internal ID                                             |
| enableIntegrityMonitoring | bool   | Whether the instances have integrity monitoring enabled |
| enableSecureBoot          | bool   | Whether the instances have Secure Boot enabled          |
| enableVtpm                | bool   | Whether the instances have the vTPM enabled             |

**References**

- [Create a cluster](https://cloud.google.com/dataproc/docs/guides/create-cluster)
