---
title: kernel
id: kernel
sidebar_label: kernel
displayed_sidebar: MQL
description: System kernel information
---

# kernel

**Description**

System kernel information

**Fields**

| ID         | TYPE                                        | DESCRIPTION               |
| ---------- | ------------------------------------------- | ------------------------- |
| info       | dict                                        | Active kernel information |
| parameters | map[string]string                           | Kernel parameters map     |
| modules    | &#91;&#93;[kernel.module](kernel.module.md) | List of kernel modules    |
| installed  | &#91;&#93;dict                              | Installed versions        |
