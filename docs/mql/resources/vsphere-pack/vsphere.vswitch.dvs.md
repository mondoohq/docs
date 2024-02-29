---
title: vsphere.vswitch.dvs
id: vsphere.vswitch.dvs
sidebar_label: vsphere.vswitch.dvs
displayed_sidebar: MQL
description: vSphere distributed virtual switch
---

# vsphere.vswitch.dvs

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Description**

vSphere distributed virtual switch

**Fields**

| ID         | TYPE                                        | DESCRIPTION                                           |
| ---------- | ------------------------------------------- | ----------------------------------------------------- |
| name       | string                                      | Virtual switch name                                   |
| properties | dict                                        | Virtual switch properties                             |
| uplinks    | &#91;&#93;[vsphere.vmnic](vsphere.vmnic.md) | List of physical NICs currently configured as uplinks |
