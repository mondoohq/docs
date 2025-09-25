---
title: cisco.iosxe.consoleLineEntry
id: cisco.iosxe.consoleLineEntry
sidebar_label: cisco.iosxe.consoleLineEntry
displayed_sidebar: MQL
description: Cisco IOS XE Console Line (con)
---

# cisco.iosxe.consoleLineEntry

**Description**

Cisco IOS XE Console Line (con)

**Fields**

| ID             | TYPE | DESCRIPTION                                                                                              |
| -------------- | ---- | -------------------------------------------------------------------------------------------------------- |
| exec           | bool | Whether 'exec' is set for the con line. If no exec, the line is restricted to outgoing connections only. |
| privilegeLevel | int  | The default privilege level for the con line.                                                            |
| execTimeout    | time | The exec timeout for the con line, if specified.                                                         |
