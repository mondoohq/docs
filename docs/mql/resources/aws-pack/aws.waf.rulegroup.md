---
title: aws.waf.rulegroup
id: aws.waf.rulegroup
sidebar_label: aws.waf.rulegroup
displayed_sidebar: MQL
description: Amazon WAF v2 RuleGroup
---

# aws.waf.rulegroup

**Supported platform**

- aws

**Description**

Amazon WAF v2 RuleGroup

**Fields**

| ID          | TYPE                                      | DESCRIPTION                         |
| ----------- | ----------------------------------------- | ----------------------------------- |
| arn         | string                                    | ARN of the rulegroup                |
| id          | string                                    | ID of the rulegroup                 |
| name        | string                                    | Name of the rulegroup               |
| description | string                                    | Description of the rulegroup        |
| rules       | &#91;&#93;[aws.waf.rule](aws.waf.rule.md) | List of waf rules                   |
| scope       | string                                    | Scope either REGIONAL or CLOUDFRONT |
