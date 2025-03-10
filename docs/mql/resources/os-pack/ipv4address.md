---
title: ipv4Address
id: ipv4Address
sidebar_label: ipv4Address
displayed_sidebar: MQL
description: IPv4 address with additional networking details
---

# ipv4Address

**Description**

IPv4 address with additional networking details

**Fields**

| ID        | TYPE   | DESCRIPTION                                                              |
| --------- | ------ | ------------------------------------------------------------------------ |
| ip        | ip     | Unique number that identifies a device on a network (e.g. 172.31.24.71)  |
| subnet    | ip     | Logical subdivision of a network (e.g. 172.31.16.0/20)                   |
| cidr      | ip     | Classless Inter-Domain Routing notation (e.g. 172.31.24.71/20)           |
| broadcast | string | Network address used to transmit to all devices connected to a network   |
| gateway   | string | IP address that acts as the entry point to another, or external, network |
