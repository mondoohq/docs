---
title: auditpol
id: auditpol
sidebar_label: auditpol
displayed_sidebar: MQL
description: Windows audit policies
---

# auditpol

**Description**

Windows audit policies

**List**

[]auditpol.entry

**Fields**

| ID   | TYPE                                          | DESCRIPTION |
| ---- | --------------------------------------------- | ----------- |
| list | &#91;&#93;[auditpol.entry](auditpol.entry.md) |             |

**Examples**

List all audit policies

```coffee
auditpol { inclusionsetting exclusionsetting subcategory }
```

Check a specific auditpol configuration

```coffee
auditpol.where(subcategory == 'Sensitive Privilege Use') {
  inclusionsetting == 'Success and Failure'
}
```
