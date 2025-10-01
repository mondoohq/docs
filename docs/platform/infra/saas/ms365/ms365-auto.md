---
title: Automatically Set Up Continuous Scanning for Microsoft 365
sidebar_label: Automatically Set Up Continuous Scanning
sidebar_position: 2
description: Set up Mondoo to assess Microsoft 365 for security misconfigurations.
image: /img/featured_img/mondoo-365.jpg
---

The Mondoo Microsoft 365 integration lets you continuously scan your Microsoft 365 resources, such as users and applications. It finds misconfigurations and vulnerabilities that put your organization at risk. You deploy the integration once and always get the latest security assessments for new accounts and resources.

## Prerequisites

Before you integrate Microsoft 365 with Mondoo, be sure you have:

- A Mondoo account with Editor or Owner permissions for the space in which you want to add the integration.

- [Azure Cloud Shell](https://learn.microsoft.com/en-us/azure/cloud-shell/overview)

- An [Azure account](https://azure.microsoft.com/free/?WT.mc_id=A261C142F) with an active subscription and permission to manage applications in Microsoft Entra ID (formerly Active Directory). Any of these [Entra built-in roles](https://learn.microsoft.com/en-us/azure/active-directory/roles/permissions-reference) include the required permissions:
  - [Global Administrator](https://learn.microsoft.com/en-us/azure/active-directory/roles/permissions-reference#global-administrator)

  - [Application administrator](https://learn.microsoft.com/en-us/azure/active-directory/roles/permissions-reference#application-administrator)

  - [Cloud application administrator](https://learn.microsoft.com/en-us/azure/active-directory/roles/permissions-reference#cloud-application-administrator)

:::tip

In the Azure portal you can see what roles your user account has: Go to **Microsoft Entra ID > Users > (your user account) > Assigned roles**.

:::

## Add a new Microsoft 365 integration in the Mondoo console

Create an integration to set up continuous Mondoo scanning of your Microsoft 365 environment.

1. Access the Integrations > Add > Microsoft 365 page in one of two ways:
   - New space setup: After creating a new Mondoo account or creating a new space, the initial setup guide welcomes you. Select **BROWSE INTEGRATIONS** and then select **Microsoft 365**.

     ![Welcome to Mondoo Page](/img/platform/start/welcome_to_mondoo.png)

   - INTEGRATIONS page: In the side navigation bar, under **INTEGRATIONS**, select **Add New Integration**. Under SaaS, select **Microsoft 365**.

     ![Automated approach to adding an Microsoft 365 integration to Mondoo](/img/platform/infra/saas/ms365/auto-int.png)

2. Under **Copy the installation command**, you see a custom command that Mondoo generates for you. Running this command in Azure Cloud Shell creates the Mondoo Microsoft 365 integration for you.

   Mondoo names the integration for you. Integration names are visible in the Mondoo console and in reports. You can change the name in the command (in quotes after the --integration-name flag) or change it any time after you create the integration. The ID must be between 7 and 34 characters and can include lowercase letters, numbers, single quotes, hyphens, spaces, and exclamation points. It must start with a lowercase letter and end with a letter or number.

3. Select the copy icon in the installation command box to copy your customized command.

4. Select the **AZURE CLOUD SHELL** button to open Azure Cloud Shell.

   ![Azure Cloud Shell](/img/platform/infra/saas/ms365/cloud-shell.png)

5. Paste the copied command in Azure Cloud Shell and press the Enter or Return key. Respond to these prompts:

   ![Select a subscription](/img/platform/infra/saas/ms365/select-sub.png)

   a. When you select this **primary subscription**, you're specifying where Mondoo creates the resources it needs to perform scans. Use the down arrow key to select the subscription you want and then press Enter.

   ![Resources Mondoo will create in Azure](/img/platform/infra/saas/ms365/resources.png)

   b. The Mondoo automation shows how many resources it must create so it can scan your Microsoft 365 environment. Press the down arrow key to select **2. Show details** and then press Enter.

   ![Details of Microsoft 365 automated integration setup](/img/platform/infra/saas/ms365/details.png)

   c. Review the list of resources the Mondoo automation must create so it can scan your Microsoft 365 environment. Press Enter to continue the integration setup.

   ![Success creating a Mondoo Microsoft 365 integration](/img/platform/infra/saas/ms365/success.png)
   - When the Mondoo automation reports success, you're finished in Azure Cloud Shell. If you don't see the success message within 5 minutes, read the [Troubleshoot](#troubleshoot) section below.

6. Return to the Mondoo console and select the **START SCANNING** button.

7. On the Recommended Policies page, enable the policies on which you want to base assessments of your Microsoft 365 environment. To learn more, read [Manage Policies](/platform/security/posture/policies/).

8. Select **FINALIZE SETUP**.

Mondoo begins scanning your Microsoft 365 resources. When it completes, you can see results on the INVENTORY page. To learn more, read [Monitor Your Infrastructure Security](/platform/security/posture/monitor/).

## Troubleshoot

- If the Mondoo automation pauses more than two minutes after you choose the primary subscription, press Control+C to end the process. Paste the copied command and press Enter to run it a second time.

- If the automation fails, be sure you're logged in with an Azure user account that has the required privileges. To learn more, read the [Prerequisites](#prerequisites) section above.

- If you don't see your newly created integration in the Mondoo Console after you select policies and finalize setup, try refreshing the page in your browser.

## Renew application certificate

The application certificate created as part of adding the Microsoft 365 integration has a limited lifetime (by default 1 year). When this certificate expires the integration will no longer function.
Renewing the application certificate can be done from the Azure CLI:

1. Navigate to the app registration you created for Mondoo as part of the integration. Copy the application ID for the next steps.

2. Open the Azure Cloud Shell (top right of the window). We will be renewing the certificate with a newly created one.

3. Enter the following command, inserting the application ID you copied: `az ad app credential reset --id XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX --create-cert`

4. The certificate will be stored in your cloud shell. You can download it from there through the "Manage files" button of the Azure Cloud Shell.

5. In Mondoo console, navigate to the Integrations > Microsoft 365 > your M365 integration page.

6. Edit the integration and scroll down to point 5. You should see the following field where you can upload the created certificate:

   ![Refresh certificate image](/img/platform/infra/cloud/azure/refresh-app-cert.png)

7. Upload your newly created certificate and save your updated configuration. The Microsoft 365 integration will start using the new certificate for communication with M365.

## Next steps

- [Learn more about Mondoo](/platform/start/plat-what-is/)

- [Test or troubleshoot a Microsoft 365 integration](/platform/infra/saas/ms365/troubleshoot/)

- [Integrate Mondoo with other SaaS platforms in your infrastructure](/platform/infra/saas/overview/)

---
