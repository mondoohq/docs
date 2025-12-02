---
title: docker.file.stage
id: docker.file.stage
sidebar_label: docker.file.stage
displayed_sidebar: MQL
description: Dockerfile stages
---

# docker.file.stage

**Description**

Dockerfile stages

**Fields**

| ID         | TYPE                                                  | DESCRIPTION                                                    |
| ---------- | ----------------------------------------------------- | -------------------------------------------------------------- |
| from       | [docker.file.from](docker.file.from.md)               | The source of this stage, specified via `FROM` in Dockerfiles  |
| file       | [docker.file](docker.file.md)                         | Contains the reference to the Dockerfile this stage belongs to |
| env        | &#91;&#93;[docker.file.env](docker.file.env.md)       | ENV instructions in this Dockerfile                            |
| arg        | &#91;&#93;[docker.file.arg](docker.file.arg.md)       | ARG instructions in the Dockerfile                             |
| labels     | map[string]string                                     | LABEL instructions in the Dockerfile                           |
| run        | &#91;&#93;[docker.file.run](docker.file.run.md)       | RUN instructions in this Dockerfile                            |
| cmd        | [docker.file.run](docker.file.run.md)                 | CMD instructions in this Dockerfile                            |
| user       | [docker.file.user](docker.file.user.md)               | USER instruction in this Dockerfile                            |
| entrypoint | [docker.file.run](docker.file.run.md)                 | ENTRYPOINT instructions in this Dockerfile                     |
| add        | &#91;&#93;[docker.file.add](docker.file.add.md)       | ADD instructions in this Dockerfile                            |
| copy       | &#91;&#93;[docker.file.copy](docker.file.copy.md)     | COPY instructions in this Dockerfile                           |
| expose     | &#91;&#93;[docker.file.expose](docker.file.expose.md) | EXPOSE instructions in this Dockerfile                         |

**References**

- [Dockerfile Reference](https://docs.docker.com/reference/dockerfile/)
- [Multi-stage builds](https://docs.docker.com/build/building/multi-stage/)
