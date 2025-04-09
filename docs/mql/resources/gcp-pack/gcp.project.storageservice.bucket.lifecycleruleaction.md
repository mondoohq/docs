---
title: gcp.project.storageService.bucket.lifecycleRuleAction
id: gcp.project.storageService.bucket.lifecycleRuleAction
sidebar_label: gcp.project.storageService.bucket.lifecycleRuleAction
displayed_sidebar: MQL
description: A lifecycle management rule, which is made of an action to take and
---

# gcp.project.storageService.bucket.lifecycleRuleAction

**Supported platform**

- gcp

**Description**

A lifecycle management rule, which is made of an action to take and

**Fields**

| ID           | TYPE   | DESCRIPTION                                                                                                    |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------- |
| storageClass | string | Target storage class. Required iff the type of the action is SetStorageClass                                   |
| type         | string | Type of the action. Currently, only Delete, SetStorageClass, and, AbortIncompleteMultipartUpload are supported |
