---
title: gcp.project.gkeService.cluster
id: gcp.project.gkeService.cluster
sidebar_label: gcp.project.gkeService.cluster
displayed_sidebar: MQL
description: Google Kubernetes Engine (GKE) cluster
---

# gcp.project.gkeService.cluster

**Supported platform**

- gcp

**Description**

Google Kubernetes Engine (GKE) cluster

**Fields**

| ID                             | TYPE                                                                                                      | DESCRIPTION                                                                                        |
| ------------------------------ | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| projectId                      | string                                                                                                    | Project ID                                                                                         |
| id                             | string                                                                                                    | Unique identifier for the cluster                                                                  |
| name                           | string                                                                                                    | The name of the cluster                                                                            |
| description                    | string                                                                                                    | Optional description for the cluster                                                               |
| loggingService                 | string                                                                                                    | The logging service the cluster should use to write logs                                           |
| monitoringService              | string                                                                                                    | The monitoring service the cluster should use to write metrics                                     |
| network                        | string                                                                                                    | The name of the Google Compute Engine network to which the cluster is connected                    |
| clusterIpv4Cidr                | string                                                                                                    | The IP address range of the container pods in this cluster                                         |
| subnetwork                     | string                                                                                                    | The name of the Google Compute Engine subnetwork to which the cluster is connected                 |
| nodePools                      | &#91;&#93;[gcp.project.gkeService.cluster.nodepool](gcp.project.gkeservice.cluster.nodepool.md)           | The list of node pools for the cluster                                                             |
| locations                      | &#91;&#93;string                                                                                          | The list of Google Compute Engine zones in which the cluster's nodes should be located             |
| enableKubernetesAlpha          | bool                                                                                                      | Whether Kubernetes alpha features are enabled                                                      |
| autopilotEnabled               | bool                                                                                                      | Whether Autopilot is enabled for the cluster                                                       |
| zone                           | string                                                                                                    | Deprecated; use location instead                                                                   |
| location                       | string                                                                                                    | Name of the Google Compute Engine zone/region in which the cluster exists                          |
| endpoint                       | string                                                                                                    | The IP address of the cluster's master endpoint                                                    |
| initialClusterVersion          | string                                                                                                    | The initial Kubernetes version for this cluster                                                    |
| currentMasterVersion           | string                                                                                                    | The current software version of the master endpoint                                                |
| status                         | string                                                                                                    | The current status of this cluster                                                                 |
| resourceLabels                 | map[string]string                                                                                         | The resource labels for the cluster to use to annotate any related Google Compute Engine resources |
| created                        | time                                                                                                      | Creation time                                                                                      |
| expirationTime                 | time                                                                                                      | The time the cluster will be automatically deleted in                                              |
| addonsConfig                   | [gcp.project.gkeService.cluster.addonsConfig](gcp.project.gkeservice.cluster.addonsconfig.md)             | Configurations for the various addons available to run in the cluster                              |
| workloadIdentityConfig         | dict                                                                                                      | Configuration for the use of Kubernetes Service Accounts in GCP IAM policies                       |
| ipAllocationPolicy             | [gcp.project.gkeService.cluster.ipAllocationPolicy](gcp.project.gkeservice.cluster.ipallocationpolicy.md) | Configuration for cluster IP allocation                                                            |
| networkConfig                  | [gcp.project.gkeService.cluster.networkConfig](gcp.project.gkeservice.cluster.networkconfig.md)           | Configuration for cluster networking                                                               |
| binaryAuthorization            | dict                                                                                                      | Binary authorization configuration                                                                 |
| legacyAbac                     | dict                                                                                                      | Legacy ABAC authorization configuration                                                            |
| masterAuth                     | dict                                                                                                      | Authentication information for accessing the master endpoint                                       |
| masterAuthorizedNetworksConfig | dict                                                                                                      | Master authorized networks configuration                                                           |
| privateClusterConfig           | dict                                                                                                      | Private cluster configuration                                                                      |
| databaseEncryption             | dict                                                                                                      | Etcd encryption configuration                                                                      |
| shieldedNodesConfig            | dict                                                                                                      | Configuration for Shielded Nodes feature                                                           |
| costManagementConfig           | dict                                                                                                      | Configuration for the fine-grained cost management feature                                         |
| confidentialNodesConfig        | dict                                                                                                      | Configuration of Confidential Nodes                                                                |
| identityServiceConfig          | dict                                                                                                      | Configuration for Identity Service component                                                       |
| networkPolicyConfig            | dict                                                                                                      | Configuration options for the NetworkPolicy feature                                                |
| releaseChannel                 | string                                                                                                    | The release channel that the cluster is subscribed to                                              |

**References**

- [About cluster configuration choices](https://cloud.google.com/kubernetes-engine/docs/concepts/types-of-clusters)
