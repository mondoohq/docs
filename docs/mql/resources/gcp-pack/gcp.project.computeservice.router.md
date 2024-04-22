---
title: gcp.project.computeService.router
id: gcp.project.computeService.router
sidebar_label: gcp.project.computeService.router
displayed_sidebar: MQL
description: Google Cloud (GCP) Compute cloud router
---

# gcp.project.computeService.router

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Compute cloud router

**Fields**

| ID                          | TYPE           | DESCRIPTION                                                           |
| --------------------------- | -------------- | --------------------------------------------------------------------- |
| id                          | string         | Unique identifier                                                     |
| name                        | string         | Name of the resource                                                  |
| description                 | string         | An optional description of this resource                              |
| bgp                         | dict           | BGP information                                                       |
| bgpPeers                    | &#91;&#93;dict | BGP routing stack configuration to establish BGP peering              |
| encryptedInterconnectRouter | bool           | Whether a router is dedicated for use with encrypted VLAN attachments |
| nats                        | &#91;&#93;dict | NAT services created in this router                                   |
| created                     | time           | Creation timestamp                                                    |

**References**

- [Cloud Router overview](https://cloud.google.com/network-connectivity/docs/router/concepts/overview)
