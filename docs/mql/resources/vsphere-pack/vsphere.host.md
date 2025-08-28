---
title: vsphere.host
id: vsphere.host
sidebar_label: vsphere.host
displayed_sidebar: MQL
description: vSphere ESXi host resource
---

# vsphere.host

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Description**

vSphere ESXi host resource

**Fields**

| ID                | TYPE                                                              | DESCRIPTION                                                |
| ----------------- | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| moid              | string                                                            | vSphere managed object ID                                  |
| name              | string                                                            | vSphere resource name                                      |
| inventoryPath     | string                                                            | vSphere inventory path                                     |
| properties        | dict                                                              | ESXi properties                                            |
| standardSwitch    | &#91;&#93;[vsphere.vswitch.standard](vsphere.vswitch.standard.md) | Standard virtual switches                                  |
| distributedSwitch | &#91;&#93;[vsphere.vswitch.dvs](vsphere.vswitch.dvs.md)           | Distributed virtual switches                               |
| adapters          | &#91;&#93;[vsphere.vmnic](vsphere.vmnic.md)                       | Physical NICs currently installed and loaded on the system |
| vmknics           | &#91;&#93;[vsphere.vmknic](vsphere.vmknic.md)                     | Virtual network interface that is used by the VMKernel     |
| packages          | &#91;&#93;[esxi.vib](esxi.vib.md)                                 | All VIBs installed on your ESXi host                       |
| acceptanceLevel   | string                                                            | Host-level VIB acceptance level                            |
| kernelModules     | &#91;&#93;[esxi.kernelmodule](esxi.kernelmodule.md)               | Kernel modules (drivers) on ESXi                           |
| advancedSettings  | map[string]string                                                 | ESXi host advanced settings                                |
| services          | &#91;&#93;[esxi.service](esxi.service.md)                         | List of ESXi management services                           |
| timezone          | [esxi.timezone](esxi.timezone.md)                                 | Host timezone settings                                     |
| ntp               | [esxi.ntpconfig](esxi.ntpconfig.md)                               | Host NTP configuration                                     |
| snmp              | map[string]string                                                 | Host SNMP configuration                                    |
| tags              | &#91;&#93;string                                                  | Host tags                                                  |

**Examples**

Verify the Software AcceptanceLevel for ESXi host

```coffee
// targeting a single ESXi host
esxi.host {
  acceptanceLevel == 'VMwareCertified' || acceptanceLevel == 'VMwareAccepted' || acceptanceLevel == 'PartnerSupported'
}

// targeting the vSphere API
vsphere.datacenters {
  hosts {
    acceptanceLevel == 'VMwareCertified' || acceptanceLevel == 'VMwareAccepted' || acceptanceLevel == 'PartnerSupported'
  }
}
```

Verify that each vib is "VMwareCertified" or "VMwareAccepted"

```coffee
esxi.host {
  packages {
    acceptanceLevel == 'VMwareCertified' || acceptanceLevel == 'VMwareAccepted' || acceptanceLevel == 'PartnerSupported'
  }
}
```
