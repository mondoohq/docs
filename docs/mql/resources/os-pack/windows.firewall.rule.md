---
title: windows.firewall.rule
id: windows.firewall.rule
sidebar_label: windows.firewall.rule
displayed_sidebar: MQL
description: Windows Firewall rule entry
---

# windows.firewall.rule

**Description**

Windows Firewall rule entry

**Fields**

| ID                    | TYPE   | DESCRIPTION                                                                                                                          |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| instanceID            | string | A string that uniquely identifies this instance within the policy store                                                              |
| name                  | string | Name of the rule                                                                                                                     |
| displayName           | string | Localized name of this rule                                                                                                          |
| description           | string | Brief description of the rule                                                                                                        |
| displayGroup          | string | The group that this rule belongs to                                                                                                  |
| enabled               | int    | Whether this rule is administratively enabled or disabled, Values: enabled (1), disabled (2)                                         |
| direction             | int    | Specifies which direction of traffic to match with this rule, Values: inbound (1), outbound (2)                                      |
| action                | int    | Specifies the action to take on traffic that matches this rule                                                                       |
| edgeTraversalPolicy   | int    | Specifies how this firewall rule will handle edge traversal cases, Values: block (0), allow (1), defer to user (2), defer to app (3) |
| looseSourceMapping    | bool   | Whether to group UDP packets into conversations based on the local address, local port, and remote port                              |
| localOnlyMapping      | bool   | Whether to group UDP packets into conversations based only on the local address and port                                             |
| primaryStatus         | int    | PrimaryStatus provides a high level status value, Values: unknown (0), OK (1), degraded (2), error (3)                               |
| status                | string | Detailed status of the rule                                                                                                          |
| enforcementStatus     | string | Whether this object is retrieved from the ActiveStore                                                                                |
| policyStoreSource     | string | Contains the path to the policy store where this rule originally came from                                                           |
| policyStoreSourceType | int    | Describes the type of policy store where this rule originally came from                                                              |
