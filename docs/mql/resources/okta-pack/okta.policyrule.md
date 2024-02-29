---
title: okta.policyRule
id: okta.policyRule
sidebar_label: okta.policyRule
displayed_sidebar: MQL
description: Okta policy rule
---

# okta.policyRule

**Description**

Okta policy rule

**Fields**

| ID          | TYPE   | DESCRIPTION                               |
| ----------- | ------ | ----------------------------------------- |
| id          | string | Identifier of the rule                    |
| name        | string | Name of the rule                          |
| priority    | int    | Priority of the rule                      |
| status      | string | Status of the rule: ACTIVE or INACTIVE    |
| system      | bool   | Whether the rule is a system policy rule  |
| type        | string | Rule type                                 |
| actions     | dict   | Actions for rule                          |
| conditions  | dict   | Conditions for a rule                     |
| created     | time   | Timestamp when the rule was created       |
| lastUpdated | time   | Timestamp when the rule was last modified |
