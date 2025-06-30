---
title: microsoft
id: microsoft
sidebar_label: microsoft
displayed_sidebar: MQL
description: Microsoft
---

# microsoft

**Description**

Microsoft

**Fields**

| ID                     | TYPE                                                                          | DESCRIPTION                                |
| ---------------------- | ----------------------------------------------------------------------------- | ------------------------------------------ |
| organizations          | &#91;&#93;[microsoft.tenant](microsoft.tenant.md)                             | Deprecated: use `microsoft.tenant` instead |
| users                  | [microsoft.users](microsoft.users.md)                                         | List of users                              |
| groups                 | [microsoft.groups](microsoft.groups.md)                                       | List of groups                             |
| groupLifecyclePolicies | &#91;&#93;[microsoft.groupLifecyclePolicy](microsoft.grouplifecyclepolicy.md) | Group lifecycle policies                   |
| domains                | &#91;&#93;[microsoft.domain](microsoft.domain.md)                             | List of domains                            |
| applications           | [microsoft.applications](microsoft.applications.md)                           | List of applications                       |
| serviceprincipals      | &#91;&#93;[microsoft.serviceprincipal](microsoft.serviceprincipal.md)         | List of service principals                 |
| enterpriseApplications | &#91;&#93;[microsoft.serviceprincipal](microsoft.serviceprincipal.md)         | List of enterprise applications            |
| roles                  | [microsoft.roles](microsoft.roles.md)                                         | List of roles                              |
| settings               | dict                                                                          | Microsoft 365 settings                     |
| tenantDomainName       | string                                                                        | The connected tenant's default domain name |
| identityAndAccess      | [microsoft.identityAndAccess](microsoft.identityandaccess.md)                 | Identity and Access policies               |
