---
title: gcp.project.dnsService.policy
id: gcp.project.dnsService.policy
sidebar_label: gcp.project.dnsService.policy
displayed_sidebar: MQL
description: Cloud DNS rules applied to one or more Virtual Private Cloud resources
---

# gcp.project.dnsService.policy

**Supported platform**

- gcp

**Description**

Cloud DNS rules applied to one or more Virtual Private Cloud resources

**Fields**

| ID                      | TYPE                                                                                  | DESCRIPTION                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| projectId               | string                                                                                | Project ID                                                                       |
| id                      | string                                                                                | Managed Zone ID                                                                  |
| name                    | string                                                                                | User-friendly name of the resource                                               |
| description             | string                                                                                | User-friendly description of the resource                                        |
| enableInboundForwarding | bool                                                                                  | Whether DNS queries sent by VMs or applications over VPN connections are allowed |
| enableLogging           | bool                                                                                  | Whether logging is enabled                                                       |
| networkNames            | &#91;&#93;string                                                                      | List of network names specifying networks to which this policy is applied        |
| networks                | &#91;&#93;[gcp.project.computeService.network](gcp.project.computeservice.network.md) | List of networks to which this policy is applied                                 |

**References**

- [DNS policies overview](https://cloud.google.com/dns/docs/policies-overview)
