---
title: gcp.project.apiKey.restrictions
id: gcp.project.apiKey.restrictions
sidebar_label: gcp.project.apiKey.restrictions
displayed_sidebar: MQL
description: Google Cloud (GCP) project API key restrictions
---

# gcp.project.apiKey.restrictions

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) project API key restrictions

**Fields**

| ID                     | TYPE           | DESCRIPTION                                                                      |
| ---------------------- | -------------- | -------------------------------------------------------------------------------- |
| parentResourcePath     | string         | Parent resource path                                                             |
| androidKeyRestrictions | dict           | The Android apps that are allowed to use the key                                 |
| apiTargets             | &#91;&#93;dict | A restriction for a specific service and optionally one or more specific methods |
| browserKeyRestrictions | dict           | The HTTP referrers that are allowed to use the key                               |
| iosKeyRestrictions     | dict           | The iOS apps that are allowed to use the key                                     |
| serverKeyRestrictions  | dict           | The IP addresses that are allowed to use the key                                 |

**References**

- [Adding restrictions to API keys](https://cloud.google.com/api-keys/docs/add-restrictions-api-keys)
