---
title: mount
id: mount
sidebar_label: mount
displayed_sidebar: MQL
description: Unix mounted file system
---

# mount

**Description**

Unix mounted file system

**List**

[]mount.point

**Fields**

| ID   | TYPE                                    | DESCRIPTION |
| ---- | --------------------------------------- | ----------- |
| list | &#91;&#93;[mount.point](mount.point.md) |             |

**Examples**

List all mount points

```coffee
mount.list { path device fstype options }
```

Ensure the mountpoint exists

```coffee
mount.one( path == "/" )
```

Check mountpoint configuration

```coffee
mount.where( path == "/" ) {
  device == '/dev/mapper/vg00-lv_root'
  fstype == 'xfs'
  options['rw'] != null
  options['relatime'] != null
  options['seclabel'] != null
  options['attr2'] != null
  options['inode64'] != null
  options['noquota'] != null
}
```
