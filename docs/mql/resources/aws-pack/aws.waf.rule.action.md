---
title: aws.waf.rule.action
id: aws.waf.rule.action
sidebar_label: aws.waf.rule.action
displayed_sidebar: MQL
description: Action that happens if a rule statement matches
---

# aws.waf.rule.action

**Supported platform**

- aws

**Description**

Action that happens if a rule statement matches

**Fields**

| ID           | TYPE   | DESCRIPTION                                     |
| ------------ | ------ | ----------------------------------------------- |
| ruleName     | string | Name of the rule this action belongs to         |
| action       | string | One of Block, Allow, Count, Captcha             |
| responseCode | string | HTTP Response Code, only if the action is Block |
