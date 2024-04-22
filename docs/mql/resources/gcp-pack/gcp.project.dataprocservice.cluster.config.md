---
title: gcp.project.dataprocService.cluster.config
id: gcp.project.dataprocService.cluster.config
sidebar_label: gcp.project.dataprocService.cluster.config
displayed_sidebar: MQL
description: Google Cloud (GCP) Dataproc cluster config
---

# gcp.project.dataprocService.cluster.config

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Dataproc cluster config

**Fields**

| ID                    | TYPE                                                                                                              | DESCRIPTION                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| parentResourcePath    | string                                                                                                            | Parent resource path                                                                             |
| autoscaling           | dict                                                                                                              | Autoscaling configuration for the policy associated with the cluster                             |
| configBucket          | string                                                                                                            | Cloud Storage bucket used to stage job dependencies, config files, and job driver console output |
| metrics               | dict                                                                                                              | Dataproc metrics configuration                                                                   |
| encryption            | dict                                                                                                              | Encryption configuration                                                                         |
| endpoint              | dict                                                                                                              | Port/endpoint configuration                                                                      |
| gceCluster            | [gcp.project.dataprocService.cluster.config.gceCluster](gcp.project.dataprocservice.cluster.config.gcecluster.md) | Shared Compute Engine configuration                                                              |
| gkeCluster            | [gcp.project.dataprocService.cluster.config.gkeCluster](gcp.project.dataprocservice.cluster.config.gkecluster.md) | Kubernetes Engine config for Dataproc clusters deployed to Kubernetes                            |
| initializationActions | &#91;&#93;dict                                                                                                    | Commands to execute on each node after config is completed                                       |
| lifecycle             | [gcp.project.dataprocService.cluster.config.lifecycle](gcp.project.dataprocservice.cluster.config.lifecycle.md)   | Lifecycle configuration                                                                          |
| master                | [gcp.project.dataprocService.cluster.config.instance](gcp.project.dataprocservice.cluster.config.instance.md)     | Compute Engine config for the cluster's master instance                                          |
| metastore             | dict                                                                                                              | Metastore configuration                                                                          |
| secondaryWorker       | [gcp.project.dataprocService.cluster.config.instance](gcp.project.dataprocservice.cluster.config.instance.md)     | Compute Engine configuration for the cluster's secondary worker instances                        |
| security              | dict                                                                                                              | Security configuration                                                                           |
| software              | dict                                                                                                              | Cluster software configuration                                                                   |
| tempBucket            | string                                                                                                            | Cloud Storage bucket used to store ephemeral cluster and jobs data                               |
| worker                | [gcp.project.dataprocService.cluster.config.instance](gcp.project.dataprocservice.cluster.config.instance.md)     | Compute Engine configuration for the cluster's worker instances                                  |

**References**

- [Create a cluster](https://cloud.google.com/dataproc/docs/guides/create-cluster)
