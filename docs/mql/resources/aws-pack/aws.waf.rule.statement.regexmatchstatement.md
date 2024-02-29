---
title: aws.waf.rule.statement.regexmatchstatement
id: aws.waf.rule.statement.regexmatchstatement
sidebar_label: aws.waf.rule.statement.regexmatchstatement
displayed_sidebar: MQL
description: Rule statement that matches a specified regex pattern
---

# aws.waf.rule.statement.regexmatchstatement

**Supported platform**

- aws

**Description**

Rule statement that matches a specified regex pattern

**Fields**

| ID           | TYPE                                                      | DESCRIPTION                                |
| ------------ | --------------------------------------------------------- | ------------------------------------------ |
| ruleName     | string                                                    | Name of the rule this statement belongs to |
| statementID  | string                                                    | ID of the statement                        |
| fieldToMatch | [aws.waf.rule.fieldtomatch](aws.waf.rule.fieldtomatch.md) | Field to match                             |
| regexString  | string                                                    | Regex pattern to match                     |
