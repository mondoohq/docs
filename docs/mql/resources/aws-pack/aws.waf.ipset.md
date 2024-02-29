---
title: aws.waf.ipset
id: aws.waf.ipset
sidebar_label: aws.waf.ipset
displayed_sidebar: MQL
description: Amazon WAF IP set (defining IP Ranges)
---

# aws.waf.ipset

**Supported platform**

- aws

**Description**

Amazon WAF IP set (defining IP Ranges)

**Fields**

| ID          | TYPE   | DESCRIPTION                   |
| ----------- | ------ | ----------------------------- |
| arn         | string | ARN of the IP set             |
| id          | string | ID of the IP set              |
| scope       | string | Scope: REGIONAL or CLOUDFRONT |
| name        | string | Name of the IP set            |
| description | string | Description of the IP set     |
| addressType | string | Address type: ipv4 or ipv6    |
| addresses   | dict   | list of IP addresses          |
