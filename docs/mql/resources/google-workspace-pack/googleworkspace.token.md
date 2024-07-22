---
title: googleworkspace.token
id: googleworkspace.token
sidebar_label: googleworkspace.token
displayed_sidebar: MQL
description: Google Workspace token
---

# googleworkspace.token

**Description**

Google Workspace token

**Fields**

| ID          | TYPE             | DESCRIPTION                                             |
| ----------- | ---------------- | ------------------------------------------------------- |
| anonymous   | bool             | Whether the application is registered with Google       |
| clientId    | string           | The Client ID of the application                        |
| displayText | string           | The displayable name of the application token           |
| nativeApp   | bool             | Whether the token is issued to an installed application |
| scopes      | &#91;&#93;string | A list of granted authorization scopes the application  |
| userKey     | string           | The unique ID of the user that issued the token         |
