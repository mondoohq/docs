---
title: cisco.iosxe.interfaceConfig.urpf
id: cisco.iosxe.interfaceConfig.urpf
sidebar_label: cisco.iosxe.interfaceConfig.urpf
displayed_sidebar: MQL
description: Cisco IOS XE unicast reverse path forwarding (uRPF) setting applied to the interface.
---

# cisco.iosxe.interfaceConfig.urpf

**Description**

Cisco IOS XE unicast reverse path forwarding (uRPF) setting applied to the interface.

**Fields**

| ID                   | TYPE   | DESCRIPTION                                                                                                                                                                      |
|----------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| enabled              | bool   | Whether uRPF is enabled on the interface.                                                                                                                                        |
| mode                 | string | Optional. When uRPF is enabled, the uRPF mode used to examine incoming packets. Can be `any` (loose) or `rx` (strict).                                                           |
| sourceBindingEnabled | bool   | Optional. When uRPF is enabled, whether the source IPv4 and MAC address binding is enabled.                                                                                      |
| allowDefault         | bool   | Optional. Whether the use of the default route is used for verification.                                                                                                         |
| allowSelfPing        | bool   | Optional. When uRPF is enabled, whether a router is allowed to ping its own interfaces., Use caution when enabling this setting because it opens a denial-of-service (DoS) hole. |

