---
title: oci.identity.policy
id: oci.identity.policy
sidebar_label: oci.identity.policy
displayed_sidebar: MQL
description: Policy that specifies the type of access a group has to the resources in a compartment
---

# oci.identity.policy

**Description**

Policy that specifies the type of access a group has to the resources in a compartment

**Fields**

| ID            | TYPE             | DESCRIPTION                      |
| ------------- | ---------------- | -------------------------------- |
| id            | string           | User ID                          |
| compartmentID | string           | Tenancy containing the policy    |
| name          | string           | Name of the policy               |
| description   | string           | Description of the policy        |
| created       | time             | Time when the policy was created |
| state         | string           | Instance state                   |
| statements    | &#91;&#93;string | Policy statements                |
