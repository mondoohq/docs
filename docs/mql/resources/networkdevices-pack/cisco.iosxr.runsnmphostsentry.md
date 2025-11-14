---
title: cisco.iosxr.runSnmpHostsEntry
id: cisco.iosxr.runSnmpHostsEntry
sidebar_label: cisco.iosxr.runSnmpHostsEntry
displayed_sidebar: MQL
description: Cisco IOS XR SNMP Host Strings from running config
---

# cisco.iosxr.runSnmpHostsEntry

**Description**

Cisco IOS XR SNMP Host Strings from running config

**Fields**

| ID               | TYPE   | DESCRIPTION                                            |
|------------------|--------|--------------------------------------------------------|
| ipAddress        | string | Host IP address                                        |
| notificationType | string | Notification type (traps/informs)                      |
| version          | string | SNMP Version (1/2c/3)                                  |
| community        | string | Trap Community (for v1/v2c)                            |
| v3SecurityLevel  | string | Security level (for v3), e.g. "auth", "noauth", "priv" |
| v3User           | string | Trap user (for v3)                                     |

