---
title: gcp.project.dataprocService.cluster
id: gcp.project.dataprocService.cluster
sidebar_label: gcp.project.dataprocService.cluster
displayed_sidebar: MQL
description: GCP Dataproc cluster
---

# gcp.project.dataprocService.cluster

**Supported platform**

- gcp

**Description**

GCP Dataproc cluster

**Fields**

| ID                   | TYPE                                                                                                                    | DESCRIPTION                                                                                                                  |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| projectId            | string                                                                                                                  | Project ID                                                                                                                   |
| name                 | string                                                                                                                  | Cluster name                                                                                                                 |
| uuid                 | string                                                                                                                  | Cluster UUID                                                                                                                 |
| config               | [gcp.project.dataprocService.cluster.config](gcp.project.dataprocservice.cluster.config.md)                             | Cluster configuration                                                                                                        |
| labels               | map[string]string                                                                                                       | Labels associated with the cluster                                                                                           |
| metrics              | dict                                                                                                                    | Contains cluster daemon metrics such as HDF and YARN stats                                                                   |
| status               | [gcp.project.dataprocService.cluster.status](gcp.project.dataprocservice.cluster.status.md)                             | Cluster status                                                                                                               |
| statusHistory        | &#91;&#93;[gcp.project.dataprocService.cluster.status](gcp.project.dataprocservice.cluster.status.md)                   | Previous cluster status                                                                                                      |
| virtualClusterConfig | [gcp.project.dataprocService.cluster.virtualClusterConfig](gcp.project.dataprocservice.cluster.virtualclusterconfig.md) | Virtual cluster config used when creating a Dataproc cluster that does not directly control the underlying compute resources |

**References**

- [Create a cluster](https://cloud.google.com/dataproc/docs/guides/create-cluster)
