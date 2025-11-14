---
title: cisco.nxos.bgpRouterConfig
id: cisco.nxos.bgpRouterConfig
sidebar_label: cisco.nxos.bgpRouterConfig
displayed_sidebar: MQL
description: Cisco NX-OS BGP Router configuration
---

# cisco.nxos.bgpRouterConfig

**Description**

Cisco NX-OS BGP Router configuration

**Fields**

| ID                 | TYPE                                                                                    | DESCRIPTION                       |
| ------------------ | --------------------------------------------------------------------------------------- | --------------------------------- |
| as                 | int                                                                                     | BGP Autonomous System (AS) number |
| routerId           | ip                                                                                      | Router ID (IPv4 address)          |
| logNeighborChanges | bool                                                                                    | Log Neighbor Changes flag         |
| neighbors          | &#91;&#93;[cisco.nxos.bgpRouterConfig.neighbor](cisco.nxos.bgprouterconfig.neighbor.md) | BGP Neighbors                     |
