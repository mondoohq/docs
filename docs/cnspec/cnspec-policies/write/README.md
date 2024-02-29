---
title: Policy Authoring Guide
sidebar_label: Policy Authoring Guide
displayed_sidebar: cnspec
sidebar_position: 1
description: Learn how to write custom security policies to meet the special needs of your organization
image: /img/featured_img/mondoo-feature.jpg
---

Policies are the specifications that cnspec uses when it scans an asset. cnspec compares your asset's configuration against the standards set in policies, and calculates a score based on the comparison. Scores tell you how secure your different assets are and allow you to see your progress as you improve your security posture.

Mondoo provides dozens of free policy bundles (collections of policies) that cover the most common types of assets&mdash;and Mondoo Platform has over 200! If your organization has unique needs that these policy bundles don't meet, you can create custom policy bundles.

Read these topics to learn how to build your own policies:

1. [Write Custom Policies](/cnspec/cnspec-policies/write/simple)

2. [Score Policies](/cnspec/cnspec-policies/write/policy-scoring)

3. [Reuse Queries and Checks](/cnspec/cnspec-policies/write/reuse)

4. [Break up a Policy into Groups / Chapters](/cnspec/cnspec-policies/write/chapters)

5. [Limit Target Assets with Filters](/cnspec/cnspec-policies/write/filters)

6. [Define Properties](/cnspec/cnspec-policies/write/properties)

7. [Make Policies Flexible with Variants](/cnspec/cnspec-policies/write/variants)

The queries and checks that policies use to retrieve information from your infrastructure are written in Mondoo's GraphQL-based query language, MQL.

- Learn how to [write MQL queries and checks](/mql/mql.write)

- Read about all the different [resources](/mql/resources/) from which MQL can retrieve information

---
