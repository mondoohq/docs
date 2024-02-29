---
title: googleworkspace.connectedApp
id: googleworkspace.connectedApp
sidebar_label: googleworkspace.connectedApp
displayed_sidebar: MQL
description: Google Workspace third-party connected apps
---

# googleworkspace.connectedApp

**Description**

Google Workspace third-party connected apps

**Fields**

| ID       | TYPE                                                        | DESCRIPTION                                                   |
| -------- | ----------------------------------------------------------- | ------------------------------------------------------------- |
| clientId | string                                                      | The unique ID of the application                              |
| name     | string                                                      | The application's name                                        |
| scopes   | &#91;&#93;string                                            | Aggregated scopes across all tokens issued to the application |
| users    | &#91;&#93;[googleworkspace.user](googleworkspace.user.md)   | Google Workspace User that use the 3rd-party application      |
| tokens   | &#91;&#93;[googleworkspace.token](googleworkspace.token.md) | Returns the user-issued tokens to 3rd party applications      |
