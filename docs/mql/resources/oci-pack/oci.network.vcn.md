---
title: oci.network.vcn
id: oci.network.vcn
sidebar_label: oci.network.vcn
displayed_sidebar: MQL
description: Oracle Cloud Infrastructure (OCI) virtual cloud network (VCN)
---

# oci.network.vcn

**Description**

Oracle Cloud Infrastructure (OCI) virtual cloud network (VCN)

**Fields**

| ID            | TYPE             | DESCRIPTION                   |
| ------------- | ---------------- | ----------------------------- |
| id            | string           | VCN ID                        |
| compartmentID | string           | Tenancy containing the VCN    |
| name          | string           | VCN name                      |
| created       | time             | Time when the VCN was created |
| state         | string           | VCN state                     |
| cidrBlock     | string           | Deprecated                    |
| cidrBlocks    | &#91;&#93;string | List of IPv4 CIDR blocks      |
