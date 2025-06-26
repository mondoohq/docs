---
title: microsoft.adminConsentRequestPolicy
id: microsoft.adminConsentRequestPolicy
sidebar_label: microsoft.adminConsentRequestPolicy
displayed_sidebar: MQL
---

# microsoft.adminConsentRequestPolicy

**Fields**

| ID                    | TYPE                                                                                                | DESCRIPTION                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| isEnabled             | bool                                                                                                | Specifies whether the admin consent request feature is enabled or disabled                             |
| notifyReviewers       | bool                                                                                                | Specifies whether reviewers will receive notifications                                                 |
| remindersEnabled      | bool                                                                                                | Specifies whether reviewers will receive reminder emails                                               |
| requestDurationInDays | int                                                                                                 | Specifies the duration the request is active before it automatically expires if no decision is applied |
| reviewers             | &#91;&#93;[microsoft.graph.accessReviewReviewerScope](microsoft.graph.accessreviewreviewerscope.md) | The list of reviewers for the admin consent                                                            |
| version               | int                                                                                                 | Specifies the version of this policy                                                                   |
