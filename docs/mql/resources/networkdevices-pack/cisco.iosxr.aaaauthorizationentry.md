---
title: cisco.iosxr.aaaAuthorizationEntry
id: cisco.iosxr.aaaAuthorizationEntry
sidebar_label: cisco.iosxr.aaaAuthorizationEntry
displayed_sidebar: MQL
description: Cisco IOS XR AAA authorization configuration
---

# cisco.iosxr.aaaAuthorizationEntry

**Description**

Cisco IOS XR AAA authorization configuration

**Fields**

| ID            | TYPE                                                                                                        | DESCRIPTION                                                    |
|---------------|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| listName      | string                                                                                                      | Authorization method list name (e.g. default)                  |
| type          | string                                                                                                      | Authorization type (e.g. exec, commands, system)               |
| targets       | string                                                                                                      | Raw accounting targets string, e.g. "group tacacs_group local" |
| targetsGroups | &#91;&#93;[cisco.iosxr.aaaAuthorizationEntry.targetGroup](cisco.iosxr.aaaauthorizationentry.targetgroup.md) | Parse targets into structured groups                           |

