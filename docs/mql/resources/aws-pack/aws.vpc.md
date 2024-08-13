---
title: aws.vpc
id: aws.vpc
sidebar_label: aws.vpc
displayed_sidebar: MQL
description: Amazon Virtual Private Cloud (VPC)
---

# aws.vpc

**Supported platform**

- aws

**Description**

Amazon Virtual Private Cloud (VPC)

**Fields**

| ID                 | TYPE                                                                | DESCRIPTION                                                                           |
| ------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| arn                | string                                                              | ARN of the VPC                                                                        |
| id                 | string                                                              | ID of the VPC                                                                         |
| name               | string                                                              | Name of the VPC                                                                       |
| cidrBlock          | string                                                              | IPv4 CIDR block of the VPC                                                            |
| state              | string                                                              | State of the VPC: pending or available                                                |
| isDefault          | bool                                                                | Whether the VPC is the default VPC                                                    |
| instanceTenancy    | string                                                              | How instance hardware tenancy settings are enforced on instances launched in this VPC |
| region             | string                                                              | Region in which the VPC exists                                                        |
| endpoints          | &#91;&#93;[aws.vpc.endpoint](aws.vpc.endpoint.md)                   | List of endpoints for the VPC                                                         |
| flowLogs           | &#91;&#93;[aws.vpc.flowlog](aws.vpc.flowlog.md)                     | List of flow logs for the VPC                                                         |
| routeTables        | &#91;&#93;[aws.vpc.routetable](aws.vpc.routetable.md)               | List of route tables for the VPC                                                      |
| subnets            | &#91;&#93;[aws.vpc.subnet](aws.vpc.subnet.md)                       | List of subnets for the VPC                                                           |
| tags               | map[string]string                                                   | Tags on the VPC                                                                       |
| natGateways        | &#91;&#93;[aws.vpc.natgateway](aws.vpc.natgateway.md)               | NAT gateways                                                                          |
| serviceEndpoints   | &#91;&#93;[aws.vpc.serviceEndpoint](aws.vpc.serviceendpoint.md)     | List of service endpoints associated with the VPC                                     |
| peeringConnections | &#91;&#93;[aws.vpc.peeringConnection](aws.vpc.peeringconnection.md) | List of peering connections associated with the VPC                                   |
