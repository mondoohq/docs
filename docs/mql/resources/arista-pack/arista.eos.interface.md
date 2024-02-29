---
title: arista.eos.interface
id: arista.eos.interface
sidebar_label: arista.eos.interface
displayed_sidebar: MQL
description: Arista EOS interface resource
---

# arista.eos.interface

**Supported platform**

- arista-eos

**Description**

Arista EOS interface resource

**Fields**

| ID                        | TYPE           | DESCRIPTION                                                                            |
| ------------------------- | -------------- | -------------------------------------------------------------------------------------- |
| name                      | string         | Interface name, link status, vlan, duplex, speed, and type of the specified interfaces |
| bandwidth                 | int            | Interface bandwidth                                                                    |
| burnedInAddress           | string         | 'burned in' address of the interface                                                   |
| description               | string         | Interface description                                                                  |
| forwardingModel           | string         | Forwarding mode                                                                        |
| hardware                  | string         | Hardware Name                                                                          |
| interfaceAddress          | &#91;&#93;dict | Interface address information                                                          |
| interfaceCounters         | dict           | Traffic count information                                                              |
| interfaceMembership       | string         | Interface membership                                                                   |
| interfaceStatistics       | dict           | Interface statistics                                                                   |
| interfaceStatus           | string         | Interface status                                                                       |
| l2Mtu                     | int            | Layer 2 MTU                                                                            |
| lastStatusChangeTimestamp | int            | Last interface change timestamp                                                        |
| lineProtocolStatus        | string         | Interface protocol status                                                              |
| mtu                       | int            | MTU                                                                                    |
| physicalAddress           | string         | MAC address of the interface                                                           |
| status                    | dict           | Interface link status, vlan, duplex, speed, and type                                   |
