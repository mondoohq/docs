---
title: aws.vpc.subnet
id: aws.vpc.subnet
sidebar_label: aws.vpc.subnet
displayed_sidebar: MQL
description: Amazon Virtual Private Cloud (VPC) subnet
---

# aws.vpc.subnet

**Supported platform**

- aws

**Description**

Amazon Virtual Private Cloud (VPC) subnet

**Fields**

| ID                          | TYPE   | DESCRIPTION                                                                                                                          |
| --------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| arn                         | string | ARN of the subnet                                                                                                                    |
| id                          | string | Unique ID of the subnet                                                                                                              |
| cidrs                       | string | List of CIDR descriptions                                                                                                            |
| mapPublicIpOnLaunch         | bool   | Whether instances launched in this subnet receive public IPv4 addresses                                                              |
| availabilityZone            | string | Availability zone where this subnet is located                                                                                       |
| defaultForAvailabilityZone  | bool   | Whether this is the default subnet for the availability zone                                                                         |
| assignIpv6AddressOnCreation | bool   | Whether a network interface created in this subnet (including a network interface created by RunInstances ) receives an IPv6 address |
| state                       | string | State of the subnet: pending or available                                                                                            |
| region                      | string | Region in which the VPC subnet exists                                                                                                |
