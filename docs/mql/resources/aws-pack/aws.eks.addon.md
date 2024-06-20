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

| ID                  | TYPE              | DESCRIPTION                                                      |
| ------------------- | ----------------- | ---------------------------------------------------------------- |
| name                | string            | The name of the add-on                                           |
| arn                 | string            | The Amazon Resource Name (ARN) of the add-on                     |
| status              | string            | The status of the add-on                                         |
| addonVersion        | string            | The version of the add-on                                        |
| createdAt           | time              | The Unix epoch timestamp at object creation                      |
| modifiedAt          | time              | The Unix epoch timestamp for the last modification to the object |
| tags                | map[string]string | Tags for the EKS node group                                      |
| publisher           | string            | The publisher of the add-on                                      |
| owner               | string            | The owner of the add-on                                          |
| configurationValues | string            | The configuration values that you provided                       |
