---
title: yara.scan
id: yara.scan
sidebar_label: yara.scan
displayed_sidebar: MQL
description: Scan a file
---

# yara.scan

**Description**

Scan a file

**Init**

yara.scan(path string)

**Fields**

| ID       | TYPE                                          | DESCRIPTION                 |
| -------- | --------------------------------------------- | --------------------------- |
| path     | string                                        | Path that should be scanned |
| source   | string                                        | Custom RuleSet source       |
| rulesets | &#91;&#93;string                              | RuleSet filter              |
| rules    | &#91;&#93;string                              | Rule filter                 |
| result   | &#91;&#93;[yara.matchRule](yara.matchrule.md) | YARA scan results           |
