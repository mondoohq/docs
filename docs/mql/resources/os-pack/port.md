---
title: port
id: port
sidebar_label: port
displayed_sidebar: MQL
description: TCP/IP port on the system
---

# port

**Description**

TCP/IP port on the system

**Fields**

| ID            | TYPE                  | DESCRIPTION                            |
| ------------- | --------------------- | -------------------------------------- |
| protocol      | string                | Protocol of this port                  |
| port          | int                   | Port number                            |
| address       | string                | Local address of this port             |
| user          | [user](user.md)       | User configured for this port          |
| process       | [process](process.md) | Process that is connected to this port |
| state         | string                | State of this open port                |
| remoteAddress | string                | Remote address connected to this port  |
| remotePort    | int                   | Remote port connected to this port     |
| tls           | network.tls           | TLS on this port, if it is available   |
