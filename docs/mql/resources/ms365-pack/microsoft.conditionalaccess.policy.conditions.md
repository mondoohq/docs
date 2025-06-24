---
title: microsoft.conditionalAccess.policy.conditions
id: microsoft.conditionalAccess.policy.conditions
sidebar_label: microsoft.conditionalAccess.policy.conditions
displayed_sidebar: MQL
description: Represents the type of conditions that govern when the policy applies
---

# microsoft.conditionalAccess.policy.conditions

**Description**

Represents the type of conditions that govern when the policy applies

**Fields**

| ID                         | TYPE                                                                                                                                      | DESCRIPTION                                                                                                                                                |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                         | string                                                                                                                                    | Internal ID based on policy ID                                                                                                                             |
| applications               | [microsoft.conditionalAccess.policy.conditions.applications](microsoft.conditionalaccess.policy.conditions.applications.md)               | Applications and user actions included in and excluded from the policy                                                                                     |
| authenticationFlows        | [microsoft.conditionalAccess.policy.conditions.authenticationFlows](microsoft.conditionalaccess.policy.conditions.authenticationflows.md) | Authentication flows included in the policy scope                                                                                                          |
| clientApplications         | [microsoft.conditionalAccess.policy.conditions.clientApplications](microsoft.conditionalaccess.policy.conditions.clientapplications.md)   | Client applications (service principals and workload identities) included in and excluded from the policy. Either users or clientApplications is required. |
| clientAppTypes             | &#91;&#93;string                                                                                                                          | Client application types included in the policy                                                                                                            |
| locations                  | [microsoft.conditionalAccess.policy.conditions.locations](microsoft.conditionalaccess.policy.conditions.locations.md)                     | Locations included in and excluded from the policy                                                                                                         |
| platforms                  | [microsoft.conditionalAccess.policy.conditions.platforms](microsoft.conditionalaccess.policy.conditions.platforms.md)                     | Platforms included in and excluded from the policy                                                                                                         |
| servicePrincipalRiskLevels | &#91;&#93;string                                                                                                                          | Service principal risk levels included in the policy. Possible values are: low, medium, high, none, unknownFutureValue.                                    |
| signInRiskLevels           | &#91;&#93;string                                                                                                                          | Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue.                                      |
| userRiskLevels             | &#91;&#93;string                                                                                                                          | User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue.                                         |
| users                      | [microsoft.conditionalAccess.policy.conditions.users](microsoft.conditionalaccess.policy.conditions.users.md)                             | Users, groups, and roles included in and excluded from the policy. Either users or clientApplications is required.                                         |
| insiderRiskLevels          | string                                                                                                                                    | Insider risk levels included in the policy. The possible values are: minor, moderate, elevated, unknownFutureValue.                                        |
