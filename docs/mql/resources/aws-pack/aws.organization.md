---
title: aws.organization
id: aws.organization
sidebar_label: aws.organization
displayed_sidebar: MQL
description: AWS Organization resource
---

# aws.organization

**Supported platform**

- aws

**Description**

AWS Organization resource

**Fields**

| ID                 | TYPE                                    | DESCRIPTION                                                                  |
| ------------------ | --------------------------------------- | ---------------------------------------------------------------------------- |
| arn                | string                                  | ARN of the organization                                                      |
| featureSet         | string                                  | Specifies the functionality available to org: ALL or CONSOLIDATED_BILLING    |
| masterAccountId    | string                                  | ID of the organization's master account                                      |
| masterAccountEmail | string                                  | Email owner of the organization's master account                             |
| accounts           | &#91;&#93;[aws.account](aws.account.md) | List of accounts that belong to the organization, if available to the caller |
