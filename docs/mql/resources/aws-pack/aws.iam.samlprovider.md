---
title: aws.iam.samlProvider
id: aws.iam.samlProvider
sidebar_label: aws.iam.samlProvider
displayed_sidebar: MQL
description: AWS IAM SAML 2.0 identity provider
---

# aws.iam.samlProvider

**Supported platform**

- aws

**Description**

AWS IAM SAML 2.0 identity provider

**Fields**

| ID               | TYPE              | DESCRIPTION                             |
| ---------------- | ----------------- | --------------------------------------- |
| arn              | string            | ARN of the SAML provider                |
| name             | string            | Name of the SAML provider               |
| createdAt        | time              | Time when the SAML provider was created |
| validUntil       | time              | SAML metadata document expiration time  |
| metadataDocument | string            | SAML metadata document in XML format    |
| tags             | map[string]string | Tags associated with the SAML provider  |
