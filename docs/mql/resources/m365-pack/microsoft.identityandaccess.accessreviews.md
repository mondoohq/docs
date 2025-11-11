---
title: microsoft.identityAndAccess.accessReviews
id: microsoft.identityAndAccess.accessReviews
sidebar_label: microsoft.identityAndAccess.accessReviews
displayed_sidebar: MQL
description: A filterable list of access review definitions
---

# microsoft.identityAndAccess.accessReviews

**Description**

A filterable list of access review definitions

**Init**

microsoft.identityAndAccess.accessReviews(filter string)

**List**

[]microsoft.identityAndAccess.accessReviewDefinition

**Fields**

| ID     | TYPE                                                                                                                  | DESCRIPTION                                                                                                         |
| ------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| filter | string                                                                                                                | filter access review definitions. e.g., "contains(scope/microsoft.graph.accessReviewQueryScope/query, './members')" |
| list   | &#91;&#93;[microsoft.identityAndAccess.accessReviewDefinition](microsoft.identityandaccess.accessreviewdefinition.md) |                                                                                                                     |
