---
title: cisco.iosxr.aaaRadiusHostEntry
id: cisco.iosxr.aaaRadiusHostEntry
sidebar_label: cisco.iosxr.aaaRadiusHostEntry
displayed_sidebar: MQL
description: Cisco IOS XR AAA RADIUS Hosts from running config
---

# cisco.iosxr.aaaRadiusHostEntry

**Description**

Cisco IOS XR AAA RADIUS Hosts from running config

**Fields**

| ID       | TYPE   | DESCRIPTION                                  |
| -------- | ------ | -------------------------------------------- |
| host     | string | RADIUS server hostname or IP address         |
| authPort | int    | RADIUS authentication port (default is 1645) |
| acctPort | int    | RADIUS accounting port (default is 1646)     |
| keyType  | int    | Key Encryption type (e.g., 7, 0)             |
| key      | string | RADIUS server key (encrypted if type 7)      |
