---
title: googleworkspace.user
id: googleworkspace.user
sidebar_label: googleworkspace.user
displayed_sidebar: MQL
description: Google Workspace user accounts
---

# googleworkspace.user

**Description**

Google Workspace user accounts

**Fields**

| ID               | TYPE                                                            | DESCRIPTION                                              |
| ---------------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| id               | string                                                          | The unique ID for the user                               |
| familyName       | string                                                          | The user's last name                                     |
| givenName        | string                                                          | The user's first names                                   |
| fullName         | string                                                          | The user's full name                                     |
| primaryEmail     | string                                                          | The user's primary email address                         |
| recoveryEmail    | string                                                          | Recovery email of the user                               |
| recoveryPhone    | string                                                          | Recovery phone of the user                               |
| agreedToTerms    | bool                                                            | Whether the user accepted the Terms of Service agreement |
| aliases          | &#91;&#93;string                                                | A list of the user's alias email addresses               |
| suspended        | bool                                                            | Whether the user is suspended                            |
| suspensionReason | string                                                          | The reason a user account is suspended                   |
| archived         | bool                                                            | Whether the user is archived                             |
| isAdmin          | bool                                                            | Whether the user has super administrator privileges      |
| isDelegatedAdmin | bool                                                            | Whether the a user is a delegated administrator          |
| isEnforcedIn2Sv  | bool                                                            | Whether 2-step verification is enforced                  |
| isEnrolledIn2Sv  | bool                                                            | Whether the user is enrolled in 2-step verification      |
| isMailboxSetup   | bool                                                            | Whether the user's Google mailbox is created             |
| lastLoginTime    | time                                                            | User's last login time                                   |
| creationTime     | time                                                            | User's account creation time                             |
| usageReport      | [googleworkspace.report.usage](googleworkspace.report.usage.md) | Retrieves latest report for the user                     |
| tokens           | &#91;&#93;[googleworkspace.token](googleworkspace.token.md)     | Returns the user-issued tokens to 3rd party applications |
