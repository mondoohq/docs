---
title: cisco.iosxr.runRouterBgpNeighbor
id: cisco.iosxr.runRouterBgpNeighbor
sidebar_label: cisco.iosxr.runRouterBgpNeighbor
displayed_sidebar: MQL
description: Cisco IOS XR Routing BGP Neighbor configuration from running config
---

# cisco.iosxr.runRouterBgpNeighbor

**Description**

Cisco IOS XR Routing BGP Neighbor configuration from running config

**Fields**

| ID           | TYPE   | DESCRIPTION                             |
| ------------ | ------ | --------------------------------------- |
| ipAddress    | ip     | Neighbor IP address                     |
| remoteAs     | int    | Remote AS number                        |
| password     | string | Password (if configured)                |
| passwordType | string | Password type (if configured)           |
| description  | string | Description (if configured)             |
| updateSource | string | Update source interface (if configured) |
| ebgpMultihop | int    | EBGP Multihop (if configured)           |
| shutdown     | bool   | Shutdown flag                           |
