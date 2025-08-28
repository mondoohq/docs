---
title: vsphere.vm
id: vsphere.vm
sidebar_label: vsphere.vm
displayed_sidebar: MQL
description: vSphere VM resource
---

# vsphere.vm

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Description**

vSphere VM resource

**Fields**

| ID               | TYPE              | DESCRIPTION                         |
| ---------------- | ----------------- | ----------------------------------- |
| moid             | string            | vSphere managed object ID           |
| name             | string            | vSphere resource name               |
| inventoryPath    | string            | vSphere inventory path              |
| properties       | dict              | Virtual machine properties          |
| advancedSettings | map[string]string | Virtual machine advanced properties |
| tags             | &#91;&#93;string  | VM tags                             |
