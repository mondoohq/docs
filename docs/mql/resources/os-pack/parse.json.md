---
title: parse.json
id: parse.json
sidebar_label: parse.json
displayed_sidebar: MQL
description: Parse JSON files
---

# parse.json

**Description**

Parse JSON files

**Init**

parse.json(path string)

**Fields**

| ID      | TYPE            | DESCRIPTION                                |
| ------- | --------------- | ------------------------------------------ |
| file    | [file](file.md) | File that is parsed                        |
| content | string          | Raw content of the file that is parsed     |
| params  | dict            | The parsed parameters defined in this file |

**Examples**

Parse JSON from string content

```coffee
parse.json(content: '{ "a": "b"  }').params
```

Parse JSON from file

```coffee
parse.json("/path/to/test.json").params
```
