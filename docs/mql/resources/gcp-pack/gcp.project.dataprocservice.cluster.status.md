---
title: gcp.project.dataprocService.cluster.status
id: gcp.project.dataprocService.cluster.status
sidebar_label: gcp.project.dataprocService.cluster.status
displayed_sidebar: MQL
description: Google Cloud (GCP) Dataproc cluster status
---

# gcp.project.dataprocService.cluster.status

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Dataproc cluster status

**Fields**

| ID       | TYPE   | DESCRIPTION                                                             |
| -------- | ------ | ----------------------------------------------------------------------- |
| id       | string | Internal ID                                                             |
| detail   | string | Details of the cluster's state                                          |
| state    | string | Cluster's state                                                         |
| started  | time   | Started timestamp                                                       |
| substate | string | Additional state information that includes status reported by the agent |

**References**

- [Create a cluster](https://cloud.google.com/dataproc/docs/guides/create-cluster)
