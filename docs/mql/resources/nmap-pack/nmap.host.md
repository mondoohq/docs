---
title: nmap.host
id: nmap.host
sidebar_label: nmap.host
displayed_sidebar: MQL
description: Nmap host
---

# nmap.host

**Description**

Nmap host

**Init**

nmap.host(name string)

**Fields**

| ID        | TYPE                                | DESCRIPTION                                 |
| --------- | ----------------------------------- | ------------------------------------------- |
| name      | string                              | Name of the host                            |
| distance  | dict                                | Distance to the host                        |
| os        | dict                                | Information about the host operating system |
| endTime   | time                                |                                             |
| comment   | string                              | Comments about the host                     |
| trace     | dict                                | Trace route information                     |
| addresses | &#91;&#93;dict                      | Addresses associated with the host          |
| hostnames | &#91;&#93;dict                      | Hostnames associated with the host          |
| ports     | &#91;&#93;[nmap.port](nmap.port.md) | Ports on the host                           |
| state     | string                              | State of the host (e.g., up or down)        |
