---
title: gcp.project.iamService.serviceAccount.key
id: gcp.project.iamService.serviceAccount.key
sidebar_label: gcp.project.iamService.serviceAccount.key
displayed_sidebar: MQL
description: GCP service account keys
---

# gcp.project.iamService.serviceAccount.key

**Supported platform**

- gcp

**Description**

GCP service account keys

**Fields**

| ID              | TYPE   | DESCRIPTION                                  |
| --------------- | ------ | -------------------------------------------- |
| name            | string | Service account key name                     |
| keyAlgorithm    | string | Algorithm (and possibly key size) of the key |
| validAfterTime  | time   | Key can be used after this timestamp         |
| validBeforeTime | time   | Key can be used before this timestamp        |
| keyOrigin       | string | Key origin                                   |
| keyType         | string | Key type                                     |
| disabled        | bool   | Whether the key is disabled                  |

**References**

- [Create and delete service account keys](https://cloud.google.com/iam/docs/keys-create-delete)
