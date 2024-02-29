---
title: microsoft.serviceprincipal
id: microsoft.serviceprincipal
sidebar_label: microsoft.serviceprincipal
displayed_sidebar: MQL
description: Microsoft service principal
---

# microsoft.serviceprincipal

**Description**

Microsoft service principal

**Fields**

| ID                 | TYPE                                                                                        | DESCRIPTION                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| id                 | string                                                                                      | Service principal ID                                                                   |
| type               | string                                                                                      | Service principal type                                                                 |
| name               | string                                                                                      | Service principal name                                                                 |
| tags               | &#91;&#93;string                                                                            | Service principal tags                                                                 |
| enabled            | bool                                                                                        | Whether users can sign into the service principal (application)                        |
| homepageUrl        | string                                                                                      | Service principal homepage URL                                                         |
| termsOfServiceUrl  | string                                                                                      | Service principal terms of service URL                                                 |
| replyUrls          | &#91;&#93;string                                                                            | Service principal reply URLs                                                           |
| assignmentRequired | bool                                                                                        | Whether users or other apps must be assigned to this service principal before using it |
| visibleToUsers     | bool                                                                                        | Whether the service principal is visible to users                                      |
| notes              | string                                                                                      | Service principal notes                                                                |
| assignments        | &#91;&#93;[microsoft.serviceprincipal.assignment](microsoft.serviceprincipal.assignment.md) | List of assignments (users and groups) this service principal has                      |
