---
title: gcp.project.dataprocService.cluster.config.instance
id: gcp.project.dataprocService.cluster.config.instance
sidebar_label: gcp.project.dataprocService.cluster.config.instance
displayed_sidebar: MQL
description: Google Cloud (GCP) Dataproc cluster instance config
---

# gcp.project.dataprocService.cluster.config.instance

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Dataproc cluster instance config

**Fields**

| ID                 | TYPE                                                                                                                                | DESCRIPTION                                                              |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| id                 | string                                                                                                                              | Internal ID                                                              |
| accelerators       | &#91;&#93;dict                                                                                                                      | Compute Engine accelerators                                              |
| diskConfig         | [gcp.project.dataprocService.cluster.config.instance.diskConfig](gcp.project.dataprocservice.cluster.config.instance.diskconfig.md) | Disk options                                                             |
| imageUri           | string                                                                                                                              | Compute Engine imager resource used for cluster instances                |
| instanceNames      | &#91;&#93;string                                                                                                                    | List of instance names                                                   |
| instanceReferences | &#91;&#93;dict                                                                                                                      | List of references to Compute Engine instances                           |
| isPreemptible      | bool                                                                                                                                | Whether the instance group contains preemptible instances                |
| machineTypeUri     | string                                                                                                                              | Compute Engine machine type used for cluster instances                   |
| managedGroupConfig | dict                                                                                                                                | Config for Compute Engine Instance Group Manager that manages this group |
| minCpuPlatform     | string                                                                                                                              | Minimum CPU platform for the instance group                              |
| numInstances       | int                                                                                                                                 | Number of VM instances in the instance group                             |
| preemptibility     | string                                                                                                                              | The preemptibility of the instance group                                 |

**References**

- [Create a cluster](https://cloud.google.com/dataproc/docs/guides/create-cluster)
