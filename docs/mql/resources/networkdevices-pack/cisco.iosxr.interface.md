---
title: cisco.iosxr.interface
id: cisco.iosxr.interface
sidebar_label: cisco.iosxr.interface
displayed_sidebar: MQL
description: Cisco IOS XR Network interface resource
---

# cisco.iosxr.interface

**Description**

Cisco IOS XR Network interface resource

**Fields**

| ID            | TYPE   | DESCRIPTION                                   |
| ------------- | ------ | --------------------------------------------- |
| name          | string | Interface name/identifier                     |
| description   | string | Interface description                         |
| adminState    | string | Administrative state (up/down)                |
| linkStatus    | string | Link status (up/down)                         |
| hardwareType  | string | Hardware type (e.g., VLAN, Ethernet)          |
| encapsulation | string | Encapsulation type (e.g., 802.1Q Virtual LAN) |
| macAddress    | string | MAC address                                   |
| bia           | string | Burned-in address                             |
| ipAddress     | string | IP address with subnet mask                   |
| mtu           | string | Maximum transmission unit                     |
| bandwidth     | string | Interface bandwidth                           |
| speed         | string | Interface speed                               |
| duplex        | string | Duplex setting (full/half)                    |
| vlanId        | string | VLAN ID for VLAN interfaces                   |
| inputPps      | string | Input packet rate (packets per second)        |
| outputPps     | string | Output packet rate (packets per second)       |
| inputRate     | string | Input bit rate                                |
| outputRate    | string | Output bit rate                               |
| inputPackets  | string | Total input packets                           |
| outputPackets | string | Total output packets                          |
| inputErrors   | string | Input error count                             |
| outputErrors  | string | Output error count                            |
| crc           | string | CRC error count                               |
| frame         | string | Frame error count                             |
| overrun       | string | Overrun error count                           |
| runts         | string | Runts error count                             |
| giants        | string | Giants error count                            |
| abort         | string | Abort error count                             |
| lastInput     | string | Time of last input                            |
| lastOutput    | string | Time of last output                           |
