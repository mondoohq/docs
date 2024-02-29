---
title: aws.cloudfront.distribution.origin
id: aws.cloudfront.distribution.origin
sidebar_label: aws.cloudfront.distribution.origin
displayed_sidebar: MQL
description: Amazon CloudFront distribution origin
---

# aws.cloudfront.distribution.origin

**Supported platform**

- aws

**Description**

Amazon CloudFront distribution origin

**Fields**

| ID                 | TYPE   | DESCRIPTION                                                     |
| ------------------ | ------ | --------------------------------------------------------------- |
| domainName         | string | Domain name for the origin                                      |
| id                 | string | Unique id for the origin                                        |
| connectionAttempts | int    | Number of times CloudFront attempts to connect                  |
| connectionTimeout  | int    | Number of seconds CloudFront waits when attempting a connection |
| originPath         | string | Path that CloudFront appends to original domain                 |
| account            | string | Account ID where the origin exists                              |
