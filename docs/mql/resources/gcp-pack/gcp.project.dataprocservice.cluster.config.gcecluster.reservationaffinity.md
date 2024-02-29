---
title: gcp.project.dataprocService.cluster.config.gceCluster.reservationAffinity
id: gcp.project.dataprocService.cluster.config.gceCluster.reservationAffinity
sidebar_label: gcp.project.dataprocService.cluster.config.gceCluster.reservationAffinity
displayed_sidebar: MQL
description: GCP Dataproc cluster GCE cluster reservation affinity config
---

# gcp.project.dataprocService.cluster.config.gceCluster.reservationAffinity

**Supported platform**

- gcp

**Description**

GCP Dataproc cluster GCE cluster reservation affinity config

**Fields**

| ID                     | TYPE             | DESCRIPTION                                                 |
| ---------------------- | ---------------- | ----------------------------------------------------------- |
| id                     | string           | Internal ID                                                 |
| consumeReservationType | string           | Type of reservation to consume                              |
| key                    | string           | Corresponds to the label key of the reservation resource    |
| values                 | &#91;&#93;string | Corresponds to the label values of the reservation resource |

**References**

- [Create a cluster](https://cloud.google.com/dataproc/docs/guides/create-cluster)
