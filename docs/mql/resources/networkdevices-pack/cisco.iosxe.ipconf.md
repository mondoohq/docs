---
title: cisco.iosxe.ipConf
id: cisco.iosxe.ipConf
sidebar_label: cisco.iosxe.ipConf
displayed_sidebar: MQL
description: Cisco IOS XE IPv4 configuration.
---

# cisco.iosxe.ipConf

**Description**

Cisco IOS XE IPv4 configuration.

**Fields**

| ID                        | TYPE                                              | DESCRIPTION                                                                                                              |
| ------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| sourceRouteEnabled        | bool                                              | Whether source routing is enabled.                                                                                       |
| tftpSourceInterfaceName   | string                                            | The name of the interface used for TFTP connections, if configured.                                                      |
| tftpSourceInterface       | [cisco.iosxe.interface](cisco.iosxe.interface.md) | The interface used for TFTP connections, if configured. Retrieved by using the 'tftpSourceInterfaceName' field.          |
| radiusSourceInterfaceName | string                                            | The name of the interface used for outgoing RADIUS packets, if configured.                                               |
| radiusSourceInterface     | [cisco.iosxe.interface](cisco.iosxe.interface.md) | The interface used for outgoing RADIUS packets, if configured. Retrieved by using the 'radiusSourceInterfaceName' field. |
| tacacsSourceInterfaceName | string                                            | The name of the interface used for outgoing TACACS packets, if configured.                                               |
| tacacsSourceInterface     | [cisco.iosxe.interface](cisco.iosxe.interface.md) | The interface used for outgoing TACACS packets, if configured. Retrieved by using the 'tacacsSourceInterfaceName' field. |
