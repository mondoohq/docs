---
title: Explore Your Infrastructure
id: cnquery-explore
sidebar_label: Explore Your Infrastructure
displayed_sidebar: cnquery
sidebar_position: 7
description: Explore the assets in your infrastructure
image: /img/featured_img/mondoo-feature.jpg
---

Use the `cnquery scan` command to explore an asset's configuration based on a query pack. This command retrieves an asset's configuration details. For example, you can scan the local system with its pre-configured query pack.

```bash
cnquery scan local
```

<!-- To manually specify a query pack, use this command:

```bash
cnquery scan TARGET --querypack PACK
```

| For...   | Substitute...                                                           |
|----------|-------------------------------------------------------------------------|
| `TARGET` | The asset to scan, such as local or a transport to a remote machine.    |
| `PACK`   | The query pack YAML file.                                               |

This example scans the local machine using a policy bundle named preaudit:

```bash
cnquery scan local --querypack preaudit.yaml
```
-->

## Explore your infrastructure in Mondoo Platform​

To more easily explore your infrastructure, sign up for a free Mondoo Platform account. Mondoo's web-based console allows you to navigate, search, and arrange all of your assets.

Go to [console.mondoo.com](https://console.mondoo.com) to sign up.

To learn about Mondoo Platform, read the [Mondoo Platform docs](../intro.md) or visit [mondoo.com](https://mondoo.com).

---
