---
title: aws.codedeploy.application
id: aws.codedeploy.application
sidebar_label: aws.codedeploy.application
displayed_sidebar: MQL
description: AWS CodeDeploy Application
---

# aws.codedeploy.application

**Supported platform**

- aws

**Description**

AWS CodeDeploy Application

**Fields**

| ID               | TYPE                                                                          | DESCRIPTION                                                  |
| ---------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------ |
| arn              | string                                                                        | ARN of the application                                       |
| applicationId    | string                                                                        | ID of the application                                        |
| applicationName  | string                                                                        | Name of the application                                      |
| computePlatform  | string                                                                        | Compute platform of the application (Server, Lambda, or ECS) |
| createdAt        | time                                                                          | Time the application was created                             |
| linkedToGitHub   | bool                                                                          | Whether the application is linked to a GitHub account        |
| tags             | map[string]string                                                             | Tags for the application                                     |
| deploymentGroups | &#91;&#93;[aws.codedeploy.deploymentGroup](aws.codedeploy.deploymentgroup.md) | List of deployment groups for this application               |
| deployments      | &#91;&#93;[aws.codedeploy.deployment](aws.codedeploy.deployment.md)           | List of deployments for this application                     |
| region           | string                                                                        | Region of the application                                    |
