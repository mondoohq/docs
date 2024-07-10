---
title: aws.vpc.routetable.association
id: aws.vpc.routetable.association
sidebar_label: aws.vpc.routetable.association
displayed_sidebar: MQL
description: Amazon Virtual Private Cloud (VPC) route table association
---

# aws.vpc.routetable.association

**Supported platform**

- aws

**Description**

Amazon Virtual Private Cloud (VPC) route table association

**Fields**

| ID                      | TYPE                                | DESCRIPTION                           |
| ----------------------- | ----------------------------------- | ------------------------------------- |
| routeTableAssociationId | string                              | Unique ID of the association          |
| associationsState       | dict                                | Association state                     |
| gatewayId               | string                              | Unique ID of the associated gateway   |
| main                    | bool                                | Whether this is the main association  |
| routeTableId            | string                              | Unique ID of the route table          |
| subnet                  | [aws.vpc.subnet](aws.vpc.subnet.md) | Subnet of the route table association |
