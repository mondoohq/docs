---
title: slack.conversation
id: slack.conversation
sidebar_label: slack.conversation
displayed_sidebar: MQL
description: Slack conversation
---

# slack.conversation

**Description**

Slack conversation

**Fields**

| ID                 | TYPE                                  | DESCRIPTION                                                                     |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------------------- |
| id                 | string                                | Conversation ID                                                                 |
| name               | string                                | Name of the conversation                                                        |
| creator            | [slack.user](slack.user.md)           | User that created this conversation                                             |
| created            | time                                  | Timestamp of when the conversation was created                                  |
| locale             | string                                | IETF language code that represents chosen language                              |
| topic              | dict                                  | Information about the channel topic                                             |
| purpose            | dict                                  | Information about the channel purpose                                           |
| isArchived         | bool                                  | Indicates that the conversation is archived                                     |
| isOpen             | bool                                  | Indicates that the conversation is open                                         |
| isPrivate          | bool                                  | Whether the conversation is privileged between two or more members              |
| isIM               | bool                                  | Whether the conversation is a direct message                                    |
| isMpim             | bool                                  | Whether the conversation is private between multiple users                      |
| isGroup            | bool                                  | Whether the conversation is a private channel created before March 2021         |
| isChannel          | bool                                  | Whether a conversation is a channel                                             |
| isShared           | bool                                  | Whether the conversation is in some way shared between multiple workspaces      |
| isExtShared        | bool                                  | Whether the conversation is part of a shared channel with a remote organization |
| isPendingExtShared | bool                                  | Whether the conversation is to be shared with a remote organization             |
| isOrgShared        | bool                                  | Whether the channel is shared between Enterprise Grid workspaces                |
| priority           | float                                 | Priority of the conversation                                                    |
| members            | &#91;&#93;[slack.user](slack.user.md) | Members of the conversation                                                     |
