---
title: windows.optionalFeature
id: windows.optionalFeature
sidebar_label: windows.optionalFeature
displayed_sidebar: MQL
description: Windows optional feature resource (desktop-only)
---

# windows.optionalFeature

**Description**

Windows optional feature resource (desktop-only)

**Init**

windows.optionalFeature(name string)

**Fields**

| ID          | TYPE   | DESCRIPTION                    |
| ----------- | ------ | ------------------------------ |
| name        | string | Command ID of optional feature |
| displayName | string | Feature name                   |
| description | string | Feature description            |
| enabled     | bool   | Whether the feature is enabled |
| state       | int    | Feature installation state     |

**Examples**

Query all features containing the word PowerShell

```coffee
windows.optionalfeatures.where(name == /PowerShell/)
```

Check that a specific Windows optional feature is not installed

```coffee
windows.optionalfeatures('Hyper-V Module for Windows PowerShell').installed == false
```
