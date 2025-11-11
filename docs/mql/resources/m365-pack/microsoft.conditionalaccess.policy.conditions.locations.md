---
title: microsoft.conditionalAccess.policy.conditions.locations
id: microsoft.conditionalAccess.policy.conditions.locations
sidebar_label: microsoft.conditionalAccess.policy.conditions.locations
displayed_sidebar: MQL
description: Locations included in and excluded from the scope of a Microsoft Entra Conditional Access policy. Locations can be countries and regions or IP addresses.
---

# microsoft.conditionalAccess.policy.conditions.locations

**Description**

Locations included in and excluded from the scope of a Microsoft Entra Conditional Access policy. Locations can be countries and regions or IP addresses.

**Fields**

| ID               | TYPE             | DESCRIPTION                                                                    |
| ---------------- | ---------------- | ------------------------------------------------------------------------------ |
| includeLocations | &#91;&#93;string | Location IDs in scope of policy unless explicitly excluded, All, or AllTrusted |
| excludeLocations | &#91;&#93;string | Location IDs excluded from scope of policy                                     |
