---
title: aws.es.domain
id: aws.es.domain
sidebar_label: aws.es.domain
displayed_sidebar: MQL
description: Amazon Elasticsearch service domain
---

# aws.es.domain

**Supported platform**

- aws

**Description**

Amazon Elasticsearch service domain

The `aws.es.domain` resource provides fields for assessing the configuration of individual Amazon Elasticsearch domains. For usage, read the `aws.es` resource documentation

**Fields**

| ID                          | TYPE              | DESCRIPTION                                       |
| --------------------------- | ----------------- | ------------------------------------------------- |
| arn                         | string            | ARN for the Elasticsearch domain                  |
| encryptionAtRestEnabled     | bool              | Whether encryption at rest is enabled             |
| nodeToNodeEncryptionEnabled | bool              | Whether node-to-node encryption is enabled        |
| name                        | string            | Name of the Elasticsearch domain                  |
| endpoint                    | string            | Endpoint used to submit index and search requests |
| region                      | string            | Region where the domain exists                    |
| tags                        | map[string]string | Tags for the domain                               |
| elasticsearchVersion        | string            | Version of Elasticsearch running                  |
| domainId                    | string            | Elasticsearch domain ID                           |
| domainName                  | string            | Elasticsearch domain name                         |
