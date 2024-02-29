---
title: aws.waf.rule.statement.ipsetreferencestatement
id: aws.waf.rule.statement.ipsetreferencestatement
sidebar_label: aws.waf.rule.statement.ipsetreferencestatement
displayed_sidebar: MQL
description: Rule statement that checks for requests from IP addresses defined in an IPSet
---

# aws.waf.rule.statement.ipsetreferencestatement

**Supported platform**

- aws

**Description**

Rule statement that checks for requests from IP addresses defined in an IPSet

**Fields**

| ID                     | TYPE                                                                                                                                              | DESCRIPTION                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| ruleName               | string                                                                                                                                            | Name of the rule this statement belongs to |
| statementID            | string                                                                                                                                            | ID of the statement                        |
| arn                    | string                                                                                                                                            | arn of the ipset                           |
| ipSetForwardedIPConfig | [aws.waf.rule.statement.ipsetreferencestatement.ipsetforwardedipconfig](aws.waf.rule.statement.ipsetreferencestatement.ipsetforwardedipconfig.md) | ipSetForwardedIPConfig                     |
