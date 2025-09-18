---
title: cisco.iosxe.aaaAuthenticationLoginEntry
id: cisco.iosxe.aaaAuthenticationLoginEntry
sidebar_label: cisco.iosxe.aaaAuthenticationLoginEntry
displayed_sidebar: MQL
description: Cisco IOS XE AAA login configuration
---

# cisco.iosxe.aaaAuthenticationLoginEntry

**Description**

Cisco IOS XE AAA login configuration

**Fields**

| ID            | TYPE                                                                                                | DESCRIPTION                                       |
| ------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| listName      | string                                                                                              | Authentication method list name (e.g. default)    |
| methods       | string                                                                                              | Authentication methods string (e.g. group, local) |
| methodsGroups | &#91;&#93;[cisco.iosxe.aaaAuthentication.methodGroup](cisco.iosxe.aaaauthentication.methodgroup.md) | Parse methods into structured groups              |
