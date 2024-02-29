---
title: terraform.state.resource
id: terraform.state.resource
sidebar_label: terraform.state.resource
displayed_sidebar: MQL
description: Terraform state resource
---

# terraform.state.resource

**Supported platform**

- terraform-state

**Description**

Terraform state resource

**Fields**

| ID            | TYPE             | DESCRIPTION                                                                 |
| ------------- | ---------------- | --------------------------------------------------------------------------- |
| address       | string           | Address is the absolute resource address                                    |
| mode          | string           | Mode: managed or data                                                       |
| type          | string           | Resource type                                                               |
| name          | string           | Resource name                                                               |
| providerName  | string           | Terraform provider                                                          |
| schemaVersion | int              | Which version of the resource type schema the `values` property conforms to |
| values        | dict             | Attribute values                                                            |
| dependsOn     | &#91;&#93;string | List of the resource's dependencies                                         |
| tainted       | bool             | Whether the resource is tainted in the Terraform state                      |
| deposedKey    | string           | Whether the resource is deposed in the Terraform state                      |
