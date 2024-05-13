---
title: vsphere
id: vsphere
sidebar_label: vsphere
displayed_sidebar: MQL
description: VMware vSphere resource
---

# vsphere

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Description**

VMware vSphere resource

**Fields**

| ID          | TYPE                                                  | DESCRIPTION                                                            |
| ----------- | ----------------------------------------------------- | ---------------------------------------------------------------------- |
| about       | dict                                                  | System information including the name, type, version, and build number |
| licenses    | &#91;&#93;[vsphere.license](vsphere.license.md)       | Configured licenses                                                    |
| datacenters | &#91;&#93;[vsphere.datacenter](vsphere.datacenter.md) | List of available datacenter                                           |

**Examples**

Display Information about the vSphere environment

```coffeescript
vsphere.about
```

Display ESXi host moid and properties

```coffeescript
vsphere.datacenters { hosts { moid properties } }
```

Display NTP server for all ESXi hosts

```coffeescript
vsphere.datacenters { hosts { ntp.server } }
```

Ensure a specific NTP Server is set

```coffeescript
vsphere.datacenters { hosts { ntp.server.any(_ == "10.31.21.2") } }
```

Ensure specific VmkNics properties for all management VmkNics

```coffeescript
vsphere.datacenters {
  hosts {
    vmknics.where(tags == "Management") {
      properties['Enabled'] == true
      properties['MTU'] == 1500
      properties['VDSName'] != /(?i)storage/
    }
  }
}
```
