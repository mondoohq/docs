---
title: fstab.entry
id: fstab.entry
sidebar_label: fstab.entry
displayed_sidebar: MQL
---

# fstab.entry

**Fields**

| ID         | TYPE   | DESCRIPTION                                                                                                                                         |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| device     | string | Device referenced in the fstab, e.g., LABEL=rootfs                                                                                                  |
| mountpoint | string | Mount point, e.g., '/'                                                                                                                              |
| fstype     | string | File system type, e.g., ext4                                                                                                                        |
| options    | string | Mount options, e.g., defaults (`man fstab` for details)                                                                                             |
| dump       | int    | Dump frequency (0 for full backup or an integer above 0, incremental backup, copies all files new or modified since the last dump of a lower level) |
| fsck       | int    | File system check order, e.g., 1                                                                                                                    |
