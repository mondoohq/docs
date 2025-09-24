---
title: cisco.interface
id: cisco.interface
sidebar_label: cisco.interface
displayed_sidebar: MQL
description: Cisco generic interface parser
---

# cisco.interface

**Description**

Cisco generic interface parser

**Init**

cisco.interface(iface string)

**Fields**

| ID       | TYPE   | DESCRIPTION                                              |
| -------- | ------ | -------------------------------------------------------- |
| iface    | string | Interface string to parse, e.g. "GigabitEthernet0/0/0/0" |
| type     | string | Interface type, e.g. "GigabitEthernet"                   |
| rack     | int    | Rack number, e.g. 0                                      |
| slot     | int    | (Route Processor) Slot number, e.g. 0                    |
| instance | int    | CPU Instance number, e.g. 0                              |
| port     | int    | Port number, e.g. 0                                      |
