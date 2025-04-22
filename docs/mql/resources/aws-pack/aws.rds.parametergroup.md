---
title: aws.rds.parameterGroup
id: aws.rds.parameterGroup
sidebar_label: aws.rds.parameterGroup
displayed_sidebar: MQL
description: Amazon RDS parameter groups
---

# aws.rds.parameterGroup

**Supported platform**

- aws

**Description**

Amazon RDS parameter groups

**Fields**

| ID          | TYPE                                                                              | DESCRIPTION                        |
| ----------- | --------------------------------------------------------------------------------- | ---------------------------------- |
| arn         | string                                                                            | ARN for resource                   |
| family      | string                                                                            | Family of the parameter group      |
| name        | string                                                                            | Name of the parameter group        |
| description | string                                                                            | Description of the parameter group |
| region      | string                                                                            | Region of the parameters           |
| parameters  | &#91;&#93;[aws.rds.parameterGroup.parameter](aws.rds.parametergroup.parameter.md) | The parameters of the group        |
