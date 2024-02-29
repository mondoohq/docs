---
title: esxi.ntpconfig
id: esxi.ntpconfig
sidebar_label: esxi.ntpconfig
displayed_sidebar: MQL
description: vSphere ESXi NTP configuration resource
---

# esxi.ntpconfig

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Description**

vSphere ESXi NTP configuration resource

**Fields**

| ID     | TYPE             | DESCRIPTION                                                                                    |
| ------ | ---------------- | ---------------------------------------------------------------------------------------------- |
| id     | string           | NTP config ID                                                                                  |
| server | &#91;&#93;string | List of time servers, specified as either IP addresses or fully qualified domain names (FQDNs) |
| config | &#91;&#93;string | Content of ntp.conf host configuration file, split by lines                                    |
