---
title: github.webhook
id: github.webhook
sidebar_label: github.webhook
displayed_sidebar: MQL
description: GitHub webhook
---

# github.webhook

**Description**

GitHub webhook

**Fields**

| ID     | TYPE             | DESCRIPTION                    |
| ------ | ---------------- | ------------------------------ |
| id     | int              | Webhook ID                     |
| name   | string           | Webhook name                   |
| url    | string           | Webhook URL                    |
| events | &#91;&#93;string | List of events for the webhook |
| config | dict             | Webhook config                 |
| active | bool             | Whether the webhook is active  |
