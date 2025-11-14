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

| ID                         | TYPE                                              | DESCRIPTION                                                                                                                                                                       |
| -------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| httpEnabled                | bool                                              | Whether the HTTP server is enabled.                                                                                                                                               |
| httpsEnabled               | bool                                              | Whether HTTPS is enabled.                                                                                                                                                         |
| httpPort                   | int                                               | The HTTP port number, if configured.                                                                                                                                              |
| httpsPort                  | int                                               | The HTTPS port number, if configured.                                                                                                                                             |
| httpAuthenticationMethod   | string                                            | Optional. The HTTP authentication method, if configured.                                                                                                                          |
| httpWebAuthBanner          | string                                            | The webauth banner, displayed when a user connects to the server, if configured. This can either be a banner text, or a filepath pointing to a file, that is shown as the banner. |
| maxConnections             | int                                               | Optional. The maximum number of concurrent connections, if configured.                                                                                                            |
| connectionIdleDuration     | time                                              | Optional. The maximum duration the connection will be kept open without any activity, if configured.                                                                              |
| connectionLifetimeDuration | time                                              | Optional. The maximum duration the connection will be kept open, if configured.                                                                                                   |
| connectionMaxRequests      | int                                               | Optional. The maximum number of requests a connection can process before it is closed, if configured.                                                                             |
| connectionLingerDuration   | time                                              | Optional. The duration for which a connection will be kept open after sending a response, if configured.                                                                          |
| sourceRouteEnabled         | bool                                              | Whether source routing is enabled.                                                                                                                                                |
| tftpSourceInterfaceName    | string                                            | The name of the interface used for TFTP connections, if configured.                                                                                                               |
| tftpSourceInterface        | [cisco.iosxe.interface](cisco.iosxe.interface.md) | The interface used for TFTP connections, if configured. Retrieved by using the 'tftpSourceInterfaceName' field.                                                                   |
| radiusSourceInterfaceName  | string                                            | The name of the interface used for outgoing RADIUS packets, if configured.                                                                                                        |
| radiusSourceInterface      | [cisco.iosxe.interface](cisco.iosxe.interface.md) | The interface used for outgoing RADIUS packets, if configured. Retrieved by using the 'radiusSourceInterfaceName' field.                                                          |
| tacacsSourceInterfaceName  | string                                            | The name of the interface used for outgoing TACACS packets, if configured.                                                                                                        |
| tacacsSourceInterface      | [cisco.iosxe.interface](cisco.iosxe.interface.md) | The interface used for outgoing TACACS packets, if configured. Retrieved by using the 'tacacsSourceInterfaceName' field.                                                          |
