---
title: okta.application
id: okta.application
sidebar_label: okta.application
displayed_sidebar: MQL
description: Okta application
---

# okta.application

**Description**

Okta application

**Fields**

| ID          | TYPE             | DESCRIPTION                                     |
| ----------- | ---------------- | ----------------------------------------------- |
| id          | string           | Unique key for the application                  |
| name        | string           | Unique key that defines the application         |
| label       | string           | User-defined display name for the application   |
| created     | time             | Timestamp when the application was created      |
| lastUpdated | time             | Timestamp when the application was last updated |
| credentials | dict             | Credentials for the specified sign-on mode      |
| features    | &#91;&#93;string | Enabled app features                            |
| licensing   | dict             | Okta licensing information                      |
| profile     | dict             | Valid JSON schema for specifying properties     |
| settings    | dict             | Settings for the application                    |
| signOnMode  | string           | Authentication mode of the application          |
| status      | string           | Status of the application                       |
| visibility  | dict             | Visibility settings for the application         |
