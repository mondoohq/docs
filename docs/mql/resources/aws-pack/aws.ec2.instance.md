---
title: aws.ec2.instance
id: aws.ec2.instance
sidebar_label: aws.ec2.instance
displayed_sidebar: MQL
description: Amazon EC2 instance
---

# aws.ec2.instance

**Supported platform**

- aws

**Description**

Amazon EC2 instance

The `aws.ec2.instance` resource provides fields for assessing the configuration of EC2 instances within an account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID                    | TYPE                                                              | DESCRIPTION                                                                                 |
| --------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| arn                   | string                                                            | ARN for the instance                                                                        |
| instanceId            | string                                                            | Instance ID for the instance                                                                |
| detailedMonitoring    | string                                                            | Whether detailed monitoring is enabled                                                      |
| region                | string                                                            | Region where the instance exists                                                            |
| publicIp              | string                                                            | Public IP for instance                                                                      |
| ssm                   | dict                                                              | Amazon Systems Manager information for the instance                                         |
| vpc                   | [aws.vpc](aws.vpc.md)                                             | VPC associated with the instance                                                            |
| httpTokens            | string                                                            | A value of "optional" denotes IMDSv1 server compatibility; "required" denotes IMDSv2        |
| httpEndpoint          | string                                                            | Status of the IMDS endpoint enabled on the instance                                         |
| patchState            | dict                                                              | Patch state information about the instance                                                  |
| state                 | string                                                            | State of the instance: pending, running, stopping, stopped, rebooting, or terminated        |
| deviceMappings        | &#91;&#93;[aws.ec2.instance.device](aws.ec2.instance.device.md)   | List of devices attached to the instance (such as EBS volume)                               |
| securityGroups        | &#91;&#93;[aws.ec2.securitygroup](aws.ec2.securitygroup.md)       | List of security groups (IDs) associated with the instance                                  |
| platformDetails       | string                                                            | Platform details                                                                            |
| publicDnsName         | string                                                            | Public DNS name for the instance                                                            |
| instanceStatus        | dict                                                              | Status of the specified instance                                                            |
| stateReason           | dict                                                              | Reason for the most recent state transition                                                 |
| stateTransitionReason | string                                                            | Reason for the most recent state transition                                                 |
| ebsOptimized          | bool                                                              | Whether the instance has EBS optimization turned on                                         |
| enaSupported          | bool                                                              | Whether enhanced networking with ENA is enabled                                             |
| instanceType          | string                                                            | Instance type, such as t2.micro                                                             |
| tags                  | map[string]string                                                 | Tags on the instance                                                                        |
| image                 | [aws.ec2.image](aws.ec2.image.md)                                 | Image that was used for the instance                                                        |
| launchTime            | time                                                              | Launch time of the instance                                                                 |
| privateIp             | string                                                            | Private IP address for the instance                                                         |
| privateDnsName        | string                                                            | Private DNS name for the instance                                                           |
| keypair               | [aws.ec2.keypair](aws.ec2.keypair.md)                             | Key pair associated with the instance                                                       |
| stateTransitionTime   | time                                                              | Time when the last state transition occurred                                                |
| vpcArn                | string                                                            | ARN of the VPC associated with the instance                                                 |
| hypervisor            | string                                                            | Hypervisor type of the instance: ovm or xen                                                 |
| instanceLifecycle     | string                                                            | Whether this is a Spot Instance or a Scheduled Instance: spot, scheduled, or capacity-block |
| rootDeviceType        | string                                                            | Root device type used by the AMI: ebs or instance-store                                     |
| rootDeviceName        | string                                                            | Device name of the root device volume, such as /dev/sda1                                    |
| architecture          | string                                                            | Architecture of the instance                                                                |
| tpmSupport            | string                                                            | TPM version supported. NitroTPM is enabled if this value is `2.0`                           |
| networkInterfaces     | &#91;&#93;[aws.ec2.networkinterface](aws.ec2.networkinterface.md) | List of network interfaces for the instance                                                 |
