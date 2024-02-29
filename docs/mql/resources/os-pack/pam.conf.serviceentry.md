---
title: pam.conf.serviceEntry
id: pam.conf.serviceEntry
sidebar_label: pam.conf.serviceEntry
displayed_sidebar: MQL
---

# pam.conf.serviceEntry

**Fields**

| ID         | TYPE             | DESCRIPTION                                               |
| ---------- | ---------------- | --------------------------------------------------------- |
| service    | string           | Service file that the entry is from                       |
| lineNumber | int              | Line number in service file (used for ID)                 |
| pamType    | string           | Type for PAM entry, (i.e., auth, password, etc)           |
| control    | string           | Level of control, (i.e., required, requisite, sufficient) |
| module     | string           | PAM module used                                           |
| options    | &#91;&#93;string | Configuration options for pam service entry               |
