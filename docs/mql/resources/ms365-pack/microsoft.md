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

| ID                     | TYPE                                                                                            | DESCRIPTION                                |
| ---------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------ |
| organizations          | &#91;&#93;[microsoft.tenant](microsoft.tenant.md)                                               | Deprecated: use `microsoft.tenant` instead |
| users                  | &#91;&#93;[microsoft.user](microsoft.user.md)                                                   | List of users                              |
| groups                 | &#91;&#93;[microsoft.group](microsoft.group.md)                                                 | List of groups                             |
| domains                | &#91;&#93;[microsoft.domain](microsoft.domain.md)                                               | List of domains                            |
| applications           | &#91;&#93;[microsoft.application](microsoft.application.md)                                     | List of applications                       |
| serviceprincipals      | &#91;&#93;[microsoft.serviceprincipal](microsoft.serviceprincipal.md)                           | List of service principals                 |
| enterpriseApplications | &#91;&#93;[microsoft.serviceprincipal](microsoft.serviceprincipal.md)                           | List of enterprise applications            |
| roles                  | &#91;&#93;[microsoft.rolemanagement.roledefinition](microsoft.rolemanagement.roledefinition.md) | List of roles                              |
| settings               | dict                                                                                            | Microsoft 365 settings                     |
| tenantDomainName       | string                                                                                          | The connected tenant's default domain name |
