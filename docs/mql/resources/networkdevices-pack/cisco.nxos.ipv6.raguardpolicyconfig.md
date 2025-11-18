---
title: cisco.nxos.ipv6.raGuardPolicyConfig
id: cisco.nxos.ipv6.raGuardPolicyConfig
sidebar_label: cisco.nxos.ipv6.raGuardPolicyConfig
displayed_sidebar: MQL
description: Cisco NX-OS IPv6 RA Guard Policy configuration
---

# cisco.nxos.ipv6.raGuardPolicyConfig

**Description**

Cisco NX-OS IPv6 RA Guard Policy configuration

**Fields**

| ID                      | TYPE   | DESCRIPTION                                                                                                                                     |
| ----------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| policyName              | string | The name of the configured RA Guard policy.                                                                                                     |
| deviceRole              | string | The device role, specified in the RA Guard policy.                                                                                              |
| hopLimitType            | string | The type of the hop count limit. This can be either 'minimum' or 'maximum'.                                                                     |
| hopLimitValue           | int    | The hop count limit value.                                                                                                                      |
| managedConfigFlag       | string | The value of the 'managed-config-flag' setting. This can be either 'on' or 'off'., If empty, it means that the setting is not specified at all. |
| otherConfigFlag         | string | The value of the 'other-config-flag' setting. This can be either 'on' or 'off'., If empty, it means that the setting is not specified at all.   |
| trustedPort             | bool   | Whether the trusted-port setting is enabled.                                                                                                    |
| routerPreferenceMaximum | string | The router preference maximum value. Can be either 'low', 'medium' or 'high'.                                                                   |
