---
title: cisco.iosxr.runRouterVrrpEntry
id: cisco.iosxr.runRouterVrrpEntry
sidebar_label: cisco.iosxr.runRouterVrrpEntry
displayed_sidebar: MQL
description: Cisco IOS XR Routing VRRP configuration from running config
---

# cisco.iosxr.runRouterVrrpEntry

**Description**

Cisco IOS XR Routing VRRP configuration from running config

**Fields**

| ID            | TYPE                                  | DESCRIPTION                              |
| ------------- | ------------------------------------- | ---------------------------------------- |
| interface     | [cisco.interface](cisco.interface.md) | Interface                                |
| addressFamily | string                                | Address family (IPv4/IPv6)               |
| groupNumber   | int                                   | VRRP group number                        |
| textAuth      | string                                | VRRP Text Authentication (if configured) |
