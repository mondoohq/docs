---
title: cisco.iosxe.vtyLine
id: cisco.iosxe.vtyLine
sidebar_label: cisco.iosxe.vtyLine
displayed_sidebar: MQL
description: Cisco IOS XE Virtual Terminal Line (VTY)
---

# cisco.iosxe.vtyLine

**Description**

Cisco IOS XE Virtual Terminal Line (VTY)

**Fields**

| ID                      | TYPE                                                                                  | DESCRIPTION                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| startLine               | int                                                                                   | VTY line start                                                                                                             |
| endLine                 | int                                                                                   | VTY line end                                                                                                               |
| accessClassIn           | string                                                                                | The inbound access-class number or name that the VTY line uses, if specified.                                              |
| aclIn                   | [cisco.iosxe.accessListEntry](cisco.iosxe.accesslistentry.md)                         | The inbound ACL, if specified.                                                                                             |
| accessClassOut          | string                                                                                | The outbound access-class number or name that the VTY line uses, if specified.                                             |
| aclOut                  | [cisco.iosxe.accessListEntry](cisco.iosxe.accesslistentry.md)                         | The outbound ACL, if specified.                                                                                            |
| inputTransportTypes     | &#91;&#93;string                                                                      | The input transports types, if specified. Examples are 'telnet' and 'ssh'.                                                 |
| outputTransportTypes    | &#91;&#93;string                                                                      | The output transports types, if specified. Examples are 'telnet' and 'ssh'.                                                |
| execTimeout             | time                                                                                  | The exec timeout for the vty line, if specified.                                                                           |
| loginAuthenticationName | string                                                                                | The name of the aaa login authentication method for the vty line, if specified                                             |
| loginAuthentication     | [cisco.iosxe.aaaAuthenticationLoginEntry](cisco.iosxe.aaaauthenticationloginentry.md) | The aaa login authentication method for the vty line, if specified. Obtained by using the 'loginAuthenticationName' field. |
