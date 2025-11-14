---
title: cisco.iosxr.aaaGroupServersEntry
id: cisco.iosxr.aaaGroupServersEntry
sidebar_label: cisco.iosxr.aaaGroupServersEntry
displayed_sidebar: MQL
description: Cisco IOS XR AAA group server configuration
---

# cisco.iosxr.aaaGroupServersEntry

**Description**

Cisco IOS XR AAA group server configuration

**Fields**

| ID               | TYPE   | DESCRIPTION                                             |
|------------------|--------|---------------------------------------------------------|
| protocol         | string | Protocol of the server group (e.g., tacacs+, radius)    |
| groupName        | string | Group name                                              |
| serverHost       | string | (Optional) TACACS+/RADIUS server IP address or hostname |
| tacacsServerPort | int    | (Optional) TACACS+ server port                          |
| radiusAuthPort   | int    | (Optional) RADIUS server authentication port            |
| radiusAcctPort   | int    | (Optional) RADIUS server accounting port                |
| vrfInstanceName  | string | (Optional) VRF instance name for the server group       |

