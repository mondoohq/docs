---
title: equinix.metal.project
id: equinix.metal.project
sidebar_label: equinix.metal.project
displayed_sidebar: MQL
description: Equinix Metal project
---

# equinix.metal.project

**Supported platform**

- equinix

**Maturity**

experimental

**Description**

Equinix Metal project

**Fields**

| ID           | TYPE                                                        | DESCRIPTION                         |
| ------------ | ----------------------------------------------------------- | ----------------------------------- |
| id           | string                                                      | Project ID                          |
| name         | string                                                      | Project name                        |
| organization | [equinix.metal.organization](equinix.metal.organization.md) | Organization the project belongs to |
| createdAt    | time                                                        | When the project was created        |
| updatedAt    | time                                                        | When the project was last updated   |
| url          | string                                                      | URL                                 |
| sshKeys      | &#91;&#93;[equinix.metal.sshkey](equinix.metal.sshkey.md)   | SSH keys                            |
| devices      | &#91;&#93;[equinix.metal.device](equinix.metal.device.md)   | Devices                             |

**References**

- [Creating a Project](https://deploy.equinix.com/developers/docs/metal/projects/creating-a-project/)
