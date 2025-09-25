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

| ID                   | TYPE             | DESCRIPTION                                                                 |
| -------------------- | ---------------- | --------------------------------------------------------------------------- |
| startLine            | int              | VTY line start                                                              |
| endLine              | int              | VTY line end                                                                |
| accessClassIn        | int              | The inbound access-class number that the VTY line uses, if specified.       |
| accessClassOut       | int              | The outbound access-class number that the VTY line uses, if specified.      |
| inputTransportTypes  | &#91;&#93;string | The input transports types, if specified. Examples are 'telnet' and 'ssh'.  |
| outputTransportTypes | &#91;&#93;string | The output transports types, if specified. Examples are 'telnet' and 'ssh'. |
| execTimeout          | time             | The exec timeout for the vty line, if specified.                            |
