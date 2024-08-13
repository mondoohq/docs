---
title: oci.network.securityList
id: oci.network.securityList
sidebar_label: oci.network.securityList
displayed_sidebar: MQL
description: Oracle Cloud Infrastructure (OCI) VCN security list virtual firewall rules
---

# oci.network.securityList

**Description**

Oracle Cloud Infrastructure (OCI) VCN security list virtual firewall rules

**Fields**

| ID                   | TYPE           | DESCRIPTION                           |
| -------------------- | -------------- | ------------------------------------- |
| id                   | string         | SecurityList ID                       |
| compartmentID        | string         | Tenancy containing the VCN            |
| name                 | string         | VCN name                              |
| created              | time           | Time when the VCN was created         |
| state                | string         | VCN state                             |
| egressSecurityRules  | &#91;&#93;dict | Rules for allowing egress IP packets  |
| ingressSecurityRules | &#91;&#93;dict | Rules for allowing ingress IP packets |

**References**

- [Security Lists](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/securitylists.htm)
