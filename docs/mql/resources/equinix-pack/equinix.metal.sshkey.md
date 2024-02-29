---
title: equinix.metal.sshkey
id: equinix.metal.sshkey
sidebar_label: equinix.metal.sshkey
displayed_sidebar: MQL
description: Equinix Metal SSH key
---

# equinix.metal.sshkey

**Supported platform**

- equinix

**Maturity**

experimental

**Description**

Equinix Metal SSH key

**Fields**

| ID          | TYPE   | DESCRIPTION                   |
| ----------- | ------ | ----------------------------- |
| id          | string | ID of the SSH key             |
| label       | string | label of the SSH key          |
| key         | string | Key                           |
| fingerPrint | string | Finger print                  |
| createdAt   | time   | When the key was created      |
| updatedAt   | time   | When the key was last updated |
| url         | string | URL                           |

**References**

- [Project SSH Keys](https://deploy.equinix.com/developers/docs/metal/projects/project-ssh-keys/)
