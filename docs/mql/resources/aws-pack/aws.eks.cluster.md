---
title: aws.eks.cluster
id: aws.eks.cluster
sidebar_label: aws.eks.cluster
displayed_sidebar: MQL
description: Amazon EKS cluster
---

# aws.eks.cluster

**Supported platform**

- aws

**Description**

Amazon EKS cluster

**Fields**

| ID                 | TYPE                                                | DESCRIPTION                                                                                                                                                                                           |
| ------------------ | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name               | string                                              | Name of the cluster                                                                                                                                                                                   |
| arn                | string                                              | ARN of the cluster                                                                                                                                                                                    |
| region             | string                                              | Region for the cluster                                                                                                                                                                                |
| tags               | map[string]string                                   | A map of tags associated with the cluster                                                                                                                                                             |
| endpoint           | string                                              | Endpoint of Kubernetes API server                                                                                                                                                                     |
| version            | string                                              | Kubernetes server version                                                                                                                                                                             |
| platformVersion    | string                                              | Amazon EKS cluster version                                                                                                                                                                            |
| status             | string                                              | Cluster status                                                                                                                                                                                        |
| encryptionConfig   | &#91;&#93;dict                                      | Encryption configuration for the cluster                                                                                                                                                              |
| logging            | dict                                                | Cluster logging configuration                                                                                                                                                                         |
| networkConfig      | dict                                                | Kubernetes network configuration                                                                                                                                                                      |
| resourcesVpcConfig | dict                                                | VPC configuration                                                                                                                                                                                     |
| createdAt          | time                                                | Cluster creation timestamp                                                                                                                                                                            |
| nodeGroups         | &#91;&#93;[aws.eks.nodegroup](aws.eks.nodegroup.md) | List of EKS node groups                                                                                                                                                                               |
| addons             | &#91;&#93;[aws.eks.addon](aws.eks.addon.md)         | List of EKS add-ons                                                                                                                                                                                   |
| iamRole            | [aws.iam.role](aws.iam.role.md)                     | IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf                                                                |
| supportType        | string                                              | Kubernetes support policy of the cluster. (`STANDARD` support automatically upgrades at the end of standard support. `EXTENDED` automatically enters extended support at the end of standard support) |
| authenticationMode | string                                              | Cluster authentication mode                                                                                                                                                                           |
