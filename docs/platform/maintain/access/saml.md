---
title: Manage Mondoo Access with Microsoft Entra ID and SAML
sidebar_label: Microsoft Entra ID - SAML
sidebar_position: 3
description: Configure SAML/Microsoft Entra ID support for Mondoo Platform.
image: /img/featured_img/mondoo-feature.jpg
---

The integration of Mondoo with Microsoft Entra ID (formerly Active Directory) provides you with single sign-on (SSO), which lets you:

- Control who has access to Mondoo using Entra
- Enable users to log into Mondoo with their Entra account
- Centrally manage users with Entra

## Prerequisites

To configure the integration, you need:

- An Microsoft Entra ID subscription
- Single sign-on (SSO) enabled in Mondoo (contact your Mondoo representative)

For SSO you need to establish a link relationship between an Entra user and the related user in Mondoo. Mondoo supports just-in-time user provisioning.

## Configure Entra SSO

1. Sign in to the Azure portal.

2. Select **Microsoft Entra ID**.

3. Navigate to **Enterprise Applications** and then select **All Applications**.

4. To add new application, select **New application**.

5. In the **Add from the gallery** section, select **Create your own application**.

![Entra Enterprise Applications](/img/platform/maintain/access/saml/create-own-app.png)

6. Type the application name, select **Integrate any other application you don't find in the gallery**, and select the **Create** button. Wait while the app is added to your Azure tenant.

7. Navigate to **Single sign-on** and select SAML.

![Entra Create SAML](/img/platform/maintain/access/saml/add-single-sign-on.png)

8. On the Basic SAML Configuration section, configure the application for IDP initiated mode:

   ![Entra SAML Configuration](/img/platform/maintain/access/saml/saml-config.png)

   - In the **Identifier** box, type a unique name using this pattern:

     `urn:mondoo:saml-YOUR-ORG-ID`

     For YOUR-ORG-ID, substitute the ID of the Mondoo organization you want to integrate. You can find it on the Organizations page in gray text below the Organization name. In the example image below, the organization ID is `lunalectric-us-org` so the identifier is `urn:mondoo:saml-lunalectric-us-org`.

     ![Organizations page](/img/platform/maintain/access/saml/org-id.png)

   - In the **Reply URL** box, type this URL: `https://auth.mondoo.app/__/auth/handler`

   - In the **Sign on URL** box, type this URL: `https://console.mondoo.com`

9. Select **Save** and close the panel.

10. On the SAML-based Sign-on page, scroll to step 3, **SAML Certificates**.

11. Locate **Certificate (Base64)** and select **Download** beside it to save the certificate on your computer.

![Entra SAML Application](/img/platform/maintain/access/saml/download-cert.png)

12. Keep the SAML-based Sign-on page open and follow the steps below.

## Configure Mondoo SSO

1. In a new web browser window, sign in to Mondoo as an administrator.

2. Navigate to the organization you want to integrate with SAML.

3. Select **Settings** and select the **Authentication** tab.

   ![Mondoo SSO Configuration](/img/platform/maintain/access/saml/authentication.png)

4. Under SAML 2.0 Connection, select **Configure**.

   ![Mondoo SSO Configuration](/img/platform/maintain/access/saml/authentication-detail.png)

5. Return to your browser with the SAML-based Sign-on page open so you can copy and paste these values:

   - In the Mondoo **Single Sign-ON URL** box, paste the value from the Entra **Login URL**.

   - In the Mondoo **Identity Provider Entity ID** box, paste the value from **Microsoft Entra Identifier**.

   - In the Mondoo **Service Provider Entity ID** box, paste your the value from **Logout URL**.

6. In the **X.509 Certificates** box, paste the content of the Base64-encoded certificate that you downloaded and select `Save`

7. Enable the SAML integration by toggling the `Enabled` switch.

## Assign users

1. Return to your browser with the SAML-based Sign-on page.

2. Select **Users and groups**.

3. Select **Add user**, then add the users and groups that should have access to Mondoo.

   ![Entra ID User Assignment](/img/platform/maintain/access/saml/users.png)

4. Confirm the assignments in the **Add Assignment** dialog, select the **Assign** button.
