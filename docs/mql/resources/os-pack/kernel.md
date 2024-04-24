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

**Examples**

List all kernel modules

```coffee
kernel.modules { name loaded size }
```

List all loaded kernel modules

```coffee
kernel.modules.where( loaded == true ) { name }
```

List all information from running kernel

```coffee
kernel { info }
```

List version from running kernel

```coffee
kernel { info['version'] }
```
