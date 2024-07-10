---
title: aws.vpc.routetable
id: aws.vpc.routetable
sidebar_label: aws.vpc.routetable
displayed_sidebar: MQL
description: Amazon Virtual Private Cloud (VPC) route table
---

# aws.vpc.routetable

**Supported platform**

- aws

**Description**

Amazon Virtual Private Cloud (VPC) route table

**Fields**

| ID           | TYPE                                                                          | DESCRIPTION                        |
| ------------ | ----------------------------------------------------------------------------- | ---------------------------------- |
| associations | &#91;&#93;[aws.vpc.routetable.association](aws.vpc.routetable.association.md) | A list of association descriptions |
| id           | string                                                                        | Unique ID of the route table       |
| routes       | &#91;&#93;dict                                                                | A list of route descriptions       |
| tags         | map[string]string                                                             | Tags on the route table            |
