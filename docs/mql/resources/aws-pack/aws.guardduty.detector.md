---
title: aws.guardduty.detector
id: aws.guardduty.detector
sidebar_label: aws.guardduty.detector
displayed_sidebar: MQL
description: Amazon GuardDuty detector
---

# aws.guardduty.detector

**Supported platform**

- aws

**Description**

Amazon GuardDuty detector

The `aws.guardduty.detector` resource provides fields for assessing the configuration of individual Amazon GuardDuty Detectors. For usage, read the `aws.guardduty` resource documentation

**Fields**

| ID                         | TYPE                                                        | DESCRIPTION                                 |
| -------------------------- | ----------------------------------------------------------- | ------------------------------------------- |
| id                         | string                                                      | Unique ID for the detector                  |
| region                     | string                                                      | Region for the detector                     |
| status                     | string                                                      | Status of the detector: ENABLED or DISABLED |
| features                   | &#91;&#93;dict                                              | Feature set for the detector                |
| tags                       | map[string]string                                           | Tags for the project                        |
| findingPublishingFrequency | string                                                      | Publishing frequency for the detector       |
| findings                   | &#91;&#93;[aws.guardduty.finding](aws.guardduty.finding.md) | List of active findings by the detector     |
| unarchivedFindings         | &#91;&#93;dict                                              | Deprecated (use `findings` instead)         |
