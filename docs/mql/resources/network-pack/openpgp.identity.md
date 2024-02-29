---
title: openpgp.identity
id: openpgp.identity
sidebar_label: openpgp.identity
displayed_sidebar: MQL
description: OpenPGP identity
---

# openpgp.identity

**Description**

OpenPGP identity

**Fields**

| ID          | TYPE                                                | DESCRIPTION                                                    |
| ----------- | --------------------------------------------------- | -------------------------------------------------------------- |
| fingerprint | string                                              | Primary key fingerprint                                        |
| id          | string                                              | Full name in form of `Full Name (comment) <email@example.com>` |
| name        | string                                              | Name                                                           |
| email       | string                                              | Email                                                          |
| comment     | string                                              | Comment                                                        |
| signatures  | &#91;&#93;[openpgp.signature](openpgp.signature.md) | Identity signatures                                            |
