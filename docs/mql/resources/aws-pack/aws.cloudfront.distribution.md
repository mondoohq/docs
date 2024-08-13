---
title: aws.cloudfront.distribution
id: aws.cloudfront.distribution
sidebar_label: aws.cloudfront.distribution
displayed_sidebar: MQL
description: Amazon CloudFront distribution
---

# aws.cloudfront.distribution

**Supported platform**

- aws

**Description**

Amazon CloudFront distribution

**Fields**

| ID                   | TYPE                                                                                  | DESCRIPTION                                 |
| -------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------- |
| arn                  | string                                                                                | ARN of the CloudFront distribution          |
| status               | string                                                                                | Status of the distribution                  |
| domainName           | string                                                                                | Domain Name of the distribution             |
| origins              | &#91;&#93;[aws.cloudfront.distribution.origin](aws.cloudfront.distribution.origin.md) | Details on the origins of this distribution |
| defaultCacheBehavior | dict                                                                                  | Default cache behavior for the distribution |
| cacheBehaviors       | &#91;&#93;dict                                                                        | All cache behaviors for the distribution    |
| httpVersion          | string                                                                                | HTTP version of the distribution            |
| isIPV6Enabled        | bool                                                                                  | Whether the distribution is IPV6 enabled    |
| enabled              | bool                                                                                  | Whether the distribution is enabled         |
| priceClass           | string                                                                                | Price class of the distribution             |
| cnames               | &#91;&#93;string                                                                      | CNAMEs aliases if any for this distribution |
