---
title: aws.vpc.endpoint
id: aws.vpc.endpoint
sidebar_label: aws.vpc.endpoint
displayed_sidebar: MQL
description: Amazon Virtual Private Cloud (VPC) endpoint
---

# aws.vpc.endpoint

**Supported platform**

- aws

**Description**

Amazon Virtual Private Cloud (VPC) endpoint

**Fields**

| ID                | TYPE             | DESCRIPTION                                                       |
| ----------------- | ---------------- | ----------------------------------------------------------------- |
| id                | string           | Unique ID of the endpoint                                         |
| type              | string           | Type of the endpoint                                              |
| vpc               | string           | VPC in which the endpoint exists                                  |
| region            | string           | Region in which the VPC endpoint exists                           |
| serviceName       | string           | Endpoint service name                                             |
| policyDocument    | string           | Policy document associated with the endpoint, if applicable       |
| subnets           | &#91;&#93;string | Subnets for the (interface) endpoint                              |
| privateDnsEnabled | bool             | Whether to associate a private hosted zone with the specified VPC |
| state             | string           | VPC endpoint state                                                |
| createdAt         | time             | Creation timestamp                                                |
