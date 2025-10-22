---
title: cisco.nxos.runAaaAuthenticationLoginEntry
id: cisco.nxos.runAaaAuthenticationLoginEntry
sidebar_label: cisco.nxos.runAaaAuthenticationLoginEntry
displayed_sidebar: MQL
description: Cisco NX-OS AAA authentication login method list from running config
---

# cisco.nxos.runAaaAuthenticationLoginEntry

**Description**

Cisco NX-OS AAA authentication login method list from running config

**Fields**

| ID            | TYPE                                                         | DESCRIPTION                                |
| ------------- | ------------------------------------------------------------ | ------------------------------------------ |
| name          | string                                                       | Method list name                           |
| methods       | string                                                       | Authentication methods in this method list |
| methodsGroups | &#91;&#93;cisco.nxos.aaaAuthenticationLoginEntry.methodGroup | Parse methods into structured groups       |
