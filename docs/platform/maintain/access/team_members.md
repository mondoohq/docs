---
title: Manage Team Members (Mondoo Users)
sidebar_label: Manage Team Members
sidebar_position: 2
description: Manage team members (Mondoo users) across organizations and spaces in Mondoo Platform.
image: /img/featured_img/mondoo-feature.jpg
---

You can invite team members at the organization level or at an individual space level.

Team members of an organization have access to all of the spaces and workspaces under that organization, as well any additional spaces created in the future.

## Role-based access control

Team members of organizations and spaces are granted one of these three base roles:

- **Viewer** - Read-only access to the view content in all spaces / workspaces within the organization including:
  - assets
  - compliance frameworks
  - dashboards
  - exceptions
  - findings
  - reports
  - tickets
- **Editor** - Viewer access plus the ability to manage:
  - assets (add / remove)
  - compliance frameworks (add / remove / modify scope)
  - exceptions (create / extend / approve)
  - integrations (add / remove / modify)
  - policies (add / remove / active / deactivate)
  - reports (create / remove)
  - service accounts (add / remove)
  - SLAs (modify)
  - team members (add / remove / modify permissions)
  - tickets (create / remove)
  - workspaces (add / remove / modify)
- **Owner** - Editor access plus the ability to create and delete spaces and organizations

To provide more fine-grained control over user access use the **Viewer** base role plus one of more of these additional permissions:

- Exception Reviewer
- Exception Requester
- Integrations Manager
- Policy Editor
- Policy Manager
- Query Pack Editor
- Query Pack Manager
- SLA Manager
- Ticket Creator
- Ticket Manager

## Add team members to an organization

To add additional team members to an organization:

1. [Navigate](/platform/start/navigate/) to the organization to which you want to add a team member.

2. In the side navigation bar, select **Settings**.

3. Select the **Members** tab.

4. Select the **INVITE MEMBER** button.

5. Enter the email address and select a role for the team member.

6. Select **ADD**.

The team member receives an invitation inviting them to the organization.

## Add team members to a space

To add additional team members to a space:

1. [Navigate](/platform/start/navigate/) to the space to which you want to add a team member.

2. In the side navigation bar, select **Settings**.

3. Select the **Members** tab.

4. Select the **INVITE MEMBER** button.

5. Enter the email address and select a role for the team member.

6. Select **ADD**.

The team member receives an invitation inviting them to the space.

## Resend or revoke an invitation

1. [Navigate](/platform/start/navigate/) to the organization or space in which you want to resend or revoke an invitation.

2. In the side navigation bar, select **Settings**.

3. Select the **Members** tab.

4. To see pending invitations, select the **INVITATIONS** tab.

   ![Managing team invites](/img/platform/maintain/access/invitations.png)
   - To resend an invitation, select the circular arrow icon beside the invitation's status.

   - To revoke an invitation, select the X icon beside the invitation's status.

## Edit a team member's role

1. [Navigate](/platform/start/navigate/) to the organization or space to which you want to edit a team member's access.

2. In the side navigation bar, select **Settings**.

3. Select the **Members** tab.

4. In the row for the team member you want to edit, select the three vertical dots and then select **Edit**.

5. Select the new role and select the **SAVE** button.

## Delete a team member

1. [Navigate](/platform/start/navigate/) to the organization or space to which you want to remove a team member's access.

2. In the side navigation bar, select **Settings**.

3. Select the **Members** tab.

4. In the row for the team member you want to remove, select the three vertical dots and then select **Delete**.

---
