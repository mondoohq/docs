---
title: Mondoo Release Highlights May 2025
sidebar_label: May Highlights
description: This month was all about quickly surfacing the information you need to remediate quickly - especially the most critical and exposed CVEs in your environment. In this blog post, we'll walk you through everything we released in May - from expanded CVE detection to improved reporting and exceptions management.
authors: [tim]
image: /img/release-highlights/2025-05/banner.png
tags: [release, mondoo]
date: 2025-06-04
---

#### This month was all about quickly surfacing the information you need to remediate quickly - especially the most critical and exposed CVEs in your environment. In this blog post, we'll walk you through everything we released in May - from expanded CVE detection to improved reporting and exceptions management.

![Mondoo Release Highlights May 2025](/img/release-highlights/2025-05/banner.png)

## Remediate critical exposures with ease

Not all vulnerabilities require your immediate attention. But some do: not only because of what they enable attackers to do, but also because they are easily found and exploitable. There's a big difference between leaving your crown jewels unlocked, but behind a locked door, to leaving them unlocked behind an open front door in plain sight.

![Critical exposures on dashboard](/img/release-highlights/2025-05/critical_exposures_dashboard.png)

That's where our new Critical Exposures feature comes in.in Mondoo now highlights the riskiest vulnerabilities in your environment right on the dashboard, by listing vulnerabilities that are:

- Internet exposed
- Remotely exploitable
- Listening on open ports

By combining real exploitability with exposure, Mondoo points out exactly which vulnerabilities you need to fix first - because speed really is of the essence here. No more needle in the haystack triage. Just clear, actionable intel so you can ticket or remediate before bad actors make their move.

![Critical exposures list](/img/release-highlights/2025-05/critical_exposures.png)

## New high EPSS percentile risk factor

A high Exploit Prediction Scoring System (EPSS) percentile indicates that there's a much higher likelihood of the vulnerability being exploited than all other known CVEs in the EPSS database. For example, an EPSS percentile of 95 or higher means that the vulnerability is more likely to be exploited than 95% of all other scored vulnerabilities.

A high EPSS percentile for a CVE is now displayed as a risk factor in the Mondoo dashboard so it is easier to prioritize vulnerabilities most likely to result in a breach.

![High EPSS percentile risk factor](/img/release-highlights/2025-05/high_epss.png)

In addition, we've made further improvements to the way other risk factors are displayed for risk findings, so it's easier to understand what makes scores worse and what makes them better. We've also simplified the risk factor display on assets so it's easier to decide which risks to take action on first.

## Jump right to remediation steps from a CVE

To reduce clicks and quickly get you to the information you need, we're now also including remediation steps and code snippets for each CVE finding. This means it's even faster to take action and start remediating.

## Track your security status and progress

Getting a bird's eye view of the security of your environment shouldn't require a spreadsheet and a magnifying glass. Instead, Mondoo presents it right in your dashboard:

- Total number of priority vulnerabilities
- Increase/decrease of priority vulnerabilities in the last 28 days
- Percentage increase/decrease of priority vulnerabilities in the last 28 days

With this trend data, you can now instantly understand how your security posture is evolving over time and spot improvements, identify stalled efforts, or catch a downward slide before it becomes a bigger problem.
Mondoo also tracks your total number of assets, any increase or decrease, and the percentage change in the last 28 days. This is a useful measure to track activity and detect anything out of the ordinary.

![Priority findings with historical trends](/img/release-highlights/2025-05/historical_priority.png)

## New AWS Cost Control policy

Cost savings anyone? AWS costs can escalate rapidly due to over-provisioned compute, unused volumes, stale storage, and idle services—especially in dev and test environments. Traditional cost controls like billing alerts come too late to prevent waste.

That's why we're excited about the new Mondoo policy that defines cost control standards for your AWS infrastructure to ensure that cloud services—including EC2, S3, Lambda, EKS, and managed databases—are provisioned in a cost-efficient, right-sized, and lifecycle-aware manner across dev, test, and production environments. Because who doesn't want to save some $$?

![AWS cost control policy](/img/release-highlights/2025-05/aws_cost.png)

## New Email and DNS inventory packs

We've made it easier to ensure email delivery and protect against DNS-based attacks with our new email and DNS inventory packs. In addition to the existing policies that validate your Email and DNS configuration, Mondoo now also stores the following information:

- Email inventory pack: Reverse IP Lookup PTR record, SPF record, DMARC DNS entry, DKIM entry.
- DNS inventory pack: Retrieve DNS records and MX records.

## PDF reports for policy checks

In addition to our existing reports that include information on checks, advisories, and vulnerabilities found on individual assets, you can now also create a report for a check across your entire infrastructure. The report will display information on the specific misconfiguration, its risk factors, impact, and which assets are exposed.

![New PDF report](/img/release-highlights/2025-05/report.png)

## Support for the latest Linux distributions

New Linux distributions releases are shipping faster than you can type “dnf update,” but don't worry because we're hard at work extending Mondoo for the latest releases. This month, we're keeping pace with the OS arms race by shipping support for the latest and greatest with EOL and CVE tracking for Fedora 42, GCOS 121, SLES 15 SP7, RHEL 10, AlmaLinux 10, and CentOS Stream 10. So upgrade without fear because Mondoo has your back.

## Exceptions enhancements

We've added more exception reasons so it's now easier to provide more precise justification for setting an exception. Firstly we renamed Snooze to 'Risk Accepted'. In addition, we added two new exceptions types so you can better communicate exceptions to team members:

- Workaround: this indicates that there are sufficient mitigation controls in place to reduce or eliminate risk.
- False Positive: this indicates that the flagged risk is not actually deemed a risk.

![Creating a new exception](/img/release-highlights/2025-05/exceptions_modal.png)

It's now easier than ever to scope your exception: When creating an exception for a single asset, you can now also select the entire space to change the scope for - without the need to find the same finding space-wide and then set exceptions for each finding individually.

To make it instantly clear where exceptions have been set, we now show exceptions badges on CVE and Advisory pages where findings are impacted by exceptions.

## Quickly see everything in your org

Navigating just got faster. Our new quick selector in the navigation bar lets you jump straight to your organizations, spaces, or workspaces with fewer clicks and zero hassle.

![Improved top navigation](/img/release-highlights/2025-05/nav.png)

## AIX security improvements

For our AIX users we've been busy enhancing the asset overview information for AIX, adding new resource updates for custom AIX policies, and making updates to the CIS AIX 7 benchmark to strengthen security and compliance for AIX systems.

![CIS AIX policy](/img/release-highlights/2025-05/cis_aix.png)

## IBM Cloud detection and reporting

Take your multi-cloud strategy to the next level with IBM Cloud detection for virtual server instances. Systems running on IBM cloud will now identify their MQL resource `cloud.provider` as `IBM` and `asset.kind` as `virtualmachine`.

![IBM Cloud overview](/img/release-highlights/2025-05/ibm_overview.png)

## Cloud / IP detection with AWS EBS volume scans

Expose cloud configuration data including IP addresses and Internet exposure automatically when scanning AWS instances using the Mondoo serverless integration thanks for expanded support for cloud detection with EBS volume scanning.

## Improved Amazon EKS visibility

Amazon EKS clusters now scan as standalone assets, giving you deeper visibility into their configuration and security posture. This update unlocks improved per cluster scoring, clearer query results, and more precise reporting, ticketing, and exception handling for each EKS cluster.

![EKS Cluster asset](/img/release-highlights/2025-05/eks_cluster.png)

## Snap package CVE detection

Track down pesky CVEs in snap packages for Ubuntu, Linux, or Fedora so you can deploy with confidence and avoid OS and application vulnerabilities.

## Improved pagination

We've made impactful changes to our pagination that makes it a whole lot easier to browse and look through lists in the Mondoo Platform. By default we now show 50 items per page for all findings pages. In addition, pagination settings are stored in the URL so they persist when you go back in browser history, share a page to a coworker, or bookmark a page.

## Expanded Mondoo Terraform Provider

To further automate and scale the creation of Mondoo organizations, we've added a new `mondoo_organization` Terraform resource. This can save valuable time, especially for larger enterprises.

## Mondoo policy updates

- Improved checks and remediation steps in GCP and Azure security
- Improved Terraform support in AWS and GCP policies
- Working filters in the Azure security policy
- New VNC access from the Internet check in Azure Security
- Removed duplicate checks on subscriptions in Azure Security
- Added chapters to improve organization in the GCP, Azure, and Windows policy
- Improved check descriptions and remediations in the Windows policy
- Improved remediation steps in the M365 security policy
- Improved support for Intune in CIS Windows checks

## MQL Improvements

### `aws.codedeploy`

A new resource for inspecting AWS CodeDeploy deployments.

### Improved AIX Support

Support for AIX in the `machine.baseboard` and `kernel.modules` resources.

### `k8s.apps`

A new resource for inspecting Kubernetes applications.

### Simplified SSHd queries

Simplify your SSHd queries with support for ciphers, macs, kexs, hostKeys, and permitRootLogin blocks in the `sshd.config` resource.

### String inspection helpers

`.inRange` now supports integers represented as strings:

```coffee
> "2".inRange(1,3)
true
```

A new `.notIn` helper simplifies checking values in dicts.

```coffee
> 'term'.notIn(['a','b','c'])
true

> 'term'.notIn(['term'])
false
```

## Other improvements and fixes

- Tables on CVE and Advisory pages no include the EPSS score of each finding.
- EOL assets now have an immediate vulnerability risk score of 100 as vendor updates are no longer available for newly discovered CVEs
- More robust hostname detection on \*nix systems with multiple fallbacks
- Console pages now load better on very slow connections
- Tooltips show the complete name anytime a long finding is cropped
- Very long titles on finding pages are now more visible
- Assets where no policies were applied once again show as Unscored
- See remediation steps on any policy even if it hasn't run in your space yet
- Reliability improvements for hypervisor detection on Windows
