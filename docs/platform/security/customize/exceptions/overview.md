---
title: Exceptions for Findings - Overview
sidebar_label: Overview
sidebar_position: 1
description: Control how Mondoo evaluates and scores findings with exceptions
image: /img/featured_img/mondoo-feature.jpg
---

Exceptions allow you to control how Mondoo evaluates findings and how you communicate the status of those findings to your team. You can use exceptions to:

- Prevent specific checks from running on certain assets
- Exclude findings from impacting risk scores
- Focus security or compliance efforts on selected checks
- Document false positives, business justifications, or temporary workarounds

Exceptions take effect immediately but can later be approved or rejected, enabling clear audit trails and accountability across your team.

## Types of exceptions

Mondoo includes four types of exceptions:

| Exception Type | Finding Impact                                  | When to Use                                                                                                                          |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Risk Accepted  | Check runs; finding does not impact asset score | You're aware of the risk and plan to fix it at a later date.                                                                         |
| Workaround     | Check runs; finding does not impact asset score | A workaround, sometimes referred to as a compensating control, is in place that mitigates the need to directly address this finding. |
| False Positive | Check runs; finding does not impact asset score | The finding is inaccurate or not applicable to your environment.                                                                     |
| Disable        | Check does not run or impact asset score        | You wan to avoid potential stability or performance impacts of evaluating this finding.                                              |

## Where exceptions are set

Exceptions can be set space-wide or on individual assets.

**Space wide**:

- Policy checks
- Vulnerabilities
- Vendor advisories
- Compliance framework controls
- Compliance framework control checks

**On individual assets**:

- Checks on an asset
- Vulnerabilities on an asset
- Vendor advisories on an asset

## Managing Exceptions

Mondoo includes a centralized exceptions page that allows you to view all exceptions created in a space. This page provides a comprehensive overview of all exceptions, including their status and details. You can also use this page to approve or reject exceptions and to discover exceptions that are expiring soon.

![Space in the Mondoo Console](/img/platform/security/exceptions_page.png)
