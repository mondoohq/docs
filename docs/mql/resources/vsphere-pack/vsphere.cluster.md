---
title: vsphere.cluster
id: vsphere.cluster
sidebar_label: vsphere.cluster
displayed_sidebar: MQL
description: vSphere cluster resource
---

# vsphere.cluster

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Description**

vSphere cluster resource

**Fields**

| ID            | TYPE                                      | DESCRIPTION                       |
| ------------- | ----------------------------------------- | --------------------------------- |
| moid          | string                                    | vSphere managed object ID         |
| name          | string                                    | vSphere resource name             |
| inventoryPath | string                                    | vSphere inventory path            |
| properties    | dict                                      | Cluster properties                |
| hosts         | &#91;&#93;[vsphere.host](vsphere.host.md) | ESXi hosts running in the cluster |
