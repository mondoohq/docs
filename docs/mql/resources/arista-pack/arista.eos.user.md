---
title: arista.eos.user
id: arista.eos.user
sidebar_label: arista.eos.user
displayed_sidebar: MQL
description: User on the local Arista EOS system
---

# arista.eos.user

**Supported platform**

- arista-eos

**Description**

User on the local Arista EOS system

**Fields**

| ID         | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
| name       | string | The name of the user                                             |
| privilege  | string | Indicates if the user is able to authenticate without a password |
| role       | string | User's assigned role                                             |
| nopassword | string | If the user is not password protected                            |
| format     | string | Specifies how the secret is encoded                              |
| secret     | string | The secret (password) assigned to this user                      |
| sshkey     | string | User's sshkey                                                    |
