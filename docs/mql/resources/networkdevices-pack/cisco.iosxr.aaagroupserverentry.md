---
title: cisco.iosxr.aaaGroupServerEntry
id: cisco.iosxr.aaaGroupServerEntry
sidebar_label: cisco.iosxr.aaaGroupServerEntry
displayed_sidebar: MQL
description: Cisco IOS XR AAA group server configuration
---

# cisco.iosxr.aaaGroupServerEntry

**Description**

Cisco IOS XR AAA group server configuration

**Fields**

| ID               | TYPE   | DESCRIPTION                                          |
| ---------------- | ------ | ---------------------------------------------------- |
| protocol         | string | Protocol of the server group (e.g., tacacs+, radius) |
| groupName        | string | Group name                                           |
| tacacsServerIp   | string | (Optional) TACACS+ server IP address                 |
| tacacsServerPort | int    | (Optional) TACACS+ server port                       |
| vrfInstanceName  | string | (Optional) VRF instance name for the server group    |
