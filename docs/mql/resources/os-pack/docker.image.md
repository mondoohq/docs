---
title: docker.image
id: docker.image
sidebar_label: docker.image
displayed_sidebar: MQL
description: Docker image
---

# docker.image

**Description**

Docker image

**Fields**

| ID          | TYPE              | DESCRIPTION                                                   |
| ----------- | ----------------- | ------------------------------------------------------------- |
| id          | string            | Image ID                                                      |
| size        | int               | Image size in kilobytes                                       |
| virtualsize | int               | Virtual image size in kilobytes. Deprecated; use size instead |
| repoDigests | &#91;&#93;string  | Repo digests                                                  |
| tags        | &#91;&#93;string  | Tag key value pairs                                           |
| labels      | map[string]string | Labels key value pairs                                        |

**References**

- [What is an image?](https://docs.docker.com/guides/docker-concepts/the-basics/what-is-an-image/)
