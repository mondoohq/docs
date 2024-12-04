---
title: microsoft.user.auditlog
id: microsoft.user.auditlog
sidebar_label: microsoft.user.auditlog
displayed_sidebar: MQL
description: Microsoft user audit log
---

# microsoft.user.auditlog

**Description**

Microsoft user audit log

**Fields**

| ID                       | TYPE                                                        | DESCRIPTION                                                                                  |
| ------------------------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| userId                   | string                                                      | The user's ID                                                                                |
| signins                  | &#91;&#93;[microsoft.user.signin](microsoft.user.signin.md) | The user's interactive sign-in entries (a maximum of 50 entries from the last 24 hours only) |
| lastInteractiveSignIn    | [microsoft.user.signin](microsoft.user.signin.md)           | The user's last interactive sign-in                                                          |
| lastNonInteractiveSignIn | [microsoft.user.signin](microsoft.user.signin.md)           | The user's last non-interactive sign-in (from the last 24 hours only)                        |
