---
title: cisco.nxos.runInterfaceConfig
id: cisco.nxos.runInterfaceConfig
sidebar_label: cisco.nxos.runInterfaceConfig
displayed_sidebar: MQL
description: Cisco NX-OS Running Config Interface
---

# cisco.nxos.runInterfaceConfig

**Description**

Cisco NX-OS Running Config Interface

**Fields**

| ID                                     | TYPE                                                                    | DESCRIPTION                                                                                      |
| -------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| interfaceName                          | string                                                                  | The name of the interface.                                                                       |
| interface                              | [cisco.nxos.interface](cisco.nxos.interface.md)                         | The interface associated to the running config.                                                  |
| dhcpSnoopingEnabled                    | bool                                                                    | DHCP Snooping enabled flag                                                                       |
| stormControlAction                     | string                                                                  | Storm Control Action                                                                             |
| stormControlBroadcastLevel             | int                                                                     | Storm Control Broadcast Level                                                                    |
| stormControlBroadcastPps               | int                                                                     | Storm Control Broadcast PPS                                                                      |
| stormControlMulticastLevel             | int                                                                     | Storm Control Multicast Level                                                                    |
| stormControlMulticastPps               | int                                                                     | Storm Control Multicast PPS                                                                      |
| urpfMode                               | string                                                                  | Optional. The uRPF mode used to examine incoming packets. Can be `rx` (strict) or `any` (loose). |
| ipRedirectsDisabled                    | bool                                                                    | Whether IP redirects are disabled on this interface.                                             |
| ipDirectedBroadcast                    | bool                                                                    | Whether IP directed broadcasts are enabled on this interface.                                    |
| proxyArpEnabled                        | bool                                                                    | Whether the proxy ARP service is enabled on the interface.                                       |
| passiveInterfaceEigrpIds               | &#91;&#93;string                                                        | The IDs of EIGRP processes for which the interface is set to passive.                            |
| passiveInterfaceEigrpProcesses         | &#91;&#93;[cisco.nxos.routerEigrpEntry](cisco.nxos.routereigrpentry.md) | The EIGRP processes for which the interface is set to passive.                                   |
| passiveInterfaceDisabledEigrpIds       | &#91;&#93;string                                                        | The IDs of EIGRP processes for which the interface is explicitly not set to passive.             |
| passiveInterfaceDisabledEigrpProcesses | &#91;&#93;[cisco.nxos.routerEigrpEntry](cisco.nxos.routereigrpentry.md) | The EIGRP processes for which the interface is explicitly not set to passive.                    |
