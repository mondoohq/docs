---
title: aws.vpc.peeringConnection.peeringVpc
id: aws.vpc.peeringConnection.peeringVpc
sidebar_label: aws.vpc.peeringConnection.peeringVpc
displayed_sidebar: MQL
description: Amazon VPC Peering Connection Peering VPC
---

# aws.vpc.peeringConnection.peeringVpc

**Supported platform**

- aws

**Description**

Amazon VPC Peering Connection Peering VPC

**Fields**

| ID                              | TYPE                  | DESCRIPTION                                                                        |
| ------------------------------- | --------------------- | ---------------------------------------------------------------------------------- |
| allowDnsResolutionFromRemoteVpc | bool                  | Whether DNS resolution from the remote VPC is allowed                              |
| ipv4CiderBlocks                 | &#91;&#93;string      | List of IPv4 CIDR blocks for peering connection                                    |
| ipv6CiderBlocks                 | &#91;&#93;string      | List of IPv6 CIDR blocks for peering connection                                    |
| ownerID                         | string                | Owner ID of the peering connection                                                 |
| region                          | string                | Region of the peering connection                                                   |
| vpc                             | [aws.vpc](aws.vpc.md) | VPC associated with the peering connection (populated if it's in the same account) |
| vpcId                           | string                | ID of the VPC associated with the peering connection                               |
