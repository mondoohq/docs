---
title: Mondoo Release Highlights November 2025
sidebar_label: November Highlights
description: November has already flown by, and it’s time to take a look at all the enhancements we accomplished. This month we added new Mondoo Security Advisories designed to keep you ahead of emerging threats. We also expanded our vulnerability detection to include more applications and operating systems, as well as guided remediation steps to help you patch quickly. We beefed up our NPM package detection to bolster supply chain security, and added new network security capabilities. Dig in to find out more!

authors: [tim]
image: /img/release-highlights/2025-11/banner.png
tags: [release, mondoo]
date: 2025-12-04
---

#### November has already flown by, and it’s time to take a look at all the enhancements we accomplished. This month we added new Mondoo Security Advisories designed to keep you ahead of emerging threats. We also expanded our vulnerability detection to include more applications and operating systems, as well as guided remediation steps to help you patch quickly. We beefed up our NPM package detection to bolster supply chain security, and added new network security capabilities. Dig in to find out more!

![Mondoo Release Highlights November 2025](/img/release-highlights/2025-11/banner.png)

## New Mondoo advisories

We’re excited to introduce new advisories prepared by the Mondoo research team. Mondoo security advisories will cover new security vulnerabilities, providing details on the issue, its potential impact, and recommended actions to mitigate the risk. Mondoo will automatically search for these vulnerabilities in customer environments, so they can take steps to protect their systems. We released our first advisory on the [second coming of the Shai-Hulud worm](https://mondoo.com/blog/navigating-the-sands-of-dune-protecting-npm-from-the-shai-hulud-worm), with many more to come.

![Mondoo advisory](/img/release-highlights/2025-11/mondoo_advisory.png)

## Application vulnerabilities: Ready, steady, patch

This month we added vulnerability detection for the following new apps:

- TeamViewer
- FortiClient

More importantly, we’ve added full remediation steps and code snippets for 30+ commonly used applications, including Adobe products, Notepad++, 7-Zip, Dropbox, Microsoft 365, Google Chrome, Mozilla Firefox, Microsoft Edge, and many more. In addition, we now offer [agentic vulnerability patching](https://mondoo.com/blog/introducing-agentic-vulnerability-patching-using-ansible) for applications using the Mondoo security pipeline.

![Software package remediation](/img/release-highlights/2025-11/software-remediation.png)

## New vulnerability and EOL detections

We’ve expanded vendor advisory and vulnerability detection for these new operating systems and platforms:

- macOS Tahoe 26
- Huawei Cloud EulerOS (HCE)
- AWS Bottlerocket

We also made the following improvements to vulnerability detection on AlmaLinux and AIX and improved our EOL risk factor to accurately reevaluate if a system is upgraded in place.

![macOS Tahoe asset](/img/release-highlights/2025-11/macos-tahoe.png)

## New and updated CIS policies

Staying current with new and updated CIS benchmarks ensures that you’re adhering to the latest guidelines and best practices. That’s why we continually add new CIS benchmarks and update existing ones. In November we made the following updates:

- Added CIS Rocky Linux 10 Benchmark 1.0
- Updated CIS Rocky Linux 8 Benchmark policy 3.0 -> 4.0
- Added 7 new checks to the CIS Microsoft 365 Foundation benchmark policy
- Added support for Cortex EDR in the Mondoo EDR Policy

## Improved NPM package detection support

NPM packages are pre-written code modules that can be installed and managed using the Node Package Manager (NPM) and other CLI tools. Because NPM packages often have deep dependency chains, compromising a single, widely used package can spread malicious code to numerous downstream projects and users, creating a supply chain attack. This month we’ve been busy beefing up our NPM detection capabilities as well as providing remediation guidance and automated fixes:

- NPM package results include a new package.script field exposing scripts in the npm packages
- Support for scoped npm packages
- Improved detection of packages in multiple directories when using using cnquery shell
- Remediation steps in all NPM findings

## New network security capabilities

By identifying flaws in software and configurations of network devices, you can proactively patch and harden your networks, reducing your attack surface and protecting critical systems and data. This month, we made the following additions and improvements to our network security offering:

- Cisco NX-OS assets now display in the Mondoo Console, including workspace filters
- New CIS Cisco NX-OS Benchmark 1.2 released
- Model and serial number asset inventory data now displayed for all Cisco devices
- New EOL and CVE scanning support for FortiOS and Pan-OS using new panos and fortios providers for cnquery/cnspec.
- Cumulus Linux network distribution support

![EOL Network Device](/img/release-highlights/2025-11/network-device.png)

Stay tuned for more great network security additions coming soon!

## Expanded platform support

Yes, Mondoo scans literally everything. With our latest batch of new platforms, we can detect vulnerabilities and misconfigurations in the entire OS ecosystem. We now cover:

- New openSUSE MicroOS, Nobara Linux, and Huawei Cloud EulerOS (HCE) support.
- Improved service detection on BSD systems, Alpine Linux with OpenRC installed, and systemd-based Linux distributions.
- New package detection support on Dragonfly BSD, EndeavourOS, Parrot OS, AWS Bottlerocket, and Gentoo Linux.
- New service detection support on Elementary Linux, Parrot OS, MX Linux, Zorin OS, and Gentoo Linux.

Now that Mondoo supports over FIFTY unique operating systems we took the time to make it easier to deploy Mondoo onto systems. New simplified operating system integration pages make it easier to deploy Mondoo to the system of your choice and include updated commands to automatically run Mondoo as a service and keep it updated without additional effort.

![Simplified Mondoo installation](/img/release-highlights/2025-11/integration.png)

## Resource updates

- `k8s.pod` resource includes a new `containerStatuses` field using the new `k8s.containerStatus` resource
- `docker.image` resource includes a new `repoDigests` field
- `kernel` resource support for openBSD, NetBSD, and Dragonfly BSD assets
- New `network.route` resource for macOS, Linux, and Windows assets
- New `microsoft.policies.crossTenantAccessPolicies` resource
- New `microsoft.tenant.branding` resource
- New `macos.hardware` resource

## Other misc updates

- Support for Space IDs up to 64 characters long so you can use UIDs as a space ID
- Crowdstrike import improvements prevent duplicate assets, support macOS 26, and support FQDN as asset name
- Organization tiles on the organizations page now include the total number of assets in the organization
- Improved support for screen readers in the console
- Your company name can now be set in organization details during setup
- Jira ticket creation now handles the creation of tickets with very large summaries that exceed Jira limits
- Subdomain discovery is now enabled by default when setting up host scan integrations

That’s a wrap for November. We’ve already made a flying start to December, and we look forward to sharing all our new features soon!
