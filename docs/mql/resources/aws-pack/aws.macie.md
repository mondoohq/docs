---
title: aws.macie
id: aws.macie
sidebar_label: aws.macie
displayed_sidebar: MQL
description: Amazon Macie
---

# aws.macie

**Supported platform**

- aws

**Description**

Amazon Macie

**Fields**

| ID                    | TYPE                                                                          | DESCRIPTION                     |
| --------------------- | ----------------------------------------------------------------------------- | ------------------------------- |
| sessions              | &#91;&#93;[aws.macie.session](aws.macie.session.md)                           | List of Macie sessions          |
| classificationJobs    | &#91;&#93;[aws.macie.classificationJob](aws.macie.classificationjob.md)       | List of classification jobs     |
| findings              | &#91;&#93;[aws.macie.finding](aws.macie.finding.md)                           | List of findings                |
| customDataIdentifiers | &#91;&#93;[aws.macie.customDataIdentifier](aws.macie.customdataidentifier.md) | List of custom data identifiers |
