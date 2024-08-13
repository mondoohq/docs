---
title: aws.eks.addon
id: aws.eks.addon
sidebar_label: aws.eks.addon
displayed_sidebar: MQL
description: Amazon EKS add-on
---

# aws.eks.addon

**Supported platform**

- aws

**Description**

Amazon EKS add-on

**Fields**

| ID                  | TYPE              | DESCRIPTION                                                  |
| ------------------- | ----------------- | ------------------------------------------------------------ |
| name                | string            | Add-on name                                                  |
| arn                 | string            | Amazon Resource Name (ARN) of the add-on                     |
| status              | string            | Add-on status                                                |
| addonVersion        | string            | Add-on version                                               |
| createdAt           | time              | Unix epoch timestamp at object creation                      |
| modifiedAt          | time              | Unix epoch timestamp for the last modification to the object |
| tags                | map[string]string | Tags for the EKS node group                                  |
| publisher           | string            | Add-on publisher                                             |
| owner               | string            | Add-on owner                                                 |
| configurationValues | string            | Configuration values that you provided                       |
