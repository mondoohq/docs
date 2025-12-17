---
title: parse.yara
id: parse.yara
sidebar_label: parse.yara
displayed_sidebar: MQL
description: Parse a YARA ruleset files
---

# parse.yara

**Description**

Parse a YARA ruleset files

**Init**

parse.yara(path string)

**Fields**

| ID       | TYPE                                      | DESCRIPTION                   |
| -------- | ----------------------------------------- | ----------------------------- |
| path     | string                                    | Path to the YARA ruleset file |
| rulesets | &#91;&#93;[yara.ruleset](yara.ruleset.md) | Parsed rule sets              |
