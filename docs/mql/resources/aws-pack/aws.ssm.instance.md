---
title: aws.ssm.instance
id: aws.ssm.instance
sidebar_label: aws.ssm.instance
displayed_sidebar: MQL
description: Amazon SSM instance
---

# aws.ssm.instance

**Supported platform**

- aws

**Description**

Amazon SSM instance

**Fields**

| ID              | TYPE              | DESCRIPTION                                                                           |
| --------------- | ----------------- | ------------------------------------------------------------------------------------- |
| instanceId      | string            | Instance ID for the SSM Instance                                                      |
| pingStatus      | string            | Ping status (such as online) for the SSM Instance                                     |
| ipAddress       | string            | IP Address for the SSM instance                                                       |
| platformName    | string            | Platform name for the SSM Instance, as described by AWS                               |
| platformType    | string            | Type of platform for the SSM Instance, as described by AWS: Windows, Linux, and so on |
| platformVersion | string            | Platform version for the SSM Instance, as described by AWS                            |
| region          | string            | Region where the SSM instance is located                                              |
| arn             | string            | ARN for the SSM instance                                                              |
| tags            | map[string]string | Tags for the SSM instance                                                             |
