---
title: gcp.project.gkeService.cluster.ipAllocationPolicy
id: gcp.project.gkeService.cluster.ipAllocationPolicy
sidebar_label: gcp.project.gkeService.cluster.ipAllocationPolicy
displayed_sidebar: MQL
description: GKE cluster IP allocation policy
---

# gcp.project.gkeService.cluster.ipAllocationPolicy

**Supported platform**

- gcp

**Description**

GKE cluster IP allocation policy

**Fields**

| ID                         | TYPE   | DESCRIPTION                                                        |
| -------------------------- | ------ | ------------------------------------------------------------------ |
| id                         | string | Internal ID                                                        |
| useIpAliases               | bool   | Whether alias IPs are used for pod IPs in the cluster              |
| createSubnetwork           | bool   | Whether a new subnetwork is created automatically for the cluster  |
| subnetworkName             | string | Custom subnetwork name to be used if createSubnetwork is true      |
| clusterSecondaryRangeName  | string | Name of the secondary range to be used for the cluster CIDR block  |
| servicesSecondaryRangeName | string | Name of the secondary range to be used for the services CIDR block |
| clusterIpv4CidrBlock       | string | IP address range for the cluster pod IPs                           |
| nodeIpv4CidrBlock          | string | IP address range of the instance IPs in this cluster               |
| servicesIpv4CidrBlock      | string | IP address range of the services IPs in this cluster               |
| tpuIpv4CidrBlock           | string | IP address range of the Cloud TPUs in this cluster                 |
| useRoutes                  | bool   | Whether routes will be used for pod IPs in this cluster            |
| stackType                  | string | IP stack type                                                      |
| ipv6AccessType             | string | IPv6 access type                                                   |

**References**

- [Plan the required IP address allotment](https://cloud.google.com/kubernetes-engine/docs/best-practices/networking#plan-ip-allotment)
