---
title: aws.waf.rule
id: aws.waf.rule
sidebar_label: aws.waf.rule
displayed_sidebar: MQL
description: Amazon WAF rule
---

# aws.waf.rule

**Supported platform**

- aws

**Description**

Amazon WAF rule

**Fields**

| ID        | TYPE                                                | DESCRIPTION                                                                                                    |
| --------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| id        | string                                              | arn of the acl/ruleGroup + the name of the rule                                                                |
| name      | string                                              | Name of the rule                                                                                               |
| priority  | int                                                 | Priority from lowest to highest number                                                                         |
| statement | [aws.waf.rule.statement](aws.waf.rule.statement.md) | Part of the rule that tells WAF how to inspect a web request                                                   |
| action    | [aws.waf.rule.action](aws.waf.rule.action.md)       | Part of the rule that tells WAF what to do with a web request when it matches the criteria defined in the rule |
| belongsTo | string                                              | ARN of either rule ACL or the RuleGroup that this rule belongs to                                              |
