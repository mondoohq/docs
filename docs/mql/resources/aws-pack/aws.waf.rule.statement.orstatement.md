---
title: aws.waf.rule.statement.orstatement
id: aws.waf.rule.statement.orstatement
sidebar_label: aws.waf.rule.statement.orstatement
displayed_sidebar: MQL
description: Rule statement that matches if one of the rule statements inside it matches
---

# aws.waf.rule.statement.orstatement

**Supported platform**

- aws

**Description**

Rule statement that matches if one of the rule statements inside it matches

**Fields**

| ID          | TYPE                                                          | DESCRIPTION                                |
| ----------- | ------------------------------------------------------------- | ------------------------------------------ |
| ruleName    | string                                                        | Name of the rule this statement belongs to |
| statementID | string                                                        | ID of the statement                        |
| statements  | &#91;&#93;[aws.waf.rule.statement](aws.waf.rule.statement.md) | Sub-statements                             |
