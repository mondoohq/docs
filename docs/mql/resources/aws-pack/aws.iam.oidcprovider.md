---
title: aws.iam.oidcProvider
id: aws.iam.oidcProvider
sidebar_label: aws.iam.oidcProvider
displayed_sidebar: MQL
description: AWS IAM OpenID Connect (OIDC) identity provider
---

# aws.iam.oidcProvider

**Supported platform**

- aws

**Description**

AWS IAM OpenID Connect (OIDC) identity provider

**Fields**

| ID          | TYPE              | DESCRIPTION                                                  |
| ----------- | ----------------- | ------------------------------------------------------------ |
| arn         | string            | ARN of the OIDC provider                                     |
| url         | string            | URL of the identity provider                                 |
| clientIds   | &#91;&#93;string  | List of client IDs (audiences) for the OIDC provider         |
| thumbprints | &#91;&#93;string  | List of server certificate thumbprints for the OIDC provider |
| createdAt   | time              | Time when the OIDC provider was created                      |
| tags        | map[string]string | Tags associated with the OIDC provider                       |
