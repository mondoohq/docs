---
title: cisco.nxos.accessControlList
id: cisco.nxos.accessControlList
sidebar_label: cisco.nxos.accessControlList
displayed_sidebar: MQL
description: Cisco NX-OS Access Control List (ACL)
---

# cisco.nxos.accessControlList

**Description**

Cisco NX-OS Access Control List (ACL)

**Fields**

| ID      | TYPE                                                                                  | DESCRIPTION                 |
| ------- | ------------------------------------------------------------------------------------- | --------------------------- |
| name    | string                                                                                | ACL Name                    |
| type    | string                                                                                | ACL Type (IP/IPv6/MAC/MPLS) |
| entries | &#91;&#93;[cisco.nxos.accessControlList.entry](cisco.nxos.accesscontrollist.entry.md) | ACL Entries                 |
