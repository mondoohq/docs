---
title: aws.waf.rule.fieldtomatch.jsonbody
id: aws.waf.rule.fieldtomatch.jsonbody
sidebar_label: aws.waf.rule.fieldtomatch.jsonbody
displayed_sidebar: MQL
description: Request body as JSON
---

# aws.waf.rule.fieldtomatch.jsonbody

**Supported platform**

- aws

**Description**

Request body as JSON

**Fields**

| ID                      | TYPE                                                                                                  | DESCRIPTION                                |
| ----------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| ruleName                | string                                                                                                | Name of the rule this statement belongs to |
| statementID             | string                                                                                                | ID of the statement                        |
| overSizeHandling        | string                                                                                                | What to do if the body is over size        |
| matchScope              | string                                                                                                | Match scope                                |
| invalidFallbackBehavior | string                                                                                                | What to do if the body is not valid JSON   |
| matchPattern            | [aws.waf.rule.fieldtomatch.jsonbody.matchpattern](aws.waf.rule.fieldtomatch.jsonbody.matchpattern.md) | Match pattern                              |
