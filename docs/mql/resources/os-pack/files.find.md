---
title: files.find
id: files.find
sidebar_label: files.find
displayed_sidebar: MQL
description: Find files on the system
---

# files.find

**Description**

Find files on the system

**List**

[]file

**Fields**

| ID          | TYPE                      | DESCRIPTION                                                    |
| ----------- | ------------------------- | -------------------------------------------------------------- |
| from        | string                    | Sets the starting point for the search operation               |
| xdev        | bool                      | Whether other devices to search                                |
| type        | string                    | What types of files to list (directories, files, devices, etc) |
| regex       | string                    | A regular expression for the file search                       |
| permissions | int                       | What permissions the file matches                              |
| name        | string                    | Search name                                                    |
| list        | &#91;&#93;[file](file.md) |                                                                |
