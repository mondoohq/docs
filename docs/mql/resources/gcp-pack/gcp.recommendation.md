---
title: gcp.recommendation
id: gcp.recommendation
sidebar_label: gcp.recommendation
displayed_sidebar: MQL
description: GCP recommendation and suggested action
---

# gcp.recommendation

**Supported platform**

- gcp

**Description**

GCP recommendation and suggested action

**Fields**

| ID               | TYPE           | DESCRIPTION                                                         |
| ---------------- | -------------- | ------------------------------------------------------------------- |
| id               | string         | ID of recommendation                                                |
| projectId        | string         | Project ID                                                          |
| zoneName         | string         | Zone name                                                           |
| name             | string         | Description of the recommendation                                   |
| recommender      | string         | Recommender                                                         |
| primaryImpact    | dict           | The primary impact that this recommendation can have                |
| additionalImpact | &#91;&#93;dict | Optional set of additional impact that this recommendation can have |
| content          | dict           | Recommended changes to resources                                    |
| category         | string         | Category of primary impact                                          |
| priority         | string         | Recommendation's priority                                           |
| lastRefreshTime  | time           | Last time this recommendation was refreshed                         |
| state            | dict           | State and metadata of recommendation                                |

**References**

- [Recommendations](https://cloud.google.com/recommender/docs/key-concepts)
