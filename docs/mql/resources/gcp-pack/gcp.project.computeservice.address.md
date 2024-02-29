---
title: gcp.project.computeService.address
id: gcp.project.computeService.address
sidebar_label: gcp.project.computeService.address
displayed_sidebar: MQL
description: GCP Compute address
---

# gcp.project.computeService.address

**Supported platform**

- gcp

**Description**

GCP Compute address

**Fields**

| ID               | TYPE                                                                              | DESCRIPTION                                           |
| ---------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------- |
| id               | string                                                                            | Unique identifier                                     |
| address          | string                                                                            | Static IP address                                     |
| addressType      | string                                                                            | Address type                                          |
| created          | time                                                                              | Creation timestamp                                    |
| description      | string                                                                            | Address description                                   |
| ipVersion        | string                                                                            | IP version                                            |
| ipv6EndpointType | string                                                                            | Endpoint type                                         |
| name             | string                                                                            | Address name                                          |
| networkUrl       | string                                                                            | URL of the network in which to reserve the address    |
| network          | [gcp.project.computeService.network](gcp.project.computeservice.network.md)       | Network in which to reserve the address               |
| networkTier      | string                                                                            | Network tier used for configuring this address        |
| prefixLength     | int                                                                               | Prefix length if the resource represents an IP range  |
| purpose          | string                                                                            | Address purpose                                       |
| regionUrl        | string                                                                            | Region URL                                            |
| status           | string                                                                            | Address status                                        |
| subnetworkUrl    | string                                                                            | URL of the subnetwork in which to reserve the address |
| subnetwork       | [gcp.project.computeService.subnetwork](gcp.project.computeservice.subnetwork.md) | Subnetwork in which to reserve the address            |
| resourceUrls     | &#91;&#93;string                                                                  | URLs of the resources that are using this address     |

**References**

- [IP addresses](https://cloud.google.com/compute/docs/ip-addresses)
