---
title: aws.config.rule
id: aws.config.rule
sidebar_label: aws.config.rule
displayed_sidebar: MQL
description: AWS Config rule
---

# aws.config.rule

**Supported platform**

- aws

**Description**

AWS Config rule

The `aws.config.rule` resource provides fields representing an individual AWS Config rule configured within an account. For usage, read the `aws.config` resource documentation.

**Fields**

| ID          | TYPE   | DESCRIPTION                                                    |
| ----------- | ------ | -------------------------------------------------------------- |
| arn         | string | ARN for the config rule                                        |
| state       | string | State of the rule                                              |
| source      | dict   | Rule identifier that causes the function to evaluate resources |
| id          | string | The ID of the Config rule                                      |
| name        | string | The name that you assigned to the Config rule                  |
| description | string | The description that provided for the Config rule              |
| region      | string | Region for the Config rule                                     |
