---
title: microsoft.identityAndAccess.accessReviewDefinition.accessReviewScheduleSettings
id: microsoft.identityAndAccess.accessReviewDefinition.accessReviewScheduleSettings
sidebar_label: microsoft.identityAndAccess.accessReviewDefinition.accessReviewScheduleSettings
displayed_sidebar: MQL
description: Configures the recurrence, notifications, and decision-handling for an access review series.
---

# microsoft.identityAndAccess.accessReviewDefinition.accessReviewScheduleSettings

**Description**

Configures the recurrence, notifications, and decision-handling for an access review series.

**Fields**

| ID                                   | TYPE   | DESCRIPTION                                                                                                                               |
| ------------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| autoApplyDecisionsEnabled            | bool   | True if decisions are automatically applied                                                                                               |
| decisionHistoriesForReviewersEnabled | bool   | True if decisions on previous access review stages are available for reviewers on an accessReviewInstance with multiple subsequent stages |
| defaultDecision                      | string | Decision chosen if defaultDecisionEnabled is enabled. Can be one of Approve, Deny, or Recommendation                                      |
| defaultDecisionEnabled               | bool   | True if the default decision is enabled or disabled when reviewers do not respond                                                         |
| instanceDurationInDays               | int    | Duration of an access review instance in days                                                                                             |
| reminderNotificationsEnabled         | bool   | True if reminders are enabled or disabled                                                                                                 |
| justificationRequiredOnApproval      | bool   | True if reviewers are required to provide justification with their decision                                                               |
| mailNotificationsEnabled             | bool   | True if emails are enabled or disabled                                                                                                    |
| recommendationsEnabled               | bool   | True if decision recommendations are enabled or disabled                                                                                  |
| recurrence                           | dict   | Detailed settings for recurrence using the standard Outlook recurrence object                                                             |
