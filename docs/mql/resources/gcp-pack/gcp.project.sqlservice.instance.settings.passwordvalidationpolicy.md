---
title: gcp.project.sqlService.instance.settings.passwordValidationPolicy
id: gcp.project.sqlService.instance.settings.passwordValidationPolicy
sidebar_label: gcp.project.sqlService.instance.settings.passwordValidationPolicy
displayed_sidebar: MQL
description: GCP Cloud SQL instance settings password validation policy
---

# gcp.project.sqlService.instance.settings.passwordValidationPolicy

**Supported platform**

- gcp

**Description**

GCP Cloud SQL instance settings password validation policy

**Fields**

| ID                        | TYPE   | DESCRIPTION                                              |
| ------------------------- | ------ | -------------------------------------------------------- |
| id                        | string | Internal ID                                              |
| complexity                | string | Password complexity                                      |
| disallowUsernameSubstring | bool   | Whether username is forbidden as a part of the password  |
| enabledPasswordPolicy     | bool   | Whether the password policy is enabled                   |
| minLength                 | int    | Minimum number of characters required in passwords       |
| passwordChangeInterval    | string | Minimum interval after which the password can be changed |
| reuseInterval             | int    | Number of previous passwords that cannot be reused       |

**References**

- [Cloud SQL overview](https://cloud.google.com/sql/docs/introduction)
