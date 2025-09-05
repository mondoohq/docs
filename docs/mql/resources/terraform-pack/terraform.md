---
title: terraform
id: terraform
sidebar_label: terraform
displayed_sidebar: MQL
description: Terraform configuration files
---

# terraform

**Supported platform**

- terraform-hcl

**Maturity**

experimental

**Description**

Terraform configuration files

**Fields**

| ID          | TYPE                                              | DESCRIPTION                                                 |
| ----------- | ------------------------------------------------- | ----------------------------------------------------------- |
| files       | &#91;&#93;[terraform.file](terraform.file.md)     | Access to individual files including .tf and .tf.json files |
| tfvars      | dict                                              | The attributes defined in .tfvars and .tfvars.json          |
| modules     | &#91;&#93;[terraform.module](terraform.module.md) | All referenced Terraform modules                            |
| blocks      | &#91;&#93;[terraform.block](terraform.block.md)   | Raw HCL blocks                                              |
| providers   | &#91;&#93;[terraform.block](terraform.block.md)   | Provider blocks                                             |
| datasources | &#91;&#93;[terraform.block](terraform.block.md)   | Data sources blocks                                         |
| variables   | &#91;&#93;[terraform.block](terraform.block.md)   | Variable blocks                                             |
| outputs     | &#91;&#93;[terraform.block](terraform.block.md)   | Output blocks                                               |

**Examples**

Display all Terraform blocks and their arguments

```coffee
terraform.blocks { nameLabel arguments }
```

Display all data blocks

```coffee
terraform.datasources { nameLabel arguments }
```

Display all resource blocks

```coffee
terraform.resources { nameLabel arguments }
```
