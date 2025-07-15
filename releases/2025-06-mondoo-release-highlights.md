---
title: Mondoo Release Highlights June 2025
sidebar_label: June Highlights
description: It’s been a scorching month of June but that hasn’t stopped the Mondoo engineering team. This month we focused on supporting new operating systems, platforms, and CIS benchmarks. Plus, we've enhanced our UI for faster remediation with improved exception management and direct links to assets. Read the blog to get all the details.
authors: [tim]
image: /img/release-highlights/2025-06/banner.png
tags: [release, mondoo]
date: 2025-07-15
---

#### It’s been a scorching month of June but that hasn’t stopped the Mondoo engineering team. This month we focused on supporting new operating systems, platforms, and CIS benchmarks. Plus, we've enhanced our UI for faster remediation with improved exception management and direct links to assets. Read the blog to get all the details.

![Mondoo Release Highlights June 2025](/img/release-highlights/2025-06/banner.png)

## Thirty providers and counting

We’ve now reached 30 providers in Mondoo and passed the 1,000 mark in resources with a new total of 1,026! Mondoo uses providers for each technology that Mondoo cnquery scans. Mondoo providers include AWS, GCP, Azure, Kubernetes, OCI, VMware, containers, Windows, macOS, and Linux operating systems, GitHub, GitLab, Okta, M365, Google Workspace, Slack, IaC, domains, and more.

Resources inspect asset configuration details, including information about infrastructure and operating systems, users, packages, files, cloud asset configurations, and more, depending on the specific resource type and platform. Spoiler alert: we’re going to be adding many exciting new providers and resources in the coming months!

## Microsoft 365 CIS benchmark 5.0

[Microsoft 365 CIS benchmark 5.0](https://mondoo.com/blog/microsoft-365-cis-benchmark-5-0-what-you-need-to-know) is here with added checks and improved remediation instructions. Version 5.0 is a significant update from the previous version and adds many new guidelines and remediations.

Another important improvement is that we’ve now fully automated the Microsoft 365 setup process, allowing you to get up and running quickly and saving hours of manual work that is often required by other security tools integrating with M365.

This month we also added a new Microsoft 365 inventory pack (a collection of pre-defined queries designed to gather specific information about your M365 assets). This additional information is included in the M365 asset overview, including services, applications, user accounts, permissions, sharing settings, and security configurations.

![Mondoo shows results of CIS M365 5.0 checks](/img/release-highlights/2025-06/m365_policy_results.png)

## New LinuxONE support

Mondoo now [supports IBM LinuxONE](https://mondoo.com/blog/mondoo-offers-security-and-compliance-for-ibm-linuxone-workloads) (including Red Hat, Ubuntu, and SUSE on Z), providing unified and automated security and compliance for mission-critical workloads and hybrid cloud environments. Mondoo’s unique ability to cover cloud and on-prem from a single user interface as well as automate policy creation and remediation processes, allows IBM LinuxONE users to reduce manual work and accelerate remediation- significantly improving their security posture.

Mondoo also covers [AIX and IBM Power Systems](https://mondoo.com/blog/mondoo-detects-and-fixes-critical-ibm-aix-vulnerabilities-cve-2024-56346-and-cve-2024-56347) which many enterprises still run in addition to LinuxONE, enabling all systems to be secured from one platform.

## Microsoft Exchange Server support

[Recent attacks](https://thehackernews.com/2025/06/hackers-target-65-microsoft-exchange.html) have exploited known flaws in publicly exposed Microsoft Exchange Servers. Mondoo now supports CVE detection in Microsoft Exchange Server so you can prevent these types of attacks from compromising your critical infrastructure.

![CVEs found in Microsoft Exchange Server
](/img/release-highlights/2025-06/exchange_CVEs.png)

## Expanded SLES Support

This month we’ve expanded our support for SUSE Linux Enterprise Server (SLES). Track the end of life status or your SLES install no matter what version you run with EOL support for SUSE for SAP and SLES Long Term Service Pack Support (LTSS). Expose critical weaknesses in your systems with the newly updated CIS SLES 15 2.0.1 benchmark policy which includes 22 new checks and improved remediation instructions.

## CIS Windows 2025 server benchmark 1.0

We added 6 all-new CIS benchmark policies for the latest Windows Server 2025 release:

- CIS Microsoft Windows Server 2025 benchmark, Level 1 (Domain Controller)
- CIS Microsoft Windows Server 2025 benchmark, Level 1 (Member Server)
- CIS Microsoft Windows Server 2025 benchmark, Level 2 (Domain Controller)
- CIS Microsoft Windows Server 2025 benchmark, Level 2 (Member Server)
- CIS Microsoft Windows Server 2025 benchmark, Next Gen Windows Security (Domain Controller)
- CIS Microsoft Windows Server 2025 benchmark, Next Gen Windows Security (Member Server)

## See historical trends for spaces and workspaces

Mondoo dashboards now allow you to track progress and catch anomalies in Mondoo spaces and workspaces by viewing the trend of total priority findings over the last 28 days. The asset count is also displayed so you can compare trends and detect peaks and dips. This allows you to get granular insights into progress across team, location, technology, focus, and any other way you’ve configured your Mondoo workspaces.

![The Mondoo dashboard shows trends in asset count and priority findings for each space](/img/release-highlights/2025-06/historical_data.png)

## Open asset directly from findings

An important way to achieve faster remediation is by reducing your investigation time. We’ve now made it easier to directly access the asset that Mondoo is alerting you to so you can quickly do further investigations if needed. By including a button in the configuration overview for the asset, it’s now just one click away to go to the source of truth. We already included links for AWS assets, but we’ve now also added links for the following asset types:

- GCP
- Azure
- GitHub (repo and org)
- GitLab (project and groups)
- Terraform files discovered in GitHub repos
- Additional AWS assets, such as EBS volumes, ECS containers, EC2 instances, and more

![Mondoo includes a direct link to the asset from the security finding](/img/release-highlights/2025-06/gitlab.png)

## Exceptions, exceptions, exceptions

If you want to automate processes effectively, the ability to set exceptions is essential because real-world scenarios are rarely one-size-fits-all. Automation works best when it handles routine tasks, but without exceptions, it can break down when faced with unusual or edge cases. This is why we continue to expand our exceptions functionality:

- **Exceptions approval process**: By default, exceptions now require an approval before they take effect. This can be turned off with a space setting if you want to keep immediate exception application.

- **Exception approver role**: We’ve added a Mondoo user role that has the ability to approve and deny exceptions so you can assign approves no matter their Mondoo base role.

- **Improved compliance views**: Better understand exceptions set on checks, vulnerabilities, and exceptions with a new simplified exceptions list view so you can easily see multiple exceptions and sort them however you need.

- **New exception types in Compliance**: Exceptions have been expanded for compliance controls, and now include Risk Accepted, Workaround, False Positive, and Disable.

- **UI enhancements**: Changes are now instantly shown when you set exceptions (spinners, state changes, and updates to tables). Space/workspace dashboards include the latest exceptions in all graphs. And there’s a new simplified view in exceptions tabs on findings and assets.

## Support for the latest Linux versions

- **Alpine Linux 3.22**, the latest release of the lightweight, security-focused Linux distribution, known for its small size and resource efficiency.
- **Rocky Linux 10**, the latest major version of the free, community-driven, enterprise-focused operating system designed to be a one-to-one binary compatible rebuild of Red Hat Enterprise Linux (RHEL).
- **Oracle Linux 10**, the latest version of Oracle's enterprise-grade Linux operating system, designed for performance, security, and reliability in cloud and on-premises environments.

![Exceptions management in Mondoo](/img/release-highlights/2025-06/exceptions.png)

## Remediation enhancements

Having clear remediation instructions and code snippets significantly speeds up issue resolution by eliminating guesswork and providing a direct path to fixing problems. This reduces downtime, ensures consistency in how issues are handled, and allows even less-experienced team members to act with confidence. This is why we place great importance on providing accurate and complete remediation information in the Mondoo Platform, and are continually making improvements. This month we worked on:

- Terraform remediations in GitHub and GitLab policies
- Further enhanced descriptions and remediation information in Kubernetes policies

## Other notable improvements and fixes

- Weekly space status emails now contain risk scores instead of legacy A-F scores.
- Custom VPC support for running the AWS Serverless integration.
- Advanced filtering in the Mondoo audit log.
- Critical exposures now link directly to the finding on the particular asset so you can take action without additional navigation.

## MQL Improvements

### New auditd resources

- auditd.rule
- auditd.rule.control
- auditd.rule.file
- auditd.rule.syscall
- auditd.rules

### New Microsoft 365 resources

- microsoft.conditionalAccess.authenticationMethodConfiguration
- microsoft.conditionalAccess.authenticationMethodsPolicy
- microsoft.conditionalAccess.policy
- microsoft.conditionalAccess.policy.conditions
- microsoft.conditionalAccess.policy.conditions.applications
- microsoft.conditionalAccess.policy.conditions.authenticationFlows
- microsoft.conditionalAccess.policy.conditions.clientApplications
- microsoft.conditionalAccess.policy.conditions.locations
- microsoft.conditionalAccess.policy.conditions.platforms
- microsoft.conditionalAccess.policy.conditions.users
- microsoft.conditionalAccess.policy.grantControls
- microsoft.conditionalAccess.policy.grantControls.authenticationStrength
- microsoft.conditionalAccess.policy.sessionControls
- microsoft.conditionalAccess.policy.sessionControls.applicationEnforcedRestrictions
- microsoft.conditionalAccess.policy.sessionControls.cloudAppSecurity
- microsoft.conditionalAccess.policy.sessionControls.persistentBrowser
- microsoft.conditionalAccess.policy.sessionControls.signInFrequency
- microsoft.devicemanagement.deviceEnrollmentConfiguration
- microsoft.devicemanagement.manageddevice
- microsoft.graph.accessReviewReviewerScope
- microsoft.identityAndAccess
- microsoft.identityAndAccess.policy
- microsoft.identityAndAccess.policy.rule
- microsoft.identityAndAccess.policy.rule.target
- microsoft.identityAndAccess.roleEligibilityScheduleInstance
- microsoft.policies.authenticationMethodConfiguration
- microsoft.policies.authenticationMethodsPolicy
- microsoft.tenant.formsSettings
- microsoft.tenant.settings
- microsoft.user.assignedLicense
- microsoft.user.authenticationMethods.userRegistrationDetails
- microsoft.user.authenticationRequirements
- microsoft.user.licenseDetail
- microsoft.user.licenseDetail.servicePlanInfo
- ms365.exchangeonline.mailbox
- ms365.exchangeonline.securityAndCompliance

### aws.rds.dbcluster

- New `databaseInsightsMode` field
- New `globalClusterIdentifier` field

### shodan.hosts

- New `city` field
- New `country` field

### parse.yaml

- New `documents` field
