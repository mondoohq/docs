---
title: file.permissions
id: file.permissions
sidebar_label: file.permissions
displayed_sidebar: MQL
description: Access permissions for a given file
---

# file.permissions

**Description**

Access permissions for a given file

**Fields**

| ID               | TYPE   | DESCRIPTION                                            |
| ---------------- | ------ | ------------------------------------------------------ |
| mode             | int    | Raw POSIX mode for the permissions                     |
| user_readable    | bool   | Whether the file is readable by its owner              |
| user_writeable   | bool   | Whether the file is writeable by its owner             |
| user_executable  | bool   | Whether the file is executable by its owner            |
| group_readable   | bool   | Whether the file is readable by members of the group   |
| group_writeable  | bool   | Whether the file is writeable by members of the group  |
| group_executable | bool   | Whether the file is executable by members of the group |
| other_readable   | bool   | Whether the file is readable by others                 |
| other_writeable  | bool   | Whether the file is writeable by others                |
| other_executable | bool   | Whether the file is executable by others               |
| suid             | bool   | SUID bit indicator                                     |
| sgid             | bool   | SGID bit indicator                                     |
| sticky           | bool   | Sticky bit indicator                                   |
| isDirectory      | bool   | Whether the file describes a directory                 |
| isFile           | bool   | Whether the file describes a regular file              |
| isSymlink        | bool   | Whether the file is a symlink                          |
| string           | string | A simple printed string version of the permissions     |
