---
title: openpgp.signature
id: openpgp.signature
sidebar_label: openpgp.signature
displayed_sidebar: MQL
description: OpenPGP signature
---

# openpgp.signature

**Description**

OpenPGP signature

**Fields**

| ID              | TYPE   | DESCRIPTION                   |
| --------------- | ------ | ----------------------------- |
| fingerprint     | string | Primary key fingerprint       |
| identityName    | string | Identity name                 |
| hash            | string | Signature hash                |
| version         | int    | Signature version             |
| signatureType   | string | Signature type                |
| keyAlgorithm    | string | Hash algorithm                |
| creationTime    | time   | Creation time                 |
| lifetimeSecs    | int    | Signature lifetime in seconds |
| expiresIn       | time   | Expiration duration           |
| keyLifetimeSecs | int    | Key lifetime in seconds       |
| keyExpiresIn    | time   | Key expiration duration       |
