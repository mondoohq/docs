---
title: aws.autoscaling
id: aws.autoscaling
sidebar_label: aws.autoscaling
displayed_sidebar: MQL
description: AWS Auto Scaling
---

# aws.autoscaling

**Supported platform**

- aws

**Description**

AWS Auto Scaling

Use the `aws.autoscaling` resource to assess the configuration of AWS auto scaling groups within an AWS account. This resource provides the `.groups` field, which returns a list of all auto scaling groups configured across all enabled regions across the account.

**Fields**

| ID     | TYPE                                                        | DESCRIPTION                                   |
| ------ | ----------------------------------------------------------- | --------------------------------------------- |
| groups | &#91;&#93;[aws.autoscaling.group](aws.autoscaling.group.md) | List of autoscaling groups across the account |

**Examples**

Return a list of all auto-scaling groups configured across all enabled regions across the account and the values for specified fields

```coffeescript
aws.autoscaling.groups {
  arn
  healthCheckType
  loadBalancerNames
  name
}
```

Check that all autoscaling groups associated with a load balancer use health checks

```coffeescript
aws.autoscaling.groups.where(loadBalancerNames.length > 0) {
  healthCheckType == "ELB"
}
```

**References**

- [Security in Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/security.html)
- [Compliance validation for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-compliance.html)
