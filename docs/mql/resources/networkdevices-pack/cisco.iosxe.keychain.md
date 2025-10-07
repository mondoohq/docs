---
title: cisco.iosxe.keyChain
id: cisco.iosxe.keyChain
sidebar_label: cisco.iosxe.keyChain
displayed_sidebar: MQL
description: Cisco IOS XE Key Chain resource.
---

# cisco.iosxe.keyChain

**Description**

Cisco IOS XE Key Chain resource.

**Fields**

| ID          | TYPE                                                              | DESCRIPTION                                |
| ----------- | ----------------------------------------------------------------- | ------------------------------------------ |
| name        | string                                                            | The name of the key chain.                 |
| description | string                                                            | Optional. A description for the key chain. |
| keys        | &#91;&#93;[cisco.iosxe.keyChain.key](cisco.iosxe.keychain.key.md) | The keys associated to the key chain.      |
