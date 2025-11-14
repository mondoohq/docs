---
title: cisco.iosxr.runSnmpCommunitiesEntry
id: cisco.iosxr.runSnmpCommunitiesEntry
sidebar_label: cisco.iosxr.runSnmpCommunitiesEntry
displayed_sidebar: MQL
description: Cisco IOS XR SNMP Community Strings from running config
---

# cisco.iosxr.runSnmpCommunitiesEntry

**Description**

Cisco IOS XR SNMP Community Strings from running config

**Fields**

| ID            | TYPE   | DESCRIPTION                                                             |
|---------------|--------|-------------------------------------------------------------------------|
| community     | string | Community name, e.g. "public"                                           |
| privilege     | string | Privilege level, e.g. "RO" or "RW"                                      |
| addressFamily | string | Address family, e.g. "IPv4" or "IPv6"                                   |
| acl           | string | Access control list name or number, e.g. "my-acl" or 10 (if configured) |

