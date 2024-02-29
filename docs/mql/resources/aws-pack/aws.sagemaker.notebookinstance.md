---
title: aws.sagemaker.notebookinstance
id: aws.sagemaker.notebookinstance
sidebar_label: aws.sagemaker.notebookinstance
displayed_sidebar: MQL
description: AWS SageMaker notebook instance
---

# aws.sagemaker.notebookinstance

**Supported platform**

- aws

**Description**

AWS SageMaker notebook instance

**Fields**

| ID      | TYPE                                                                                | DESCRIPTION                               |
| ------- | ----------------------------------------------------------------------------------- | ----------------------------------------- |
| arn     | string                                                                              | ARN for the notebook instance             |
| name    | string                                                                              | Name of the notebook instance             |
| details | [aws.sagemaker.notebookinstance.details](aws.sagemaker.notebookinstance.details.md) | Details about the notebook                |
| region  | string                                                                              | Region where the notebook instance exists |
| tags    | map[string]string                                                                   | Tags for the notebook instance            |
