---
title: gcp.project.gkeService.cluster.addonsConfig
id: gcp.project.gkeService.cluster.addonsConfig
sidebar_label: gcp.project.gkeService.cluster.addonsConfig
displayed_sidebar: MQL
description: Google Kubernetes Engine (GKE) cluster addons config
---

# gcp.project.gkeService.cluster.addonsConfig

**Supported platform**

- gcp

**Description**

Google Kubernetes Engine (GKE) cluster addons config

**Fields**

| ID                               | TYPE   | DESCRIPTION                                                          |
| -------------------------------- | ------ | -------------------------------------------------------------------- |
| id                               | string | Internal ID                                                          |
| httpLoadBalancing                | dict   | Configuration for the HTTP (L7) load balancing controller addon      |
| horizontalPodAutoscaling         | dict   | Configuration for the horizontal pod autoscaling feature             |
| kubernetesDashboard              | dict   | Configuration for the Kubernetes Dashboard                           |
| networkPolicyConfig              | dict   | Configuration for NetworkPolicy                                      |
| cloudRunConfig                   | dict   | Configuration for the Cloud Run addon                                |
| dnsCacheConfig                   | dict   | Configuration for NodeLocalDNS, a DNS cache running on cluster nodes |
| configConnectorConfig            | dict   | Configuration for the ConfigConnector addon                          |
| gcePersistentDiskCsiDriverConfig | dict   | Configuration for the Compute Engine Persistent Disk CSI driver      |
| gcpFilestoreCsiDriverConfig      | dict   | Configuration for the GCP Filestore CSI driver                       |
| gkeBackupAgentConfig             | dict   | Configuration for the backup for GKE agent addon                     |
| gcsFuseCsiDriverConfig           | dict   | Configuration for the Cloud Storage Fuse CSI driver                  |
| statefulHaConfig                 | dict   | Configuration for the StatefulHA add-on.                             |
