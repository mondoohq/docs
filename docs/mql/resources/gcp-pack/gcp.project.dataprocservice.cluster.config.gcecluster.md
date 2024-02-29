---
title: gcp.project.dataprocService.cluster.config.gceCluster
id: gcp.project.dataprocService.cluster.config.gceCluster
sidebar_label: gcp.project.dataprocService.cluster.config.gceCluster
displayed_sidebar: MQL
description: GCP Dataproc cluster endpoint config
---

# gcp.project.dataprocService.cluster.config.gceCluster

**Supported platform**

- gcp

**Description**

GCP Dataproc cluster endpoint config

**Fields**

| ID                      | TYPE                                                                                                                                                            | DESCRIPTION                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| id                      | string                                                                                                                                                          | Internal ID                                                               |
| projectId               | string                                                                                                                                                          | Project ID                                                                |
| confidentialInstance    | dict                                                                                                                                                            | Confidential instance configuration                                       |
| internalIpOnly          | bool                                                                                                                                                            | Whether the cluster has only internal IP addresses                        |
| metadata                | map[string]string                                                                                                                                               | Compute Engine metadata entries                                           |
| networkUri              | string                                                                                                                                                          | Compute Engine network to be used for machine communications              |
| nodeGroupAffinity       | dict                                                                                                                                                            | Node group affinity for sole-tenant clusters                              |
| privateIpv6GoogleAccess | string                                                                                                                                                          | Type of IPv6 access for the cluster                                       |
| reservationAffinity     | [gcp.project.dataprocService.cluster.config.gceCluster.reservationAffinity](gcp.project.dataprocservice.cluster.config.gcecluster.reservationaffinity.md)       | Reservation affinity for consuming zonal reservations                     |
| serviceAccountEmail     | string                                                                                                                                                          | Email of the service account used by the Dataproc cluster VM instances    |
| serviceAccount          | [gcp.project.iamService.serviceAccount](gcp.project.iamservice.serviceaccount.md)                                                                               | Service account used by the Dataproc cluster VM instances                 |
| serviceAccountScopes    | &#91;&#93;string                                                                                                                                                | URIs of service account scopes to be included in Compute Engine instances |
| shieldedInstanceConfig  | [gcp.project.dataprocService.cluster.config.gceCluster.shieldedInstanceConfig](gcp.project.dataprocservice.cluster.config.gcecluster.shieldedinstanceconfig.md) | Shielded instance config for clusters using Compute Engine Shielded VMs   |
| subnetworkUri           | string                                                                                                                                                          | Compute Engine subnetwork to use for machine communications               |
| tags                    | &#91;&#93;string                                                                                                                                                | Compute Engine tags                                                       |
| zoneUri                 | string                                                                                                                                                          | Zone where the Compute Engine cluster is located                          |

**References**

- [Create a cluster](https://cloud.google.com/dataproc/docs/guides/create-cluster)
