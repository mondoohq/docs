---
title: microsoft.user.licenseDetail
id: microsoft.user.licenseDetail
sidebar_label: microsoft.user.licenseDetail
displayed_sidebar: MQL
description: Details of a single license assigned to a user
---

# microsoft.user.licenseDetail

**Description**

Details of a single license assigned to a user

**Fields**

| ID            | TYPE                                                                                                      | DESCRIPTION                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| id            | string                                                                                                    | The unique identifier for the license detail object               |
| skuId         | string                                                                                                    | The unique identifier for the SKU.                                |
| skuPartNumber | string                                                                                                    | The unique, friendly name for the product.                        |
| servicePlans  | &#91;&#93;[microsoft.user.licenseDetail.servicePlanInfo](microsoft.user.licensedetail.serviceplaninfo.md) | A collection of the service plans that are provided with the SKU. |
