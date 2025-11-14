---
title: cisco.iosxe.interfaceConfig.eigrpConfig
id: cisco.iosxe.interfaceConfig.eigrpConfig
sidebar_label: cisco.iosxe.interfaceConfig.eigrpConfig
displayed_sidebar: MQL
description: Cisco IOS XE Interface EIGRP configuration
---

# cisco.iosxe.interfaceConfig.eigrpConfig

**Description**

Cisco IOS XE Interface EIGRP configuration

**Fields**

| ID                    | TYPE                                                            | DESCRIPTION                                                              |
| --------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------ |
| eigrpNumber           | string                                                          | The EIGRP autonomous system number (name).                               |
| routerEigrp           | [cisco.iosxe.routerEigrpEntry](cisco.iosxe.routereigrpentry.md) | The router EIGRP entry associated to this interface EIGRP configuration. |
| keychainName          | string                                                          | Optional. The EIGRP authentication key chain name.                       |
| keychain              | [cisco.iosxe.keyChain](cisco.iosxe.keychain.md)                 | Optional. The key chain used for authentication.                         |
| md5AuthenticationMode | bool                                                            | MD5 authentication enabled flag.                                         |
