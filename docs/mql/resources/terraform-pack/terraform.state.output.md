---
title: terraform.state.output
id: terraform.state.output
sidebar_label: terraform.state.output
displayed_sidebar: MQL
description: Terraform state output values
---

# terraform.state.output

**Supported platform**

- terraform-state

**Description**

Terraform state output values

**Init**

terraform.state.output(identifier string)

**Fields**

| ID         | TYPE   | DESCRIPTION                     |
| ---------- | ------ | ------------------------------- |
| identifier | string | Output identifier               |
| sensitive  | bool   | Whether the output is sensitive |
| value      | dict   | Output value                    |
| type       | dict   | Output value type               |
