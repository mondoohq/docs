---
title: aws.waf
id: aws.waf
sidebar_label: aws.waf
displayed_sidebar: MQL
description: Amazon WAF v2
---

# aws.waf

**Supported platform**

- aws

**Description**

Amazon WAF v2

**Fields**

| ID         | TYPE                                                | DESCRIPTION                         |
| ---------- | --------------------------------------------------- | ----------------------------------- |
| acls       | &#91;&#93;[aws.waf.acl](aws.waf.acl.md)             | List of WAF ACLs                    |
| ruleGroups | &#91;&#93;[aws.waf.rulegroup](aws.waf.rulegroup.md) | List of WAF rules                   |
| ipSets     | &#91;&#93;[aws.waf.ipset](aws.waf.ipset.md)         | List of WAF IP sets                 |
| scope      | string                                              | Scope either REGIONAL or CLOUDFRONT |
