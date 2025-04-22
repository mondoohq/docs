---
title: aws.rds.clusterParameterGroup
id: aws.rds.clusterParameterGroup
sidebar_label: aws.rds.clusterParameterGroup
displayed_sidebar: MQL
description: Amazon RDS cluster parameter groups
---

# aws.rds.clusterParameterGroup

**Supported platform**

- aws

**Description**

Amazon RDS cluster parameter groups

**Fields**

| ID          | TYPE                                                                              | DESCRIPTION                        |
| ----------- | --------------------------------------------------------------------------------- | ---------------------------------- |
| arn         | string                                                                            | ARN for resource                   |
| family      | string                                                                            | Family of the parameter group      |
| name        | string                                                                            | Name of the parameter group        |
| description | string                                                                            | Description of the parameter group |
| region      | string                                                                            | Region of the parameters           |
| parameters  | &#91;&#93;[aws.rds.parameterGroup.parameter](aws.rds.parametergroup.parameter.md) |                                    |
