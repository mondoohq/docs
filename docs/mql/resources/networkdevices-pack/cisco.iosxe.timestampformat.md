---
title: cisco.iosxe.timestampFormat
id: cisco.iosxe.timestampFormat
sidebar_label: cisco.iosxe.timestampFormat
displayed_sidebar: MQL
description: Cisco IOS XE Timestamp format configuration
---

# cisco.iosxe.timestampFormat

**Description**

Cisco IOS XE Timestamp format configuration

**Fields**

| ID           | TYPE   | DESCRIPTION                                                                                                                                                                         |
|--------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| messageType  | string | The type of messages this timestamp format applies to (debug or log).                                                                                                               |
| relativity   | string | Can be uptime or date time:, - `uptime` indicates the timestamp is the time since the device was last restarted., - `datetime` indicates the timestamp is the actual date and time. |
| milliseconds | bool   | Whether milliseconds are included in the timestamp.                                                                                                                                 |
| localTime    | bool   | Whether the timestamp is relative to the local time zone.                                                                                                                           |
| year         | bool   | Whether the year is included in the timestamp.                                                                                                                                      |
| showTimezone | bool   | Whether the time zone is included in the timestamp.                                                                                                                                 |

