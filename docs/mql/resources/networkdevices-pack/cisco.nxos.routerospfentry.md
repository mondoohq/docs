---
title: cisco.nxos.routerOspfEntry
id: cisco.nxos.routerOspfEntry
sidebar_label: cisco.nxos.routerOspfEntry
displayed_sidebar: MQL
description: Cisco NX-OS Routing OSPF entry configuration from running config
---

# cisco.nxos.routerOspfEntry

**Description**

Cisco NX-OS Routing OSPF entry configuration from running config

**Fields**

| ID                                 | TYPE                                                                                              | DESCRIPTION                                                               |
|------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| as                                 | string                                                                                            | The router OSPF autonomous system (AS) number.                            |
| routerId                           | string                                                                                            | Optional. The identifier of the router.                                   |
| passiveInterfaceDefaultEnabled     | bool                                                                                              | Whether all interfaces are made passive by default for this OSPF process. |
| logAdjacencyChangesEnabled         | bool                                                                                              | Whether logging of adjacency changes is enabled.                          |
| logDetailedAdjacencyChangesEnabled | bool                                                                                              | Whether detailed logging of adjacency changes is enabled.                 |
| interfaces                         | &#91;&#93;[cisco.nxos.routerOspfEntry.ospfInterface](cisco.nxos.routerospfentry.ospfinterface.md) | OSPF routable interfaces.                                                 |

