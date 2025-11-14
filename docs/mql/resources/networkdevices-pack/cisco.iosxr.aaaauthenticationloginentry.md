---
title: cisco.iosxr.aaaAuthenticationLoginEntry
id: cisco.iosxr.aaaAuthenticationLoginEntry
sidebar_label: cisco.iosxr.aaaAuthenticationLoginEntry
displayed_sidebar: MQL
description: Cisco IOS XR AAA authentication login configuration
---

# cisco.iosxr.aaaAuthenticationLoginEntry

**Description**

Cisco IOS XR AAA authentication login configuration

**Fields**

| ID            | TYPE                                                                                                                    | DESCRIPTION                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| listName      | string                                                                                                                  | Authentication method list name (e.g. default)    |
| methods       | string                                                                                                                  | Authentication methods string (e.g. group, local) |
| methodsGroups | &#91;&#93;[cisco.iosxr.aaaAuthenticationLoginEntry.methodGroup](cisco.iosxr.aaaauthenticationloginentry.methodgroup.md) | Parse methods into structured groups              |

