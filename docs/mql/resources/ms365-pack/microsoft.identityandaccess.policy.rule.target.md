---
title: microsoft.identityAndAccess.policy.rule.target
id: microsoft.identityAndAccess.policy.rule.target
sidebar_label: microsoft.identityAndAccess.policy.rule.target
displayed_sidebar: MQL
description: Defines details of the scope that's targeted by role management policy rule
---

# microsoft.identityAndAccess.policy.rule.target

**Description**

Defines details of the scope that's targeted by role management policy rule

**Fields**

| ID                  | TYPE             | DESCRIPTION                                                                                       |
| ------------------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| caller              | string           | The type of caller that's the target of the policy rule. Allowed values are: None, Admin, EndUser |
| enforcedSettings    | &#91;&#93;string | The list of role settings that are enforced and cannot be overridden by child scopes              |
| inheritableSettings | &#91;&#93;string | The list of role settings that can be inherited by child scopes                                   |
| level               | string           | The role assignment type that's the target of policy rule                                         |
| operations          | &#91;&#93;string | The role management operations that are the target of the policy rule                             |
