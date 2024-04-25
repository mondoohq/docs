---
title: docker.container
id: docker.container
sidebar_label: docker.container
displayed_sidebar: MQL
description: Docker container
---

# docker.container

**Description**

Docker container

The `docker.container` resource provides fields for assessing running Docker containers.

**Fields**

| ID      | TYPE                    | DESCRIPTION           |
| ------- | ----------------------- | --------------------- |
| os      | [os.linux](os.linux.md) |                       |
| id      | string                  | Container ID          |
| command | string                  | Container command     |
| image   | string                  | Container image       |
| imageid | string                  | Image ID              |
| names   | &#91;&#93;string        | Container names       |
| state   | string                  | Container state       |
| status  | string                  | Status message        |
| labels  | map[string]string       | Label key value pairs |

**References**

- [What is a container?](https://docs.docker.com/guides/walkthroughs/what-is-a-container/)
