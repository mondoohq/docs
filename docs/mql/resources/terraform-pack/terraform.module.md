---
title: terraform.module
id: terraform.module
sidebar_label: terraform.module
displayed_sidebar: MQL
description: Terraform module block
---

# terraform.module

**Supported platform**

- terraform-hcl

**Maturity**

experimental

**Description**

Terraform module block

**Fields**

| ID      | TYPE                                  | DESCRIPTION                                      |
| ------- | ------------------------------------- | ------------------------------------------------ |
| key     | string                                | Unique identifier for the module                 |
| source  | string                                | Source from which the module was loaded          |
| version | string                                | Module version                                   |
| dir     | string                                | Path to the directory where the module is stored |
| block   | [terraform.block](terraform.block.md) | Block (including the configuration)              |

**Examples**

Display all loaded Terraform modules

```coffeescript
terraform.modules { key version source}
```
