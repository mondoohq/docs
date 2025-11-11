---
title: microsoft.user.licenseDetail.servicePlanInfo
id: microsoft.user.licenseDetail.servicePlanInfo
sidebar_label: microsoft.user.licenseDetail.servicePlanInfo
displayed_sidebar: MQL
description: Contains information about a service plan associated with a subscribed SKU
---

# microsoft.user.licenseDetail.servicePlanInfo

**Description**

Contains information about a service plan associated with a subscribed SKU

**Fields**

| ID                 | TYPE   | DESCRIPTION                                                                                                                                           |
| ------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| appliesTo          | string | The object the service plan can be assigned to. The possible values are: User or Company                                                              |
| provisioningStatus | string | The provisioning status of the service plan. The possible values are:, Success, Disabled, Error, PendingInput, PendingActivation, PendingProvisioning |
| servicePlanId      | string | The unique identifier of the service plan                                                                                                             |
| servicePlanName    | string | The name of the service plan.                                                                                                                         |
