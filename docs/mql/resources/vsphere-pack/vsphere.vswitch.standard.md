---
title: vsphere.vswitch.standard
id: vsphere.vswitch.standard
sidebar_label: vsphere.vswitch.standard
displayed_sidebar: MQL
description: vSphere standard virtual switch
---

# vsphere.vswitch.standard

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Description**

vSphere standard virtual switch

**Fields**

| ID             | TYPE                                        | DESCRIPTION                                           |
| -------------- | ------------------------------------------- | ----------------------------------------------------- |
| name           | string                                      | Virtual switch name                                   |
| properties     | dict                                        | Virtual switch properties                             |
| failoverPolicy | dict                                        | NIC teaming policy                                    |
| securityPolicy | dict                                        | Security policy                                       |
| shapingPolicy  | dict                                        | Shaping policy                                        |
| uplinks        | &#91;&#93;[vsphere.vmnic](vsphere.vmnic.md) | List of physical NICs currently configured as uplinks |
