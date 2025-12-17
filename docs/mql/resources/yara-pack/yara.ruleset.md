---
title: yara.ruleset
id: yara.ruleset
sidebar_label: yara.ruleset
displayed_sidebar: MQL
description: A YARA ruleset represents the content of yar file
---

# yara.ruleset

**Description**

A YARA ruleset represents the content of yar file

**Init**

yara.ruleset(name string)

**Fields**

| ID       | TYPE                                | DESCRIPTION               |
| -------- | ----------------------------------- | ------------------------- |
| name     | string                              | Ruleset name              |
| filename | string                              | Ruleset file name         |
| sha512   | string                              | Ruleset SHA 512 checksum  |
| rules    | &#91;&#93;[yara.rule](yara.rule.md) | List of rules in ruleset  |
| source   | string                              | Raw source of ruleset     |
| origin   | string                              | Origin eg. builtin, local |
