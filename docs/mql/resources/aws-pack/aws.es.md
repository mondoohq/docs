---
title: aws.es
id: aws.es
sidebar_label: aws.es
displayed_sidebar: MQL
description: AWS Elasticsearch service
---

# aws.es

**Supported platform**

- aws

**Description**

AWS Elasticsearch service

Use the `aws.es` resource to assess the configuration of Amazon Elasticsearch domains. This resource provides a list of `aws.es.domain` resources representing Elasticsearch domains deployed across all enabled regions.

**Fields**

| ID      | TYPE                                        | DESCRIPTION                   |
| ------- | ------------------------------------------- | ----------------------------- |
| domains | &#91;&#93;[aws.es.domain](aws.es.domain.md) | List of Elasticsearch domains |

**References**

- [Amazon Security Blog on Elasticsearch](https://aws.amazon.com/blogs/security/tag/amazon-elasticsearch-service/)
