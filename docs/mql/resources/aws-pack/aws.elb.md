---
title: aws.elb
id: aws.elb
sidebar_label: aws.elb
displayed_sidebar: MQL
description: AWS Elastic Load Balancing
---

# aws.elb

**Supported platform**

- aws

**Description**

AWS Elastic Load Balancing

Use the `aws.elb` resource to assess the configuration of Amazon Elastic Load Balancers within an AWS account.

**Fields**

| ID                   | TYPE                                                      | DESCRIPTION                                                      |
| -------------------- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| classicLoadBalancers | &#91;&#93;[aws.elb.loadbalancer](aws.elb.loadbalancer.md) | List of classic load balancers                                   |
| loadBalancers        | &#91;&#93;[aws.elb.loadbalancer](aws.elb.loadbalancer.md) | List of application, gateway, and network load balancers (elbv2) |

**Examples**

Return a list of all application, gateway, and network Elastic Load Balancers deployed across every enabled region and the values for specified fields

```coffeescript
aws.elb.loadbalancers {
  arn
  dnsName
  listenerDescriptions
  name
  scheme
  attributes
}
```

Return a list of all classic Elastic Load Balancers deployed across every enabled region and the values for specified fields

```coffeescript
aws.elb.classicLoadBalancers {
  arn
  dnsName
  listenerDescriptions
  name
  scheme
  attributes
}
```

Check whether HTTP to HTTPS redirection is configured on all application load balancer http listeners

```coffeescript
aws.elb.loadBalancers.all( listenerDescriptions.any (
  _['Protocol'] == "HTTPS" || _['Protocol'] == "SSL" )
)
```

Check that all Classic Load Balancers use SSL certificates provided by AWS Cert Mgr

```coffeescript
aws.elb.classicLoadBalancers.all( listenerDescriptions.any (
  _['Listener']['Protocol'] == "HTTPS" || _['Listener']['Protocol'] == "SSL" )
)
```

**References**

- [Security in Elastic Load Balancing](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/security.html)
