---
title: tailscale.user
id: tailscale.user
sidebar_label: tailscale.user
displayed_sidebar: MQL
description: Tailscale user
---

# tailscale.user

**Description**

Tailscale user

**Init**

tailscale.user(id string)

**Fields**

| ID            | TYPE   | DESCRIPTION                                                                                                                                                                                                                                                                                  |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | string | Unique identifier for the user                                                                                                                                                                                                                                                               |
| displayName   | string | Name of the user                                                                                                                                                                                                                                                                             |
| loginName     | string | Email-like login name of the user                                                                                                                                                                                                                                                            |
| profilePicUrl | string | Profile picture URL for the user                                                                                                                                                                                                                                                             |
| tailnetId     | string | Tailnet that owns the user                                                                                                                                                                                                                                                                   |
| type          | string | Type of relation this user has to the tailnet (member or shared)                                                                                                                                                                                                                             |
| role          | string | Role of the user (owner, member, admin, etc.)                                                                                                                                                                                                                                                |
| status        | string | Status of the user, 'active' - Last seen within 28 days, 'idle' - Last seen more than 28 days ago, 'suspended' - Suspended from accessing the tailnet, 'needs-approval' - Unable to join tailnet until approved, 'over-billing-limit' - Unable to join tailnet until billing count increased |
| deviceCount   | int    | Number of devices the user owns                                                                                                                                                                                                                                                              |
| createdAt     | time   | Time the user joined the tailnet                                                                                                                                                                                                                                                             |
| lastSeenAt    | time   | Either:, a) The last time any of the user's nodes were connected to the network, or, b) The last time the user authenticated to any Tailscale service, including the admin panel                                                                                                             |
