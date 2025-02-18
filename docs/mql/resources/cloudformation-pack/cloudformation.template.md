---
title: cloudformation.template
id: cloudformation.template
sidebar_label: cloudformation.template
displayed_sidebar: MQL
description: AWS CloudFormation Template
---

# cloudformation.template

**Description**

AWS CloudFormation Template

**Fields**

| ID          | TYPE                                                            | DESCRIPTION              |
| ----------- | --------------------------------------------------------------- | ------------------------ |
| version     | string                                                          | Template format version  |
| transform   | &#91;&#93;string                                                | Template macros          |
| description | string                                                          | Template description     |
| mappings    | map[string]dict                                                 | Template mappings        |
| globals     | map[string]dict                                                 | Template globals         |
| parameters  | map[string]dict                                                 | Template parameters      |
| metadata    | map[string]dict                                                 | Template metadata        |
| conditions  | map[string]dict                                                 | Template conditions      |
| resources   | &#91;&#93;[cloudformation.resource](cloudformation.resource.md) | Template resources       |
| outputs     | &#91;&#93;[cloudformation.output](cloudformation.output.md)     | Template outputs         |
| types       | &#91;&#93;string                                                | Supported resource types |
