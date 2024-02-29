---
title: terraform.fileposition
id: terraform.fileposition
sidebar_label: terraform.fileposition
displayed_sidebar: MQL
description: Position of the Terraform configuration block in the file
---

# terraform.fileposition

**Supported platform**

- terraform-hcl

**Maturity**

experimental

**Description**

Position of the Terraform configuration block in the file

**Fields**

| ID     | TYPE   | DESCRIPTION                                   |
| ------ | ------ | --------------------------------------------- |
| path   | string | File path to the Terraform configuration file |
| line   | int    | Line of the block                             |
| column | int    | Column of the block                           |
| byte   | int    | Size of the file                              |
