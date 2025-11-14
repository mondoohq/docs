---
title: cisco.iosxe.interfaceConfig.ospfConfig
id: cisco.iosxe.interfaceConfig.ospfConfig
sidebar_label: cisco.iosxe.interfaceConfig.ospfConfig
displayed_sidebar: MQL
description: Cisco IOS XE Interface OSPF configuration
---

# cisco.iosxe.interfaceConfig.ospfConfig

**Description**

Cisco IOS XE Interface OSPF configuration

**Fields**

| ID                       | TYPE                                                                                                                            | DESCRIPTION                                                                                                                                                                    |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| processId                | string                                                                                                                          | Optional. The explicitly specified OSPF process ID.                                                                                                                            |
| ospfEntry                | [cisco.iosxe.routerOspfEntry](cisco.iosxe.routerospfentry.md)                                                                   | Optional. The OSPF process this interface belongs to.                                                                                                                          |
| areaId                   | string                                                                                                                          | Optional. The area ID this interface belongs to.                                                                                                                               |
| ospfArea                 | [cisco.iosxe.routerOspfEntry.area](cisco.iosxe.routerospfentry.area.md)                                                         | Optional. The OSPF area this interface belongs to.                                                                                                                             |
| keychainName             | string                                                                                                                          | Optional. The OSPF authentication key chain name.                                                                                                                              |
| keychain                 | [cisco.iosxe.keyChain](cisco.iosxe.keychain.md)                                                                                 | Optional. The key chain used for authentication.                                                                                                                               |
| md5AuthenticationEnabled | bool                                                                                                                            | Whether OSPF MD5 authentication is enabled for this interface.                                                                                                                 |
| authenticationEnabled    | bool                                                                                                                            | Whether authentication for this interface is enabled. It is enabled by default unless explicitly specified., This setting overrides authentication settings at the area level. |
| messageDigestKeys        | &#91;&#93;[cisco.iosxe.interfaceConfig.ospfConfig.messageDigestKey](cisco.iosxe.interfaceconfig.ospfconfig.messagedigestkey.md) | A collection of OSPF md5 message digest keys.                                                                                                                                  |

