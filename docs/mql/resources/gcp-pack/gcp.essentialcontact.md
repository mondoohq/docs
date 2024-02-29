---
title: gcp.essentialContact
id: gcp.essentialContact
sidebar_label: gcp.essentialContact
displayed_sidebar: MQL
description: GCP contact
---

# gcp.essentialContact

**Supported platform**

- gcp

**Description**

GCP contact

**Fields**

| ID                     | TYPE             | DESCRIPTION                                                                 |
| ---------------------- | ---------------- | --------------------------------------------------------------------------- |
| resourcePath           | string           | Full resource path                                                          |
| email                  | string           | Email address to send notifications to                                      |
| languageTag            | string           | Preferred language for notifications, as a ISO 639-1 language code          |
| notificationCategories | &#91;&#93;string | Categories of notifications that the contact will receive communication for |
| validated              | time             | Last time the validation state was updated                                  |
| validationState        | string           | Validity of the contact                                                     |

**References**

- [Managing contacts for notifications](https://cloud.google.com/resource-manager/docs/managing-notification-contacts)
