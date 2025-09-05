---
title: Mondoo Release Highlights August 2025
sidebar_label: August Highlights
description: Staying ahead of evolving security threats requires both deeper visibility and faster, more effective remediation. This month, we've expanded our vulnerability detections, added more Ansible, Bash, and Terraform remediation snippets, and included the latest CIS benchmarks to strengthen security and compliance. We've also added some enhancements to the Mondoo Query Language (MQL) to further simplify the creation of custom policies. These improvements are all about helping your team save time, remediate faster, reduce risk, and stay ahead of attackers. Let's jump in.

authors: [tim]
image: /img/release-highlights/2025-08/banner.png
tags: [release, mondoo]
date: 2025-09-05
---

#### Staying ahead of evolving security threats requires both deeper visibility and faster, more effective remediation. This month, we've expanded our vulnerability detections, added more Ansible, Bash, and Terraform remediation snippets, and included the latest CIS benchmarks to strengthen security and compliance. We've also added some enhancements to the Mondoo Query Language (MQL) to further simplify the creation of custom policies. These improvements are all about helping your team save time, remediate faster, reduce risk, and stay ahead of attackers. Let's jump in!

![Mondoo Release Highlights August 2025](/img/release-highlights/2025-08/banner.png)

## macOS advisories and CVEs detection

Stealers and ransomware targeting macOS are on the rise, making it critical to stay ahead of vulnerabilities. Mondoo now helps you quickly identify advisories and CVEs across macOS systems, whether they're running in the cloud, on-premises, or on endpoint devices.

![macOS asset CVE and advisory detection](/img/release-highlights/2025-08/macos.png)

## Debian 13 (Trixie) advisories and CVE detection

Say hello to Debian 13 “Trixie”! Released on August 9, 2025, this shiny new OS now gets full CVE detection in Mondoo. Whether you're already rolling out Trixie or just kicking the tires, we've got your vulnerabilities covered.

## Windows 10 EOL detection

Are you ready for the Windows 10 End of Life? Starting October 14, 2025, Microsoft will no longer provide security updates, technical support, or other updates for the operating system unless you have an extended support contract. While you can still use Windows 10 after this date, this OS will become vulnerable to new security threats and may encounter issues with newer software and hardware compatibility. Therefore it's highly recommended to upgrade these machines now. Mondoo can help you find all your impacted Windows 10 assets so you can upgrade them in time.

![Windows 10 EOL detection](/img/release-highlights/2025-08/eol.png)

## Expanded vulnerability detection

Application vulnerability detection isn't new in Mondoo, but it just got a serious upgrade. Stronger, faster, and focused on the apps that matter most:

- Improved .NET Framework version parsing to detect .NET framework installed as a package and installed as a Windows feature
- Expanded Firefox vulnerability detection support all CPU architectures and system languages
- CVE detection for Microsoft Edge dev and beta channel installations
- Improved Amazon Linux, and VMware CVE detection support
- Microsoft .NET Framework SDK CVE support, ASP.NET support, and .NET runtime on macOS/Linux support
- Microsoft SQL Server for Linux and General Distribution Release (GDR) updates on Windows
- Improved support for CVSS 3.1 findings

## VMware vSphere tag detection on hosts and VMs

We now capture VMware tags on both the hosts and the VMs. Not only is this useful for viewing the tags that have been applied to assets, but you can also filter on these tags and even create workspaces for assets based on their tags. For instance, if you tag an asset with 'production', then you can create a workspace in Mondoo for all assets with that tag. If a new asset gets the tag added (or when the tag is removed), the workspace will automatically be updated on the next scan.

## Locate findings and take action faster

Making it easier to locate security issues also makes it faster to remediate them. We've made the following filtering improvements:

- Each finding that doesn't yet have a ticket and for which no exception has been set, now includes a 'Take Action' button so you can quickly triage findings directly from the findings page.
- You can now sort findings from the top right 'Sorted by' button as well as from the columns.
- More filtering options have been added including state and risk ratings.
- You can now take action in bulk by selecting multiple findings and taking action on all of them with one click.

![Improved findings experience](/img/release-highlights/2025-08/vulns.png)

## Updated CIS Benchmark policies

CIS benchmarks are continually being updated and improved, and Mondoo has added support for the latest updated benchmarks:

- CIS Windows 11 Benchmarks v4.0: We pulled in the latest and greatest Windows 11 benchmarks (4 in total) which remove 11 legacy checks, add 43 new checks, and update all remediation steps to work on non-English systems. All remediation and audit steps are now updated to work with non-English systems.
- CIS Apple macOS 12.0 v4.0 and 13.0 Ventura v3.1: Improved audit and remediation steps including the removal of many manual remediation steps that were no longer functional due to security changes in macOS
- CIS VMware ESXi 7.0 v1.5: Updated audit and remediation steps for ESXi v7.0 update 3v and updated reference URLs.

## Additional Ansible, Bash and Terraform remediations

We're always adding more remediation instructions to our platform, including code snippets that can be copied and pasted to instantly remediate issues. Remember that these are all pre-tested by Mondoo so you can feel confident when using them. In August we added:

- More Terraform remediation snippets in the Mondoo GitHub policies.
- More Ansible and Bash remediation snippets for the Mondoo Linux Security policy: We added 26 new Bash scripts and refactored all existing bash scripts with additional logging and error handling so they're easier to hand off to junior admins in tickets. In addition we created 6 new remediations for Ansible.

![Remediation content in a finding](/img/release-highlights/2025-08/remediation.png)

## MQL and policy authoring improvements

We made the following improvements to our Mondoo Query Language (MQL) to further simplify writing custom policies in cnspec.

- New option to define 'check impact' with human friendly values (critical, high, low, and none) instead of just using numeric values.
- Added new `.first` and `.last` MQL helpers for grabbing the first or last output from a resource (For example: users.first).
- Discover malformed policies the easy way with improved query linting in cnspec.
- Roll out checks that warn but don't immediately impact asset scores with new overrides directly in your policies:

  ```yaml
  policies:
  - uid: example1
      name: Example policy 1
      groups:
      - filters:
          - mql: asset.family.contains('unix')
          checks:
          - uid: check-05
              title: SSHd should only use very secure ciphers
              mql: |
              sshd.config.ciphers.all( _ == /ctr/ )
              impact: 95

      - type: override
          title: Exception for strong ciphers until September
          valid:
          until: 2025-09-01
          checks:
          - uid: check-05
              action: preview
  ```

  This displays as a remediation deadline when scanning on the command line:

  ```text
  Remediation deadline: 2025/08/31 (in a month)
  ✕ CRITICAL (5):   SSHd should only use very secure ciphers
  ```

## Exceptions management

In August we added more exceptions management options, to make our exceptions truly enterprise-level. Now you can:

- Better dig into compliance exceptions with the new exceptions bar.
- Allow users to disable self approved exceptions at the space level.
- Allow users to disable indefinite time period exceptions.

![Centralized exceptions management](/img/release-highlights/2025-08/exceptions.png)

## Other improvements

Other notable enhancements that we added in August:

- The Mondoo GCP security policy now includes checks for the Cloud Key Management Service (KMS), that manages cryptographic keys to secure data within cloud environments and applications.
- “Host” assets like mondoo.com now include the proper custom icon in affected asset tables.
- Expose AWS EKS Cluster deletion protection status a new resource field: `aws.eks.cluster.deletionProtection`.
- Scan any valid resources within a malformed Kubernetes manifest file.

That's it for August. We hope you're enjoying all our new additions and improvements, and we're looking forward to showing you everything we're working on next in September!
