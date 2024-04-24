---
title: file
id: file
sidebar_label: file
displayed_sidebar: MQL
description: File on the system
---

# file

**Description**

File on the system

**Init**

file(path string)

**Fields**

| ID          | TYPE                                    | DESCRIPTION                                 |
| ----------- | --------------------------------------- | ------------------------------------------- |
| path        | string                                  | Location of the file on the system          |
| basename    | string                                  | Filename without path prefix of this file   |
| dirname     | string                                  | Path to the folder containing this file     |
| content     | string                                  | Contents of this file                       |
| exists      | bool                                    | Indicator if this file exists on the system |
| permissions | [file.permissions](file.permissions.md) | Permissions for this file                   |
| size        | int                                     | Size of this file on disk                   |
| user        | [user](user.md)                         | Ownership information about the user        |
| group       | [group](group.md)                       | Ownership information about the group       |
| empty       | bool                                    | Whether the path is empty                   |

**Examples**

Test if a directory exists

```coffee
file('/etc') {
  exists
  permissions.isDirectory
}
```
