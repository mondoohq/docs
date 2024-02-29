---
title: ntp.conf
id: ntp.conf
sidebar_label: ntp.conf
displayed_sidebar: MQL
description: NTP service configuration
---

# ntp.conf

**Description**

NTP service configuration

**Init**

ntp.conf(path string)

**Fields**

| ID       | TYPE             | DESCRIPTION                                             |
| -------- | ---------------- | ------------------------------------------------------- |
| file     | [file](file.md)  | File of the NTP service configuration                   |
| content  | string           | Raw contents of the NTP service configuration           |
| settings | &#91;&#93;string | List of settings for the NTP service                    |
| servers  | &#91;&#93;string | List of servers for the NTP service                     |
| restrict | &#91;&#93;string | List of access control restrictions for the NTP service |
| fudge    | &#91;&#93;string | Additional information for clock drivers                |
