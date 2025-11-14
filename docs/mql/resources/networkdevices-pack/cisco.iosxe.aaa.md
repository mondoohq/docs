---
title: cisco.iosxe.aaa
id: cisco.iosxe.aaa
sidebar_label: cisco.iosxe.aaa
displayed_sidebar: MQL
description: Cisco IOS XE Authentication, Authorization, and Accounting (AAA) configuration
---

# cisco.iosxe.aaa

**Description**

Cisco IOS XE Authentication, Authorization, and Accounting (AAA) configuration

**Fields**

| ID                | TYPE                                                                                              | DESCRIPTION                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------- |
| newModelEnabled   | bool                                                                                              | Whether the aaa new model is enabled                                            |
| loginEntries      | &#91;&#93;[cisco.iosxe.aaaAuthenticationLoginEntry](cisco.iosxe.aaaauthenticationloginentry.md)   | All the authentication login entries, obtained by running 'show running-config  | include aaa authentication login'  |
| enableEntries     | &#91;&#93;[cisco.iosxe.aaaAuthenticationEnableEntry](cisco.iosxe.aaaauthenticationenableentry.md) | All the authentication enable entries, obtained by running 'show running-config | include aaa authentication enable' |
| accountingRecords | &#91;&#93;[cisco.iosxe.accountingEntry](cisco.iosxe.accountingentry.md)                           | All the accounting records, obtained by running 'show running-config            | include aaa accounting'            |
