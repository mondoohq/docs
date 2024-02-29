---
title: aws.waf.rule.statement.sqlimatchstatement
id: aws.waf.rule.statement.sqlimatchstatement
sidebar_label: aws.waf.rule.statement.sqlimatchstatement
displayed_sidebar: MQL
description: Statement that matches SQLI attacks
---

# aws.waf.rule.statement.sqlimatchstatement

**Supported platform**

- aws

**Description**

Statement that matches SQLI attacks

**Fields**

| ID               | TYPE                                                      | DESCRIPTION                                |
| ---------------- | --------------------------------------------------------- | ------------------------------------------ |
| ruleName         | string                                                    | Name of the rule this statement belongs to |
| statementID      | string                                                    | ID of the statement                        |
| fieldToMatch     | [aws.waf.rule.fieldtomatch](aws.waf.rule.fieldtomatch.md) | Field to match                             |
| sensitivityLevel | string                                                    | How aggressive the statement matches       |
