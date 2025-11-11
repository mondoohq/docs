---
title: microsoft.conditionalAccess.policy.conditions.clientApplications
id: microsoft.conditionalAccess.policy.conditions.clientApplications
sidebar_label: microsoft.conditionalAccess.policy.conditions.clientApplications
displayed_sidebar: MQL
description: Represents client applications (service principals and workload identities) included in and excluded from the policy scope
---

# microsoft.conditionalAccess.policy.conditions.clientApplications

**Description**

Represents client applications (service principals and workload identities) included in and excluded from the policy scope

**Fields**

| ID                       | TYPE             | DESCRIPTION                                                                        |
| ------------------------ | ---------------- | ---------------------------------------------------------------------------------- |
| excludeServicePrincipals | &#91;&#93;string | Service principal IDs excluded from the policy scope                               |
| includeServicePrincipals | &#91;&#93;string | Service principal IDs included in the policy scope, or ServicePrincipalsInMyTenant |
