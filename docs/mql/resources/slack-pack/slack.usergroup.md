---
title: slack.userGroup
id: slack.userGroup
sidebar_label: slack.userGroup
displayed_sidebar: MQL
description: Slack user groups
---

# slack.userGroup

**Description**

Slack user groups

**Fields**

| ID          | TYPE                                  | DESCRIPTION                          |
| ----------- | ------------------------------------- | ------------------------------------ |
| id          | string                                | Group ID                             |
| teamId      | string                                | Slack workspace ID                   |
| name        | string                                | Friendly name of the group           |
| description | string                                | Purpose of the group                 |
| handle      | string                                | Value used to notify group members   |
| isExternal  | bool                                  | Whether the group is external        |
| created     | time                                  | Timestamp when the group was created |
| updated     | time                                  | Timestamp when the group was updated |
| deleted     | time                                  | Timestamp when the group was deleted |
| createdBy   | [slack.user](slack.user.md)           | User that created the group          |
| updatedBy   | [slack.user](slack.user.md)           | User that updated the group          |
| deletedBy   | [slack.user](slack.user.md)           | User that deleted the group          |
| userCount   | int                                   | Total number of users in a group     |
| members     | &#91;&#93;[slack.user](slack.user.md) | Members of the group                 |
