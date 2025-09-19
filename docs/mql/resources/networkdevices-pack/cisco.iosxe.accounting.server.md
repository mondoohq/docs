---
title: cisco.iosxe.accounting.server
id: cisco.iosxe.accounting.server
sidebar_label: cisco.iosxe.accounting.server
displayed_sidebar: MQL
description: Cisco accounting entry server. These servers are where accounting records are sent to.
---

# cisco.iosxe.accounting.server

**Description**

Cisco accounting entry server. These servers are where accounting records are sent to.

**Fields**

| ID      | TYPE   | DESCRIPTION                                                                                                                                   |
| ------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| name    | string | The name of the server. This can be built-in servers, such as 'radius' or 'tacacs+' or it can be 'group \<name\>' to indicate a custom group. |
| isGroup | bool   | indicates if it's a custom group                                                                                                              |
