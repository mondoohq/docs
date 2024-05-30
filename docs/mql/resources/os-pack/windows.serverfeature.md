---
title: windows.serverFeature
id: windows.serverFeature
sidebar_label: windows.serverFeature
displayed_sidebar: MQL
description: Windows Server feature resource
---

# windows.serverFeature

**Description**

Windows Server feature resource

**Init**

windows.serverFeature(name string)

**Fields**

| ID           | TYPE   | DESCRIPTION                                   |
| ------------ | ------ | --------------------------------------------- |
| path         | string | Feature full path                             |
| name         | string | Command IDs of role, role service, or feature |
| displayName  | string | Feature name                                  |
| description  | string | Feature description                           |
| installed    | bool   | Whether the feature is installed              |
| installState | int    | Feature installation state                    |

**Examples**

Check that a specific Windows Server feature is installed

```coffee
windows.serverFeature('SNMP-Service').installed
```

Check that a specific Windows Server feature is not installed

```coffee
windows.serverFeature('Windows-Defender').installed == false
```
