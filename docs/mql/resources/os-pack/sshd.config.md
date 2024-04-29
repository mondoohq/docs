---
title: sshd.config
id: sshd.config
sidebar_label: sshd.config
displayed_sidebar: MQL
description: SSH server configuration
---

# sshd.config

**Description**

SSH server configuration

**Init**

sshd.config(path string)

**Fields**

| ID              | TYPE                                                          | DESCRIPTION                                                                                           |
| --------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| file            | [file](file.md)                                               | File of this SSH server configuration                                                                 |
| files           | &#91;&#93;[file](file.md)                                     | A list of lexically sorted files making up the SSH server configuration                               |
| content         | string                                                        | Deprecated: Please use `file.content` or `files{content}` instead. This field will be removed in v12. |
| params          | map[string]string                                             | Configuration values of this SSH server                                                               |
| blocks          | &#91;&#93;[sshd.config.matchBlock](sshd.config.matchblock.md) | Blocks with match conditions in this SSH server config                                                |
| ciphers         | &#91;&#93;string                                              | Ciphers configured for this SSH server                                                                |
| macs            | &#91;&#93;string                                              | MACs configured for this SSH server                                                                   |
| kexs            | &#91;&#93;string                                              | Key exchange algorithms configured for this SSH server                                                |
| hostkeys        | &#91;&#93;string                                              | Host keys configured for this SSH server                                                              |
| permitRootLogin | &#91;&#93;string                                              | PermitRootLogin setting in SSH server                                                                 |

**Examples**

Check that the SSH banner is sourced from /etc/ssh/sshd-banner

```coffee
sshd.config.params['Banner'] == '/etc/ssh/sshd-banner'
```
