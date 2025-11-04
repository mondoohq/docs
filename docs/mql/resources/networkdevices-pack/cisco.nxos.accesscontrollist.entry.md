---
title: cisco.nxos.accessControlList.entry
id: cisco.nxos.accessControlList.entry
sidebar_label: cisco.nxos.accessControlList.entry
displayed_sidebar: MQL
description: Cisco NX-OS Access Control List (ACL) Entry
---

# cisco.nxos.accessControlList.entry

**Description**

Cisco NX-OS Access Control List (ACL) Entry

**Fields**

| ID                  | TYPE   | DESCRIPTION                                                 |
| ------------------- | ------ | ----------------------------------------------------------- |
| seq                 | int    | Sequence Number                                             |
| action              | string | Action (permit/deny)                                        |
| remark              | string | ACL Remark                                                  |
| source              | string | Source Address / Mask / MAC                                 |
| destination         | string | Destination Address / Mask / MAC                            |
| protocol            | string | Protocol (ip/tcp/udp/icmp/icmpv6/arp/etc)                   |
| sourceAddress       | string | Source Address / Mask, MAC address or `any` keyword,        |
| destinationAddress  | string | Destination Address / Mask, MAC address or `any` keyword,   |
| sourceWildcard      | string | Source Wildcard Mask (if any)                               |
| destinationWildcard | string | Destination Wildcard Mask (if any)                          |
| port                | string | Port expression (eq/gt/lt/range)                            |
| modifiers           | string | Modifiers (port expression extensions / MAC protocol / etc) |
