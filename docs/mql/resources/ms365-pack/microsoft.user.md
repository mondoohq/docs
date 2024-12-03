---
title: microsoft.user
id: microsoft.user
sidebar_label: microsoft.user
displayed_sidebar: MQL
description: Microsoft Entra ID user
---

# microsoft.user

**Description**

Microsoft Entra ID user

**Fields**

| ID                | TYPE                                                                            | DESCRIPTION                                   |
| ----------------- | ------------------------------------------------------------------------------- | --------------------------------------------- |
| id                | string                                                                          | User Object ID                                |
| accountEnabled    | bool                                                                            | Whether the user account is enabled           |
| city              | string                                                                          | User city                                     |
| companyName       | string                                                                          | Deprecated: use job.companyName instead       |
| country           | string                                                                          | Deprecated: use contact.country instead       |
| createdDateTime   | time                                                                            | User create time                              |
| department        | string                                                                          | Deprecated: use job.department instead        |
| displayName       | string                                                                          | User display name                             |
| employeeId        | string                                                                          | Deprecated: use job.employeeId instead        |
| givenName         | string                                                                          | User given name                               |
| jobTitle          | string                                                                          | Deprecated: use job.title instead             |
| mail              | string                                                                          | Deprecated: use contact.email instead         |
| mobilePhone       | string                                                                          | Deprecated: use contact.mobilePhone instead   |
| otherMails        | &#91;&#93;string                                                                | Deprecated: use contact.otherMails instead    |
| officeLocation    | string                                                                          | Deprecated: use job.officeLocation instead    |
| postalCode        | string                                                                          | Deprecated: use contact.postalCode instead    |
| state             | string                                                                          | Deprecated: use contact.state instead         |
| streetAddress     | string                                                                          | Deprecated: use contact.streetAddress instead |
| surname           | string                                                                          | User surname                                  |
| userPrincipalName | string                                                                          | User service principal name                   |
| userType          | string                                                                          | User type                                     |
| settings          | dict                                                                            | User settings                                 |
| job               | dict                                                                            | Job information                               |
| contact           | dict                                                                            | Contact information                           |
| authMethods       | [microsoft.user.authenticationMethods](microsoft.user.authenticationmethods.md) | Authentication information                    |
| mfaEnabled        | bool                                                                            | Whether MFA is enabled for the user.          |
| creationType      | string                                                                          | The user creation type.                       |
| identities        | &#91;&#93;[microsoft.user.identity](microsoft.user.identity.md)                 | The user's identities.                        |
| auditlog          | [microsoft.user.auditlog](microsoft.user.auditlog.md)                           | The user's audit-log.                         |
