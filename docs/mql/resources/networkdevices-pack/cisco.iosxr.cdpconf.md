---
title: cisco.iosxr.cdpConf
id: cisco.iosxr.cdpConf
sidebar_label: cisco.iosxr.cdpConf
displayed_sidebar: MQL
description: Cisco IOS XR CDP configuration from `show cdp`
---

# cisco.iosxr.cdpConf

**Description**

Cisco IOS XR CDP configuration from `show cdp`

**Fields**

| ID                      | TYPE   | DESCRIPTION                                             |
| ----------------------- | ------ | ------------------------------------------------------- |
| disabled                | bool   | CDP disabled flag                                       |
| frequencyString         | string | CDP packets sending frequency string, e.g. "60 seconds" |
| holdtimeString          | string | CDP holdtime string, e.g. "180 seconds"                 |
| v2AdvertisementsEnabled | bool   | CDPv2 Advertisements enabled flag                       |
