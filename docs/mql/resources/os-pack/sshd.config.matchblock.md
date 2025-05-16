---
title: sshd.config.matchBlock
id: sshd.config.matchBlock
sidebar_label: sshd.config.matchBlock
displayed_sidebar: MQL
description: A block of SSH server configuration
---

# sshd.config.matchBlock

**Description**

A block of SSH server configuration

**Fields**

| ID              | TYPE                            | DESCRIPTION                                                 |
| --------------- | ------------------------------- | ----------------------------------------------------------- |
| criteria        | string                          | The match criteria for this block                           |
| params          | map[string]string               | Configuration values in this block                          |
| ciphers         | &#91;&#93;string                | Ciphers configured for this SSH server                      |
| macs            | &#91;&#93;string                | MACs configured for this SSH server                         |
| kexs            | &#91;&#93;string                | Key exchange algorithms configured for this SSH server      |
| hostkeys        | &#91;&#93;string                | Host keys configured for this SSH server                    |
| permitRootLogin | &#91;&#93;string                | PermitRootLogin setting in SSH server                       |
| context         | [file.context](file.context.md) | Contextual info, where this resource is located and defined |
