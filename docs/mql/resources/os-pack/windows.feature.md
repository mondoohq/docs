---
title: windows.feature
id: windows.feature
sidebar_label: windows.feature
displayed_sidebar: MQL
description: Windows feature resource
---

# windows.feature

**Description**

Windows feature resource

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
