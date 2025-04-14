---
title: Mondoo Release Highlights March 2025
sidebar_label: March Highlights
description: A powerful new CVE detection engine, risk scoring clarity, advanced hypervisor detection, and expanded exception capabilities. March was all about helping you act faster and smarter. From SLA tracking and CSV exports to new CVE detection for AIX, SQL Server, and MS 365, discover everything we shipped this month to track critical exposures in your environment.
authors: [tim]
image: /img/release-highlights/2025-03/mar2025.png
tags: [release, mondoo]
date: 2025-04-11
---

#### A powerful new CVE detection engine, risk scoring clarity, advanced hypervisor detection, and expanded exception capabilities. March was all about helping you act faster and smarter. From SLA tracking and CSV exports to new CVE detection for AIX, SQL Server, and MS 365, discover everything we shipped this month to track critical exposures in your environment.

![Mondoo Release Highlights March 2025](/img/release-highlights/2025-03/mar2025.png)

## CVEs can’t hide from Mondoo

Our engineering team has spent the last several months quietly crafting an all new CVE detection engine and this month we released the first portion of this work. Was it worth all the time we’ve spent? Absolutely.

Our new scanning engine significantly improves our ability to detect and surface CVEs in macOS, Linux, and Windows packages. It also enables scanning across a broader range of distributions and applications. We’ve expanded CVE detection to now include IBM AIX, Microsoft SQL Server, Microsoft 365 apps, and Microsoft Office for Mac. And this is just the beginning—expect even more detection capabilities to roll out very soon.

![New CVE page](/img/release-highlights/2025-03/cve_page.png)

## Taking action has never been easier

It’s not just about what you detect though, it’s also about making it actionable. That’s why we’ve enhanced all our CVE and advisory pages in our console, making it easy to dive into individual findings on an asset and quickly take action. The new pages introduce a fresh look to Mondoo, accelerating understanding of the risk and reducing the time it takes to remediate findings. Key information on not only the finding, but also the asset where it was discovered is presented front and center and a new ‘Take Action’ button lets you quickly create a ticket, set an exception, or share a link with colleagues.

The CVE detail view now includes a Take Action button to create a ticket or set an exception

## Expanded exceptions for outliers

Mondoo already provided the ability to set exceptions for security checks, helping teams focus on what matters most in their environment. Now, we’re expanding that flexibility to allow you to create exceptions for CVEs and vendor advisories. This is especially valuable for prioritization workflows, where not every vulnerability requires immediate action. By creating snooze exceptions for known, low-risk, or vendor-acknowledged issues, teams can reduce noise, streamline remediation efforts, and focus resources on the most critical threats.

Exceptions can be configured on individual assets or selected environments

![Exceptions Dialog](/img/release-highlights/2025-03/exceptions_dialog.png)

## Quickly understand risk

We’re further evolving how risk is displayed in Mondoo to make it clearer and more actionable. This month, we replaced our previous A–F grading system with a streamlined risk scale: **LOW**, **MEDIUM**, **HIGH**, and **CRITICAL**. With this new approach, you can assess exposure risk at a glance and prioritize your response more effectively.
When you dig into individual assets, you’ll now see key risk factors that deserve extra attention, along with the top security findings that should be addressed first. This gives you a clear starting point for hardening each asset. Instead of sifting through long lists of issues, you can immediately focus on what matters most. It’s a faster, more focused way to move from insight to action.
To help you focus on the most important findings first, we’ve introduced new risk factors that highlight critical misconfigurations. One of the most impactful is the new Internet Exposed risk factor, which identifies cloud instances with public IPs. We’ve also added risk factors for common cloud services that help surface high-priority CVEs, especially when those vulnerabilities could be exploited in combination with internet exposure.

![Improved risks on asset page](/img/release-highlights/2025-03/asset.png)

## Expanded insights for VMware, AWS, Azure, GCP and hypervisors

We’ve extended our already powerful asset inventory capabilities with new Mondoo Query Language (MQL) resources and Mondoo console asset inventory data for leading clouds and virtualization hypervisors.

A new ‘cloud’ MQL resource fetches critical instance metadata on AWS, Azure, GCP, and VMware. This resource provides quick access to key instance configuration values such as cloud provider, public/private hostnames, and public/private IP addresses. If you need to dive deeper, the complete vendor metadata is also available to you, unlocking everything there is to know about a system.

If you’re not running in the cloud there’s still plenty to be happy about this month. A new ‘os.hypervisor’ resource includes virtualization hypervisor detection support on macOS, Windows, and Linux with support for over a dozen different hypervisors, so you’ll always know if assets are bare metal in your datacenter or VMware in your private cloud.

Not only is this information available in your own custom security policies, it’s exposed directly on assets in the Mondoo console. Updated asset overview information presents key bare metal, cloud, and virtualization information, so you can quickly go from finding to remediation.

![Expanded asset inventory information](/img/release-highlights/2025-03/asset_overview.png)

## Set and track SLAs

Stay on top of critical internal or compliance SLAs with the new SLA tracking section on your space and workspace dashboards. This section monitors your CVE remediation progress against standard SLA time frames defined in the PCI-DSS framework so you can quickly see where you’re meeting expectations and where action is needed. Need something more tailored for your business? Warning and violation thresholds are fully configurable for each space through the security model settings.

![SLA reporting](/img/release-highlights/2025-03/sla_dashboard.png)

## Your data is just a few clicks away

Want to dig deeper into your Mondoo security findings or merge them with other data in your BI tools? With new ad-hoc CSV exports, you can now export your full Mondoo dataset on demand giving you the flexibility to analyze, visualize, and report on your security data however you choose.

![CSV Export](/img/release-highlights/2025-03/csv_export.png)

## New frameworks and CIS benchmarks

Up to date content is key for detecting the latest security concerns in your infrastructure. As usual this month our team shipped new and updated policies to help you continually secure your infrastructure:

- CIS SUSE Linux Enterprise Server benchmark 2.0: This updated policy includes hundreds of new and updated checks.
- Mondoo AWS Security policy 4.0: We rewrote our AWS security policy from the ground up to detect critical misconfigurations that expose sensitive assets. New checks support both cloud resources and Terraform plans and expanded remediations support CLI, console, CloudFormation, and Terraform based remediation.
- CIS Amazon EKS benchmark 1.6.0: This policy includes support for the latest EKS feature sets and improved remediation steps.
- CIS Azure AKS benchmark 1.6.0: This policy includes support for the latest AKS feature sets and improved remediation steps.

## Resource updates

### asset

- Improved the overall reliability of `asset.kind` data with better differentiation between `baremetal` systems and `virtualmachines`.

### aws.vpc

- New `internetGatewayBlockMode` field

### aws.vpc.subnet

- New `availableIpAddressCount` field
- New `internetGatewayBlockMode` field

### aws.ec2.snapshot

- New `completionTime` field
- New `storageTier` field

### aws.ec2.instance

- New `enaSupport` field
- New `tpmSupport` field

### os

- New `hypervisor` field

### cloud

- New resource with `provider` and `instance` fields

## Other notable mentions

Sometimes there just isn't time for a deep dive into everything new, but here are some additional changes you might find interesting:

- Asset overview summaries for Apple's newly released Mac models
- Assets that haven’t scanned in 7+ days now get a caution triangle on the last scan date in the asset overview
- Tooltips in the console that previously showed 0 as the highest risk and 100 as the lowest now show 100 as the highest and 0 as the lowest
- A friendlier layout in the Space Security Model tab makes it easier to customize risk
- The Security -> Affected Assets page is now named Exposed Assets
- A new Findings -> All page lists all security findings in your space or workspace
- Added end of life (EOL) detection for FreeBSD 13.5 and Ubuntu 25.04
- Microsoft advisories now include remediation steps
- Mondoo Endpoint Detection and Response (EDR) policy now supports WatchGuard EDR
- Zendesk ticketing integrations now support priority and type fields
- Light mode / dark mode can now be configured in user settings page
- Search results for CVEs have been greatly improved
