---
title: aws.waf.rule.statement.rulegroupreferencestatement
id: aws.waf.rule.statement.rulegroupreferencestatement
sidebar_label: aws.waf.rule.statement.rulegroupreferencestatement
displayed_sidebar: MQL
description: Rule statement that refers to a group of rules
---

# aws.waf.rule.statement.rulegroupreferencestatement

**Supported platform**

- aws

**Description**

Rule statement that refers to a group of rules

**Fields**

| ID           | TYPE             | DESCRIPTION                                |
| ------------ | ---------------- | ------------------------------------------ |
| ruleName     | string           | Name of the rule this statement belongs to |
| statementID  | string           | ID of the statement                        |
| arn          | string           | ARN of the rule group                      |
| excludeRules | &#91;&#93;string | List of rules to exclude                   |
