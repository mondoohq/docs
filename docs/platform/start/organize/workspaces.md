---
title: Workspaces
sidebar_label: Workspaces
sidebar_position: 5
description: This page provides detailed information about workspaces in Mondoo Platform, and how you can use them.
image: /img/featured_img/mondoo-feature.jpg
---

FOO BAR BAZ start with a screenshot

Workspaces are ad hoc groups of assets you want to view together. You might have a workspace for a project, another for monitoring urgent problems across your infrastructure, and another for a type of asset.

Think of workspaces more as views rather than as structural divisions of your Mondoo organization. A single asset can be included in multiple workspaces.

For example, suppose your infrastructure includes an employee's macOS workstation, which has a *critical* risk rating. The workstation is in a single [space](/platform/start/organize/spaces), which is in a single [organization](/platform/start/organize/organizations). But it can appear in both a macOS devices workspace and a workspace that shows all critical assets.

A space can contain an unlimited number of workspaces, and their purpose is entirely up to you. Their flexibility lets them meet your unique business needs.

## Example workspaces

Suppose our imaginary sample business, Lunalectric, has a space is dedicated to the Rover business group, a division within the company.

![Sample workspaces in Rover space](/img/src/platform/start/mars-rover-space.png)

This space contains many different types of assets, including the Rover team's Azure and SaaS infrastructure, deployment pipelines, and employee workstations. They use workspaces to accomplish these goals:

- View smaller, more manageable portions of their infrastructure

- Easily assess the security of their different types of infrastructure

- Highlight the assets that require urgent fixes

- Show Linux assets that require patching

As another example, suppose Lunalectric has a space that contains all of the company's AWS cloud infrastructure. With hundreds of AWS assets, they need easy ways to break down that space and understand where their security strengths and weaknesses lie.

![Sample workspaces in AWS space](/img/src/platform/start/lunalectric-aws-space.png)

To accomplish this, they create a workspace for each type of AWS asset as well as an "All AWS urgent" workspace where they can quickly view the AWS assets that pose the greatest risk to Lunalectric.

## Set up workspaces

You set up a workspace by defining qualifying criteria, attributes that assets must (or must not) have to be included. Mondoo dynamically creates the workspace each time you view it by including assets in the space that currently meet your criteria.

Mondoo currently supports these criteria for including assets in, or excluding assets from, a workspace:

| Criteria         | Example values                                                                                                       |
|------------------|----------------------------------------------------------------------------------------------------------------------|
| Platform         | Alpine Linux, Atlassian Jira, AWS S3 bucket, GitHub repository, Kubernetes pod, macOS, Slack team, Terraform plan... |
| Platform version | 3, 4.5, 12.75                                                                                                        |
| Risk rating      | Critical, High, Medium, Low, None                                                                                    |
| Asset name      | test, 2024, win, us-east-1, docker-                                                     |

:::tip

We continue to add new criteria for workspaces; check back soon for more.

:::

### Example criteria

You can define very simple workspaces like these:

- Is a GCP compute image

- Risk rating is not Low or None

- Name contains `eu-central`

- Is a GitHub repository or a GitLab project

Or you can build a simple query to fine-tune workspace contents. These are examples of simple queries:

- Is a Debian device and version is not 12

- Name contains `dod` and risk rating is Critical or High

- Is a macOS device and version is 15.1.0 and name contains `home`

Mondoo workspaces support complex queries as well. For example, this query defines a workspace for viewing all older versions of 2 popular Linux distributions:

   (Is a Debian device and version is not 12)
   and
   (Is a Fedora device and version is not 40 or 41)
   and
   (Is a Red Hat (RHEL) device and is not version 9.5)

### Workspaces are dynamic

When you create a workspace, what you save is the name, description, and the criteria you define. You don't save the actual assets included in the workspace. Mondoo rebuilds a workspace every time you view it.

For example, suppose you set up a workspace named Urgent AlmaLinux. The criteria you define for the workspace is AlmaLinux devices with Critical or High risk ratings.

When you first view the Urgent AlmaLinux workspace, it contains 25 assets&mdash;all older versions of AlmaLinux that have other risk factors. If you patch 12 of those assets and remove additional risk factors from two others, the next time you view the workspace, it will contain only 11 assets.

If AlmaLinux releases an advisory about a vulnerability in the newest version, this could mean that even your AlmaLinux devices running the newest version now have Critical or High risk ratings. So the next time you view the workspace, it might contain 40 assets.

### Add a new workspace

Use the workspace query builder to choose criteria that define what assets Mondoo includes.

BAZ SCREENSHOT

BAZ discuss how the different chunks work like parentheses in a Boolean query
BAZ provide examples of how they work together

1. [Navigate to the space](/platform/start/navigate/) where you want to add a new workspace.

2. In the side navigation bar, select **Workspaces**.

3. Select the plus sign (+) near the top-right corner of the page.

4. Create a query to define the assets you want Mondoo to dynamically include in the workspace:

   a. Under **Asset selection 1**, select the plus sign (+) and select the the criteria to define.

   b. Choose the operator: **IS**, **NOT**, or **CONTAINS**.

   c. Choose the value(s).

   d. To add another condition for the query, select **+ ADD CONDITION**.

   e. Choose how to combine the conditions:

      - To include assets only if they meet both conditions, select **AND**.

      - To include assets that meet at least one condition, select **OR**.

   f. Choose the criteria, operator, and value for the condition.

   g. Repeat steps d-f to define as many conditions as you want.

5. To create a complex query with another set of criteria, select

NOT FINISHED FOO BAR BAZ

## View workspaces

## Manage workspaces

### Edit a workspace

### Remove a workspace

---
