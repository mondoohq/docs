---
title: okta.trustedOrigin
id: okta.trustedOrigin
sidebar_label: okta.trustedOrigin
displayed_sidebar: MQL
description: Okta trusted origin
---

# okta.trustedOrigin

**Description**

Okta trusted origin

**Fields**

| ID            | TYPE           | DESCRIPTION                                                |
| ------------- | -------------- | ---------------------------------------------------------- |
| id            | string         | Unique identifier for the trusted origin                   |
| name          | string         | Name for the trusted origin                                |
| origin        | string         | Unique origin URL for the trusted origin                   |
| created       | time           | Timestamp when the trusted origin was created              |
| createdBy     | string         | ID of the entity that created the trusted origin           |
| lastUpdated   | time           | Timestamp when the trusted origin was last updated         |
| lastUpdatedBy | string         | ID of entity that last updated the trusted origin          |
| scopes        | &#91;&#93;dict | Array of scope types for which this trusted origin is used |
| status        | string         | Status of the trusted origin                               |
