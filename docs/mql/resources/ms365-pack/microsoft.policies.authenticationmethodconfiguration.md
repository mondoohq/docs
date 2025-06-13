---
title: microsoft.policies.authenticationMethodConfiguration
id: microsoft.policies.authenticationMethodConfiguration
sidebar_label: microsoft.policies.authenticationMethodConfiguration
displayed_sidebar: MQL
description: Configuration for a specific authentication method.
---

# microsoft.policies.authenticationMethodConfiguration

**Description**

Configuration for a specific authentication method.

**Fields**

| ID             | TYPE           | DESCRIPTION                                                      |
| -------------- | -------------- | ---------------------------------------------------------------- |
| id             | string         | The policy name.                                                 |
| state          | string         | The state of the policy. Possible values are: enabled, disabled. |
| excludeTargets | &#91;&#93;dict | Groups of users that are excluded from a policy.                 |
