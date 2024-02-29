---
title: aws.waf.rule.statement.andstatement
id: aws.waf.rule.statement.andstatement
sidebar_label: aws.waf.rule.statement.andstatement
displayed_sidebar: MQL
description: Rule statement that matches if all of the rule statements inside it match
---

# aws.waf.rule.statement.andstatement

**Supported platform**

- aws

**Description**

Rule statement that matches if all of the rule statements inside it match

**Fields**

| ID          | TYPE                                                          | DESCRIPTION                                |
| ----------- | ------------------------------------------------------------- | ------------------------------------------ |
| ruleName    | string                                                        | Name of the rule this statement belongs to |
| statementID | string                                                        | ID of the statement                        |
| statements  | &#91;&#93;[aws.waf.rule.statement](aws.waf.rule.statement.md) | Sub-statements                             |
