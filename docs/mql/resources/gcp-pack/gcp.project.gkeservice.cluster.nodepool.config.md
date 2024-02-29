---
title: gcp.project.gkeService.cluster.nodepool.config
id: gcp.project.gkeService.cluster.nodepool.config
sidebar_label: gcp.project.gkeService.cluster.nodepool.config
displayed_sidebar: MQL
description: GCP GKE node pool configuration
---

# gcp.project.gkeService.cluster.nodepool.config

**Supported platform**

- gcp

**Description**

GCP GKE node pool configuration

**Fields**

| ID                      | TYPE                                                                                                                                                | DESCRIPTION                                                                                                  |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| id                      | string                                                                                                                                              | Internal ID                                                                                                  |
| projectId               | string                                                                                                                                              | Project ID                                                                                                   |
| machineType             | string                                                                                                                                              | The name of a Google Compute Engine machine type                                                             |
| diskSizeGb              | int                                                                                                                                                 | Size of the disk attached to each node, specified in GB                                                      |
| oauthScopes             | &#91;&#93;string                                                                                                                                    | The set of Google API scopes to be made available on all of the node VMs under the "default" service account |
| serviceAccountEmail     | string                                                                                                                                              | Email of the Google Cloud Platform Service Account to be used by the node VMs                                |
| serviceAccount          | [gcp.project.iamService.serviceAccount](gcp.project.iamservice.serviceaccount.md)                                                                   | Google Cloud Platform Service Account to be used by the node VMs                                             |
| metadata                | map[string]string                                                                                                                                   | The metadata key/value pairs assigned to instances in the cluster                                            |
| imageType               | string                                                                                                                                              | The image type to use for this node                                                                          |
| labels                  | map[string]string                                                                                                                                   | The map of Kubernetes labels to be applied to each node                                                      |
| localSsdCount           | int                                                                                                                                                 | The number of local SSD disks to be attached to the node                                                     |
| tags                    | &#91;&#93;string                                                                                                                                    | The list of instance tags applied to all nodes                                                               |
| preemptible             | bool                                                                                                                                                | Whether the nodes are created as preemptible VM instances.                                                   |
| accelerators            | &#91;&#93;[gcp.project.gkeService.cluster.nodepool.config.accelerator](gcp.project.gkeservice.cluster.nodepool.config.accelerator.md)               | A list of hardware accelerators to attach to each node                                                       |
| diskType                | string                                                                                                                                              | Type of the disk attached to each node                                                                       |
| minCpuPlatform          | string                                                                                                                                              | Minimum CPU platform to be used by this instance                                                             |
| workloadMetadataMode    | string                                                                                                                                              | The workload metadata mode for this node                                                                     |
| taints                  | &#91;&#93;[gcp.project.gkeService.cluster.nodepool.config.nodeTaint](gcp.project.gkeservice.cluster.nodepool.config.nodetaint.md)                   | List of Kubernetes taints to be applied to each node                                                         |
| sandboxConfig           | [gcp.project.gkeService.cluster.nodepool.config.sandboxConfig](gcp.project.gkeservice.cluster.nodepool.config.sandboxconfig.md)                     | Sandbox configuration for this node                                                                          |
| shieldedInstanceConfig  | [gcp.project.gkeService.cluster.nodepool.config.shieldedInstanceConfig](gcp.project.gkeservice.cluster.nodepool.config.shieldedinstanceconfig.md)   | Shielded instance configuration                                                                              |
| linuxNodeConfig         | [gcp.project.gkeService.cluster.nodepool.config.linuxNodeConfig](gcp.project.gkeservice.cluster.nodepool.config.linuxnodeconfig.md)                 | Parameters that can be configured on Linux nodes                                                             |
| kubeletConfig           | [gcp.project.gkeService.cluster.nodepool.config.kubeletConfig](gcp.project.gkeservice.cluster.nodepool.config.kubeletconfig.md)                     | Node kubelet configs                                                                                         |
| bootDiskKmsKey          | string                                                                                                                                              | The Customer Managed Encryption Key used to encrypt the boot disk attached to each node                      |
| gcfsConfig              | [gcp.project.gkeService.cluster.nodepool.config.gcfsConfig](gcp.project.gkeservice.cluster.nodepool.config.gcfsconfig.md)                           | Google Container File System (image streaming) configuration                                                 |
| advancedMachineFeatures | [gcp.project.gkeService.cluster.nodepool.config.advancedMachineFeatures](gcp.project.gkeservice.cluster.nodepool.config.advancedmachinefeatures.md) | Advanced features for the Compute Engine VM                                                                  |
| gvnicConfig             | [gcp.project.gkeService.cluster.nodepool.config.gvnicConfig](gcp.project.gkeservice.cluster.nodepool.config.gvnicconfig.md)                         | gVNIC configuration                                                                                          |
| spot                    | bool                                                                                                                                                | Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag                          |
| confidentialNodes       | [gcp.project.gkeService.cluster.nodepool.config.confidentialNodes](gcp.project.gkeservice.cluster.nodepool.config.confidentialnodes.md)             | Confidential nodes configuration                                                                             |

**References**

- [About node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools)
