---
title: microsoft.conditionalAccess.policy.conditions.locations
id: microsoft.conditionalAccess.policy.conditions.locations
sidebar_label: microsoft.conditionalAccess.policy.conditions.locations
displayed_sidebar: MQL
description: Represents locations included in and excluded from the scope of a conditional access policy. Locations can be countries and regions or IP addresses.
---

# microsoft.conditionalAccess.policy.conditions.locations

**Description**

Represents locations included in and excluded from the scope of a conditional access policy. Locations can be countries and regions or IP addresses.

**Fields**

| ID               | TYPE             | DESCRIPTION                                                                     |
| ---------------- | ---------------- | ------------------------------------------------------------------------------- |
| includeLocations | &#91;&#93;string | Location IDs in scope of policy unless explicitly excluded, All, or AllTrusted. |
| excludeLocations | &#91;&#93;string | Location IDs excluded from scope of policy.                                     |
