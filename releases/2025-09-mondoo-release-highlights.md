---
title: Mondoo Release Highlights September 2025
sidebar_label: September Highlights
description: As the colors of fall begin to show and the days start to get shorter, we certainly haven’t been sitting still at Mondoo. This month, we greatly extended our vulnerability detection capabilities, adding support for new operating systems and an impressive list of third-party applications. We also added support for EU and German compliance frameworks Dora and BSI SYS 1.5. On top of that we added experimental MCP security, streamlined the process of listing and filtering findings, and made advisory remediations easier to access. Dig in to find out more!

authors: [tim]
image: /img/release-highlights/2025-08/banner.png
tags: [release, mondoo]
date: 2025-10-08
---

#### As the colors of fall begin to show and the days start to get shorter, we certainly haven’t been sitting still at Mondoo. This month, we greatly extended our vulnerability detection capabilities, adding support for new operating systems and an impressive list of third-party applications. We also added support for EU and German compliance frameworks Dora and BSI SYS 1.5. On top of that we added experimental MCP security, streamlined the process of listing and filtering findings, and made advisory remediations easier to access. Dig in to find out more!

![Mondoo Release Highlights September 2025](/img/release-highlights/2025-09/banner.png)

## New and enhanced OS vulnerability detections

Mondoo now supports the latest Linux distributions with support for Fedora 42, Raspbian 13, and Ubuntu 25.04. Detection of vulnerabilities on Windows systems has been improved with support for Microsoft Exchange SU updates and improved .NET Framework detection, ensuring Mondoo always recognizes the latest features, packages, and updates installed on your systems.

## Expanded vulnerability detection for third-party applications

Third-party application vulnerability scanning is vital because any security vulnerabilities in these applications can be an entry point for bad actors. That’s why we’re excited to share that we’ve greatly expanded coverage for common third-party applications found on both servers and employee workstations. In addition to covering common applications such as Firefox, Chrome, Edge, Nginx, and Exchange Server, Mondoo now also detects vulnerabilities in the following applications:

- 7zip
- Adobe products with Adobe advisories such as Acrobat Reader, Photoshop, InDesign, and Illustrator
- Bitwarden
- Cisco Webex
- Docker Desktop
- Firefox ESR releases on macOS
- FortiClient
- GitHub Desktop App
- JetBrains IDEs
- LibreOffice
- MySQL
- Notepad++
- Ollama
- Oracle JDK
- TeamViewer
- VMware Tools

## Model Context Protocol (MCP) security

MCP is very powerful because it allows AI agents to autonomously interact with external tools and data. However if not properly secured, it can introduce significant risks like prompt injection, data breaches, and the execution of unauthorized commands by malicious actors.

That is why we’ve now added new experimental MCP security capabilities using cnquery’s AI provider and our new Mondoo Model Context Protocol (MCP) security policy. Stay tuned for more updates while we build out this functionality.

## Support for BSI SYS 1.5 and DORA compliance frameworks

In September we added support for two important frameworks in Germany and the EU:

### BSI SYS 1.5 Virtualisierung

BSI SYS.1.5 Virtualisierung refers to a specific requirement within the BSI IT-Grundschutz (German Federal Office for Information Security baseline protection) standard that deals with the security requirements and implementation of virtualized systems. It is mandatory for German Federal government agencies and Operators of Critical Infrastructures (KRITIS). For private companies and other organizations, adopting IT-Grundschutz is voluntary but strongly recommended. Mondoo now includes out-of-the-box policies that check for compliance with BSI SYS 1.5.

### Digital Operational Resilience Act (DORA)

DORA is a comprehensive European Union (EU) regulation that mandates all financial entities operating in the EU to enhance their digital operational resilience and cybersecurity. It introduces a harmonized approach to risk management, incident reporting, testing, and oversight of third-party technology providers across the EU's financial sector, with the goal of preventing and recovering from significant digital disruptions. Mondoo now

![Mondoo checks for DORA compliance using out-of-the-box policies](/img/release-highlights/2025-09/dora.png)

## Track findings, no matter what type

A Mondoo finding is now a finding no matter what type of finding it is. This eliminates the need for dedicated vulnerabilities, advisories, and checks tabs on assets as we simply show the findings for the asset. New filtering by type allows users to dive into specific types of findings still if they need to.

![All findings on an asset are now listed in the Findings tab](/img/release-highlights/2025-09/findings.png)

## Quick access to CVE remediations

When a CVE doesn’t include remediation data, but the vendor advisory does, we now directly show the remediation information on the CVE finding page. In the past we included a link to the advisory from the CVE page, but that required some awkward extra clicks and was overall funky at best. Now the necessary remediation is directly available in the Mondoo remediation section.

![Mondoo now makes guided remediation from advisories easily accessible](/img/release-highlights/2025-09/remdediation.png)

## Mondoo 12.0

After 69 weekly releases in the 11.x series of cnquery and cnspec clients, it was time to bump the version to 12.0. This release includes simplified command line output, improved cloud asset discovery, new network discovery capabilities, and cleanup of legacy MQL fields. See everything that's new in our [Mondoo 12.0 is out!](mondoo-12.0-is-out/) release notes.

### New and updated policies and benchmarks

Security guidance is changing at a blistering pace and at Mondoo we’re continuously updating policies to match the latest CIS recommendations. The updated policies include new checks to match the latest attack vectors and updated remediations to match vendor UI and CLI experiences.

Updated policies:

- CIS VMware ESXi 8.0 benchmark updated from 1.1 to 1.2
- CIS AIX 7 benchmark updated from 1.0 to 1.1
- CIS Google Cloud Platform Foundation benchmark updated from 3.0 to 4.0
- CIS Apple macOS 14.0 Sonoma benchmark updated from 2.0 to 2.1

New policies:

- CIS Microsoft Azure Compute Services benchmark 1.0
- CIS Cisco IOS XE 17.x benchmark 2.2.1
- CIS Cisco IOS XR 7.x benchmark 3.0
- CIS Microsoft Intune Windows benchmark 11 4.0
- VMware vSphere Security Configuration Guide 8 Benchmark

### Scale secure deployments with Workload Identity Federation (WIF)

Workload Identity Federation (WIF) allows applications and services (workloads) to securely authenticate to cloud platforms and other services using short-lived tokens instead of managing long-lived credentials like API keys or passwords. This month we added WIF support for GitHub, Google Cloud and Microsoft Entra ID allowing you to easily deploy Mondoo to thousands of assets without the pain of credentials management. Implementing WIF also lowers the risk of leaked secrets since it uses temporary tokens.

![Mondoo now includes the option to use Workload Identity Federation (WIF)](/img/release-highlights/2025-09/wif.png)

### Stay on top of exceptions

This month we added further features to our exceptions, including improved filtering, email notifications, and more extensive user roles:

- **Filtering to better find exceptions**: New filtering capabilities on the exceptions page allow you to quickly find the exceptions that need your attention with filtering on exception type, status, and expiration date.
- **Email notifications**: Receive an email notification when an exception you created is going to expire in the next 72 hours or when an exception is created that requires your review.
- **Fine grained control of user roles**: Want exact control over what users can do in orgs and spaces? Now you have it with additional fine grained roles that can be layered on top of the viewer role. Allow users to manage tickets or exceptions without giving them the ability to delete assets or upload policies. You’re choice.

![Mondoo now includes enhanced user roles and permissions](/img/release-highlights/2025-09/roles.png)

That's it for September. We hope you're enjoying all our new additions and improvements, and we're looking forward to showing you everything we're working on next in September!
