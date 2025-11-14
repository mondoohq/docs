---
title: cisco.iosxe.accountingEntry
id: cisco.iosxe.accountingEntry
sidebar_label: cisco.iosxe.accountingEntry
displayed_sidebar: MQL
description: Cisco Accounting entry
---

# cisco.iosxe.accountingEntry

**Description**

Cisco Accounting entry

**Fields**

| ID             | TYPE                                                                        | DESCRIPTION                                                                                                             |
|----------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| type           | string                                                                      | The type of accounting entry, possible values are: auth-proxy | system | network | exec | connection | commands | dot1x |
| privilegeLevel | int                                                                         | Privilege level of commands to account (1–15). Level 15 is full admin. Only applicable if type is 'commands'            |
| methodList     | string                                                                      | AAA method list to use for accounting. guarantee-first ensures the first record is sent before the command executes.    |
| vrf            | string                                                                      | An optional virtual routing and forwarding (VRF) configuration. Only applicable if type is 'system'.                    |
| broadcast      | bool                                                                        | Optional, whether the accounting records are sent to multiple AAA servers.                                              |
| accountingType | string                                                                      | When to send records. start-stop = before & after execution, stop-only = only after, none = disables accounting.        |
| serverMethods  | string                                                                      | The raw, unstructured list of accounting servers. Use 'servers' for a structured output                                 |
| servers        | &#91;&#93;[cisco.iosxe.accounting.server](cisco.iosxe.accounting.server.md) | Where the accounting records are being sent to.                                                                         |

