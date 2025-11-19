---
title: microsoft.groupLifecyclePolicy
id: microsoft.groupLifecyclePolicy
sidebar_label: microsoft.groupLifecyclePolicy
displayed_sidebar: MQL
description: Microsoft group lifecycle policy
---

# microsoft.groupLifecyclePolicy

**Description**

Microsoft group lifecycle policy

**Fields**

| ID                          | TYPE   | DESCRIPTION                                                             |
| --------------------------- | ------ | ----------------------------------------------------------------------- |
| id                          | string | Policy ID                                                               |
| groupLifetimeInDays         | int    | Number of days before a group expires and is automatically deleted      |
| managedGroupTypes           | string | The group type for which the policies will apply                        |
| alternateNotificationEmails | string | List of email addresses to send notifications for groups without owners |
