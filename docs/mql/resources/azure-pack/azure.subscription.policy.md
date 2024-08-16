---
title: azure.subscription.policy
id: azure.subscription.policy
sidebar_label: azure.subscription.policy
displayed_sidebar: MQL
description: Azure Policy service
---

# azure.subscription.policy

**Supported platform**

- azure

**Description**

Azure Policy service

**Fields**

| ID             | TYPE                                                                                      | DESCRIPTION                                    |
| -------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------- |
| subscriptionId | string                                                                                    | Subscription identifier                        |
| assignments    | &#91;&#93;[azure.subscription.policy.assignment](azure.subscription.policy.assignment.md) | List of policy assignments in the subscription |
