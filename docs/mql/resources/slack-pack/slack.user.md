---
title: slack.user
id: slack.user
sidebar_label: slack.user
displayed_sidebar: MQL
description: Slack user
---

# slack.user

**Description**

Slack user

**Fields**

| ID                | TYPE                                            | DESCRIPTION                                                            |
| ----------------- | ----------------------------------------------- | ---------------------------------------------------------------------- |
| id                | string                                          | ID of the workspace user                                               |
| name              | string                                          | User name                                                              |
| teamId            | string                                          | Slack workspace ID                                                     |
| deleted           | bool                                            | Whether the user has been deactivated                                  |
| color             | string                                          | Special user color                                                     |
| realName          | string                                          | User's first and last name                                             |
| timeZone          | string                                          | Geographic timezone-related region                                     |
| timeZoneLabel     | string                                          | Commonly used name of the timezone                                     |
| timeZoneOffset    | int                                             | Number of seconds to offset UTC time                                   |
| isBot             | bool                                            | Whether the user is a bot                                              |
| isAdmin           | bool                                            | Whether the user is an admin of the current workspace                  |
| isOwner           | bool                                            | Whether the user is an owner of the current workspace                  |
| isPrimaryOwner    | bool                                            | Whether the user is the primary owner of the current workspace         |
| isRestricted      | bool                                            | Whether the user is a guest user                                       |
| isUltraRestricted | bool                                            | Whether the user is a single-channel guest                             |
| isStranger        | bool                                            | Whether the user belongs to a different workspace                      |
| isAppUser         | bool                                            | Whether the user is an app bot                                         |
| isInvitedUser     | bool                                            | Whether a user has been invited but has not yet signed in              |
| has2FA            | bool                                            | Whether two-factor authentication is enabled for the user              |
| twoFactorType     | string                                          | Type of two-factor authentication the user is using                    |
| hasFiles          | bool                                            | Whether the user owns files                                            |
| presence          | string                                          | Presence of the user                                                   |
| locale            | string                                          | IETF language code that represents this user's chosen display language |
| profile           | dict                                            | User profile                                                           |
| enterpriseUser    | [slack.enterpriseUser](slack.enterpriseuser.md) | Related Slack Enterprise Grid user                                     |
