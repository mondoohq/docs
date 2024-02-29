---
title: github.user
id: github.user
sidebar_label: github.user
displayed_sidebar: MQL
description: GitHub user
---

# github.user

**Description**

GitHub user

**Fields**

| ID              | TYPE                                                | DESCRIPTION                  |
| --------------- | --------------------------------------------------- | ---------------------------- |
| id              | int                                                 | User ID                      |
| login           | string                                              | User login                   |
| name            | string                                              | User name                    |
| email           | string                                              | User email                   |
| bio             | string                                              | User bio                     |
| blog            | string                                              | User blog URL                |
| location        | string                                              | User location                |
| avatarUrl       | string                                              | User profile picture URL     |
| followers       | int                                                 | User followers               |
| following       | int                                                 | User following               |
| twitterUsername | string                                              | User Twitter handle          |
| createdAt       | time                                                | User create time in UTC      |
| updatedAt       | time                                                | Last user update time in UTC |
| suspendedAt     | time                                                | When the user was suspended  |
| company         | string                                              | User's company               |
| repositories    | &#91;&#93;[github.repository](github.repository.md) | User's repositories          |
| gists           | &#91;&#93;[github.gist](github.gist.md)             | User gists                   |
