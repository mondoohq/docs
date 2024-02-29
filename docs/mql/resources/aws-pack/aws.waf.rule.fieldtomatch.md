---
title: aws.waf.rule.fieldtomatch
id: aws.waf.rule.fieldtomatch
sidebar_label: aws.waf.rule.fieldtomatch
displayed_sidebar: MQL
description: Field to match
---

# aws.waf.rule.fieldtomatch

**Supported platform**

- aws

**Description**

Field to match

**Fields**

| ID                  | TYPE                                                                                              | DESCRIPTION                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| target              | string                                                                                            |                                                                             |
| ruleName            | string                                                                                            | Name of the rule this statement belongs to                                  |
| statementID         | string                                                                                            | ID of the statement                                                         |
| method              | bool                                                                                              | Whether to match the HTTP method: GET or POST                               |
| uriPath             | bool                                                                                              | Whether to match the URI path                                               |
| queryString         | bool                                                                                              | Whether to match the query string                                           |
| allQueryArguments   | bool                                                                                              | Whether to match all query arguments                                        |
| body                | [aws.waf.rule.fieldtomatch.body](aws.waf.rule.fieldtomatch.body.md)                               | Whether to match the body (match if not null)                               |
| cookie              | [aws.waf.rule.fieldtomatch.cookie](aws.waf.rule.fieldtomatch.cookie.md)                           | Whether to match the cookie (match if not null)                             |
| singleHeader        | [aws.waf.rule.fieldtomatch.singleheader](aws.waf.rule.fieldtomatch.singleheader.md)               | Whether to match the single header (match if not null)                      |
| headerOrder         | [aws.waf.rule.fieldtomatch.headerorder](aws.waf.rule.fieldtomatch.headerorder.md)                 | Whether to match the header order (match if not null)                       |
| headers             | [aws.waf.rule.fieldtomatch.headers](aws.waf.rule.fieldtomatch.headers.md)                         | Whether to match the header (match if not null)                             |
| ja3Fingerprint      | [aws.waf.rule.fieldtomatch.ja3fingerprint](aws.waf.rule.fieldtomatch.ja3fingerprint.md)           | Whether to match the JA3 fingerprint (match if not null)                    |
| jsonBody            | [aws.waf.rule.fieldtomatch.jsonbody](aws.waf.rule.fieldtomatch.jsonbody.md)                       | Whether to match the JSON body (match if not null)                          |
| singleQueryArgument | [aws.waf.rule.fieldtomatch.singlequeryargument](aws.waf.rule.fieldtomatch.singlequeryargument.md) | Whether to match the single query argument of the field (match if not null) |
