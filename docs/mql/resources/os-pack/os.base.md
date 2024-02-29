---
title: os.base
id: os.base
sidebar_label: os.base
displayed_sidebar: MQL
---

# os.base

**Fields**

| ID            | TYPE                                | DESCRIPTION                                              |
| ------------- | ----------------------------------- | -------------------------------------------------------- |
| machine       | [machine](machine.md)               |                                                          |
| name          | string                              | Pretty Hostname on macOS/Linux or device name on Windows |
| env           | map[string]string                   | ENV variable contents                                    |
| path          | &#91;&#93;string                    | PATH variable contents                                   |
| uptime        | time                                | Current uptime                                           |
| updates       | &#91;&#93;[os.update](os.update.md) | List of available OS updates                             |
| rebootpending | bool                                | Whether a reboot is pending                              |
| hostname      | string                              | Hostname for this OS                                     |
| groups        | [groups](groups.md)                 | User groups                                              |
| users         | [users](users.md)                   | Users                                                    |
