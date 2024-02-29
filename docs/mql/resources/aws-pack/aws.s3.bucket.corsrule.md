---
title: aws.s3.bucket.corsrule
id: aws.s3.bucket.corsrule
sidebar_label: aws.s3.bucket.corsrule
displayed_sidebar: MQL
description: Amazon S3 bucket CORS rule
---

# aws.s3.bucket.corsrule

**Supported platform**

- aws

**Description**

Amazon S3 bucket CORS rule

**Fields**

| ID             | TYPE             | DESCRIPTION                                                |
| -------------- | ---------------- | ---------------------------------------------------------- |
| name           | string           | Name of the rule                                           |
| allowedHeaders | &#91;&#93;string | List of allowed headers                                    |
| allowedMethods | &#91;&#93;string | List of allowed methods GET, POST, PUT, and so on          |
| allowedOrigins | &#91;&#93;string | List of origins from which the bucket can be accessed      |
| exposeHeaders  | &#91;&#93;string | List of exposed response headers                           |
| maxAgeSeconds  | int              | Time in seconds that the browser caches preflight response |
