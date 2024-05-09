---
title: aws.vpc.serviceEndpoint
id: aws.vpc.serviceEndpoint
sidebar_label: aws.vpc.serviceEndpoint
displayed_sidebar: MQL
description: Amazon VPC Service Endpoint
---

# aws.vpc.serviceEndpoint

**Supported platform**

- aws

**Description**

Amazon VPC Service Endpoint

**Fields**

| ID                              | TYPE              | DESCRIPTION                                              |
| ------------------------------- | ----------------- | -------------------------------------------------------- |
| acceptanceRequired              | bool              | True if acceptance required                              |
| availabilityZones               | &#91;&#93;string  | List of availability zones for the service endpoint      |
| dnsNames                        | &#91;&#93;string  | List of base endpoint DNS names for the service endpoint |
| id                              | string            | Service ID                                               |
| managesVpcEndpoints             | bool              | Whether the service endpoint manages VPC endpoints       |
| name                            | string            | Service name                                             |
| owner                           | string            | Service owner                                            |
| payerResponsibility             | string            | Service payer responsibility                             |
| privateDnsNameVerificationState | string            | Service private DNS name verification state              |
| privateDnsNames                 | &#91;&#93;string  | List of service private DNS names                        |
| tags                            | map[string]string | Tags for the service endpoint                            |
| type                            | string            | Service type                                             |
| vpcEndpointPolicySupported      | bool              | Whether the service supports VPC endpoint policy         |
