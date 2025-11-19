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

| ID             | TYPE   | DESCRIPTION                                               |
| -------------- | ------ | --------------------------------------------------------- |
| credentialType | string | The type of credential (e.g. password, sshkey).           |
| encryptionType | string | The encryption type, used for the credential.             |
| credential     | string | The value of the credential.                              |
| role           | string | Optional. The role this credential applies to.            |
| expireDate     | time   | Optional. The explicit expiration date of the credential. |
