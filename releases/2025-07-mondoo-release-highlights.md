---
title: Mondoo Release Highlights July 2025
sidebar_label: July Highlights
description: Even at the height of summer, Mondoo is in full delivery mode. This month we expanded coverage for critical Microsoft apps, simplified filtering on findings, enhanced our guided remediations, and added more exceptions functionality. Dig in to find out more!

authors: [tim]
image: /img/release-highlights/2025-07/banner.png
tags: [release, mondoo]
date: 2025-08-11
---

#### Even at the height of summer, Mondoo is in full delivery mode. This month we expanded coverage for critical Microsoft apps, simplified filtering on findings, enhanced our guided remediations, and added more exceptions functionality. Dig in to find out more!

![Mondoo Release Highlights July 2025](/img/release-highlights/2025-07/banner.png)

## Expanded coverage for Microsoft apps

We expanded coverage for critical Microsoft apps, including SharePoint, Entra ID, and M365:

- SharePoint advisories and CVEs are now detected, helping teams catch and address these high-impact issues faster. This includes the critical ToolShell vulnerabilities in SharePoint on-prem deployments.
- Added 140 new checks to secure Entra ID installations with a focus on setting secure Microsoft Exchange settings.
- M365 assets now include a link to the M365 console from the Mondoo asset pages.
- 36 additional M365 / Entra ID resources for writing custom policies to secure critical Microsoft infrastructure.

![Mondoo detects CVEs on SharePoint](/img/release-highlights/2025-07/sharepoint.png)

## Expanded remediation guidance

Since at Mondoo it's our priority to not only tell you what's wrong, but to actually help you fix it as quickly as possible, we're constantly making improvements to our guided remediation. This month we introduced the following enhancements:

- Remediations are now shown as you browse for new policies to apply in your environment so you can evaluate the work involved before you even pull the trigger to enable new policies.
- The Mondoo Linux policy now includes Bash remediation scripts as well as expanded CLI and Ansible remediations. These standalone remediation scripts include logging and error handling logic, making them perfect to hand off to less experienced team members.
  ![Mondoo provides Bash remediation snippets for Linux misconfigurations](/img/release-highlights/2025-07/bash.png)
- AIX advisories now include remediation steps, making it a simple copy and paste to patch even traditional mainframes.
- Advisory remediation content is now tailored to the impacted systems, making remediations simpler to understand and easier to hand off to downstream teams.

## Quickly drill down with filters

New filters in Mondoo findings let you quickly narrow results and get to the information you need. Filters are available for all findings pages, including individual CVEs and checks on an asset, as well as assets impacted by a specific finding. The desired filter values can be selected from the drop down list.

![You can now filter on findings properties to quickly get the information you need](/img/release-highlights/2025-07/filters.png)

## See status and take action directly from findings list

Redesigned tables now include key information on checks, vulnerabilities, advisories, and their status, such as whether a ticket has been created, exception has been set, or whether it is still unresolved. If a ticket or exception has been created, you can go straight to the details with one click. For unresolved findings, users can now take action directly from the status column.

![The findings list now also shows status and allows you to take action in one click](/img/release-highlights/2025-07/take_action.png)

## Easily navigate sprawling infrastructure

For Mondoo users with large infrastructures, we've added a new list view for spaces and workspaces, allowing you to quickly navigate hundreds and thousands of spaces. Depending on your needs, you can toggle between a tile view and a list view:

- **Tile view**: This view allows you to see the trend lines for the total priority findings in your spaces and workspaces. At a glance, you will be able to see if there are any sharp increases in trendlines, indicating rapid growth of vulnerabilities or misconfigurations in the space, so you can investigate and take immediate action if necessary.

  ![Mondoo workspaces tile view](/img/release-highlights/2025-07/workspaces_tiles.png)

- **List view**: This view allows you to scroll faster through spaces and workspaces and shows increases and decreases with a percentage change. Higher percentage increases in priority findings indicate rapid growth of vulnerabilities or misconfigurations in the space, enabling you to investigate and take immediate action if needed.

  ![Mondoo workspaces list view](/img/release-highlights/2025-07/workspaces_list.png)

## Take control of exceptions

There will be times when you'll need to remove an exception, even if it has already been approved. Now you can remove approved exceptions from the exceptions page or policy/asset/finding exception tabs. Once an exception has been removed, checks will be applied and scores updated.

![Removing an exception from Mondoo](/img/release-highlights/2025-07/remove_exception.png)

A new space setting now also allows you to specify whether you want exceptions to apply immediately or whether they require approval before impacting finding scores.

![Specify whether you want exceptions to apply immediately or require approval](/img/release-highlights/2025-07/exception_setting.png)

Finally, it's easier to understand how exceptions impact asset security scores, with improved exception visibility at the assets level, including exceptions set in policies that are applied to those assets.

## Other improvements

Further enhancements we've worked on in July:

- Red Hat OpenShift Virtualization detection.
- A new simplified interface for setting user roles in organizations and spaces.
- Improved generation of SBOMs using cnquery and the ability to load SBOMs using cnquery shell.
- Software pages now include additional asset inventory information so you can see where particular package versions are deployed.
- A new `mondoo.com/internet-exposed`: "true asset annotation allows you to define any asset as internet exposed for risk factor calculation.
- Improved CLI output makes it easier to quickly see which checks are failing and which are passing.

That's a wrap for our July updates! Check back to see what's new in August.
