---
title: terraform.plan.resourceChange
id: terraform.plan.resourceChange
sidebar_label: terraform.plan.resourceChange
displayed_sidebar: MQL
description: Terraform plan resource change
---

# terraform.plan.resourceChange

**Supported platform**

- terraform-plan

**Description**

Terraform plan resource change

**Fields**

| ID              | TYPE                                                              | DESCRIPTION                                    |
| --------------- | ----------------------------------------------------------------- | ---------------------------------------------- |
| address         | string                                                            | Resource address                               |
| previousAddress | string                                                            | Resource previous address                      |
| moduleAddress   | string                                                            | Resource module address                        |
| mode            | string                                                            | Resource mode                                  |
| type            | string                                                            | Resource type                                  |
| name            | string                                                            | Resource name                                  |
| providerName    | string                                                            | Provider name                                  |
| deposed         | string                                                            | Whether the action applies to a deposed object |
| change          | [terraform.plan.proposedChange](terraform.plan.proposedchange.md) | Change to make to this object                  |
| actionReason    | string                                                            | Resource action reason                         |
