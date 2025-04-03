---
title: networkInterface
id: networkInterface
sidebar_label: networkInterface
displayed_sidebar: MQL
description: Detailed information of a network interface
---

# networkInterface

**Description**

Detailed information of a network interface

**Fields**

| ID      | TYPE                                | DESCRIPTION                                                         |
| ------- | ----------------------------------- | ------------------------------------------------------------------- |
| name    | string                              | Name of the network interface                                       |
| mac     | string                              | Unique 12-digit hexadecimal identifier assigned by the manufacturer |
| vendor  | string                              | Company that manufactures the network interface                     |
| ips     | &#91;&#93;[ipAddress](ipaddress.md) | List of IP addresses assigned to the network interface (v4 and v6)  |
| mtu     | int                                 | Maximum transmission unit                                           |
| flags   | &#91;&#93;string                    | Information about an interface's status and capabilities            |
| active  | bool                                | Status of the network interface                                     |
| virtual | bool                                | Whether a network interface is virtual of not                       |
