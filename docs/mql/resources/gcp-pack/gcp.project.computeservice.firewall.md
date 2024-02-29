---
title: gcp.project.computeService.firewall
id: gcp.project.computeService.firewall
sidebar_label: gcp.project.computeService.firewall
displayed_sidebar: MQL
description: GCP Compute firewall
---

# gcp.project.computeService.firewall

**Supported platform**

- gcp

**Description**

GCP Compute firewall

**Fields**

| ID                    | TYPE             | DESCRIPTION                                                             |
| --------------------- | ---------------- | ----------------------------------------------------------------------- |
| id                    | string           | Unique identifier                                                       |
| projectId             | string           | Project ID                                                              |
| name                  | string           | User-provided name                                                      |
| description           | string           | An optional description of this resource                                |
| priority              | int              | Priority for this rule                                                  |
| direction             | string           | Direction of traffic                                                    |
| disabled              | bool             | Whether the firewall rule is disabled                                   |
| sourceRanges          | &#91;&#93;string | Source ranges                                                           |
| sourceServiceAccounts | &#91;&#93;string | Source service accounts                                                 |
| sourceTags            | &#91;&#93;string | Source tags                                                             |
| destinationRanges     | &#91;&#93;string | Range of destination IP addresses for which the rule applies to traffic |
| targetServiceAccounts | &#91;&#93;string | List of service accounts                                                |
| created               | time             | Creation timestamp                                                      |
| allowed               | &#91;&#93;dict   | List of ALLOW rules specified by this firewall                          |
| denied                | &#91;&#93;dict   | List of DENY rules specified by this firewall                           |

**References**

- [VPC firewall rules](https://cloud.google.com/firewall/docs/firewalls)
