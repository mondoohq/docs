---
title: cisco.nxos.routerOspfEntry.ospfInterface
id: cisco.nxos.routerOspfEntry.ospfInterface
sidebar_label: cisco.nxos.routerOspfEntry.ospfInterface
displayed_sidebar: MQL
description: Cisco NX-OS Routing OSPF Interface configuration
---

# cisco.nxos.routerOspfEntry.ospfInterface

**Description**

Cisco NX-OS Routing OSPF Interface configuration

**Fields**

| ID                       | TYPE                                            | DESCRIPTION                                                                                |
| ------------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------ |
| interfaceName            | string                                          | The name of the interface.                                                                 |
| ospfInterface            | [cisco.nxos.interface](cisco.nxos.interface.md) | The interface associated to the OSPF configuration.                                        |
| areaId                   | string                                          | The area ID this interface belongs to.                                                     |
| isPassive                | bool                                            | Whether the interface is passive.                                                          |
| md5AuthenticationEnabled | bool                                            | Whether message digest 5 (MD5) authentication is enabled for this OSPF routable interface. |
| authKeychain             | string                                          | Optional. Name of the keychain used for authentication.                                    |
