---
title: atlassian.admin.organization
id: atlassian.admin.organization
sidebar_label: atlassian.admin.organization
displayed_sidebar: MQL
description: Organization
---

# atlassian.admin.organization

**Description**

Organization

**Fields**

| ID           | TYPE                                                                                              | DESCRIPTION       |
| ------------ | ------------------------------------------------------------------------------------------------- | ----------------- |
| id           | string                                                                                            | Organization ID   |
| name         | string                                                                                            | Name              |
| type         | string                                                                                            | Organization type |
| policies     | &#91;&#93;[atlassian.admin.organization.policy](atlassian.admin.organization.policy.md)           | Policies          |
| domains      | &#91;&#93;[atlassian.admin.organization.domain](atlassian.admin.organization.domain.md)           | Domains           |
| managedUsers | &#91;&#93;[atlassian.admin.organization.managedUser](atlassian.admin.organization.manageduser.md) | Managed users     |
