---
title: gcp.project.gkeService.cluster.networkConfig
id: gcp.project.gkeService.cluster.networkConfig
sidebar_label: gcp.project.gkeService.cluster.networkConfig
displayed_sidebar: MQL
description: GKE cluster network config
---

# gcp.project.gkeService.cluster.networkConfig

**Supported platform**

- gcp

**Description**

GKE cluster network config

**Fields**

| ID                        | TYPE                                                                              | DESCRIPTION                                                                  |
| ------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| id                        | string                                                                            | Internal ID                                                                  |
| networkPath               | string                                                                            | Relative path of the network to which the cluster is connected               |
| network                   | [gcp.project.computeService.network](gcp.project.computeservice.network.md)       | Network to which the cluster is connected                                    |
| subnetworkPath            | string                                                                            | Relative path of the subnetwork to which the cluster is connected            |
| subnetwork                | [gcp.project.computeService.subnetwork](gcp.project.computeservice.subnetwork.md) | Subnetwork to which the cluster is connected                                 |
| enableIntraNodeVisibility | bool                                                                              | Whether intra-node visibility is enabled for this cluster                    |
| defaultSnatStatus         | dict                                                                              | Whether the cluster disables default in-node sNAT rules                      |
| enableL4IlbSubsetting     | bool                                                                              | Whether L4ILB subsetting is enabled for this cluster                         |
| datapathProvider          | string                                                                            | Desired datapath provider for this cluster                                   |
| privateIpv6GoogleAccess   | string                                                                            | Desired state of IPv6 connectivity to Google Services                        |
| dnsConfig                 | dict                                                                              | Cluster DNS configuration                                                    |
| serviceExternalIpsConfig  | dict                                                                              | Configuration specifying whether services with externalIPs field are blocked |

**References**

- [Best practices for GKE networking](https://cloud.google.com/kubernetes-engine/docs/best-practices/networking)
