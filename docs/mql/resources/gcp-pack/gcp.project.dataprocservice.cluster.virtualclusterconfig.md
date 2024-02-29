---
title: gcp.project.dataprocService.cluster.virtualClusterConfig
id: gcp.project.dataprocService.cluster.virtualClusterConfig
sidebar_label: gcp.project.dataprocService.cluster.virtualClusterConfig
displayed_sidebar: MQL
description: GCP Dataproc cluster virtual cluster config
---

# gcp.project.dataprocService.cluster.virtualClusterConfig

**Supported platform**

- gcp

**Description**

GCP Dataproc cluster virtual cluster config

**Fields**

| ID                 | TYPE   | DESCRIPTION                                                                                      |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------ |
| parentResourcePath | string | Parent resource path                                                                             |
| auxiliaryServices  | dict   | Auxiliary services configuration                                                                 |
| kubernetesCluster  | dict   | Kubernetes cluster configuration                                                                 |
| stagingBucket      | string | Cloud Storage bucket used to stage job dependencies, config files, and job driver console output |

**References**

- [Create a cluster](https://cloud.google.com/dataproc/docs/guides/create-cluster)
