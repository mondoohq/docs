---
title: aws.ec2.vpnconnection
id: aws.ec2.vpnconnection
sidebar_label: aws.ec2.vpnconnection
displayed_sidebar: MQL
description: Amazon EC2 VPN connection
---

# aws.ec2.vpnconnection

**Supported platform**

- aws

**Description**

Amazon EC2 VPN connection

The `aws.ec2.vpnconnection` resource provides fields for assessing the configuration of VPN connections within an AWS account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID           | TYPE                                                      | DESCRIPTION                        |
| ------------ | --------------------------------------------------------- | ---------------------------------- |
| arn          | string                                                    | ARN for the VPN connection         |
| vgwTelemetry | &#91;&#93;[aws.ec2.vgwtelemetry](aws.ec2.vgwtelemetry.md) | List of telemetry data for the VPN |
