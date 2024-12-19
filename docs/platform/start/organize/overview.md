---
sidebar_label: Overview
title: Plan Your Mondoo Organization - Overview
sidebar_position: 1
descriptions: Create a manageable structure for monitoring and securing your infrastructure with Mondoo.
image: /img/featured_img/mondoo-feature.jpg
---

You can rely on Mondoo to secure an enormous quantity of assets in your infrastructure&mdash;cloud platforms, workstations, servers, containers, SaaS platforms, and much more. For larger businesses, Mondoo provides asset intelligence, security, and compliance for thousands of assets. To make securing and monitoring your infrastructure manageable, you can arrange your Mondoo assets in regions, organizations, spaces, and workspaces. It's best to plan your infrastructure structure before you begin adding assets to Mondoo.

![Region, organization, space, and workspace in Mondoo](/img/src/platform/start/organize-basics.png)

- [Regions](/platform/start/organize/regions) let you follow localized data protection requirements such as GDPR. Mondoo currently supports two regions: US and EU. Privately hosted Mondoo Enterprise accounts run in a single region.

- [Organizations](/platform/start/organize/organizations) provide a way to separate different major parts of your business and manage team members' access. Most Mondoo customers have only one organization. However, if you have business divisions that operate quite differently and have separate dedicated teams, you might consider creating multiple organizations.

- [Spaces](/platform/start/organize/spaces) are structured collections of assets, policies, compliance frameworks, security models, ticket system integrations, and reports that you manage together. You can also manage team member access by space. Most Mondoo customers have multiple spaces.

- [Workspaces](/platform/start/organize/workspaces) are ad hoc groups of assets you want to view together. You might have a workspace for a project, for monitoring a certain problem across your infrastructure, or for a type of asset.

Regions, organizations, and spaces form the structure of your assets in Mondoo. An organization can be in only one region. A space can be in only one organization. An asset can be in only one space.

Workspaces are not structural; an asset can be in multiple workspaces.

## Examples of organizations

Imagine a US-based company called Lunalectric that makes rovers and rockets for space exploration. Lunalectric's business structure is divided by product type. There's a division focused on rovers and another focused on rockets. There's also a Commerce division containing finance, marketing, human resources, and so on. The company has a single operations team and a single security team.

Here's one way Lunalectric might organize their assets in Mondoo:

![Sample organizational structure in Mondoo](/img/src/platform/start/luna-org-1.png)

In this example, Lunalectric creates a single organization that contains a different space for each type of asset they monitor with Mondoo. Their AWS assets go in the Cloud space, all employee laptops are in the Workstations space, and so on. Each space contains many different workspaces for the different views and perspective they need to assess.

Here's an alternative way Lunalectric might organize their assets:

![Sample organizational structure in Mondoo](/img/src/platform/start/luna-org-2.png)

In this second example, Lunalectric creates a single organization that contains three spaces: one space for each business division. Each space contains a very large number of assets.

The Lunalectric team relies on many different workspaces, some examples of which are shown in the diagram above, to view subsets of assets in the different spaces. For example:

- Each space has an "urgent" workspace that shows all the assets in the space that have serious security issues requiring immediate attention.

- The Rocket space has a workspace that shows only assets used on federal projects.

- The Rover space has a workspaces dedicated to cloud assets.

- One Rocket team member, Stella, made a workspace that lets her focus on her current projects.

- The Commerce space includes a workspace specifically for assessing the security of lunalectric web properties.

## The best structure for you

There's no _right_ way to organize your assets in Mondoo. Take some time to understand what you need to learn from Mondoo and outline a couple of different organizational ideas.

---
