---
title: parse.yaml
id: parse.yaml
sidebar_label: parse.yaml
displayed_sidebar: MQL
description: Parse YAML files
---

# parse.yaml

**Description**

Parse YAML files

**Init**

parse.yaml(path string)

**Fields**

| ID        | TYPE            | DESCRIPTION                                         |
| --------- | --------------- | --------------------------------------------------- |
| file      | [file](file.md) | File that is parsed                                 |
| content   | string          | Raw content of the file that is parsed              |
| params    | dict            | The parsed parameters that are defined in this file |
| documents | &#91;&#93;dict  | Parsed yaml documents                               |
