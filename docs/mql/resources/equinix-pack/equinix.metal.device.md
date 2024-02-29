---
title: equinix.metal.device
id: equinix.metal.device
sidebar_label: equinix.metal.device
displayed_sidebar: MQL
description: Equinix Metal device
---

# equinix.metal.device

**Supported platform**

- equinix

**Maturity**

experimental

**Description**

Equinix Metal device

**Fields**

| ID           | TYPE   | DESCRIPTION                           |
| ------------ | ------ | ------------------------------------- |
| id           | string | Device ID                             |
| shortID      | string | Device's short ID                     |
| url          | string | Device URL                            |
| hostname     | string | Device hostname                       |
| description  | string | Description of the device             |
| state        | string | Current state of the device           |
| createdAt    | time   | When the device was created           |
| updatedAt    | time   | When the device was last updated      |
| locked       | bool   | Whether the device is locked          |
| billingCycle | string | Billing cycle used for the device     |
| spotInstance | bool   | Whether the device is a Spot instance |
| os           | dict   | Operating system                      |

**References**

- [Equinix Metal docs](https://deploy.equinix.com/developers/docs/metal/)
