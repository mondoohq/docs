---
title: mondoo
id: mondoo
sidebar_label: mondoo
displayed_sidebar: MQL
description: Contextual information about MQL runtime and environment
---

# mondoo

**Description**

Contextual information about MQL runtime and environment

**Fields**

| ID             | TYPE             | DESCRIPTION                                         |
| -------------- | ---------------- | --------------------------------------------------- |
| version        | string           | Version of the client running on the asset          |
| build          | string           | Build of the client (e.g., production, development) |
| arch           | string           | Architecture of this client (e.g., linux-amd64)     |
| jobEnvironment | dict             | Agent execution environment                         |
| capabilities   | &#91;&#93;string | Connection capabilities                             |
