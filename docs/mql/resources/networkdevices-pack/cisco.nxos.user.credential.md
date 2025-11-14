---
title: cisco.nxos.user.credential
id: cisco.nxos.user.credential
sidebar_label: cisco.nxos.user.credential
displayed_sidebar: MQL
description: Cisco NX-OS User credential
---

# cisco.nxos.user.credential

**Description**

Cisco NX-OS User credential

**Fields**

| ID             | TYPE   | DESCRIPTION                                                      |
| -------------- | ------ | ---------------------------------------------------------------- |
| credentialType | string | The type of credential (e.g. password, passphrase, sshkey).      |
| encryptionType | string | The encryption type, used for the credential.                    |
| credential     | string | The value of the credential.                                     |
| role           | string | Optional. The role this credential applies to.                   |
| lifeTime       | int    | Optional. The lifetime of the credential in days.                |
| warnTime       | int    | Optional. The warning time before credential expiration in days. |
| graceTime      | int    | Optional. The grace time after credential expiration in days.    |
| expireDate     | time   | Optional. The explicit expiration date of the credential.        |
