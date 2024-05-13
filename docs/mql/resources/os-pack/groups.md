---
title: groups
id: groups
sidebar_label: groups
displayed_sidebar: MQL
description: Groups configured on this system
---

# groups

**Description**

Groups configured on this system

**List**

[]group

**Fields**

| ID   | TYPE                        | DESCRIPTION |
| ---- | --------------------------- | ----------- |
| list | &#91;&#93;[group](group.md) |             |

**Examples**

Ensure the user is not part of group

```coffeescript
groups.where(name == 'wheel').list { members.all( name != 'username')}
```
