---
title: cisco.iosxr.runManagementPlaneRule
id: cisco.iosxr.runManagementPlaneRule
sidebar_label: cisco.iosxr.runManagementPlaneRule
displayed_sidebar: MQL
description: Cisco IOS XR Management Plane rules configuration from running config
---

# cisco.iosxr.runManagementPlaneRule

**Description**

Cisco IOS XR Management Plane rules configuration from running config

**Fields**

| ID        | TYPE                                  | DESCRIPTION                                        |
| --------- | ------------------------------------- | -------------------------------------------------- |
| direction | string                                | Direction (inband/out-of-band)                     |
| interface | [cisco.interface](cisco.interface.md) | Interface                                          |
| action    | string                                | Rule action (allow/deny)                           |
| protocol  | string                                | Protocol (e.g., ssh, telnet, snmp)                 |
| ipVersion | string                                | IP version (ipv4/ipv6)                             |
| address   | ip                                    | Address or subnet in CIDR notation (if applicable) |
