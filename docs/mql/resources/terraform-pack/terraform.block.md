---
title: terraform.block
id: terraform.block
sidebar_label: terraform.block
displayed_sidebar: MQL
description: Terraform resource block
---

# terraform.block

**Supported platform**

- terraform-hcl

**Maturity**

experimental

**Description**

Terraform resource block

**Fields**

| ID         | TYPE                                                | DESCRIPTION          |
| ---------- | --------------------------------------------------- | -------------------- |
| type       | string                                              | Block type           |
| labels     | &#91;&#93;string                                    | Block Labels         |
| nameLabel  | string                                              | Block name label     |
| start      | [terraform.fileposition](terraform.fileposition.md) | Block start position |
| end        | [terraform.fileposition](terraform.fileposition.md) | Block end position   |
| arguments  | dict                                                | Block arguments      |
| attributes | dict                                                | Raw block attributes |
| blocks     | &#91;&#93;[terraform.block](terraform.block.md)     | Child blocks         |
| related    | &#91;&#93;[terraform.block](terraform.block.md)     | Related blocks       |
| snippet    | string                                              | Block snippet        |

**Examples**

Display all Terraform blocks and their arguments

```coffee
terraform.blocks { nameLabel arguments }
```
