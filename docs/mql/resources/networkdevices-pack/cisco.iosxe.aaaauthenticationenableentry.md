---
title: cisco.iosxe.aaaAuthenticationEnableEntry
id: cisco.iosxe.aaaAuthenticationEnableEntry
sidebar_label: cisco.iosxe.aaaAuthenticationEnableEntry
displayed_sidebar: MQL
description: Cisco IOS XE AAA enable configuration
---

# cisco.iosxe.aaaAuthenticationEnableEntry

**Description**

Cisco IOS XE AAA enable configuration

**Fields**

| ID            | TYPE                                                                                                | DESCRIPTION                                       |
| ------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| listName      | string                                                                                              | Authentication method list name (e.g. default)    |
| methods       | string                                                                                              | Authentication methods string (e.g. group, local) |
| methodsGroups | &#91;&#93;[cisco.iosxe.aaaAuthentication.methodGroup](cisco.iosxe.aaaauthentication.methodgroup.md) | Parse methods into structured groups              |
