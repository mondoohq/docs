---
title: cisco.iosxr.runRouterIsisEntry
id: cisco.iosxr.runRouterIsisEntry
sidebar_label: cisco.iosxr.runRouterIsisEntry
displayed_sidebar: MQL
description: Cisco IOS XR Routing ISIS configuration from running config
---

# cisco.iosxr.runRouterIsisEntry

**Description**

Cisco IOS XR Routing ISIS configuration from running config

**Fields**

| ID                  | TYPE                                                                                  | DESCRIPTION                                |
| ------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------ |
| name                | string                                                                                | Process name                               |
| lspPasswordKeyChain | string                                                                                | LSP Password Keychain name (if configured) |
| interfaces          | &#91;&#93;[cisco.iosxr.runRouterIsisInterface](cisco.iosxr.runrouterisisinterface.md) | Interfaces in this ISIS process            |
