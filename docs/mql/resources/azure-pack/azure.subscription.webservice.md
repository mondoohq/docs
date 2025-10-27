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

| ID                  | TYPE                                                                                                              | DESCRIPTION                  |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| subscriptionId      | string                                                                                                            | Subscription identifier      |
| apps                | &#91;&#93;[azure.subscription.webService.appsite](azure.subscription.webservice.appsite.md)                       | List of web apps             |
| availableRuntimes   | &#91;&#93;[azure.subscription.webService.appRuntimeStack](azure.subscription.webservice.appruntimestack.md)       | Available runtimes           |
| hostingEnvironments | &#91;&#93;[azure.subscription.webService.hostingEnvironment](azure.subscription.webservice.hostingenvironment.md) | List of hosting environments |

**References**

- [Azure Web documentation](https://learn.microsoft.com/en-us/azure/?product=web)
