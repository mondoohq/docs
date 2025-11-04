---
title: cisco.nxos.bgpRouterConfig.neighbor
id: cisco.nxos.bgpRouterConfig.neighbor
sidebar_label: cisco.nxos.bgpRouterConfig.neighbor
displayed_sidebar: MQL
description: Cisco NX-OS BGP Router Neighbor
---

# cisco.nxos.bgpRouterConfig.neighbor

**Description**

Cisco NX-OS BGP Router Neighbor

**Fields**

| ID              | TYPE                                                                                          | DESCRIPTION                                        |
| --------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| neighbor        | string                                                                                        | Neighbor ID (IPv4/IPv6 address or peer group name) |
| remoteAs        | int                                                                                           | Remote AS number                                   |
| keyType         | int                                                                                           | Key type (e.g., 0/plaintext, 7/encrypted)          |
| key             | string                                                                                        | Key value                                          |
| addressFamilies | &#91;&#93;[cisco.nxos.bgpRouterConfig.neighbor.af](cisco.nxos.bgprouterconfig.neighbor.af.md) | Address families for this neighbor                 |
