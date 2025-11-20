---
title: cisco.nxos.routerEigrpEntry.addressFamily
id: cisco.nxos.routerEigrpEntry.addressFamily
sidebar_label: cisco.nxos.routerEigrpEntry.addressFamily
displayed_sidebar: MQL
description: Cisco NX-OS Routing EIGRP Address Family from running config
---

# cisco.nxos.routerEigrpEntry.addressFamily

**Description**

Cisco NX-OS Routing EIGRP Address Family from running config

**Fields**

| ID                             | TYPE   | DESCRIPTION                                                                |
| ------------------------------ | ------ | -------------------------------------------------------------------------- |
| protocol                       | string | Address family protocol (ipv4\|ipv6).                                      |
| passiveInterfaceDefaultEnabled | bool   | Whether all interfaces are made passive by default for this EIGRP process. |
| md5AuthenticationMode          | bool   | Whether message digest 5 (MD5) authentication is enabled.                  |
| authKeychain                   | string | Optional. Name of the keychain used for authentication.                    |
| adjacencyChangeLoggingEnabled  | bool   | Whether logging of adjacency changes is enabled.                           |
