---
title: dns.dkimRecord
id: dns.dkimRecord
sidebar_label: dns.dkimRecord
displayed_sidebar: MQL
description: DKIM public key representation as defined in RFC 6376
---

# dns.dkimRecord

**Description**

DKIM public key representation as defined in RFC 6376

**Fields**

| ID             | TYPE             | DESCRIPTION                                    |
| -------------- | ---------------- | ---------------------------------------------- |
| dnsTxt         | string           | DNS text representation                        |
| domain         | string           | DKIM selector domain                           |
| version        | string           | Version                                        |
| hashAlgorithms | &#91;&#93;string | Acceptable hash algorithms                     |
| keyType        | string           | Key type                                       |
| notes          | string           | Notes                                          |
| publicKeyData  | string           | Public key data base64-encoded                 |
| serviceTypes   | &#91;&#93;string | Service types                                  |
| flags          | &#91;&#93;string | Flags                                          |
| valid          | bool             | Whether the DKIM entry and public key is valid |
