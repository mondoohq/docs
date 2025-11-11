---
title: microsoft.conditionalAccess.policy.conditions.applications
id: microsoft.conditionalAccess.policy.conditions.applications
sidebar_label: microsoft.conditionalAccess.policy.conditions.applications
displayed_sidebar: MQL
description: Represents the applications and user actions included in and excluded from the conditional access policy
---

# microsoft.conditionalAccess.policy.conditions.applications

**Description**

Represents the applications and user actions included in and excluded from the conditional access policy

**Fields**

| ID                  | TYPE             | DESCRIPTION                                                               |
| ------------------- | ---------------- | ------------------------------------------------------------------------- |
| includeApplications | &#91;&#93;string | Can be one of the following: appId, All, Office365, MicrosoftAdminPortals |
| excludeApplications | &#91;&#93;string | Can be one of the following: appId, All, Office365, MicrosoftAdminPortals |
| includeUserActions  | &#91;&#93;string | User actions to include                                                   |
