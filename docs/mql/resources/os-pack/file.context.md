---
title: file.context
id: file.context
sidebar_label: file.context
displayed_sidebar: MQL
description: File context is a range of lines/columns in a file
---

# file.context

**Description**

File context is a range of lines/columns in a file

**Fields**

| ID      | TYPE            | DESCRIPTION                                             |
| ------- | --------------- | ------------------------------------------------------- |
| file    | [file](file.md) | File referenced by this file context                    |
| range   | range           | Range of content in the file                            |
| content | string          | Content for this range in the file, shown as an excerpt |
