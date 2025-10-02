---
title: azure.subscription.webService.appslot
id: azure.subscription.webService.appslot
sidebar_label: azure.subscription.webService.appslot
displayed_sidebar: MQL
description: Azure Web app deployment slot
---

# azure.subscription.webService.appslot

**Supported platform**

- azure

**Description**

Azure Web app deployment slot

**Fields**

| ID                     | TYPE                                                                                                                                                    | DESCRIPTION                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| id                     | string                                                                                                                                                  | App slot ID                                 |
| name                   | string                                                                                                                                                  | App slot name                               |
| kind                   | string                                                                                                                                                  | App slot kind                               |
| location               | string                                                                                                                                                  | App slot location                           |
| type                   | string                                                                                                                                                  | App slot type                               |
| tags                   | map[string]string                                                                                                                                       | App slot tags                               |
| properties             | dict                                                                                                                                                    | App slot properties                         |
| identity               | dict                                                                                                                                                    | App slot identity                           |
| parent                 | [azure.subscription.webService.appsite](azure.subscription.webservice.appsite.md)                                                                       | Parent web app site for this slot           |
| configuration          | [azure.subscription.webService.appsiteconfig](azure.subscription.webservice.appsiteconfig.md)                                                           | App slot configuration                      |
| authenticationSettings | [azure.subscription.webService.appsiteauthsettings](azure.subscription.webservice.appsiteauthsettings.md)                                               | App slot authentication settings            |
| metadata               | dict                                                                                                                                                    | App slot metadata                           |
| applicationSettings    | dict                                                                                                                                                    | App slot application settings               |
| connectionSettings     | dict                                                                                                                                                    | App slot connection settings                |
| stack                  | dict                                                                                                                                                    | App slot stack                              |
| diagnosticSettings     | &#91;&#93;[azure.subscription.monitorService.diagnosticsetting](azure.subscription.monitorservice.diagnosticsetting.md)                                 | App slot diagnostic settings                |
| functions              | &#91;&#93;[azure.subscription.webService.function](azure.subscription.webservice.function.md)                                                           | List of functions for the app slot          |
| ftp                    | [azure.subscription.webService.appsite.basicPublishingCredentialsPolicies](azure.subscription.webservice.appsite.basicpublishingcredentialspolicies.md) | FTP publishing method policies for the slot |
| scm                    | [azure.subscription.webService.appsite.basicPublishingCredentialsPolicies](azure.subscription.webservice.appsite.basicpublishingcredentialspolicies.md) | SCM publishing method policies for the slot |
