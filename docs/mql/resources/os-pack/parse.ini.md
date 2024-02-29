---
title: parse.ini
id: parse.ini
sidebar_label: parse.ini
displayed_sidebar: MQL
description: Parse INI files
---

# parse.ini

**Description**

Parse INI files

**Init**

parse.ini(path string)
parse.ini(delimiter string)

**Fields**

| ID        | TYPE                         | DESCRIPTION                                     |
| --------- | ---------------------------- | ----------------------------------------------- |
| delimiter | string                       | Symbol that separates keys and values           |
| file      | [file](file.md)              | File that is parsed                             |
| content   | string                       | Raw content of the file that is parsed          |
| sections  | map[string]map[string]string | Map of sections and key-value pairs             |
| params    | map[string]string            | Map of parameters that don't belong to sections |
