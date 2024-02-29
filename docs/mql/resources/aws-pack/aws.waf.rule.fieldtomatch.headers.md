---
title: aws.waf.rule.fieldtomatch.headers
id: aws.waf.rule.fieldtomatch.headers
sidebar_label: aws.waf.rule.fieldtomatch.headers
displayed_sidebar: MQL
description: Headers
---

# aws.waf.rule.fieldtomatch.headers

**Supported platform**

- aws

**Description**

Headers

**Fields**

| ID               | TYPE                                                                                                | DESCRIPTION                                |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| ruleName         | string                                                                                              | Name of the rule this statement belongs to |
| statementID      | string                                                                                              | ID of the statement                        |
| matchScope       | string                                                                                              | Match scope                                |
| overSizeHandling | string                                                                                              | What to do if the headers are over size    |
| matchPattern     | [aws.waf.rule.fieldtomatch.headers.matchpattern](aws.waf.rule.fieldtomatch.headers.matchpattern.md) | Match pattern                              |
