---
title: mount.point
id: mount.point
sidebar_label: mount.point
displayed_sidebar: MQL
description: Unix mount point
---

# mount.point

**Description**

Unix mount point

**Init**

mount.point(path string)

**Fields**

| ID      | TYPE              | DESCRIPTION                        |
| ------- | ----------------- | ---------------------------------- |
| device  | string            | Device                             |
| path    | string            | Path                               |
| fstype  | string            | File system type                   |
| options | map[string]string | Mount options                      |
| mounted | bool              | Whether the mount point is mounted |
