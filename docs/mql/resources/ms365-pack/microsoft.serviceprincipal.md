---
title: microsoft.serviceprincipal
id: microsoft.serviceprincipal
sidebar_label: microsoft.serviceprincipal
displayed_sidebar: MQL
description: Microsoft service principal (Enterprise application)
---

# microsoft.serviceprincipal

**Description**

Microsoft service principal (Enterprise application)

**Fields**

| ID                         | TYPE                                                                                        | DESCRIPTION                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| id                         | string                                                                                      | Service principal Object ID                                                            |
| type                       | string                                                                                      | Service principal type                                                                 |
| name                       | string                                                                                      | Service principal name                                                                 |
| appId                      | string                                                                                      | Application ID                                                                         |
| appOwnerOrganizationId     | string                                                                                      | Application owner ID                                                                   |
| description                | string                                                                                      | Application description                                                                |
| tags                       | &#91;&#93;string                                                                            | Service principal tags                                                                 |
| enabled                    | bool                                                                                        | Whether users can sign into the service principal (application)                        |
| homepageUrl                | string                                                                                      | Service principal homepage URL                                                         |
| termsOfServiceUrl          | string                                                                                      | Service principal terms of service URL                                                 |
| replyUrls                  | &#91;&#93;string                                                                            | Service principal reply URLs                                                           |
| assignmentRequired         | bool                                                                                        | Whether users or other apps must be assigned to this service principal before using it |
| visibleToUsers             | bool                                                                                        | Whether the service principal is visible to users                                      |
| notes                      | string                                                                                      | Service principal notes                                                                |
| assignments                | &#91;&#93;[microsoft.serviceprincipal.assignment](microsoft.serviceprincipal.assignment.md) | List of assignments (users and groups) this service principal has                      |
| applicationTemplateId      | string                                                                                      | Application template ID                                                                |
| verifiedPublisher          | dict                                                                                        | Application publisher                                                                  |
| loginUrl                   | string                                                                                      | Login URL                                                                              |
| logoutUrl                  | string                                                                                      | Logout URL                                                                             |
| servicePrincipalNames      | &#91;&#93;string                                                                            | Service principal names                                                                |
| signInAudience             | string                                                                                      | Sign in audience                                                                       |
| preferredSingleSignOnMode  | string                                                                                      | Preferred single sign-on mode                                                          |
| notificationEmailAddresses | &#91;&#93;string                                                                            | Notification email addresses                                                           |
| appRoleAssignmentRequired  | bool                                                                                        | App role assignment required                                                           |
| accountEnabled             | bool                                                                                        | Deprecated: use `enabled` instead                                                      |
| isFirstParty               | bool                                                                                        | Whether it is a first-party Microsoft application                                      |
| appRoles                   | &#91;&#93;[microsoft.application.role](microsoft.application.role.md)                       | Application roles                                                                      |
| permissions                | &#91;&#93;[microsoft.application.permission](microsoft.application.permission.md)           | Permissions                                                                            |
