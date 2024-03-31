---
title: Run a Query Pack
id: cnquery-run-pack
sidebar_label: Run a Query Pack
displayed_sidebar: cnquery
sidebar_position: 5
description: Query packs let you bundle multiple queries together to meet specific needs.
image: /img/featured_img/mondoo-feature.jpg
---

To run multiple queries together, you can combine queries into query packs. You can find query packs in Mondoo's [cnquery-packs](https://github.com/mondoohq/cnquery-packs) GitHub repo.

## Let cnquery choose the right query pack​

cnquery comes with query packs out of the box for most systems. You can run:

```bash
cnquery scan local
```

Without any more specifics, cnquery tries to find and run the default query pack for the given system.

## Run a specific query pack​

To specify a query pack that you want to run, use the `-f` flag and `--querypack` argument:

```bash
cnquery scan TARGET -f YAMLFILE --querypack PACKNAME
```

| For...     | Substitute...                                                           |
| ---------- | ----------------------------------------------------------------------- |
| `TARGET`   | The asset to query, such as `local` or a transport to a remote machine. |
| `YAMLFILE` | The query pack file, such as `mondoo-aws-incident-response.mql.yaml`.   |
| `PACKNAME` | The name of the pack to run.                                            |

For example, this command runs a query pack named incident-response:

```bash
cnquery scan local --querypack incident-response
```

## Run a single query from a pack​

You can also choose just one query from a query pack. Specify the query UID with the query pack:

```bash
cnquery scan TARGET --querypack PACKNAME --query-id QUERYUID
```

| For...     | Substitute...                                                                                |
| ---------- | -------------------------------------------------------------------------------------------- |
| `TARGET`   | The asset to query, such as `local` or a transport to a remote machine.                      |
| `PACKNAME` | The name of the pack that contains the query you want to run.                                |
| `QUERYUID` | The unique identifier of the query you want to run. Find this in the query pack's YAML file. |

For example, this command runs the query named `sth-01` from the pack named `incident-response`:

```bash
cnquery scan local --querypack incident-response --query-id sth-01
```

## Create custom query packs​

Custom query packs let you bundle queries to meet your specific needs. To help you get started, you can find simple query pack examples in the cnquery repo's [examples](https://github.com/mondoohq/cnquery/tree/main/examples) folder.

## Explore your infrastructure in Mondoo Platform​

To more easily explore your infrastructure, sign up for a free Mondoo Platform account. Mondoo's web-based console allows you to navigate, search, and arrange all of your assets.

Go to [console.mondoo.com](https://console.mondoo.com) to sign up.

To learn about Mondoo Platform, read the [Mondoo Platform docs](../platform/home.md) or visit [mondoo.com](https://mondoo.com).

---
