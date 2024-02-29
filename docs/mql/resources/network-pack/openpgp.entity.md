---
title: openpgp.entity
id: openpgp.entity
sidebar_label: openpgp.entity
displayed_sidebar: MQL
description: OpenPGP entity
---

# openpgp.entity

**Description**

OpenPGP entity

**Fields**

| ID               | TYPE                                              | DESCRIPTION                                     |
| ---------------- | ------------------------------------------------- | ----------------------------------------------- |
| primaryPublicKey | [openpgp.publicKey](openpgp.publickey.md)         | Primary public key, which must be a signing key |
| identities       | &#91;&#93;[openpgp.identity](openpgp.identity.md) | Entity's identities                             |
