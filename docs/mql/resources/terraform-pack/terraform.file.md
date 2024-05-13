---
title: terraform.file
id: terraform.file
sidebar_label: terraform.file
displayed_sidebar: MQL
description: Terraform configuration file (.tf or .tf.json file)
---

# terraform.file

**Supported platform**

- terraform-hcl

**Maturity**

experimental

**Description**

Terraform configuration file (.tf or .tf.json file)

**Fields**

| ID     | TYPE                                            | DESCRIPTION                     |
| ------ | ----------------------------------------------- | ------------------------------- |
| path   | string                                          | Terraform (.tf or tf.json file) |
| blocks | &#91;&#93;[terraform.block](terraform.block.md) | All blocks within the file      |

**Examples**

Display all files and their blocks

```coffeescript
terraform.files { path blocks { nameLabel } }
```
