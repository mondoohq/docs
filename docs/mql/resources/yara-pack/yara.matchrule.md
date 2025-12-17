---
title: yara.matchRule
id: yara.matchRule
sidebar_label: yara.matchRule
displayed_sidebar: MQL
description: A YARA match rule represents a rule successfully matched against a block of data
---

# yara.matchRule

**Description**

A YARA match rule represents a rule successfully matched against a block of data

**Fields**

| ID        | TYPE                                              | DESCRIPTION        |
| --------- | ------------------------------------------------- | ------------------ |
| namespace | string                                            | Rule namespace     |
| rule      | string                                            | Rule name          |
| tags      | &#91;&#93;string                                  | Rule tags          |
| meta      | map[string]dict                                   | Rule meta variable |
| strings   | &#91;&#93;[yara.matchString](yara.matchstring.md) | Matched strings    |
