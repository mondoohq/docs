---
title: docker.file
id: docker.file
sidebar_label: docker.file
displayed_sidebar: MQL
description: Dockerfile resource
---

# docker.file

**Description**

Dockerfile resource

**Init**

docker.file(path string)

**Fields**

| ID           | TYPE                                                | DESCRIPTION                                   |
| ------------ | --------------------------------------------------- | --------------------------------------------- |
| file         | [file](file.md)                                     | File information about this Dockerfile        |
| instructions | dict                                                | List of instructions in the order they appear |
| stages       | &#91;&#93;[docker.file.stage](docker.file.stage.md) | All stages included in this Dockerfile        |
