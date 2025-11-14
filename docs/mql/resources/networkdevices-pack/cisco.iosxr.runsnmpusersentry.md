---
title: cisco.iosxr.runSnmpUsersEntry
id: cisco.iosxr.runSnmpUsersEntry
sidebar_label: cisco.iosxr.runSnmpUsersEntry
displayed_sidebar: MQL
description: Cisco IOS XR SNMP Users from running config
---

# cisco.iosxr.runSnmpUsersEntry

**Description**

Cisco IOS XR SNMP Users from running config

**Fields**

| ID              | TYPE   | DESCRIPTION                                             |
|-----------------|--------|---------------------------------------------------------|
| username        | string | Username                                                |
| group           | string | Group name                                              |
| version         | string | SNMP Version (1/2c/3)                                   |
| v3AuthProtocol  | string | Authentication protocol (for v3), e.g. "md5", "sha"     |
| v3AuthKey       | string | Authentication key (for v3)                             |
| v3PrivProtocol  | string | Privacy protocol (for v3), e.g. "aes", "des"            |
| v3PrivKey       | string | Privacy key (for v3)                                    |
| v3PrivKeyLength | int    | (optional) Privacy key length (for v3)                  |
| protocol        | string | Protocol (IPv4/IPv6)                                    |
| acl             | string | ACL name or number, e.g. "my-acl" or 10 (if configured) |

