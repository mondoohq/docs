---
title: googleworkspace.calendar.aclRule
id: googleworkspace.calendar.aclRule
sidebar_label: googleworkspace.calendar.aclRule
displayed_sidebar: MQL
description: Google Workspace calendar ACL rule
---

# googleworkspace.calendar.aclRule

**Description**

Google Workspace calendar ACL rule

**Fields**

| ID    | TYPE                                                                                | DESCRIPTION                                                                                     |
| ----- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| role  | string                                                                              | The role assigned to the scope. Possible values are none, freeBusyReader, reader, writer, owner |
| scope | [googleworkspace.calendar.aclRule.scope](googleworkspace.calendar.aclrule.scope.md) | The extent to which calendar access is granted by this ACL rule                                 |
