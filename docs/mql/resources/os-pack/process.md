---
title: process
id: process
sidebar_label: process
displayed_sidebar: MQL
description: Process on this system
---

# process

**Description**

Process on this system

**Init**

process(pid int)

**Fields**

| ID         | TYPE              | DESCRIPTION                                         |
| ---------- | ----------------- | --------------------------------------------------- |
| pid        | int               | PID (process ID)                                    |
| state      | string            | State of the process (i.e., sleeping, running, etc) |
| executable | string            | Executable that is running this process             |
| command    | string            | Full command used to run this process               |
| flags      | map[string]string | Map of additional flags                             |
