---
title: os
id: os
sidebar_label: os
displayed_sidebar: MQL
description: Operating system information
---

# os

**Description**

Operating system information

**Fields**

| ID            | TYPE                                | DESCRIPTION                                              |
| ------------- | ----------------------------------- | -------------------------------------------------------- |
| name          | string                              | Pretty hostname on macOS/Linux or device name on Windows |
| env           | map[string]string                   | ENV variable contents                                    |
| path          | &#91;&#93;string                    | PATH variable contents                                   |
| uptime        | time                                | Current uptime                                           |
| updates       | &#91;&#93;[os.update](os.update.md) | List of available OS updates                             |
| rebootpending | bool                                | Whether a reboot is pending                              |
| hostname      | string                              | Hostname for this OS                                     |
| machineid     | string                              | Machine ID for this OS                                   |

**Examples**

Show all environment variables

```coffee
os.env
```

Retrieve a single environment variable

```coffee
os.env['windir']
```
