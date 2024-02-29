---
title: authorizedkeys
id: authorizedkeys
sidebar_label: authorizedkeys
displayed_sidebar: MQL
description: List of SSH authorized keys
---

# authorizedkeys

**Description**

List of SSH authorized keys

**Init**

authorizedkeys(path string)

**List**

[]authorizedkeys.entry

**Fields**

| ID      | TYPE                                                      | DESCRIPTION          |
| ------- | --------------------------------------------------------- | -------------------- |
| path    | string                                                    | Path to the key file |
| file    | [file](file.md)                                           | Key file             |
| content | string                                                    | Key file content     |
| list    | &#91;&#93;[authorizedkeys.entry](authorizedkeys.entry.md) |                      |
