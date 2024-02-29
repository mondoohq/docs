---
title: aws.waf.rule.statement.notstatement
id: aws.waf.rule.statement.notstatement
sidebar_label: aws.waf.rule.statement.notstatement
displayed_sidebar: MQL
description: Rule statement that negates another rule statement
---

# aws.waf.rule.statement.notstatement

**Supported platform**

- aws

**Description**

Rule statement that negates another rule statement

**Fields**

| ID          | TYPE                                                | DESCRIPTION                                |
| ----------- | --------------------------------------------------- | ------------------------------------------ |
| ruleName    | string                                              | Name of the rule this statement belongs to |
| statementID | string                                              | ID of the statement                        |
| statement   | [aws.waf.rule.statement](aws.waf.rule.statement.md) | Sub-statement (will be negated)            |
