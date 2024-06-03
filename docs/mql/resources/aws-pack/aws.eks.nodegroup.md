---
title: aws.eks.nodegroup
id: aws.eks.nodegroup
sidebar_label: aws.eks.nodegroup
displayed_sidebar: MQL
description: Amazon EKS managed node group
---

# aws.eks.nodegroup

**Supported platform**

- aws

**Description**

Amazon EKS managed node group

**Fields**

| ID                | TYPE                                                        | DESCRIPTION                                            |
| ----------------- | ----------------------------------------------------------- | ------------------------------------------------------ |
| name              | string                                                      | Name for the EKS node group                            |
| arn               | string                                                      | ARN for the EKS node group                             |
| region            | string                                                      | Region for the EKS node group                          |
| createdAt         | time                                                        | Time when the EKS node group was created               |
| modifiedAt        | time                                                        | Time when the EKS node group was last modified         |
| status            | string                                                      | Status for the EKS node group                          |
| capacityType      | string                                                      | Capacity type for the EKS node group (ON_DEMAND, SPOT) |
| scalingConfig     | dict                                                        | Scaling configuration for the EKS node group           |
| instanceTypes     | &#91;&#93;string                                            | Instance types for the EKS node group                  |
| amiType           | string                                                      | AMI type for the EKS node group                        |
| nodeRole          | [aws.iam.role](aws.iam.role.md)                             | IAM role for the EKS node group                        |
| diskSize          | int                                                         | Disk size for the EKS node group                       |
| labels            | map[string]string                                           | Kubernetes labels applied to the EKS node group        |
| tags              | map[string]string                                           | Tags for the EKS node group                            |
| autoscalingGroups | &#91;&#93;[aws.autoscaling.group](aws.autoscaling.group.md) | List of autoscaling groups for the node group          |
