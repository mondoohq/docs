---
title: Mondoo Release Highlights April 2025
sidebar_label: April Highlights
description: A new Mondoo Model Context Protocol (MCP) server for AI accelerated findings remediation, expanded vulnerability detection support, remediations in ticketing, centralized exceptions management, and space-wide exceptions. April was all about exposing the most critical findings in your environment and taking action on those findings quickly. Discovery everything new to keep your assets secure.
authors: [tim]
image: /img/release-highlights/2025-04/april2025.jpg
tags: [release, mondoo]
date: 2025-05-09
---

#### April was all about helping you find and fix critical security issues faster. We rolled out a new Mondoo Model Context Protocol (MCP) server to power AI-assisted remediation, expanded vulnerability detection, added remediations to ticketing, and launched centralized and space-wide exception management. Explore everything new this month to secure your infrastructure.

![Mondoo Release Highlights April 2025](/img/release-highlights/2025-04/april2025.jpg)

## Mondoo Model Context Protocol (MCP) server

With the [Mondoo MCP server](https://mondoo.com/blog/introducing-mcp-for-mondoo-unlocking-ai-to-fix-cves-faster), you can now use your favorite AI assistant, such as ChatGPT, Anthropic's Claude or GitHub Copilot to access Mondoo security data for real-time answers and faster vulnerability resolution. Imagine asking your favorite LLM to find and fix critical security findings. With Mondoo's MCP, this is now a reality. Watch the video to see it in action [Mondoo MCP: Use your favorite AI assistant to communicate with Mondoo](https://www.youtube.com/watch?v=WjVhLmk2TFQ)

Mondoo MCP Server is available for private preview for Mondoo customers, please contact your customer success manager if you’d like to try it out.

## Critical vulnerabilities can’t hide from Mondoo

Last month we unveiled our all-new vulnerability detection engine. Now that we launched the new codebase we’ve kicked things into high gear this month with new vulnerability detection capabilities. Mondoo now includes vulnerability detection for Python, NodeJS, Google COS, and even Kubernetes installations.

Along with these new capabilities we improved the parsing of vendor advisories, added support for AIX efixes, improved support for third-party vulnerability data from systems like SentinelOne, and improved the reliability of software detection on assets. Stay tuned for even more expanded vulnerability detection capabilities coming to the platform soon.

## Automatically include remediation guidance in tickets

When creating tickets, Mondoo now automatically provides platform engineers with all the relevant information they need to resolve vulnerabilities and misconfigurations, including detailed asset information and remediation guidance. This means that they have all the data at their fingertips to quickly remediate risks and avoid the frustrating back-and-forth that comes from receiving incomplete information.

![Ticket with remediation steps](/img/release-highlights/2025-04/ticket.png)

## Centralized exceptions management

Unlike other platforms that use many different modules - all with their own exception handling- Mondoo unifies security across your entire IT infrastructure and software development life cycle and allows you to configure your exceptions in one central place. This reduces manual configuration work, avoids errors, and avoids the dreaded spreadsheet teams often use to manage exceptions and compliance tasks.

![Exceptions page](/img/release-highlights/2025-04/exceptions.png)

## Space-wide exceptions for checks, advisories, and CVEs

With the launch of the new Exceptions page, users can now create space-wide exceptions for security checks, vendor advisories, and CVEs. This makes it easier for teams to prioritize what matters by snoozing or disabling entire classes of findings across a space. It’s especially useful for aligning with internal risk tolerances or temporarily deferring non-critical work during high-pressure sprints or audits.

![Creating an exception on a CVE](/img/release-highlights/2025-04/exceptions_modal.png)

## Easily deploy Mondoo at scale using WIF

We’ve introduced Workload Identity Federation (WIF) support, making Mondoo deployment easier than ever. This removes the need to manage Mondoo credentials at scale. Zero-configuration, zero-trust, fully secure Mondoo clients allowing you to add Mondoo Policy-as-code to 6,000 pipelines in a day.

![WIF configuration](/img/release-highlights/2025-04/wif.png)

## Increased detection of exposed risks

Mondoo’s risk factors allow us to raise, or lower, the priority of vulnerabilities or security findings so you can focus on the most important work first. This month we expanded our risk factors capabilities with new expanded cloud internet exposures including:

- Public S3 Buckets
- RDS Instances / Clusters with public endpoints
- Redshift DBs with public endpoints
- GCP Instances with public IPs

![Public S3 bucket with risk factor](/img/release-highlights/2025-04/s3_bucket.png)

In addition, if a CVE is remotely exploitable, we mark it with the new ‘Remotely exploitable vulnerability’ risk factor and increase the risk score.

![Remotely exploitable vulnerability risk factor](/img/release-highlights/2025-04/remote_code_exploit.png)

## Detailed security findings on assets

Our new asset detail page offers improved insights into security findings, and includes full remediation steps and code snippets for quick resolution. Tickets can be generated directly from the page (which will include all the necessary information for platform engineers), or exceptions can be set to snooze or dismiss the finding.

![Asset finding page](/img/release-highlights/2025-04/asset_finding.png)

## PDF reports for findings

Generate reports on a specific CVE or advisory to find more information about the vulnerability and if there are any exposed assets in your environment. This is for instance useful for breaking vulnerabilities or newly exploitable ones.

![PDF CVE report](/img/release-highlights/2025-04/pdf_report.png)

## New and updated policies

Policies are at the core of detecting security misconfigurations, and this month we’ve expanded Mondoo’s scanning capabilities with a wave of powerful new and updated policies.

- New CIS AIX 7 benchmark policy – New checks, improved remediation steps, and support for all versions of AIX 7
- New Google Cloud Cost Control Policy – A new policy to avoid unwanted cloud spend by enforcing corporate standards in CI Terraform pipelines
- New Google Cloud Tagging Policy – A new policy to enforce corporate tagging standards on assets before they reach production via CI Terraform scanning.

We’ve completely rewritten our Mondoo policies for GCP and AWS from the ground up, adding over a dozen new checks focused on your most critical cloud assets. Every existing check has been refined with clearer descriptions and detailed remediation steps across the cloud console, CLI, Terraform, and CloudFormation. To help teams catch misconfigurations early, both policies now include full support for scanning Infrastructure as Code, making it easy to integrate Mondoo directly into your CI pipelines.

## Improved creation of spaces using cloud tags and Mondoo annotations

Create workspaces that match the complexity of your cloud tagging structure with a new `DOES NOT CONTAIN` operator in the workspaces filter setup.

![DOES NOT MATCH workspace filter](/img/release-highlights/2025-04/workspace_filter.png)

## Understand assets at a glance

You can't secure what you don't understand, so this month we further expanded the data Mondoo presents on asset, giving you everything you need to track down exposed assets.

- Release version and installation type (workstation vs. server) for Windows
- IP address information for GCP VMs
- Asset kind information on Linux
- Improve the hiding of manufacturer / product data on cloud instances / VMs
- Expanded host information for AIX assets
- Link directly to the service account that performed the scan from the asset overview

![Service account link on an asset](/img/release-highlights/2025-04/asset_overview.png)

## Display how you want and where you want

We're not all hackers working in the dark on 50 inch screens so this month we worked to ensure that Mondoo works great in light mode and on small screens like tablets. We also optimized console load times, removing 1.8MB from the initial load despite all the great new functionality we delivered.

## Resource updates

### auditd

A new resource for inspecting the auditd configuration on Linux systems.

```coffee
> auditd.config.params
{
 action_mail_acct: "root"
 admin_space_left: "50"
 admin_space_left_action: "suspend"
 disk_error_action: "suspend"
 disk_full_action: "suspend"
 distribute_network: "no"
...

> auditd.config.params.log_format
"enriched"
```

### parse.xml

A new helper for parsing XML so you can use DOM values directly in your policies.

```coffee
> parse.json('example.xml').params
parse.xml.params: {
 root: {
  box: [
   0: {
    hello: {
     @a: "1"
    }
   }
```

### docker.container

- New `hostConfig` field

### k8s.admission.validatingwebhookconfiguration

A new resource for inspecting Kubernetes admission controller validating webhooks.

### microsoft.devices

A new resource for inspecting Microsoft Entra devices.

```coffee
cnquery> microsoft.devices
microsoft.devices.list: [
  0: microsoft.device id="03991a7c-01d0-434b-93c7-af4ba16b39b3" displayName="example"
  1: microsoft.device id="144189f6-e8eb-479f-ba24-f5c9611cddde" displayName="vmaqs2503131438"
  2: microsoft.device id="3c89fefb-8459-484a-a746-ff1d30328120" displayName="example2"
  3: microsoft.device id="523fbf29-5b75-4845-8b1a-936790ea5c2d" displayName="vmaqs2503211816"
  4: microsoft.device id="70bdc3b9-3d5a-4568-897b-1d7f085926c3" displayName="vmaqs2503191431"
  5: microsoft.device id="8840eec9-83ab-470a-a7d1-bb92182843c9" displayName="example3"
  7: microsoft.device id="bd76803a-6d40-45db-aa4c-ac96fef84a13" displayName="example4"
]
```

### usb.devices

A new resource for inspecting all USB devices on macOS.

```coffee
cnquery> usb.devices { * }
usb.devices: [
  0: {
    serial: "123456"
    name: "Magic Keyboard with Touch ID"
    class: "0x00"
    className: "Use class information in the Interface Descriptors"
    isRemovable: true
    version: "4.2"
    speed: "1.5 Mbps (Low Speed)"
    subclass: "0x00"
    protocol: "0x00"
    manufacturer: "Apple Inc."
    vendorId: "0x05ac"
    productId: "0x029a"
  }
  ...
]
```

### network.interfaces

A new resource for inspecting network interfaces and IP addresses on Linux, macOS, and Windows.

```coffee
cnquery> network.interfaces.where(name == 'en0'){ * }
network.interfaces.where: [
  0: {
    mtu: 1500
    ips: [
      0: ipAddress ip=fe80::18d7:e5b7:4b6f:ccc9
      1: ipAddress ip=172.16.1.190
      2: ipAddress ip=fd17:11c:9eaa:6e48:1c82:3cb1:5d9c:1d80
    ]
    vendor: ""
    virtual: null
    name: "en0"
    flags: [
      0: "UP"
      1: "BROADCAST"
      2: "SMART"
      3: "RUNNING"
      4: "SIMPLEX"
      5: "MULTICAST"
    ]
    active: true
    mac: "4e:19:13:db:79:c5"
  }
]
```

## Other notable mentions

Sometimes there just isn't time for a deep dive into everything new, but here are some additional changes you might find interesting:

- Support the SLES SAP variant Linux distribution as `sles-sap`.
- Show friendly platform names in all tables.
- Show the score scale in all risk tool tips so it's easier to understand where an asset stands.
- Move asset deletion behind the triple dot menu on assets to prevent accidental deletion.
- Allow copying host name and finding titles with a single click of the title.
- Add additional audit logging to spaces and organizations and provide more context for each logging event.
- Rework the organization and space member management pages to make it easier to manage users.
- Update pagination to 50 items by default instead of 10.
- Added a --kubelogin boolean flag to the Kubernetes provider which gives the option to authenticate against a remote AKS cluster using a JWT bearer token.
- Initial support for CVSS v4 vulnerability results.
