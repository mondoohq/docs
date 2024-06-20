---
title: aws.vpc.routetable.associations
id: aws.vpc.routetable.associations
sidebar_label: aws.vpc.routetable.associations
displayed_sidebar: MQL
description: Amazon Virtual Private Cloud (VPC) route table associations
---

# aws.vpc.routetable.associations

**Supported platform**

- aws

**Description**

Amazon Virtual Private Cloud (VPC) route table associations

**Fields**

| ID                      | TYPE                                | DESCRIPTION                                    |
| ----------------------- | ----------------------------------- | ---------------------------------------------- |
| routeTableAssociationId | ?                                   | Unique ID of the association ID                |
| associationsState       | &#91;&#93;dict                      | the association state                          |
| gatewayId               | string                              | Unique ID of the associated gateway            |
| main                    | string                              | Boolean if association is the main association |
| routeTableId            | ?                                   | Unique ID of the route table                   |
| subnet                  | [aws.vpc.subnet](aws.vpc.subnet.md) | The subnet of the route table association      |
