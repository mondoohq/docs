---
title: aws.vpc.natgateway
id: aws.vpc.natgateway
sidebar_label: aws.vpc.natgateway
displayed_sidebar: MQL
description: Amazon VPC NAT Gateway
---

# aws.vpc.natgateway

**Supported platform**

- aws

**Description**

Amazon VPC NAT Gateway

**Fields**

| ID           | TYPE                                                                  | DESCRIPTION                                                                 |
| ------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| createdAt    | time                                                                  | Time when the gateway was created                                           |
| natGatewayId | string                                                                | ID of the NAT gateway                                                       |
| state        | string                                                                | State of the NAT gateway (pending, failed, available, deleting, or deleted) |
| tags         | map[string]string                                                     | Tags for the NAT gateway                                                    |
| vpc          | [aws.vpc](aws.vpc.md)                                                 | VPC associated with the NAT gateway                                         |
| addresses    | &#91;&#93;[aws.vpc.natgateway.address](aws.vpc.natgateway.address.md) | List of addresses associated with the NAT gateway                           |
| subnet       | [aws.vpc.subnet](aws.vpc.subnet.md)                                   | Subnet for the NAT gateway                                                  |
