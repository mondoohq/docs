---
title: cisco.nxos.runInterface
id: cisco.nxos.runInterface
sidebar_label: cisco.nxos.runInterface
displayed_sidebar: MQL
description: Cisco NX-OS Running Config Interface
---

# cisco.nxos.runInterface

**Description**

Cisco NX-OS Running Config Interface

**Fields**

| ID                         | TYPE                                  | DESCRIPTION                                                                                      |
|----------------------------|---------------------------------------|--------------------------------------------------------------------------------------------------|
| interface                  | [cisco.interface](cisco.interface.md) | Interface name                                                                                   |
| dhcpSnoopingEnabled        | bool                                  | DHCP Snooping enabled flag                                                                       |
| stormControlAction         | string                                | Storm Control Action                                                                             |
| stormControlBroadcastLevel | int                                   | Storm Control Broadcast Level                                                                    |
| stormControlBroadcastPps   | int                                   | Storm Control Broadcast PPS                                                                      |
| stormControlMulticastLevel | int                                   | Storm Control Multicast Level                                                                    |
| stormControlMulticastPps   | int                                   | Storm Control Multicast PPS                                                                      |
| urpfMode                   | string                                | Optional. The uRPF mode used to examine incoming packets. Can be `rx` (strict) or `any` (loose). |

