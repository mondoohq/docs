---
title: cisco.nxos.user
id: cisco.nxos.user
sidebar_label: cisco.nxos.user
displayed_sidebar: MQL
description: Cisco NX-OS User configuration
---

# cisco.nxos.user

**Description**

Cisco NX-OS User configuration

**Fields**

| ID                     | TYPE                                                                  | DESCRIPTION                                                                     |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| username               | string                                                                | Username                                                                        |
| isAdmin                | bool                                                                  | Whether the user is administrator.                                              |
| creds                  | &#91;&#93;[cisco.nxos.user.credential](cisco.nxos.user.credential.md) | The credentials associated to the user.                                         |
| passphraseTimeSettings | [cisco.nxos.passphraseTimevalues](cisco.nxos.passphrasetimevalues.md) | The custom passphrase timevalues specified for the user or the global defaults. |
