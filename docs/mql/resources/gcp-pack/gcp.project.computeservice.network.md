---
title: gcp.project.computeService.network
id: gcp.project.computeService.network
sidebar_label: gcp.project.computeService.network
displayed_sidebar: MQL
description: Google Cloud (GCP) Compute VPC network resource
---

# gcp.project.computeService.network

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Compute VPC network resource

**Fields**

| ID                                    | TYPE                                                                                        | DESCRIPTION                                               |
| ------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| id                                    | string                                                                                      | Unique identifier                                         |
| projectId                             | string                                                                                      | Project ID                                                |
| name                                  | string                                                                                      | Name of the resource                                      |
| description                           | string                                                                                      | An optional description of this resource                  |
| autoCreateSubnetworks                 | bool                                                                                        | If not set, indicates a legacy network                    |
| enableUlaInternalIpv6                 | bool                                                                                        | Indicates if ULA internal IPv6 is enabled on this network |
| gatewayIPv4                           | string                                                                                      | Gateway address for default routing                       |
| mtu                                   | int                                                                                         | Maximum transmission unit size in bytes                   |
| networkFirewallPolicyEnforcementOrder | string                                                                                      | Network firewall policy enforcement order                 |
| created                               | time                                                                                        | Creation timestamp                                        |
| peerings                              | &#91;&#93;dict                                                                              | Network peerings for the resource                         |
| routingMode                           | string                                                                                      | The network-wide routing mode to use                      |
| mode                                  | string                                                                                      | Network mode: legacy, custom or auto                      |
| subnetworkUrls                        | &#91;&#93;string                                                                            | List of URLs for the subnetwork in the network            |
| subnetworks                           | &#91;&#93;[gcp.project.computeService.subnetwork](gcp.project.computeservice.subnetwork.md) | Subnetworks in the network                                |

**References**

- [Create and manage VPC networks](https://cloud.google.com/vpc/docs/create-modify-vpc-networks)
