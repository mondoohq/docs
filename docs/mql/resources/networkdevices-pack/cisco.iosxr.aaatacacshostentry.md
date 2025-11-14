---
title: cisco.iosxr.aaaTacacsHostEntry
id: cisco.iosxr.aaaTacacsHostEntry
sidebar_label: cisco.iosxr.aaaTacacsHostEntry
displayed_sidebar: MQL
description: Cisco IOS XR AAA TACACS+ Hosts from running config
---

# cisco.iosxr.aaaTacacsHostEntry

**Description**

Cisco IOS XR AAA TACACS+ Hosts from running config

**Fields**

| ID      | TYPE   | DESCRIPTION                              |
|---------|--------|------------------------------------------|
| host    | string | TACACS+ server hostname or IP address    |
| port    | int    | TACACS+ server port (default is 49)      |
| keyType | int    | Key Encryption type (e.g., 7, 0)         |
| key     | string | TACACS+ server key (encrypted if type 7) |

