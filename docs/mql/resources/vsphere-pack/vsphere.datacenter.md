---
title: vsphere.datacenter
id: vsphere.datacenter
sidebar_label: vsphere.datacenter
displayed_sidebar: MQL
description: vSphere datacenter inventory
---

# vsphere.datacenter

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Description**

vSphere datacenter inventory

**Fields**

| ID                    | TYPE                                                                | DESCRIPTION                             |
| --------------------- | ------------------------------------------------------------------- | --------------------------------------- |
| moid                  | string                                                              | vSphere managed object ID               |
| name                  | string                                                              | vSphere datacenter name                 |
| inventoryPath         | string                                                              | vSphere inventory path                  |
| hosts                 | &#91;&#93;[vsphere.host](vsphere.host.md)                           | Hosts in the datacenter                 |
| vms                   | &#91;&#93;[vsphere.vm](vsphere.vm.md)                               | VMs in the datacenter                   |
| clusters              | &#91;&#93;[vsphere.cluster](vsphere.cluster.md)                     | Clusters in the datacenter              |
| distributedSwitches   | &#91;&#93;[vsphere.vswitch.dvs](vsphere.vswitch.dvs.md)             | Distributed virtual switches            |
| distributedPortGroups | &#91;&#93;[vsphere.vswitch.portgroup](vsphere.vswitch.portgroup.md) | List of distributed virtual port groups |
