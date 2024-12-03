---
title: microsoft.user.auditlog
id: microsoft.user.auditlog
sidebar_label: microsoft.user.auditlog
displayed_sidebar: MQL
description: Microsoft User Audit log
---

# microsoft.user.auditlog

**Description**

Microsoft User Audit log

**Fields**

| ID                       | TYPE                                                        | DESCRIPTION                                                                                                                                                           |
| ------------------------ | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId                   | string                                                      | The user's identifier.                                                                                                                                                |
| signins                  | &#91;&#93;[microsoft.user.signin](microsoft.user.signin.md) | The user's sign-in entries. Only entries from the last 24 hours are fetched and up to 50 at most., Note that only interactive sign-in entries are currently returned. |
| lastInteractiveSignIn    | [microsoft.user.signin](microsoft.user.signin.md)           | The user's last interactive sign-in.                                                                                                                                  |
| lastNonInteractiveSignIn | [microsoft.user.signin](microsoft.user.signin.md)           | The user's last non-interactive sign-in. Only entries from the last 24 hours are currently considered.                                                                |
