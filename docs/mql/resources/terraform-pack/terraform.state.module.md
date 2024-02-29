---
title: terraform.state.module
id: terraform.state.module
sidebar_label: terraform.state.module
displayed_sidebar: MQL
description: Terraform state module
---

# terraform.state.module

**Supported platform**

- terraform-state

**Description**

Terraform state module

**Init**

terraform.state.module(identifier string)

**Fields**

| ID           | TYPE                                                              | DESCRIPTION                                    |
| ------------ | ----------------------------------------------------------------- | ---------------------------------------------- |
| address      | string                                                            | Module identifier address                      |
| resources    | &#91;&#93;[terraform.state.resource](terraform.state.resource.md) | Resources that describe infrastructure objects |
| childModules | &#91;&#93;[terraform.state.module](terraform.state.module.md)     | Child modules called from this module          |
