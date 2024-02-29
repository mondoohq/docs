---
title: atlassian.jira.user
id: atlassian.jira.user
sidebar_label: atlassian.jira.user
displayed_sidebar: MQL
description: Jira user
---

# atlassian.jira.user

**Description**

Jira user

**Fields**

| ID               | TYPE                                                                          | DESCRIPTION         |
| ---------------- | ----------------------------------------------------------------------------- | ------------------- |
| id               | string                                                                        | Account ID          |
| name             | string                                                                        | Name                |
| type             | string                                                                        | Account type        |
| picture          | string                                                                        | Picture of the user |
| groups           | &#91;&#93;[atlassian.jira.group](atlassian.jira.group.md)                     | Groups              |
| applicationRoles | &#91;&#93;[atlassian.jira.applicationRole](atlassian.jira.applicationrole.md) | Roles               |
