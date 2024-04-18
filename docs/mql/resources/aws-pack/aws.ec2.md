---
title: aws.ec2
id: aws.ec2
sidebar_label: aws.ec2
displayed_sidebar: MQL
description: Amazon EC2
---

# aws.ec2

**Supported platform**

- aws

**Description**

Amazon EC2

Use the `aws.ec2` resource to assess the configuration of AWS EC2 instances.

**Fields**

| ID                     | TYPE                                                            | DESCRIPTION                                                                     |
| ---------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| securityGroups         | &#91;&#93;[aws.ec2.securitygroup](aws.ec2.securitygroup.md)     | List of security groups available to the account                                |
| instances              | &#91;&#93;[aws.ec2.instance](aws.ec2.instance.md)               | List of instances across the AWS account (all regions)                          |
| ebsEncryptionByDefault | map[string]bool                                                 | map[region]boolean used to denote if EBS encryption is on by default per region |
| volumes                | &#91;&#93;[aws.ec2.volume](aws.ec2.volume.md)                   | List of volumes across the AWS account                                          |
| snapshots              | &#91;&#93;[aws.ec2.snapshot](aws.ec2.snapshot.md)               | List of snapshots across the account                                            |
| internetGateways       | &#91;&#93;[aws.ec2.internetgateway](aws.ec2.internetgateway.md) | List of internet gateways                                                       |
| vpnConnections         | &#91;&#93;[aws.ec2.vpnconnection](aws.ec2.vpnconnection.md)     | List of VPN connections                                                         |
| networkAcls            | &#91;&#93;[aws.ec2.networkacl](aws.ec2.networkacl.md)           | List of network ACLs                                                            |
| keypairs               | &#91;&#93;[aws.ec2.keypair](aws.ec2.keypair.md)                 | List of keypairs for the account                                                |

**Examples**

Return a list of all EC2 instances across all enabled regions in the account and the values for specified fields

```coffee
aws.ec2.instances {
  arn
  instanceId
  detailedMonitoring
  region
  publicIp
  ssm
  vpc
  httpTokens
  patchState
  state
  deviceMappings
  securityGroups
  publicDnsName
  instanceStatus
  stateReason
  stateTransitionReason
  ebsOptimized
  instanceType
  tags
  image
  launchTime
}
```

Return a list of security groups across every enabled region and the value for specified fields

```coffee
aws.ec2.securityGroups {
  arn
  region
  vpc
  id
}
```

Return a list of all EBS volumes along with the associated ARN and the region the volume exists in

```coffee
aws.ec2.volumes {
  arn
  region
}
```

Ensure the default security group of every VPC restricts all traffic

```coffee
aws.ec2.securityGroups.where(name == "default") {
  ipPermissions.all(ipRanges.length == 0 && ipv6Ranges.length == 0 && fromPort == 0 && toPort == 0)
  ipPermissionsEgress.all(ipRanges.length == 0 && ipv6Ranges.length == 0 && fromPort == 0 && toPort == 0)
}
```

**References**

- [Security in Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security.html)
- [Security in Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/security.html)
