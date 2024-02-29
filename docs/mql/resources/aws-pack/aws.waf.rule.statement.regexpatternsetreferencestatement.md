---
title: aws.waf.rule.statement.regexpatternsetreferencestatement
id: aws.waf.rule.statement.regexpatternsetreferencestatement
sidebar_label: aws.waf.rule.statement.regexpatternsetreferencestatement
displayed_sidebar: MQL
description: Rule statement that checks for a regex pattern defined in a regex pattern set
---

# aws.waf.rule.statement.regexpatternsetreferencestatement

**Supported platform**

- aws

**Description**

Rule statement that checks for a regex pattern defined in a regex pattern set

**Fields**

| ID           | TYPE                                                      | DESCRIPTION                                |
| ------------ | --------------------------------------------------------- | ------------------------------------------ |
| ruleName     | string                                                    | Name of the rule this statement belongs to |
| statementID  | string                                                    | ID of the statement                        |
| arn          | string                                                    | ARN of the regex pattern set               |
| fieldToMatch | [aws.waf.rule.fieldtomatch](aws.waf.rule.fieldtomatch.md) | Field that is matched                      |
