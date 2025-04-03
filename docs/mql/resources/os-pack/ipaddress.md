---
title: ipAddress
id: ipAddress
sidebar_label: ipAddress
displayed_sidebar: MQL
description: IP address (v4 or v6) with additional networking details
---

# ipAddress

**Description**

IP address (v4 or v6) with additional networking details

**Fields**

| ID        | TYPE | DESCRIPTION                                                                                                    |
| --------- | ---- | -------------------------------------------------------------------------------------------------------------- |
| ip        | ip   | Unique number that identifies a device on a network (e.g. 172.31.24.71 or 2001:0:2851:782c:869:1f7d:a331:f3e1) |
| subnet    | ip   | Logical subdivision of a network (e.g. 172.31.16.0/20 or 2001:db8::/64)                                        |
| cidr      | ip   | Classless Inter-Domain Routing notation (e.g. 172.31.24.71/20 or 2001:0:2851:782c:869:1f7d:a331:f3e1/64)       |
| broadcast | ip   | Network address used to transmit to all devices connected to a network                                         |
| gateway   | ip   | IP address that acts as the entry point to another, or external, network                                       |
