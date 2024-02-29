---
title: vsphere.vmknic
id: vsphere.vmknic
sidebar_label: vsphere.vmknic
displayed_sidebar: MQL
description: vSphere ESXi virtual network interface resource
---

# vsphere.vmknic

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Description**

vSphere ESXi virtual network interface resource

**Fields**

| ID         | TYPE             | DESCRIPTION           |
| ---------- | ---------------- | --------------------- |
| name       | string           | Interface name        |
| properties | dict             | Interface properties  |
| ipv4       | &#91;&#93;dict   | IPv4 information      |
| ipv6       | &#91;&#93;dict   | IPv6 information      |
| tags       | &#91;&#93;string | Network interface tag |
