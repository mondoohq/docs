---
title: windows.feature
id: windows.feature
sidebar_label: windows.feature
displayed_sidebar: MQL
description: Deprecated. Use `windows.serverFeature` instead
---

# windows.feature

**Description**

Deprecated. Use `windows.serverFeature` instead

**Init**

windows.feature(name string)

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
windows.feature('SNMP-Service').installed
```

Check that a specific Windows Server feature is not installed

```coffee
windows.feature('Windows-Defender').installed == false
```
