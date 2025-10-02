---
title: cisco.iosxe.accessListEntry.rule
id: cisco.iosxe.accessListEntry.rule
sidebar_label: cisco.iosxe.accessListEntry.rule
displayed_sidebar: MQL
---

# cisco.iosxe.accessListEntry.rule

**Fields**

| ID                | TYPE   | DESCRIPTION                                                  |
| ----------------- | ------ | ------------------------------------------------------------ |
| acl               | string | ACL name                                                     |
| protocol          | string | Protocol (ip/tcp/udp)                                        |
| action            | string | Action (permit/deny)                                         |
| priority          | int    | The evaluation order of the access list entry.               |
| sourceIp          | string | source IP address or `any`                                   |
| sourceIpMask      | string | Optional. The mask (wildcard) of the source IP address.      |
| destinationIp     | string | destination IP address or `any`                              |
| destinationIpMask | string | Optional. The mask (wildcard) of the destination IP address. |
