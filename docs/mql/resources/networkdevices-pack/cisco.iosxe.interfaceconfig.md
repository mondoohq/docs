---
title: cisco.iosxe.interfaceConfig
id: cisco.iosxe.interfaceConfig
sidebar_label: cisco.iosxe.interfaceConfig
displayed_sidebar: MQL
description: Cisco IOS XE Interface configuration
---

# cisco.iosxe.interfaceConfig

**Description**

Cisco IOS XE Interface configuration

**Fields**

| ID              | TYPE                                                          | DESCRIPTION                                                                 |
| --------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------- |
| name            | string                                                        | The name of the interface the configuration settings relate to.             |
| proxyArpEnabled | bool                                                          | Whether the proxy ARP service is enabled on the interface.                  |
| aclInboundName  | string                                                        | Optional. The name of the ACL applied to incoming traffic on the interface. |
| aclInbound      | [cisco.iosxe.accessListEntry](cisco.iosxe.accesslistentry.md) | Optional. The inbound ACL entry applied to the interface.                   |
| aclOutboundName | string                                                        | Optional. The name of the ACL applied to outgoing traffic on the interface. |
| aclOutbound     | [cisco.iosxe.accessListEntry](cisco.iosxe.accesslistentry.md) | Optional. The outbound ACL entry applied to the interface.                  |
