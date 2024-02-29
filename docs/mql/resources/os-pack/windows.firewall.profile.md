---
title: windows.firewall.profile
id: windows.firewall.profile
sidebar_label: windows.firewall.profile
displayed_sidebar: MQL
description: Windows Firewall profile entry
---

# windows.firewall.profile

**Description**

Windows Firewall profile entry

**Fields**

| ID                              | TYPE   | DESCRIPTION                                                                                                            |
| ------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| instanceID                      | string |                                                                                                                        |
| name                            | string | Name of the profile                                                                                                    |
| enabled                         | int    | Whether the firewall is enabled on this profile                                                                        |
| defaultInboundAction            | int    | Default action for inbound traffic                                                                                     |
| defaultOutboundAction           | int    | Default action for outbound traffic                                                                                    |
| allowInboundRules               | int    | Whether administrators can create firewall rules that allow unsolicited inbound traffic (if 0, such rules are ignored) |
| allowLocalFirewallRules         | int    | Whether local firewall rules should merge into the effective policy along with group policy settings                   |
| allowLocalIPsecRules            | int    | Whether local IPsec rules should merge into the effective policy along with rules from group policy                    |
| allowUserApps                   | int    | Whether to respect user allowed applications created in the legacy firewall                                            |
| allowUserPorts                  | int    | Whether to respect globally opened ports created in the legacy firewall                                                |
| allowUnicastResponseToMulticast | int    | Whether to allow unicast responses to multicast traffic                                                                |
| notifyOnListen                  | int    | Whether to notify users when an application listens on a port that is closed                                           |
| enableStealthModeForIPsec       | int    | Whether to use stealth mode for IPsec-protected traffic                                                                |
| logMaxSizeKilobytes             | int    | Maximum size the log file can reach before being rotated                                                               |
| logAllowed                      | int    | Whether to log allowed packets                                                                                         |
| logBlocked                      | int    | Whether to log blocked traffic                                                                                         |
| logIgnored                      | int    | Whether to log an event when rules are ignored                                                                         |
| logFileName                     | string | Filename in which to store the firewall log                                                                            |
