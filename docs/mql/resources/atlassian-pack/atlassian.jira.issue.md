---
title: atlassian.jira.issue
id: atlassian.jira.issue
sidebar_label: atlassian.jira.issue
displayed_sidebar: MQL
description: Jira issue
---

# atlassian.jira.issue

**Description**

Jira issue

**Fields**

| ID          | TYPE                                          | DESCRIPTION              |
| ----------- | --------------------------------------------- | ------------------------ |
| id          | string                                        | Issue ID                 |
| project     | string                                        | Project                  |
| projectKey  | string                                        | Project key              |
| status      | string                                        | Status                   |
| description | string                                        | Description              |
| createdAt   | time                                          | Issue create time in UTC |
| creator     | [atlassian.jira.user](atlassian.jira.user.md) | Issue creator            |
| typeName    | string                                        | Issue type name          |
