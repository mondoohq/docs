---
title: gcp.project.apiKey
id: gcp.project.apiKey
sidebar_label: gcp.project.apiKey
displayed_sidebar: MQL
description: Google Cloud (GCP) project API key
---

# gcp.project.apiKey

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) project API key

**Fields**

| ID           | TYPE                                                                  | DESCRIPTION                                 |
| ------------ | --------------------------------------------------------------------- | ------------------------------------------- |
| id           | string                                                                | The ID of the key                           |
| projectId    | string                                                                | Project ID                                  |
| name         | string                                                                | Human-readable display name of this key     |
| resourcePath | string                                                                | Full resource path                          |
| annotations  | map[string]string                                                     | Annotations                                 |
| created      | time                                                                  | Creation timestamp                          |
| deleted      | time                                                                  | Deletion timestamp                          |
| keyString    | string                                                                | Encrypted and signed value held by this key |
| restrictions | [gcp.project.apiKey.restrictions](gcp.project.apikey.restrictions.md) | API key restrictions                        |
| updated      | time                                                                  | Update timestamp                            |

**References**

- [API Keys Overview](https://cloud.google.com/api-keys/docs/overview)
