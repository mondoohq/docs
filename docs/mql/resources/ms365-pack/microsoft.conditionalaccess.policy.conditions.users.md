---
title: microsoft.conditionalAccess.policy.conditions.users
id: microsoft.conditionalAccess.policy.conditions.users
sidebar_label: microsoft.conditionalAccess.policy.conditions.users
displayed_sidebar: MQL
description: Represents users, groups, and roles included in and excluded from the policy scope.
---

# microsoft.conditionalAccess.policy.conditions.users

**Description**

Represents users, groups, and roles included in and excluded from the policy scope.

**Fields**

| ID            | TYPE             | DESCRIPTION                                                                                 |
| ------------- | ---------------- | ------------------------------------------------------------------------------------------- |
| includeUsers  | &#91;&#93;string | User IDs in scope of policy unless explicitly excluded, None, All, or GuestsOrExternalUsers |
| excludeUsers  | &#91;&#93;string | User IDs excluded from scope of policy and/or GuestsOrExternalUsers                         |
| includeGroups | &#91;&#93;string | Group IDs in scope of policy unless explicitly excluded                                     |
| excludeGroups | &#91;&#93;string | Group IDs excluded from scope of policy                                                     |
| includeRoles  | &#91;&#93;string | Role IDs in scope of policy unless explicitly excluded                                      |
| excludeRoles  | &#91;&#93;string | Role IDs excluded from scope of policy                                                      |
