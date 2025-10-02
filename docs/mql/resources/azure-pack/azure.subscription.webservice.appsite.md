---
title: azure.subscription.webService.appsite
id: azure.subscription.webService.appsite
sidebar_label: azure.subscription.webService.appsite
displayed_sidebar: MQL
description: Azure Web app site
---

# azure.subscription.webService.appsite

**Supported platform**

- azure

**Description**

Azure Web app site

**Fields**

| ID                     | TYPE                                                                                                                                                    | DESCRIPTION                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| id                     | string                                                                                                                                                  | App site ID                              |
| name                   | string                                                                                                                                                  | App site name                            |
| kind                   | string                                                                                                                                                  | App site kind                            |
| location               | string                                                                                                                                                  | App site location                        |
| type                   | string                                                                                                                                                  | App site type                            |
| tags                   | map[string]string                                                                                                                                       | App site tags                            |
| properties             | dict                                                                                                                                                    | App site properties                      |
| identity               | dict                                                                                                                                                    | App site identity                        |
| slots                  | &#91;&#93;[azure.subscription.webService.appslot](azure.subscription.webservice.appslot.md)                                                             | Deployment slots for the web app site    |
| configuration          | [azure.subscription.webService.appsiteconfig](azure.subscription.webservice.appsiteconfig.md)                                                           | App site configuration                   |
| authenticationSettings | [azure.subscription.webService.appsiteauthsettings](azure.subscription.webservice.appsiteauthsettings.md)                                               | App site authentication settings         |
| metadata               | dict                                                                                                                                                    | App site metadata                        |
| applicationSettings    | dict                                                                                                                                                    | App site application settings            |
| connectionSettings     | dict                                                                                                                                                    | App site connection settings             |
| stack                  | dict                                                                                                                                                    | App site stack                           |
| diagnosticSettings     | &#91;&#93;[azure.subscription.monitorService.diagnosticsetting](azure.subscription.monitorservice.diagnosticsetting.md)                                 | Diagnostic settings for the web app site |
| functions              | &#91;&#93;[azure.subscription.webService.function](azure.subscription.webservice.function.md)                                                           | List of functions for the web app site   |
| ftp                    | [azure.subscription.webService.appsite.basicPublishingCredentialsPolicies](azure.subscription.webservice.appsite.basicpublishingcredentialspolicies.md) | FTP publishing method policies           |
| scm                    | [azure.subscription.webService.appsite.basicPublishingCredentialsPolicies](azure.subscription.webservice.appsite.basicpublishingcredentialspolicies.md) | SCM publishing method policies           |

**References**

- [Azure Web documentation](https://learn.microsoft.com/en-us/azure/?product=web)
