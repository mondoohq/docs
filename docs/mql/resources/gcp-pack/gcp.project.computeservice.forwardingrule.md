---
title: gcp.project.computeService.forwardingRule
id: gcp.project.computeService.forwardingRule
sidebar_label: gcp.project.computeService.forwardingRule
displayed_sidebar: MQL
description: Google Cloud (GCP) Compute forwarding rules
---

# gcp.project.computeService.forwardingRule

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Compute forwarding rules

**Fields**

| ID                            | TYPE                                                                              | DESCRIPTION                                                                                                                  |
| ----------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| id                            | string                                                                            | Unique identifier                                                                                                            |
| ipAddress                     | string                                                                            | IP address for which this forwarding rule accepts traffic                                                                    |
| ipProtocol                    | string                                                                            | IP protocol to which this rule applies                                                                                       |
| allPorts                      | bool                                                                              | Whether to use all ports for forwarding traffic                                                                              |
| allowGlobalAccess             | bool                                                                              | Whether to allow access to the load balancer from all regions                                                                |
| backendService                | string                                                                            | Backend service to which the forwarding rule sends traffic                                                                   |
| created                       | time                                                                              | Creation timestamp                                                                                                           |
| description                   | string                                                                            | Optional resource description                                                                                                |
| ipVersion                     | string                                                                            | IP version that this forwarding rule uses                                                                                    |
| isMirroringCollector          | bool                                                                              | Whether this load balancer can be used as a collector for packet mirroring                                                   |
| labels                        | map[string]string                                                                 | User-defined labels                                                                                                          |
| loadBalancingScheme           | string                                                                            | Forwarding rule type                                                                                                         |
| metadataFilters               | &#91;&#93;dict                                                                    | Opaque filter criteria used by the load balancer to restrict routing configuration to a limited set of xDS-compliant clients |
| name                          | string                                                                            | Forwarding rule name                                                                                                         |
| networkUrl                    | string                                                                            | URL of the network used for internal load balancing                                                                          |
| network                       | [gcp.project.computeService.network](gcp.project.computeservice.network.md)       | Network used for internal load balancing                                                                                     |
| networkTier                   | string                                                                            | Network tier used for configuring this load balancer                                                                         |
| noAutomateDnsZone             | bool                                                                              | Whether the forwarding rule should try to auto-generate a DNS zone                                                           |
| portRange                     | string                                                                            | Port range to forward                                                                                                        |
| ports                         | &#91;&#93;string                                                                  | Ports to forward                                                                                                             |
| regionUrl                     | string                                                                            | Region URL                                                                                                                   |
| serviceDirectoryRegistrations | &#91;&#93;dict                                                                    | Service Directory resources with which to register this forwarding rule                                                      |
| serviceLabel                  | string                                                                            | Optional prefix to the service name for this forwarding rule                                                                 |
| serviceName                   | string                                                                            | Internal fully qualified service name for this forwarding rule                                                               |
| subnetworkUrl                 | string                                                                            | URL of the subnetwork to which the load balanced IP belongs                                                                  |
| subnetwork                    | [gcp.project.computeService.subnetwork](gcp.project.computeservice.subnetwork.md) | Subnetwork to which the load balanced IP belongs                                                                             |
| targetUrl                     | string                                                                            | URL of the target resource to receive the matched traffic                                                                    |

**References**

- [Forwarding rules overview](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts)
