---
title: cisco.iosxr.aaaAccountingEntry
id: cisco.iosxr.aaaAccountingEntry
sidebar_label: cisco.iosxr.aaaAccountingEntry
displayed_sidebar: MQL
description: Cisco IOS XR AAA accounting configuration
---

# cisco.iosxr.aaaAccountingEntry

**Description**

Cisco IOS XR AAA accounting configuration

**Fields**

| ID            | TYPE                                                                                                  | DESCRIPTION                                                    |
| ------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| listName      | string                                                                                                | Accounting method list name (e.g. default)                     |
| loggerType    | string                                                                                                | Accounting logger type (e.g. exec, commands, system)           |
| loggingMethod | string                                                                                                | Accounting method (e.g. start-stop, stop-only)                 |
| targets       | string                                                                                                | Raw accounting targets string, e.g. "group tacacs_group local" |
| targetsGroups | &#91;&#93;[cisco.iosxr.aaaAccountingEntry.targetGroup](cisco.iosxr.aaaaccountingentry.targetgroup.md) | Parse targets into structured groups                           |
