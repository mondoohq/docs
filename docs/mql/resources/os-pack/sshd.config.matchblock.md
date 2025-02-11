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

| ID       | TYPE                            | DESCRIPTION                                                 |
| -------- | ------------------------------- | ----------------------------------------------------------- |
| criteria | string                          | The match criteria for this block                           |
| params   | map[string]string               | Configuration values in this block                          |
| context  | [file.context](file.context.md) | Contextual info, where this resource is located and defined |
