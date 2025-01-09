---
title: Spaces
sidebar_label: Spaces
sidebar_position: 4
description: This page provides detailed information about spaces in Mondoo Platform, and how you can use them.
image: /img/featured_img/mondoo-feature.jpg
---

![Spaces](/img/platform/security/spaces.png)

A space is a collection of assets, policies, and reports that you manage together within Mondoo Platform. A space exists in a single [organization](/platform/start/organize/organizations). An asset (a physical or virtual computing, network, or storage device or other component of your information environment) can exist in only one space.

Spaces allow for a great degree of flexibility in managing shared resources. For example, teams may organize their deployments in spaces, setting their own policies and quickly gaining insights for everything they manage.

Furthermore, users may decide to configure separate spaces for development, staging, and production environments, or specific compliance requirements such as HIPAA or SOC 2.

You can manage team member access and the majority of your Mondoo configuration (such as your security model, service accounts, and tokens) space by space.

:::note

Adding and removing spaces requires Owner access to the organization.

:::

## Manage spaces

You can create new spaces as needed and use them to manage cloud account integrations, policies, and team members separately.

### Create a new space

1. [Navigate](/platform/start/navigate) to the organization in which you want to create a space.

2. In the left navigation, select **Spaces**.

3. In the top-right corner of the page, select the plus (+) icon.

   ![add a space](/img/platform/start/new-space.png)

4. Mondoo picks a space ID. To customize the ID, select the pencil icon and enter a new ID. The ID must be between 7 and 34 characters and can include lowercase letters, numbers, single quotes, hyphens, spaces, and exclamation points. It must start with a lowercase letter and end with a letter or number.

5. Enter a name for the space. The name must be between 4 and 29 characters long and can include letters, numbers, single quotes, hyphens, spaces, and exclamation points.

6. If you want, enter a description for the space to help your team understand its purpose.

7. Select the **CREATE SPACE** button.

### Delete a space

:::caution

Deleting a space permanently removes it. You can't undo this action.

:::

1. [Navigate](/platform/start/navigate) to the space you want to delete.

2. Select the **SETTINGS** menu.

3. In the **Danger Zone**, under **Delete Space**, check the box to confirm you want to delete the space and all its related content.

4. Select the **DELETE** button.

---
