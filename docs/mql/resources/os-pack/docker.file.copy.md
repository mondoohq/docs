---
title: docker.file.copy
id: docker.file.copy
sidebar_label: docker.file.copy
displayed_sidebar: MQL
description: Dockerfile COPY instructions
---

# docker.file.copy

**Description**

Dockerfile COPY instructions

**Fields**

| ID    | TYPE             | DESCRIPTION                                                                   |
| ----- | ---------------- | ----------------------------------------------------------------------------- |
| src   | &#91;&#93;string | Optional source to copy file(s) from when not using the default build context |
| dst   | string           | The destination in the image for the file(s)                                  |
| chown | string           | Ownership of the file(s)                                                      |
| chmod | string           | Octal permissions of the file(s)                                              |
