---
title: parse.openpgp
id: parse.openpgp
sidebar_label: parse.openpgp
displayed_sidebar: MQL
description: Parse OpenPGP from files
---

# parse.openpgp

**Description**

Parse OpenPGP from files

**Init**

parse.openpgp(path string)

**List**

[]network.openpgp.entity

**Fields**

| ID      | TYPE                             | DESCRIPTION                       |
| ------- | -------------------------------- | --------------------------------- |
| path    | string                           | Deprecated; use file.path instead |
| file    | [file](file.md)                  | OpenPGP file                      |
| content | string                           | OpenPGP file content              |
| list    | &#91;&#93;network.openpgp.entity |                                   |
