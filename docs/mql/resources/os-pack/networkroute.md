---
title: networkRoute
id: networkRoute
sidebar_label: networkRoute
displayed_sidebar: MQL
description: information on the network routes
---

# networkRoute

**Description**

information on the network routes

**Fields**

| ID          | TYPE                                    | DESCRIPTION                                                      |
| ----------- | --------------------------------------- | ---------------------------------------------------------------- |
| destination | string                                  | Destination network or destination subnet for this route         |
| gateway     | string                                  | Gateway IP address for this route                                |
| flags       | &#91;&#93;string                        | Flags that describe route properties (e.g., 'UG' for up/gateway) |
| iface       | [networkInterface](networkinterface.md) | Network interface this route applies to                          |
