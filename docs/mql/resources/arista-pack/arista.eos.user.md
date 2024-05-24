---
title: arista.eos.user
id: arista.eos.user
sidebar_label: arista.eos.user
displayed_sidebar: MQL
description: Arista EOS local user
---

# arista.eos.user

**Supported platform**

- arista-eos

**Description**

Arista EOS local user

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
