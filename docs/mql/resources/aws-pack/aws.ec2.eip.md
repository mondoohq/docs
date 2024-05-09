---
title: aws.ec2.eip
id: aws.ec2.eip
sidebar_label: aws.ec2.eip
displayed_sidebar: MQL
description: Amazon Elastic IP (EIP)
---

# aws.ec2.eip

**Supported platform**

- aws

**Description**

Amazon Elastic IP (EIP)

**Fields**

| ID                      | TYPE                                    | DESCRIPTION                                                                                 |
| ----------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------- |
| publicIp                | string                                  | Public IP address of the EIP                                                                |
| attached                | bool                                    | Whether the Elastic IP is associated with an instance (false if no allocationId is present) |
| instance                | [aws.ec2.instance](aws.ec2.instance.md) | Ec2 instance associated with the EIP                                                        |
| networkInterfaceId      | string                                  | ID of the network interface                                                                 |
| networkInterfaceOwnerId | string                                  | ID of the network interface owner                                                           |
| privateIpAddress        | string                                  | Private IP address for the EIP                                                              |
| publicIpv4Pool          | string                                  | IPv4 pool of the EIP                                                                        |
| tags                    | map[string]string                       | Tags for the EIP                                                                            |
| region                  | string                                  | Region where the EIP is located                                                             |
