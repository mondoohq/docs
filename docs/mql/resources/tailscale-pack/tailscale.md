---
title: tailscale
id: tailscale
sidebar_label: tailscale
displayed_sidebar: MQL
description: Tailscale organization
---

# tailscale

**Description**

Tailscale organization

**Fields**

| ID          | TYPE                                              | DESCRIPTION                               |
| ----------- | ------------------------------------------------- | ----------------------------------------- |
| tailnet     | string                                            | Tailnet organization name                 |
| devices     | &#91;&#93;[tailscale.device](tailscale.device.md) | List devices in a tailnet                 |
| users       | &#91;&#93;[tailscale.user](tailscale.user.md)     | List users of a tailnet                   |
| nameservers | &#91;&#93;string                                  | List global DNS nameservers for a tailnet |
