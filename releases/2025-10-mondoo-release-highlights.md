---
title: Mondoo Release Highlights October 2025
sidebar_label: October Highlights
description: With October in the rearview mirror, we hope your Halloween was filled with more treats than tricks! This month at Mondoo we’ve been hard at work busting more of those tricky vulnerabilities for you. October’s update brings new detections for end-of-life operating systems, ensuring those ghostly legacy assets don’t haunt your security posture. We’ve also brewed up new and enhanced CIS benchmark policies, fresh vulnerability detections and remediations, a new ‘known ransomware use’ risk factor, and other powerful improvements to help you banish risk before it becomes a nightmare. Keep reading, if you dare, to uncover all the chillingly good details of our October release.

authors: [tim]
image: /img/release-highlights/2025-10/banner.png
tags: [release, mondoo]
date: 2025-11-04
---

#### With October in the rearview mirror, we hope your Halloween was filled with more treats than tricks! This month at Mondoo we’ve been hard at work busting more of those tricky vulnerabilities for you. October’s update brings new detections for end-of-life operating systems, ensuring those ghostly legacy assets don’t haunt your security posture. We’ve also brewed up new and enhanced CIS benchmark policies, fresh vulnerability detections and remediations, a new ‘known ransomware use’ risk factor, and other powerful improvements to help you banish risk before it becomes a nightmare. Keep reading, if you dare, to uncover all the chillingly good details of our October release.

![Mondoo Release Highlights October 2025](/img/release-highlights/2025-10/banner.png)

## Expanded vulnerability detections and remediations

This month we delivered expanded vulnerability detections for Cisco IOS XR/XE, Ubuntu 25.10, and Fedora Linux 43, improved summaries for Red Hat, Microsoft, VS Code, and Amazon security advisories, and enhanced remediation guidance for Wireshark and Docker Desktop on Windows. And to make sure you always have the right information to prioritize findings, each CVE now includes vendor advisory information and links to additional vendor website details.

## New risk factor: Known use in ransomware attacks

Ransomware attacks can leverage vulnerabilities in several phases of their operations, primarily for initial access, privilege escalation, and lateral movement. This allows them to bypass security controls, gain unauthorized access, and deploy their malicious payloads. If certain vulnerabilities are actively being used in ransomware attacks, it becomes even more critical to fix them as soon as possible. That’s why Mondoo now adds an additional risk factor to these CVEs, 'Known Ransomware Use', which automatically increases the risk score for the CVE.

![Mondoo now shows Known Ransomware Use as an extenuating risk factor](/img/release-highlights/2025-10/ransomware.png)

## Exception extensions

Exceptions aren’t just a set it and forget it activity. Well-run teams should constantly reevaluate exceptions to make sure the risk is still acceptable and any workarounds are still functioning as expected. Mondoo now streamlines that evaluation flow with the possibility to extend exceptions.

When an exception is set, you can specify a time limit for it. When the exception is about to expire, the user will receive an email notification. In addition to removing the exception, they can now also request an extension for the exception.

![Users can request a time extension for the exception](/img/release-highlights/2025-10/request_extension.png)

Next, an extension justification is required, so others have visibility into the reasoning behind it.

![Users can request a time extension for the exception](/img/release-highlights/2025-10/extension_justification.png)

Mondoo also shows the complete history of each extension, so teams can track the full lifecycle and understand who requested and approved the extension, and why.

![Exceptions in Mondoo show the full history of the setting](/img/release-highlights/2025-10/extension_history.png)

## CIS policy updates

Stay ahead of evolving threats by automatically checking if your policies comply with the latest CIS benchmarks. Our newest updates introduce dozens of new checks addressing today’s modern security challenges, along with hundreds of improvements for clearer guidance, requirements, and remediation steps.

New CIS benchmarks:

- CIS Red Hat Enterprise Linux 10 Benchmark v1.0.1
- CIS Cisco IOS XE 17.x Benchmark v2.2.1 level 2
- CIS Cisco IOS XR 7.x Benchmark v3.0 level 2

Updated CIS benchmarks:

- CIS Amazon Web Services Foundation Benchmark v5.0 -> v6.0
- CIS Microsoft Azure Compute Services Benchmark v1.0-> v2.0
- CIS Microsoft Windows Server 2016 Benchmark v3.0 -> v4.0
- CIS Microsoft Windows Server 2019 Benchmark v3.0.1 -> v4.0
- CIS Microsoft Windows Server 2022 Benchmark v3.0 -> v4.0
- CIS macOS 15.0 Sequoia Benchmark v1.0 -> v1.1

### Expanded EOL detection

RIP, end-of-life (EOL) operating systems for which no more security updates or patches will be released. Needless to say (but we will anyway), running an EOL operating system is risky because if a new zero-day appears, there will be no fix. Attackers will be well aware of this and won’t waste time in actively scanning for these systems to find a way in.

The good news is that this month we added detection for the following EOL operating systems:

- Cisco IOS XR
- Cisco IOS XE
- Clear Linux
- SUSE Micro OS
- Fedora 43

Speaking of end-of-life operating systems, Windows 10 is now officially EOL. If you haven’t upgraded yet, check out our [Windows 10 EOL guide](https://mondoo.com/blog/windows-10-eol-why-5-percent-of-corporate-workloads-still-run-it) to understand the risks of running unsupported systems.

### Find and scan all sub-domains automatically

Keeping your organization’s domains secure can feel like a full-time job, especially as teams spin up new subdomains for projects. With automatic subdomain detection, you now have complete visibility into the security of your external properties. Configure a single scanning integration for your main domain, and Mondoo will automatically discover and scan every subdomain for you.

![Mondoo now includes automatic subdomain detection](/img/release-highlights/2025-09/domains.png)

## Support for all major operating systems

Seriously, all of them. We did a deep dive to make sure we support and detect vulnerabilities and policy violations in all the top Linux distributions potentially used on employee workstations, as well as all common container image platforms that may be running in K8s clusters.

Newly supported platforms in both cnquery and within the Mondoo console include flatcar, bottlerocket, and zorin, to name but a few. Platforms that were previously supported in cnquery and are now also displayed within the console when scanned include wolfi, parrot, talos, and many more.

## Other updates

Finally, a round up of a number of miscellaneous improvements:

- Improved detection of Apple hardware models
- Improve filtering now better exposes available items to filter
- New filters available on the assets page so you quickly jump to a particular platform
- Total asset counts are now included on organization tiles
- Improved asset overview for Model Context Protocol (MCP) and FreeBSD assets
- Configurable audit log retention for private instances

## Resource updates

- New data exposed in our AWS ECS resource
- Azure subscription resource now includes web apps information
- New AWS Macie resource
- New Azure Batch resources
- New Azure Web Hosting environments resource
- Azure Web apps resource now includes private endpoint connection information
- New Azure Cache for Redis resource
- AWS KMS key resource now includes tag and alias information
- Kernel resource now exposes kernel information on FreeBSD
- New journald resource
- AWS ElastiCache cluster resource now includes snapshot window data
- AWS Account resource now includes alternative contact information

That’s a wrap for October! We have many more exciting updates and additions planned for November. Stay tuned!
