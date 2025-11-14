---
title: cisco.iosxr.runSnmpGroupsEntry
id: cisco.iosxr.runSnmpGroupsEntry
sidebar_label: cisco.iosxr.runSnmpGroupsEntry
displayed_sidebar: MQL
description: Cisco IOS XR SNMP Groups from running config
---

# cisco.iosxr.runSnmpGroupsEntry

**Description**

Cisco IOS XR SNMP Groups from running config

**Fields**

| ID             | TYPE   | DESCRIPTION                                             |
|----------------|--------|---------------------------------------------------------|
| name           | string | SNMP group name                                         |
| version        | string | SNMP Version (1/2c/3)                                   |
| v3PrivacyLevel | string | Privacy level (for v3), e.g. "auth", "noauth", "priv"   |
| ipVersion      | string | IP Version (IPv4/IPv6)                                  |
| acl            | string | ACL name or number, e.g. "my-acl" or 10 (if configured) |

