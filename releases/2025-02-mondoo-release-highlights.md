---
title: Mondoo Release Highlights February 2025
description: Integrations with CrowdStrike and SentinelOne, priority asset customization, optimized dashboards that give you exactly what you need to start your day informed… Nobody told us it was a short month! Learn about these and many more additions and improvements we made to Mondoo in February.
authors: [letha, tim]
image: /img/release-highlights/2025-02/feb2025.png
tags: [release, mondoo]
---

#### Integrations with CrowdStrike and SentinelOne, priority asset customization, optimized dashboards that give you exactly what you need to start your day informed… Nobody told us it was a short month! Learn about these and many more additions and improvements we made to Mondoo in February.

![Mondoo Release Highlights February 2025](/img/release-highlights/2025-02/feb2025.png)

### Unify findings from SentinelOne and CrowdStrike Falcon

Do you wish there was an easy way to centralize data from multiple security tools? Want to assess your overall security posture without manually wrangling data or writing custom code? Need to triage and track all of your security findings in one place?

[Centralizing findings in Mondoo](https://mondoo.com/blog/unify-findings-from-crowdstrike-sentinelone-and-microsoft-defender-in-mondoo) from external security tools is easy in Mondoo. And this month we added SentinelOne and CrowdStrike Falcon to our list of third-party security integrations.

![Third-party integrations in Mondoo](/img/releases/2025-02-04-mondoo-11.40-is-out/3rd-party.png)

With these integrations, you can take advantage of Mondoo's security visualization, prioritization, and ticketing capabilities. Consolidating the data in Mondoo lets you understand your biggest risks and make the most impactful changes to boost your security posture.

Mondoo includes Microsoft Defender, SentinelOne, and CrowdStrike data alongside findings from Mondoo's own scans, and deduplicates so you don't have to.

![Third-party data on an asset in Mondoo][/img/releases/2025-02-04-mondoo-11.40-is-out/cve-falcon.png]

To learn the benefits of pulling all your security data into Mondoo, read [Unify Findings from CrowdStrike, SentinelOne, and Microsoft Defender in Mondoo](https://mondoo.com/blog/unify-findings-from-crowdstrike-sentinelone-and-microsoft-defender-in-mondoo).

### Protect what matters most to your business

You now have even more control over how Mondoo evaluates risk in your infrastructure. You can identify assets as high or low priority based on tags or labels (added in the cloud), or annotations (added using Mondoo) on the asset. When Mondoo assigns a risk score, it considers the asset's priority along with other factors, such as running database servers or open ports.

Now, you can rest assured that any risks that endanger your most critical assets are automatically assigned a higher priority. At the same time, you can reduce noise by specifying which assets are less important to your business.

![High- and low-priority assets in Mondoo](/img/release-highlights/2025-02/priority.png)

### Enhanced space dashboard

See the information that's most important to you on the new and improved space dashboard. You immediately see the total number of priority (critical and high risk) findings in the space, an important indicator of the overall security of your infrastructure.

The top ten findings, based on risk score and blast radius, display prominently as well, allowing you to take quick action where your efforts will bring the greatest results.

![Mondoo space dashboard](/img/release-highlights/2025-02/dashtop.png)

Remediation information lets you quickly assess security and operations team performance on vulnerabilities. All remediation data is grouped by risk level:

* The mean time it takes the team to remediate findings (MTTR)
*  The number of vulnerabilities remediated

![Mondoo space dashboard](/img/release-highlights/2025-02/dashbottom.png)

Summary counts provide a more detailed overview of your current security posture, including risk level and status:

* Vulnerable assets
* Advisories
* CVEs

Lastly, policy information describes the measures you have in place to assess your environment:

* How your infrastructure is currently performing against your enabled policies
* The types of policies you've enabled

All combined, the space dashboard provides a holistic view of your security and compliance at a glance.

### Query Tailscale networks with Mondoo

Our new `tailscale` provider lets you query devices, users, DNS namespaces, and more information about a Tailscale network.

This example retrieves details on a single device:

```cnquery> tailscale.device(id: "55161288425123456") {*}
tailscale.device: {
  id: "55161282215123456"
  isExternal: false
  os: "linux"
  created: 2022-06-25 12:34:34 -0700 PDT
  updateAvailable: true
  nodeKey: "nodekey:abc123"
  lastSeen: 2024-03-25 08:01:04 -0700 PDT
  user: "stella@lunalectric.com"
  hostname: "raspberrypi"
  clientVersion: "1.10.0-t766ae6c10-g3e6822772"
  authorized: true
  blocksIncomingConnections: false
  addresses: [
    0: "100.71.181.41"
    1: "abc1:abc1:a1e0:ab12:abc1:cd96:abc1:bf33"
  ]
  keyExpiryDisabled: true
  expires: 2022-08-02 18:55:39 -0700 PDT
  name: "raspberrypi.tail1a4a6.ts.net"
  machineKey: "mkey:abc123"
  tailnetLockKey: ""
  tailnetLockError: ""
}
```

### Create workspaces with Terraform

You can now use Terraform to automate creating [Mondoo workspaces](https://mondoo.com/blog/mondoo-workspaces-organize-security-insights-by-team-location-technology-and-focus), thanks to the updated Mondoo Terraform provider. Learn more about the `mondoo_workspace` resource in the [Mondoo Terraform provider documentation](https://registry.terraform.io/providers/mondoohq/mondoo/latest/docs/resources/workspace).

### AWS RDS cluster support

AWS account scans now include automatic discovery of RDS clusters. Cluster assets appear on the Assets page in a new RDS Clusters group. Each asset includes full inventory information.

![RDS Cluster Scan](/img/releases/2025-02-11-mondoo-11.41-is-out/rds.png)

### More view options for asset lists

We've updated the Assets page to make finding and selecting the assets you care about easier than ever. Improved search results show only the asset groups that include results. It's also now more clear when no assets match your search. New group and list icons let you switch between views: Organize by platform groups or display a single list so you can sort and select all assets in a group at once.

![Asset selection](/img/releases/2025-02-11-mondoo-11.41-is-out/assets.gif)

## Risk factors on assets

The detail page for an asset now shows any risk factors present on the asset, such as an end-of-life operating system or an incompletely removed package. Hover over a risk factor icon to see the risk factor.

![Risk factors on assets in Mondoo](/img/release-highlights/2025-02/risk-on-asset.png)

## Improved search experience

We made loads of changes to all the different searches you perform in the Mondoo Console. These are a few examples:

* Application search results now include the risk rating.
* Asset search results now include the platform.
* You can now search for an advisory based on a corresponding CVE.
* We reduced false-positive results for CVE searches.
* You can now search for software based on a present CVE.

## Improved layout of finding details on assets

On the Checks tab of asset detail pages, we reorganized the information displayed about each policy check. It's easier than ever to find the remediation steps you need most.

![Asset details in Mondoo](/img/release-highlights/2025-02/check.png)

## Easier prioritization

In a few different ways, we provided extra help prioritizing the assets and findings that most need your attention:

* In lists throughout the Mondoo Console, we display the assets or findings with the worst scores first.
* On dashboards and other pages, we display final scores that are adjusted per Mondoo's contextual risk factors (instead of just base scores).
* On dashboards and other pages, we consider risk factors when choosing the most important data to display.

## Mondoo AWS security policy improvements

The Mondoo AWS security policy now does an even better job of identifying misconfigurations and other issues in your AWS infrastructure:

* We expanded descriptions and remediation information to help you better understand the problem and the solution.
* We run checks on more (fine-grained) assets for better score visibility.
* We added checks for insecure security groups that allow remote access to systems (VNC/RDP).

## Directly open individual PDF reports

If you run a single report in Mondoo, there's no need to download a zip file and then extract the PDF; you can just open the PDF directly in your browser.

## Improved risk factors and scoring

We expanded and improved how Mondoo weighs risk factors to calculate a final risk score:

* We improved how we apply risk factors and your customized security model.
* Scoring now better prioritizes risks.
* We updated vulnerability risk factors to work on a wider range of Linux distributions.

## Represent blast radius visually

Blast radius icons now reflect the size of the blast radius.

![Blast radius in Mondoo](/img/release-highlights/2025-02/blast.png)

## Expanded Google Kubernetes support to include GKE 1.7

Our CIS benchmark policies now include support for the latest Google Kubernetes Engine (GKE) version, 1.7.0. To see the newest CIS benchmarks for Kubernetes, go to the [CIS website](https://www.cisecurity.org/benchmark/kubernetes).

## Resource updates

### azure.subscription.cloudDefenderService

* New `settingsMCAS`, `settingsWDATP`, and `settingsSentinel` fields using the new `azure.subscription.cloudDefenderService.settings` resource

### azure.subscription.cloudDefenderService.securityContact

* Deprecate `alertNotifications` in favor of the new `notificationSources` field

### azure.subscription.webService.appsite

* New `ftp` and `scm` fields using the new `azure.subscription.webService.appsite.basicPublishingCredentialsPolicies` resource

### gcp.project.gke.cluster

* New `releaseChannel` field

### microsoft

* New `users` field using the new `microsoft.users` resource

* New `roles` field using the new `microsoft.roles` resource

### sshd.config

* New `context` field using the new `file.context` resource

### microsoft.applications.length

* Improve performance

### microsoft.groups.length

* Improve performance
