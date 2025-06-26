---
title: microsoft.identityAndAccess.roleEligibilityScheduleInstance
id: microsoft.identityAndAccess.roleEligibilityScheduleInstance
sidebar_label: microsoft.identityAndAccess.roleEligibilityScheduleInstance
displayed_sidebar: MQL
description: Represents an instance of a role eligibility in PIM
---

# microsoft.identityAndAccess.roleEligibilityScheduleInstance

**Description**

Represents an instance of a role eligibility in PIM

**Fields**

| ID                        | TYPE   | DESCRIPTION                                                                                       |
| ------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| id                        | string | The unique identifier of the role eligibility schedule instance                                   |
| principalId               | string | The identifier of the principal (user, group, or service principal) that has the role eligibility |
| roleDefinitionId          | string | The identifier of the role definition that the eligibility is for                                 |
| directoryScopeId          | string | The identifier of the directory object representing the scope of the role eligibility             |
| appScopeId                | string | The identifier of the app-specific scope of the role eligibility                                  |
| startDateTime             | time   | The start time of the role eligibility                                                            |
| endDateTime               | time   | The end time of the role eligibility                                                              |
| memberType                | string | The type of member, either 'Direct' or 'Inherited'.                                               |
| roleEligibilityScheduleId | string | The identifier of the role eligibility schedule from which this instance is created               |
