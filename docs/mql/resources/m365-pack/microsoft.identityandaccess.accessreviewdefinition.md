---
title: microsoft.identityAndAccess.accessReviewDefinition
id: microsoft.identityAndAccess.accessReviewDefinition
sidebar_label: microsoft.identityAndAccess.accessReviewDefinition
displayed_sidebar: MQL
description: Defines a recurring access review schedule and its properties in Microsoft Entra ID.
---

# microsoft.identityAndAccess.accessReviewDefinition

**Description**

Defines a recurring access review schedule and its properties in Microsoft Entra ID.

**Fields**

| ID          | TYPE                                                                                                                                                                  | DESCRIPTION                                                                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | string                                                                                                                                                                | The unique identifier for the access review                                                                                                                   |
| displayName | string                                                                                                                                                                | The display name for the access review                                                                                                                        |
| status      | string                                                                                                                                                                | The status of the access review. Possible values are:, Initializing, NotStarted, Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed |
| reviewers   | dict                                                                                                                                                                  | This collection of access review scopes is used to define who are the reviewers                                                                               |
| settings    | [microsoft.identityAndAccess.accessReviewDefinition.accessReviewScheduleSettings](microsoft.identityandaccess.accessreviewdefinition.accessreviewschedulesettings.md) | The settings for an access review series, see type definition below                                                                                           |
