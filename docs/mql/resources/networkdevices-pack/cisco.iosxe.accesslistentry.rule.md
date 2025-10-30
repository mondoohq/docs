---
title: cisco.iosxe.accessListEntry.rule
id: cisco.iosxe.accessListEntry.rule
sidebar_label: cisco.iosxe.accessListEntry.rule
displayed_sidebar: MQL
description: Cisco IOS XE access list rule configuration
---

# cisco.iosxe.accessListEntry.rule

**Description**

Cisco IOS XE access list rule configuration

**Fields**

| ID                            | TYPE   | DESCRIPTION                                                      |
| ----------------------------- | ------ | ---------------------------------------------------------------- |
| acl                           | string | ACL name                                                         |
| protocol                      | string | Protocol (ip/tcp/udp)                                            |
| action                        | string | Action (permit/deny)                                             |
| priority                      | int    | The evaluation order of the access list entry.                   |
| sourceAddress                 | ip     | Optional. Source IP address for the rule.                        |
| sourceWildcardMask            | ip     | Optional. Source IPv4 wildcard mask for the source ip.           |
| destinationAddress            | ip     | Optional. Destination IP address for the rule.                   |
| destinationWildcardMask       | ip     | Optional. Destination IPv4 wildcard mask for the destination ip. |
| sourceNetworkObjectGroup      | string | Optional. The source network object group for the rule.          |
| destinationNetworkObjectGroup | string | Optional. The destination network object group for the rule.     |
