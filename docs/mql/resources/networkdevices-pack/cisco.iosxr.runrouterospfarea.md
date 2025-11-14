---
title: cisco.iosxr.runRouterOspfArea
id: cisco.iosxr.runRouterOspfArea
sidebar_label: cisco.iosxr.runRouterOspfArea
displayed_sidebar: MQL
description: Cisco IOS XR Routing OSPF Area configuration from running config
---

# cisco.iosxr.runRouterOspfArea

**Description**

Cisco IOS XR Routing OSPF Area configuration from running config

**Fields**

| ID                 | TYPE   | DESCRIPTION                                   |
| ------------------ | ------ | --------------------------------------------- |
| processId          | int    | Process ID                                    |
| addressFamily      | string | Address family (IPv4/IPv6)                    |
| areaId             | int    | Area ID (e.g. 1)                              |
| authKeyChain       | string | Authentication key chain name (if configured) |
| msgDigestKeyId     | int    | Message digest key id (if configured)         |
| msgDigestAlgorithm | string | Message digest algorithm (if configured)      |
| msgDigestKey       | string | Message digest key value (if configured)      |
