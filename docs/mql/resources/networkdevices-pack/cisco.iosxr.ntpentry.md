---
title: cisco.iosxr.ntpEntry
id: cisco.iosxr.ntpEntry
sidebar_label: cisco.iosxr.ntpEntry
displayed_sidebar: MQL
description: Cisco IOS XR NTP configuration for Cisco IOS XR
---

# cisco.iosxr.ntpEntry

**Description**

Cisco IOS XR NTP configuration for Cisco IOS XR

**Fields**

| ID              | TYPE             | DESCRIPTION                          |
| --------------- | ---------------- | ------------------------------------ |
| authenticate    | bool             | Authentication enabled flag          |
| authKeys        | &#91;&#93;string | Authentication key IDs               |
| authKeyTypes    | &#91;&#93;string | Authentication key types (e.g., md5) |
| authKeyValues   | &#91;&#93;string | Authentication key values            |
| servers         | &#91;&#93;string | NTP servers                          |
| serverKeys      | &#91;&#93;string | NTP server keys                      |
| sourceInterface | string           | Source interface for NTP packets     |
| trustedKeys     | &#91;&#93;string | Trusted key IDs                      |
