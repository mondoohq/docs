---
title: Distribute Queries Across Your Infrastructure
id: cnquery-distribute
sidebar_label: Distribute Across Your Infrastructure
displayed_sidebar: cnquery
sidebar_position: 7
description: Share cnquery query packs across your infrastructure using the Mondoo Query Hub.
image: /img/featured_img/mondoo-feature.jpg
---

:::note

This feature is in development.

:::

You can share query packs across your infrastructure using the Mondoo Query Hub. The Query Hub creates a secure, private environment in your account that stores data about your assets. You can make all assets report on query packs, and you can define custom rules for your infrastructure.

To use the Query Hub:

```bash
cnquery auth login
```

Once set up, you can collect your asset's data:

```bash
cnquery scan local
```

To add custom query packs, you can upload them:

```bash
cnquery pack upload mypack.mql.yaml
```

---
