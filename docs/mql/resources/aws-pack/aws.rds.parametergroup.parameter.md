---
title: aws.rds.parameterGroup.parameter
id: aws.rds.parameterGroup.parameter
sidebar_label: aws.rds.parameterGroup.parameter
displayed_sidebar: MQL
---

# aws.rds.parameterGroup.parameter

**Supported platform**

- aws

**Fields**

| ID                   | TYPE             | DESCRIPTION                                                  |
| -------------------- | ---------------- | ------------------------------------------------------------ |
| allowedValues        | string           | Specifies the valid range of values for the parameter        |
| applyMethod          | string           | When to apply parameter updates                              |
| applyType            | string           | Specifies the engine specific parameters type                |
| dataType             | string           | Specifies the valid data type for the parameter              |
| description          | string           | Provides a description of the parameter                      |
| isModifiable         | bool             | being changed                                                |
| minimumEngineVersion | string           | The earliest engine version to which the parameter can apply |
| name                 | string           | The name of the parameter                                    |
| value                | string           | The value of the parameter                                   |
| source               | string           | The source of the parameter value                            |
| supportedEngineModes | &#91;&#93;string | The valid DB engine modes                                    |
