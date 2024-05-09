---
title: aws.vpc.peeringConnection
id: aws.vpc.peeringConnection
sidebar_label: aws.vpc.peeringConnection
displayed_sidebar: MQL
description: Amazon VPC Peering Connection
---

# aws.vpc.peeringConnection

**Supported platform**

- aws

**Description**

Amazon VPC Peering Connection

**Fields**

| ID             | TYPE                                                                            | DESCRIPTION                                |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------ |
| acceptorVpc    | [aws.vpc.peeringConnection.peeringVpc](aws.vpc.peeringconnection.peeringvpc.md) | VPC for the peering connection acceptor    |
| expirationTime | time                                                                            | Expiration time for the peering connection |
| id             | string                                                                          | ID of the peering connection               |
| requestorVpc   | [aws.vpc.peeringConnection.peeringVpc](aws.vpc.peeringconnection.peeringvpc.md) | VPC for the peering connection requestor   |
| status         | string                                                                          | Status of the peering connection           |
| tags           | map[string]string                                                               | Tags for the peering connection            |
