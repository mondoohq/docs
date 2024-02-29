---
title: pam.conf
id: pam.conf
sidebar_label: pam.conf
displayed_sidebar: MQL
description: PAM configuration (pluggable authentication module)
---

# pam.conf

**Description**

PAM configuration (pluggable authentication module)

**Init**

pam.conf(path string)

**Fields**

| ID       | TYPE                                                                   | DESCRIPTION                                                      |
| -------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| files    | &#91;&#93;[file](file.md)                                              | List of files that make up the PAM configuration                 |
| content  | string                                                                 | The raw PAM configuration (across all files)                     |
| services | map[string]&#91;&#93;string                                            | Deprecated; list of services that are configured via PAM         |
| entries  | map[string]&#91;&#93;[pam.conf.serviceEntry](pam.conf.serviceentry.md) | List of services with parsed entries that are configured via PAM |
