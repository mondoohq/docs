---
title: Secure Google Workspace with Mondoo
sidebar_label: Google Workspace
sidebar_position: 4
description: Set up a Google Workspace integration in Mondoo
---

The Mondoo Google Workspace integration lets you continuously scan your Google Workspace resources, such as users and applications. It finds misconfigurations and vulnerabilities that put your organization at risk. You deploy the integration once and always get the latest security assessments for new accounts and resources.

## Configure access to the Google Workspace API

:::note

These steps for configuring [Admin SDK API](https://developers.google.com/admin-sdk) access to your
Google Workspace environment rely on Google Cloud (GCP) even if you aren't otherwise using GCP.

:::

1. [Create a Google Workspace service account](https://support.google.com/a/answer/7378726).

   - In addition to the APIs that Google requires, also enable:

     - Cloud Identity API

     - Google Drive API

   - After creating the service account, be sure to record the **Unique ID** on the details page. This is the Client ID to use in the next step.

   - Be sure to download and protect the JSON credentials file.

2. Log into the [Google Workspace Admin Portal](https://admin.google.com).

3. In the left-side navigation, select **Security -> Access and data controls -> API controls**.

4. Select [**Domain-wide Delegation**](https://developers.google.com/workspace/guides/create-credentials#delegate_domain-wide_authority_to_your_service_account) and then select **Add new**.

5. For the **Client ID** enter the **Unique ID** of the service account you created.

6. Paste this comma-delimited list to add all 16 read-only OAuth scopes:

   ```text
   https://www.googleapis.com/auth/admin.chrome.printers.readonly,https://www.googleapis.com/auth/admin.directory.customer.readonly,https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly,https://www.googleapis.com/auth/admin.directory.device.mobile.readonly,https://www.googleapis.com/auth/admin.directory.domain.readonly,https://www.googleapis.com/auth/admin.directory.group.member.readonly,https://www.googleapis.com/auth/admin.directory.group.readonly,https://www.googleapis.com/auth/admin.directory.orgunit.readonly,https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly,https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly,https://www.googleapis.com/auth/admin.directory.user.alias.readonly,https://www.googleapis.com/auth/admin.directory.user.readonly,https://www.googleapis.com/auth/admin.directory.userschema.readonly,https://www.googleapis.com/auth/admin.reports.audit.readonly,https://www.googleapis.com/auth/admin.reports.usage.readonly,https://www.googleapis.com/auth/admin.directory.user.security,https://www.googleapis.com/auth/cloud-identity.groups.readonly
   ```

7. In the [Google Workspace Admin Portal](https://admin.google.com), navigate to **Account -> Account Settings** and record the **Customer ID**.

## Add a new Google Workspace integration

1. Access the Integrations > Add > Google Workspace page in one of two ways:

   - New space setup: After creating a new Mondoo account or creating a new space, the initial setup guide welcomes you. Select **BROWSE INTEGRATIONS** and then select **Google Workspace**.

     ![Welcome to Mondoo Page](/img/platform/start/welcome_to_mondoo.png)

   - INTEGRATIONS page: In the side navigation bar, under **INTEGRATIONS**, select **Add New Integration**. Under SaaS, select **Google Workspace**.

     ![Add a Google Workspace Integration in Mondoo](/img/platform/infra/saas/gw/gw-top.png)

2. In the **Choose an integration name** box, enter a name for the integration. Make it a name that lets you easily recognize the Google Workspace account.

3. In the **Mandated user's email** box, enter the email address of a Google Workspace user with super admin access. Mondoo relies on this user's privileges to access the information it needs. You can choose an existing super admin or create one just for Mondoo.

4. Under **Provide your Google Service Account config**, upload the GCP service account's JSON key that you downloaded in the previous section:

   Drag the file and drop it in the **Drag and drop your .json file here** box.

   OR

   In the **Drag and drop your .json file here** box, select the cloud icon and choose the file to upload.

   ![integration-create-image](/img/platform/infra/saas/gw/gw-bottom.png)

5. To complete the integration, select the **START SCANNING** button.

6. On the Recommended Policies page, enable the policies on which you want to base assessments of your Google Workspace environment. To learn more, read [Manage Policies](/platform/security/posture/policies/).

   Mondoo begins scanning the assets in your Google Workspace and, when completed, presents the results on the INVENTORY page.

## Learn more

For more information, explore the complete [Mondoo Google Workspace Resource Pack Reference](/mql/resources/google-workspace-pack/).

---
