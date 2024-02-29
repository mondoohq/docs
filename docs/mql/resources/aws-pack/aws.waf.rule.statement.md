---
title: aws.waf.rule.statement
id: aws.waf.rule.statement
sidebar_label: aws.waf.rule.statement
displayed_sidebar: MQL
---

# aws.waf.rule.statement

**Supported platform**

- aws

**Fields**

| ID                                | TYPE                                                                                                                    | DESCRIPTION                                                                    |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| id                                | string                                                                                                                  | ID of the statement                                                            |
| kind                              | string                                                                                                                  | Kind of statement, e.g., "sqliMatchStatement"                                  |
| json                              | dict                                                                                                                    | Entire statement as JSON                                                       |
| sqliMatchStatement                | [aws.waf.rule.statement.sqlimatchstatement](aws.waf.rule.statement.sqlimatchstatement.md)                               | Statement that detects SQL injection attacks                                   |
| xssMatchStatement                 | [aws.waf.rule.statement.xssmatchstatement](aws.waf.rule.statement.xssmatchstatement.md)                                 | Statement that detects XSS attacks                                             |
| byteMatchStatement                | [aws.waf.rule.statement.bytematchstatement](aws.waf.rule.statement.bytematchstatement.md)                               | Statement that matches certain bytes                                           |
| regexMatchStatement               | [aws.waf.rule.statement.regexmatchstatement](aws.waf.rule.statement.regexmatchstatement.md)                             | Statement that matches a regex pattern                                         |
| geoMatchStatement                 | [aws.waf.rule.statement.geomatchstatement](aws.waf.rule.statement.geomatchstatement.md)                                 | Statement that matches requests from certain countries                         |
| ipSetReferenceStatement           | [aws.waf.rule.statement.ipsetreferencestatement](aws.waf.rule.statement.ipsetreferencestatement.md)                     | Statement that matches requests from certain ips defined in an IPSet           |
| labelMatchStatement               | [aws.waf.rule.statement.labelmatchstatement](aws.waf.rule.statement.labelmatchstatement.md)                             | Statement that matches requests with certain labels                            |
| managedRuleGroupStatement         | [aws.waf.rule.statement.managedrulegroupstatement](aws.waf.rule.statement.managedrulegroupstatement.md)                 | Statement managed by AWS                                                       |
| notStatement                      | [aws.waf.rule.statement.notstatement](aws.waf.rule.statement.notstatement.md)                                           | Statement that matches if the conditions are not met                           |
| orStatement                       | [aws.waf.rule.statement.orstatement](aws.waf.rule.statement.orstatement.md)                                             | Statement that matches if one or many sub-statements match                     |
| andStatement                      | [aws.waf.rule.statement.andstatement](aws.waf.rule.statement.andstatement.md)                                           | Statement that matches if all sub-statements match                             |
| rateBasedStatement                | [aws.waf.rule.statement.ratebasedstatement](aws.waf.rule.statement.ratebasedstatement.md)                               | Statement that matches if a request comes in at a certain rate (rate limiting) |
| regexPatternSetReferenceStatement | [aws.waf.rule.statement.regexpatternsetreferencestatement](aws.waf.rule.statement.regexpatternsetreferencestatement.md) | Statement that matches a regex pattern defined in a regex pattern set          |
| ruleGroupReferenceStatement       | [aws.waf.rule.statement.rulegroupreferencestatement](aws.waf.rule.statement.rulegroupreferencestatement.md)             | Statement that refers to the rules in a rule group                             |
| sizeConstraintStatement           | [aws.waf.rule.statement.sizeconstraintstatement](aws.waf.rule.statement.sizeconstraintstatement.md)                     | Statement that matches the size of the request                                 |
