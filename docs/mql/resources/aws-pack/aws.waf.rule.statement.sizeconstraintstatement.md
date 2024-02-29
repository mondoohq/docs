---
title: aws.waf.rule.statement.sizeconstraintstatement
id: aws.waf.rule.statement.sizeconstraintstatement
sidebar_label: aws.waf.rule.statement.sizeconstraintstatement
displayed_sidebar: MQL
description: Rule statement that checks the size of the specified field
---

# aws.waf.rule.statement.sizeconstraintstatement

**Supported platform**

- aws

**Description**

Rule statement that checks the size of the specified field

**Fields**

| ID                 | TYPE                                                      | DESCRIPTION                                |
| ------------------ | --------------------------------------------------------- | ------------------------------------------ |
| ruleName           | string                                                    | Name of the rule this statement belongs to |
| statementID        | string                                                    | ID of the statement                        |
| size               | int                                                       | The size that triggers this statement      |
| comparisonOperator | string                                                    | How to compare the size                    |
| fieldToMatch       | [aws.waf.rule.fieldtomatch](aws.waf.rule.fieldtomatch.md) | Field to match                             |
