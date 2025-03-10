---
title: tailscale.device
id: tailscale.device
sidebar_label: tailscale.device
displayed_sidebar: MQL
description: A Tailscale device (sometimes referred to as node or machine)
---

# tailscale.device

**Description**

A Tailscale device (sometimes referred to as node or machine)

**Init**

tailscale.device(id string)

**Fields**

| ID                        | TYPE             | DESCRIPTION                                                                                                        |
| ------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| id                        | string           | Legacy identifier for a device                                                                                     |
| hostname                  | string           | Preferred identifier for a device (not supported yet), nodeId string, Machine name in the admin console            |
| os                        | string           | Operating system that the device is running                                                                        |
| name                      | string           | MagicDNS name of the device                                                                                        |
| user                      | string           | User who registered the node (For untagged nodes, this user is the device owner.)                                  |
| tags                      | &#91;&#93;string | An identity for the device that is separate from human users (used as part of an ACL to restrict access)           |
| addresses                 | &#91;&#93;string | List of Tailscale IP addresses for the device, including both IPv4 and IPv6 addresses                              |
| clientVersion             | string           | Version of the Tailscale client software (empty for external devices)                                              |
| machineKey                | string           | Machine key used by Tailscale (empty for external devices)                                                         |
| nodeKey                   | string           | Node key primarily used by Tailscale and required for select operations, such as adding a node to a locked tailnet |
| tailnetLockError          | string           | Issue with the tailnet lock node-key signature on this device (only populated when tailnet lock is enabled)        |
| tailnetLockKey            | string           | Node's tailnet lock key                                                                                            |
| blocksIncomingConnections | bool             | Whether the device is blocked from accepting connections over Tailscale, including pings                           |
| authorized                | bool             | Whether the device is authorized to join the tailnet                                                               |
| isExternal                | bool             | Whether a device is shared into the tailnet (rather than a member of the tailnet)                                  |
| keyExpiryDisabled         | bool             | Whether key expiration is disabled for the device                                                                  |
| updateAvailable           | bool             | Whether a Tailscale client version upgrade is available (empty for external devices)                               |
| createdAt                 | time             | Date when the device was added to the tailnet (empty for external devices)                                         |
| expiresAt                 | time             | Expiration date of the device's auth key                                                                           |
| lastSeenAt                | time             | When device was last active on the tailnet                                                                         |
