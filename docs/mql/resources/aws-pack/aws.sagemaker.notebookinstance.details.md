---
title: aws.sagemaker.notebookinstance.details
id: aws.sagemaker.notebookinstance.details
sidebar_label: aws.sagemaker.notebookinstance.details
displayed_sidebar: MQL
description: AWS SageMaker notebook instance details
---

# aws.sagemaker.notebookinstance.details

**Supported platform**

- aws

**Description**

AWS SageMaker notebook instance details

**Fields**

| ID                   | TYPE                          | DESCRIPTION                                                |
| -------------------- | ----------------------------- | ---------------------------------------------------------- |
| arn                  | string                        | ARN for the notebook instance                              |
| kmsKey               | [aws.kms.key](aws.kms.key.md) | KMS key used to encrypt data                               |
| directInternetAccess | string                        | Whether SageMaker provides internet access to the instance |
