---
title: journald.config
id: journald.config
sidebar_label: journald.config
displayed_sidebar: MQL
description: systemd journald configuration
---

# journald.config

**Description**

systemd journald configuration

**Init**

journald.config(path string)

**Fields**

| ID       | TYPE                                                            | DESCRIPTION                                 |
| -------- | --------------------------------------------------------------- | ------------------------------------------- |
| file     | [file](file.md)                                                 | File of this journald configuration         |
| params   | map[string]string                                               | Deprecated; use sections() instead          |
| sections | &#91;&#93;[journald.config.section](journald.config.section.md) | All sections in this journald configuration |
