---
title: esxi
id: esxi
sidebar_label: esxi
displayed_sidebar: MQL
description: VMware ESXi resource
---

# esxi

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Maturity**

deprecated

**Description**

VMware ESXi resource

The `esxi.host` and `esxi.vm` resources are deprecated. Please use `vsphere.host` and `vsphere.vm` instead.

**Fields**

| ID   | TYPE                            | DESCRIPTION                      |
| ---- | ------------------------------- | -------------------------------- |
| host | [vsphere.host](vsphere.host.md) | Current targeted ESXi host       |
| vm   | [vsphere.vm](vsphere.vm.md)     | Current targeted virtual machine |

**Examples**

Check that all kernel modules are signed

```coffee
esxi.host {
  kernelModules {
    signedStatus == "Signed"
  }
}
```
