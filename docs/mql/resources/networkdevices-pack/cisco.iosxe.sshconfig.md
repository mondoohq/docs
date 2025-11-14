---
title: cisco.iosxe.sshConfig
id: cisco.iosxe.sshConfig
sidebar_label: cisco.iosxe.sshConfig
displayed_sidebar: MQL
description: Cisco IOS XE SSH configuration
---

# cisco.iosxe.sshConfig

**Description**

Cisco IOS XE SSH configuration

**Fields**

| ID             | TYPE   | DESCRIPTION                                                |
|----------------|--------|------------------------------------------------------------|
| enabled        | bool   | SSH enabled flag                                           |
| version        | string | SSH Server version (e.g., 1.0, 2.0)                        |
| timeoutSeconds | int    | SSH login attempt timeout in seconds (maximum 120 seconds) |
| maxRetries     | int    | Number of authentication retries (maximum is 5)            |
| modulusSize    | int    | Modulus size in bits (e.g. 2048)                           |

