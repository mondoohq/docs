---
title: googleworkspace.calendar
id: googleworkspace.calendar
sidebar_label: googleworkspace.calendar
displayed_sidebar: MQL
description: Google Workspace calendar
---

# googleworkspace.calendar

**Description**

Google Workspace calendar

**Fields**

| ID              | TYPE                                                                              | DESCRIPTION                                                             |
| --------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| summary         | string                                                                            | Title of the calendar                                                   |
| summaryOverride | string                                                                            | The summary that the authenticated user has set for this calendar       |
| primary         | bool                                                                              | Whether the calendar is the primary calendar for the authenticated user |
| acl             | &#91;&#93;[googleworkspace.calendar.aclRule](googleworkspace.calendar.aclrule.md) | ACL rules for the calendar                                              |
