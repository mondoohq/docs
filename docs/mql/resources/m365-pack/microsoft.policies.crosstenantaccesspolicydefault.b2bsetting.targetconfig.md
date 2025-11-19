---
title: microsoft.policies.crossTenantAccessPolicyDefault.b2bSetting.targetConfig
id: microsoft.policies.crossTenantAccessPolicyDefault.b2bSetting.targetConfig
sidebar_label: microsoft.policies.crossTenantAccessPolicyDefault.b2bSetting.targetConfig
displayed_sidebar: MQL
description: Users and groups configuration for B2B settings
---

# microsoft.policies.crossTenantAccessPolicyDefault.b2bSetting.targetConfig

**Description**

Users and groups configuration for B2B settings

**Fields**

| ID         | TYPE                                                                                                                                                    | DESCRIPTION                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| accessType | string                                                                                                                                                  | The type of access. Possible values are: blocked, allowed. |
| targets    | &#91;&#93;[microsoft.policies.crossTenantAccessPolicyDefault.b2bSetting.target](microsoft.policies.crosstenantaccesspolicydefault.b2bsetting.target.md) | The targets of the policy configuration.                   |
