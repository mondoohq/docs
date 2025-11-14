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

| ID              | TYPE                                                                                            | DESCRIPTION                                                                        |
|-----------------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| name            | string                                                                                          | The name of the interface the configuration settings relate to.                    |
| proxyArpEnabled | bool                                                                                            | Whether the proxy ARP service is enabled on the interface.                         |
| aclInboundName  | string                                                                                          | Optional. The name of the ACL applied to incoming traffic on the interface.        |
| aclInbound      | [cisco.iosxe.accessListEntry](cisco.iosxe.accesslistentry.md)                                   | Optional. The inbound ACL entry applied to the interface.                          |
| aclOutboundName | string                                                                                          | Optional. The name of the ACL applied to outgoing traffic on the interface.        |
| aclOutbound     | [cisco.iosxe.accessListEntry](cisco.iosxe.accesslistentry.md)                                   | Optional. The outbound ACL entry applied to the interface.                         |
| urpf            | [cisco.iosxe.interfaceConfig.urpf](cisco.iosxe.interfaceconfig.urpf.md)                         | The unicast reverse path forwarding (uRPF) configuration applied to the interface. |
| ipEigrpConfig   | &#91;&#93;[cisco.iosxe.interfaceConfig.eigrpConfig](cisco.iosxe.interfaceconfig.eigrpconfig.md) | Optional. The IP EIGRP configuration applied to the interface.                     |
| ospfConfig      | [cisco.iosxe.interfaceConfig.ospfConfig](cisco.iosxe.interfaceconfig.ospfconfig.md)             | Optional. The IP OSPF configuration applied to the interface.                      |

