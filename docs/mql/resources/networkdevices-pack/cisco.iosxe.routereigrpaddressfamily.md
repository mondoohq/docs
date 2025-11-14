---
title: cisco.iosxe.routerEigrpAddressFamily
id: cisco.iosxe.routerEigrpAddressFamily
sidebar_label: cisco.iosxe.routerEigrpAddressFamily
displayed_sidebar: MQL
description: Cisco IOS XE Routing EIGRP Address Family configuration from running config
---

# cisco.iosxe.routerEigrpAddressFamily

**Description**

Cisco IOS XE Routing EIGRP Address Family configuration from running config

**Fields**

| ID                     | TYPE                                                                                                        | DESCRIPTION                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| protocol               | string                                                                                                      | Address family protocol (IPv4/IPv6)            |
| castType               | string                                                                                                      | Optional. Unicast or multicast address-family. |
| vrfName                | string                                                                                                      | Optional. The name of the VRF table.           |
| autonomousSystemNumber | int                                                                                                         | Optional. Autonomous system (AS) number.       |
| interfaces             | &#91;&#93;[cisco.iosxe.routerEigrpAddressFamilyInterface](cisco.iosxe.routereigrpaddressfamilyinterface.md) | Interfaces in this address family.             |
