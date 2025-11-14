---
title: cisco.iosxe.bgpConfig.neighbor
id: cisco.iosxe.bgpConfig.neighbor
sidebar_label: cisco.iosxe.bgpConfig.neighbor
displayed_sidebar: MQL
description: Cisco IOS XE BGP neighbor
---

# cisco.iosxe.bgpConfig.neighbor

**Description**

Cisco IOS XE BGP neighbor

**Fields**

| ID                        | TYPE                                              | DESCRIPTION                                                                                                                               |
|---------------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| id                        | string                                            | Optional. The neighbor identifier. Can be an IPv4/IPv6 address or peer group name.                                                        |
| isPeerGroup               | bool                                              | Whether the neighbor is a peer group.                                                                                                     |
| ip                        | ip                                                | Optional. If the neighbor ID is an IP address, this field holds the IP address., If the neighbor is a peer group, this evaluates to null. |
| description               | string                                            | Optional. The description of the BGP neighbor.                                                                                            |
| password                  | string                                            | Optional. Enables MD5 authentication between 2 BGP peers.                                                                                 |
| remoteAsNumber            | int                                               | Optional. Number of an autonomous system to which the neighbor belongs in the range from 1 to 65535.                                      |
| updateSourceInterfaceName | string                                            | Optional. The interface name of the interface used by BGP sessions for TCP connections.                                                   |
| updateSourceInterface     | [cisco.iosxe.interface](cisco.iosxe.interface.md) | Optional. The interface used by BGP sessions for TCP connections.                                                                         |

