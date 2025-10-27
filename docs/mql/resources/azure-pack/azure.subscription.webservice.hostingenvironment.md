---
title: azure.subscription.webService.hostingEnvironment
id: azure.subscription.webService.hostingEnvironment
sidebar_label: azure.subscription.webService.hostingEnvironment
displayed_sidebar: MQL
description: Azure App Service Hosting Environment
---

# azure.subscription.webService.hostingEnvironment

**Supported platform**

- azure

**Description**

Azure App Service Hosting Environment

**Fields**

| ID                        | TYPE                                                                                                                                  | DESCRIPTION                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| id                        | string                                                                                                                                | environment ID                                                           |
| name                      | string                                                                                                                                | environment name                                                         |
| type                      | string                                                                                                                                | environment type                                                         |
| kind                      | string                                                                                                                                | Kind of resource (e.g., "app,linux,container")                           |
| location                  | string                                                                                                                                | environment location                                                     |
| tags                      | map[string]string                                                                                                                     | environment tags                                                         |
| properties                | dict                                                                                                                                  | environment properties                                                   |
| provisioningState         | string                                                                                                                                | Provisioning state of the environment                                    |
| status                    | string                                                                                                                                | status of the environment                                                |
| suspended                 | bool                                                                                                                                  | true if the environment is suspended                                     |
| dnsSuffix                 | string                                                                                                                                | DNS suffix of the environment                                            |
| maximumNumberOfMachines   | int                                                                                                                                   | Maximum number of VMs in the environment                                 |
| multiSize                 | string                                                                                                                                | Front-end VM size (e.g., "Standard_D2d_v4", "Medium", "Large")           |
| multiRoleCount            | int                                                                                                                                   | Number of front-end instances                                            |
| frontEndScaleFactor       | int                                                                                                                                   | Scale factor for front-ends                                              |
| ipsslAddressCount         | int                                                                                                                                   | Number of IP SSL addresses reserved for the App Service Environment      |
| hasLinuxWorkers           | bool                                                                                                                                  | Whether the App Service Environment has Linux workers                    |
| dedicatedHostCount        | int                                                                                                                                   | Dedicated Host Count                                                     |
| zoneRedundant             | bool                                                                                                                                  | Whether the App Service Environment is zone-redundant                    |
| internalLoadBalancingMode | string                                                                                                                                | Specifies which endpoints to serve internally in the Virtual Network     |
| userWhitelistedIpRanges   | &#91;&#93;string                                                                                                                      | User added IP ranges to allow                                            |
| virtualNetwork            | [azure.subscription.webService.hostingEnvironment.virtualNetwork](azure.subscription.webservice.hostingenvironment.virtualnetwork.md) | Description of the Virtual Network                                       |
| clusterSettings           | &#91;&#93;dict                                                                                                                        | Custom settings for changing the behavior of the App Service Environment |
