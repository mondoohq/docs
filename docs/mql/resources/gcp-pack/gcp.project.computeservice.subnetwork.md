---
title: gcp.project.computeService.subnetwork
id: gcp.project.computeService.subnetwork
sidebar_label: gcp.project.computeService.subnetwork
displayed_sidebar: MQL
description: GCP Compute VPC network partitioning
---

# gcp.project.computeService.subnetwork

**Supported platform**

- gcp

**Description**

GCP Compute VPC network partitioning

**Fields**

| ID                      | TYPE                                                                                                  | DESCRIPTION                                                                                  |
| ----------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| id                      | string                                                                                                | Unique identifier                                                                            |
| projectId               | string                                                                                                | Project ID                                                                                   |
| name                    | string                                                                                                | Name of the resource                                                                         |
| description             | string                                                                                                | An optional description of this resource                                                     |
| enableFlowLogs          | bool                                                                                                  | Whether flow logging is enabled for the subnetwork                                           |
| externalIpv6Prefix      | string                                                                                                | External IPv6 address range                                                                  |
| fingerprint             | string                                                                                                | Fingerprint of this resource                                                                 |
| gatewayAddress          | string                                                                                                | Gateway address for default routes                                                           |
| internalIpv6Prefix      | string                                                                                                | Internal IPv6 address range                                                                  |
| ipCidrRange             | string                                                                                                | Range of internal addresses                                                                  |
| ipv6AccessType          | string                                                                                                | Access type of IPv6 address                                                                  |
| ipv6CidrRange           | string                                                                                                | Range of internal IPv6 addresses                                                             |
| logConfig               | [gcp.project.computeService.subnetwork.logConfig](gcp.project.computeservice.subnetwork.logconfig.md) | VPC flow logging configuration                                                               |
| privateIpGoogleAccess   | bool                                                                                                  | Whether VMs in this subnet can access Google services without assigned external IP addresses |
| privateIpv6GoogleAccess | string                                                                                                | VMs in this subnet that can access Google services without assigned external IPv6 addresses  |
| purpose                 | string                                                                                                | Purpose of the resource                                                                      |
| region                  | [gcp.project.computeService.region](gcp.project.computeservice.region.md)                             | Region                                                                                       |
| regionUrl               | string                                                                                                | Region URL                                                                                   |
| role                    | string                                                                                                | Role of subnetwork                                                                           |
| stackType               | string                                                                                                | Stack type for the subnet                                                                    |
| state                   | string                                                                                                | State of the subnetwork                                                                      |
| created                 | time                                                                                                  | Creation timestamp                                                                           |

**References**

- [Create and manage VPC networks](https://cloud.google.com/vpc/docs/create-modify-vpc-networks)
