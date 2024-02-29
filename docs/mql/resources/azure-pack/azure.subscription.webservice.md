---
title: azure.subscription.webService
id: azure.subscription.webService
sidebar_label: azure.subscription.webService
displayed_sidebar: MQL
description: Azure Web
---

# azure.subscription.webService

**Supported platform**

- azure

**Description**

Azure Web

**Fields**

| ID                | TYPE                                                                                        | DESCRIPTION             |
| ----------------- | ------------------------------------------------------------------------------------------- | ----------------------- |
| subscriptionId    | string                                                                                      | Subscription identifier |
| apps              | &#91;&#93;[azure.subscription.webService.appsite](azure.subscription.webservice.appsite.md) | List of web apps        |
| availableRuntimes | &#91;&#93;dict                                                                              | Available runtimes      |

**References**

- [Azure Web documentation](https://learn.microsoft.com/en-us/azure/?product=web)
