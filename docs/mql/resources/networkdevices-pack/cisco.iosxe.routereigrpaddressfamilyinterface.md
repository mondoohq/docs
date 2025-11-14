---
title: cisco.iosxe.routerEigrpAddressFamilyInterface
id: cisco.iosxe.routerEigrpAddressFamilyInterface
sidebar_label: cisco.iosxe.routerEigrpAddressFamilyInterface
displayed_sidebar: MQL
description: Cisco IOS XE Routing EIGRP Address Family Interface configuration from running config
---

# cisco.iosxe.routerEigrpAddressFamilyInterface

**Description**

Cisco IOS XE Routing EIGRP Address Family Interface configuration from running config

**Fields**

| ID                 | TYPE                                              | DESCRIPTION                                      |
| ------------------ | ------------------------------------------------- | ------------------------------------------------ |
| interfaceName      | string                                            | The name of the interface.                       |
| afInterface        | [cisco.iosxe.interface](cisco.iosxe.interface.md) | The interface associated to the address family.  |
| keychainName       | string                                            | Optional. Authentication key chain name.         |
| authKeychain       | [cisco.iosxe.keyChain](cisco.iosxe.keychain.md)   | Optional. The key chain used for authentication. |
| authenticationMode | string                                            | Optional. Authentication mode (e.g. md5).        |
