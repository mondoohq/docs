---
title: microsoft.identityAndAccess
id: microsoft.identityAndAccess
sidebar_label: microsoft.identityAndAccess
displayed_sidebar: MQL
description: A container resource for identity and access policies that can be filtered
---

# microsoft.identityAndAccess

**Description**

A container resource for identity and access policies that can be filtered

**Init**

microsoft.identityAndAccess(filter string)

**List**

[]microsoft.identityAndAccess.policy

**Fields**

| ID                               | TYPE                                                                                                                                    | DESCRIPTION                                                                  |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| filter                           | string                                                                                                                                  | filter by scopeId and scopeType, scopeId eq '/' and scopeType eq 'Directory' |
| roleEligibilityScheduleInstances | &#91;&#93;[microsoft.identityAndAccess.roleEligibilityScheduleInstance](microsoft.identityandaccess.roleeligibilityscheduleinstance.md) | Get the instances of role eligibilities                                      |
| list                             | &#91;&#93;[microsoft.identityAndAccess.policy](microsoft.identityandaccess.policy.md)                                                   |                                                                              |
