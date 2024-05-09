---
title: aws.vpc.natgateway.address
id: aws.vpc.natgateway.address
sidebar_label: aws.vpc.natgateway.address
displayed_sidebar: MQL
description: Amazon VPC NAT gateway address
---

# aws.vpc.natgateway.address

**Supported platform**

- aws

**Description**

Amazon VPC NAT gateway address

**Fields**

| ID                 | TYPE                          | DESCRIPTION                                                                                             |
| ------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| allocationId       | string                        | Allocation ID for the address                                                                           |
| networkInterfaceId | string                        | Network interface ID for the address                                                                    |
| privateIp          | string                        | Private IP associated with the address                                                                  |
| publicIp           | [aws.ec2.eip](aws.ec2.eip.md) | EIP associated with the address                                                                         |
| isPrimary          | bool                          | AllocationId can get us back to the actual EIP, Whether this is the primary address for the NAT gateway |
