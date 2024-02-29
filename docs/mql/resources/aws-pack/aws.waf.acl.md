---
title: aws.waf.acl
id: aws.waf.acl
sidebar_label: aws.waf.acl
displayed_sidebar: MQL
description: Amazon WAF v2 ACL
---

# aws.waf.acl

**Supported platform**

- aws

**Description**

Amazon WAF v2 ACL

**Fields**

| ID                       | TYPE                                      | DESCRIPTION                                    |
| ------------------------ | ----------------------------------------- | ---------------------------------------------- |
| arn                      | string                                    | ARN of the ACL                                 |
| id                       | string                                    | ID of the ACL                                  |
| name                     | string                                    | Name of the ACL                                |
| description              | string                                    | Description of the ACL                         |
| managedByFirewallManager | bool                                      | Whether the ACL is managed by Firewall Manager |
| rules                    | &#91;&#93;[aws.waf.rule](aws.waf.rule.md) | List of WAF rules                              |
| scope                    | string                                    | Scope either REGIONAL or CLOUDFRONT            |
