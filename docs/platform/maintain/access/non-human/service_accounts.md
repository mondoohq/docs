---
title: Create and Manage Service Accounts
sidebar_label: Manage Service Accounts
sidebar_position: 2
description: Create and manage service accounts that provide machine access to Mondoo Platform.
image: /img/featured_img/mondoo-feature.jpg
---

You can use a service account to authenticate external services (such as CI pipelines) with the Mondoo Platform APIs. Clients use service account credentials to authorize themselves with Mondoo APIs and perform actions within the permissions granted to the service account.

The account and certificate you generate can provide access to a single space or all spaces within an organization. Space service accounts are scoped to the space where you create them; they can't access any other space in the organization. Organization service accounts are scoped to the organization where you create them; they can access all spaces in the organization but can't access any other organization.

Every service account has permissions that limit the actions it can perform.

One example for relying on a service account is in a CI/CD workflow in which worker nodes test builds of infrastructure and applications. You can create a service account that can access the policies in a space and execute the policies on builds to assess security risks.

import Partial from "../../../partials/\_editor-owner.mdx";

<Partial />{" "}

## Generate a service account for access to a single space

1. [Navigate](/platform/start/navigate/) to the space in which you want to create a service account.

2. In the left navigation, select **Settings**. Then select the **Service Accounts** tab.

3. Select the plus symbol on the right of the page.

   ![Add a service account to a Mondoo organization](/img/platform/maintain/access/add-service-account.png)

4. Enter a unique name and description for the service account that help you recognize its purpose.

5. Check the Mondoo permissions you want to give to programs that use this service account:
   - **Viewer** permissions let the program browse most information in the space but not make changes.

   - **Editor** permissions let the program make all changes possible in the space except deleting the space itself or reporting scan results.

   - **Owner** permissions let the program make all changes possible in the space except reporting scan results.

   - **Agent** permissions let the program read and use policy bundles and query packs and report the results to the space.

6. Select **GENERATE SERVICE ACCOUNT**.

7. To download the service account's credentials in a .JSON file, select the **DOWNLOAD CREDENTIALS** button. Or you can select the copy icon in the **Plain .JSON** text box to copy the credentials for the new service account.

   If you need base64-encoded credentials, select the copy icon in the **Base64** text box instead.

   ![Get Mondoo service account credentials](/img/platform/maintain/access/credentials.png)

8. Select the **FINALIZE** button.

## Generate a service account for access to all spaces in an organization

1. [Navigate](/platform/start/navigate/) to the organization in which you want to create a service account.

2. In the left navigation, select **Settings**. Then select the **Service Accounts** tab.

3. Select the plus symbol on the right of the page.

4. Enter a unique name and description for the service account that helps you recognize its purpose.

5. Check the Mondoo permissions you want to give to programs that use this service account:
   - **Viewer** permissions let the program browse most information in all spaces in the organization but not make changes.

   - **Editor** permissions let the program make all changes possible in all spaces in the organization except deleting the organization or spaces or reporting scan results.

   - **Owner** permissions let the program make all changes possible in the space except reporting scan results.

   - **Agent** permissions let the program read and use policy bundles and query packs and report the results to spaces in the organization.

6. Select **GENERATE SERVICE ACCOUNT**.

7. To download the service account's credentials in a .JSON file, select the **DOWNLOAD CREDENTIALS** button. Or you can select the copy icon in the **Plain .JSON** text box to copy the credentials for the new service account.

   If you need base64-encoded credentials, select the copy icon in the **Base64** text box instead.

8. Select the **FINALIZE** button.

## Decrypt base64 service account to use with cnspec

```shell
echo <base64_credentials> | base64 -d > mondoo.json
```

Configure cnspec to use the mondoo.json file by either passing the `--config /path/to/mondoo.json` flag or by setting the `MONDOO_CONFIG_PATH` environment variable.

## Change a service account's permissions

1. [Navigate](/platform/start/navigate/) to the organization or space containing the service account.

2. In the left navigation, select **Settings**. Then select the **Service Accounts** tab.

3. Search for or scroll to the service account you want to change and select it.

   ![Manage service account tokens](/img/platform/maintain/access/select-service-account.png)

4. Select the **PERMISSIONS** button.

5. Change the permissions as desired. To learn about each permission, read the previous sections.

6. Select the **SET PERMISSIONS** button.

## Delete a service account

1. [Navigate](/platform/start/navigate/) to the organization or space containing the service account.

2. In the left navigation, select **Settings**. Then select the **Service Accounts** tab.

3. Search for or scroll to the service account you want to delete and select it.

   ![Manage service accounts](/img/platform/maintain/access/select-service-account.png)

4. Select the **DELETE** button and select the **DELETE** button to confirm.

---
