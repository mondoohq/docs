---
title: cisco.iosxe.auxLineEntry
id: cisco.iosxe.auxLineEntry
sidebar_label: cisco.iosxe.auxLineEntry
displayed_sidebar: MQL
description: Cisco IOS XE Auxiliary Line (aux)
---

# cisco.iosxe.auxLineEntry

**Description**

Cisco IOS XE Auxiliary Line (aux)

**Fields**

| ID             | TYPE | DESCRIPTION                                                                                              |
|----------------|------|----------------------------------------------------------------------------------------------------------|
| exec           | bool | Whether 'exec' is set for the aux line. If no exec, the line is restricted to outgoing connections only. |
| privilegeLevel | int  | The default privilege level for the aux line.                                                            |
| execTimeout    | time | The exec timeout for the aux line, if specified.                                                         |

