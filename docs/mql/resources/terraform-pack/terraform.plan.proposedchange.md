---
title: terraform.plan.proposedChange
id: terraform.plan.proposedChange
sidebar_label: terraform.plan.proposedChange
displayed_sidebar: MQL
description: Terraform plan proposed change
---

# terraform.plan.proposedChange

**Supported platform**

- terraform-plan

**Description**

Terraform plan proposed change

**Fields**

| ID              | TYPE             | DESCRIPTION                                 |
| --------------- | ---------------- | ------------------------------------------- |
| address         | string           | Resource address                            |
| actions         | &#91;&#93;string | Actions that wil be taken for on the object |
| before          | dict             | Resource before values                      |
| after           | dict             | Resource after values                       |
| afterUnknown    | dict             |                                             |
| beforeSensitive | dict             |                                             |
| afterSensitive  | dict             |                                             |
| replacePaths    | dict             |                                             |
