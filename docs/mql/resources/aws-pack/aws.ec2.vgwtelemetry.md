---
title: aws.ec2.vgwtelemetry
id: aws.ec2.vgwtelemetry
sidebar_label: aws.ec2.vgwtelemetry
displayed_sidebar: MQL
description: Amazon EC2 VPN tunnel telemetry
---

# aws.ec2.vgwtelemetry

**Supported platform**

- aws

**Description**

Amazon EC2 VPN tunnel telemetry

The `aws.ec2.vgwtelemetry` resource provides fields for assessing the configuration of telemetry for VPN tunnels within an AWS account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID               | TYPE   | DESCRIPTION               |
| ---------------- | ------ | ------------------------- |
| outsideIpAddress | string | Outside IP address        |
| status           | string | VPN tunnel status         |
| statusMessage    | string | VPN tunnel status message |
