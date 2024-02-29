---
title: aws.waf.rule.statement.bytematchstatement
id: aws.waf.rule.statement.bytematchstatement
sidebar_label: aws.waf.rule.statement.bytematchstatement
displayed_sidebar: MQL
description: Rule statement that matches a specified sequence of bytes
---

# aws.waf.rule.statement.bytematchstatement

**Supported platform**

- aws

**Description**

Rule statement that matches a specified sequence of bytes

**Fields**

| ID           | TYPE                                                      | DESCRIPTION                                |
| ------------ | --------------------------------------------------------- | ------------------------------------------ |
| ruleName     | string                                                    | Name of the rule this statement belongs to |
| statementID  | string                                                    | ID of the statement                        |
| fieldToMatch | [aws.waf.rule.fieldtomatch](aws.waf.rule.fieldtomatch.md) | Field to match                             |
| searchString | string                                                    | String to search for                       |
