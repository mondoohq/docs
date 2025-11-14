---
title: cisco.iosxr.runRouterHsrpEntry
id: cisco.iosxr.runRouterHsrpEntry
sidebar_label: cisco.iosxr.runRouterHsrpEntry
displayed_sidebar: MQL
description: Cisco IOS XR Routing HSRP configuration from running config
---

# cisco.iosxr.runRouterHsrpEntry

**Description**

Cisco IOS XR Routing HSRP configuration from running config

**Fields**

| ID             | TYPE                                  | DESCRIPTION                         |
|----------------|---------------------------------------|-------------------------------------|
| interface      | [cisco.interface](cisco.interface.md) | Interface                           |
| addressFamily  | string                                | Address family (IPv4/IPv6)          |
| groupNumber    | int                                   | HSRP group number                   |
| authentication | string                                | HSRP Authentication (if configured) |

