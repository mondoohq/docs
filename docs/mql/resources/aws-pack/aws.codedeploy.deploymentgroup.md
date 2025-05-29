---
title: aws.codedeploy.deploymentGroup
id: aws.codedeploy.deploymentGroup
sidebar_label: aws.codedeploy.deploymentGroup
displayed_sidebar: MQL
description: AWS CodeDeploy Deployment Group
---

# aws.codedeploy.deploymentGroup

**Supported platform**

- aws

**Description**

AWS CodeDeploy Deployment Group

**Fields**

| ID                               | TYPE                                                                | DESCRIPTION                                                              |
| -------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| applicationName                  | string                                                              | Application name this deployment group belongs to                        |
| arn                              | string                                                              | ARN of the deployment group                                              |
| deploymentGroupId                | string                                                              | ID of the deployment group                                               |
| deploymentGroupName              | string                                                              | Name of the deployment group                                             |
| computePlatform                  | string                                                              | Compute platform of the deployment group (Server, Lambda, or ECS)        |
| serviceRoleArn                   | string                                                              | Service role ARN for the deployment group                                |
| targetRevision                   | dict                                                                | Target revision for the deployment group (includes type, location, etc.) |
| tags                             | map[string]string                                                   | Tags for the deployment group                                            |
| region                           | string                                                              | Region of the deployment group                                           |
| deployments                      | &#91;&#93;[aws.codedeploy.deployment](aws.codedeploy.deployment.md) | List of deployments for this deployment group                            |
| autoScalingGroups                | &#91;&#93;[aws.autoscaling.group](aws.autoscaling.group.md)         | Auto scaling groups associated with the deployment group                 |
| ec2TagFilters                    | &#91;&#93;dict                                                      | EC2 tag filters for the deployment group                                 |
| onPremisesInstanceTagFilters     | &#91;&#93;dict                                                      | On-premises instance tag filters for the deployment group                |
| lastSuccessfulDeployment         | [aws.codedeploy.deployment](aws.codedeploy.deployment.md)           | Last successful deployment information                                   |
| lastAttemptedDeployment          | [aws.codedeploy.deployment](aws.codedeploy.deployment.md)           | Last attempted deployment information                                    |
| deploymentStyle                  | dict                                                                | Deployment style (BLUE_GREEN or IN_PLACE)                                |
| blueGreenDeploymentConfiguration | dict                                                                | Blue/green deployment configuration                                      |
| loadBalancerInfo                 | dict                                                                | Load balancer info                                                       |
