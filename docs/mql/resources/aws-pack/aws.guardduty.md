---
title: aws.guardduty
id: aws.guardduty
sidebar_label: aws.guardduty
displayed_sidebar: MQL
description: Amazon GuardDuty for threat detection
---

# aws.guardduty

**Supported platform**

- aws

**Description**

Amazon GuardDuty for threat detection

Use the `aws.guardduty` resource to assess the configuration of the AWS GuardDuty service. The resource provides a list of `aws.guardduty.detector` resources representing GuardDuty Detectors deployed across all enabled regions.

**Fields**

| ID        | TYPE                                                          | DESCRIPTION                       |
| --------- | ------------------------------------------------------------- | --------------------------------- |
| findings  | &#91;&#93;[aws.guardduty.finding](aws.guardduty.finding.md)   | List of GuardDuty active findings |
| detectors | &#91;&#93;[aws.guardduty.detector](aws.guardduty.detector.md) | List of GuardDuty detectors       |

**Examples**

Return a list of Amazon GuardDuty Detectors along with the values for specified fields

```coffee
aws.guardduty.detectors {
  id
  region
  status
  findingPublishingFrequency
  findings
}
```

Check that guardduty is enabled in all regions

```coffee
aws.guardduty.detectors.all( status == "ENABLED" )
```

**References**

- [Amazon GuardDuty User Guide](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html)
- [Security in Amazon GuardDuty](https://docs.aws.amazon.com/guardduty/latest/ug/security.html)
