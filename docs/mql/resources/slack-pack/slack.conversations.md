---
title: slack.conversations
id: slack.conversations
sidebar_label: slack.conversations
displayed_sidebar: MQL
description: Slack conversations (channels, direct messages, and group messages)
---

# slack.conversations

**Description**

Slack conversations (channels, direct messages, and group messages)

**List**

[]slack.conversation

**Fields**

| ID              | TYPE                                                  | DESCRIPTION                              |
| --------------- | ----------------------------------------------------- | ---------------------------------------- |
| privateChannels | &#91;&#93;[slack.conversation](slack.conversation.md) | List of private channels in a Slack team |
| publicChannels  | &#91;&#93;[slack.conversation](slack.conversation.md) | List of public channels in a Slack team  |
| directMessages  | &#91;&#93;[slack.conversation](slack.conversation.md) | List of direct messages in a Slack team  |
| list            | &#91;&#93;[slack.conversation](slack.conversation.md) |                                          |
