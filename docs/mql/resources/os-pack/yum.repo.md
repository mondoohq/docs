---
title: yum.repo
id: yum.repo
sidebar_label: yum.repo
displayed_sidebar: MQL
description: Yum repository resource
---

# yum.repo

**Description**

Yum repository resource

**Init**

yum.repo(id string)

**Fields**

| ID       | TYPE             | DESCRIPTION                                                 |
| -------- | ---------------- | ----------------------------------------------------------- |
| id       | string           | Repository ID                                               |
| name     | string           | Human-readable repository name                              |
| status   | string           | Repository status                                           |
| baseurl  | &#91;&#93;string | URL where the repodata directory of a repository is located |
| expire   | string           | Indicator when the repository will expire                   |
| filename | string           | Deprecated; use file.path                                   |
| file     | [file](file.md)  | Repository configuration file path                          |
| revision | string           | Repository revision                                         |
| pkgs     | string           | Packages in repository                                      |
| size     | string           | File size of this repository                                |
| mirrors  | string           | Mirrors for this repository                                 |
| enabled  | bool             | Whether the repository is used as package source            |
