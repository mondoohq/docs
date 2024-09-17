---
title: Receive Microsoft Teams Alerts from Mondoo
sidebar_label: Microsoft Teams
sidebar_position: 4
description: Send Mondoo alerts to Microsoft Teams.
image: /img/featured_img/mondoo-feature.jpg
---

You can configure Mondoo to send a message to a Microsoft Teams channel whenever there's a change to an asset's security score. You do this by integrating Microsoft Teams with the Mondoo space from which you want to receive alerts.

Before you set up the integration, you must first create a new workflow in Microsoft Teams.

## Create a webhook in Microsoft Teams

1. In Microsoft Teams, find the Workflows app and (if it isn't already added) add it.

   ![Find the Workflows app in Microsoft Teams](/img/platform/maintain/alerting/msteams/app.png)

   ![Add the Workflows app in Microsoft Teams](/img/platform/maintain/alerting/msteams/add-workflows.png)

2. Open the Workflows app.

   ![Workflows app in Microsoft Teams](/img/platform/maintain/alerting/msteams/workflows.png)

3. Under **Start with a popular Teams template**, select **Post to a channel when a webhook request is received**.

   ![Create a new flow in Teams](/img/platform/maintain/alerting/msteams/create-flow.png)

4. In the **Flow name** box, type a name, such as **Mondoo Alerts**, then select the **Next** button.

   ![Configure a new flow Teams](/img/platform/maintain/alerting/msteams/set-up-flow.png)

5. Choose the team and channel where you want Mondoo to send alerts, then select the **Next** button.

   ![Teams URL for Mondoo webhook](/img/platform/maintain/alerting/msteams/copy-url.png)

6. Copy the URL that Microsoft Teams provides. You need this for the next steps.

## Set up the integration with your Mondoo space

import Partial from "../../partials/\_editor-owner.mdx";

<Partial />{" "}

1. In the [Mondoo Console](https://console.mondoo.com), [navigate to the space](/platform/start/navigate) for which you want to see Microsoft Teams alerts.

2. In the side navigation bar, under **Integrations**, select **Add New Integration**.

3. Scroll down to **Chat Ops** and select **Microsoft Teams**.

   ![Configure Microsoft Teams webhook in Mondoo](/img/platform/maintain/alerting/msteams/msteams-mondoo-configure.png)

4. On the right side of the page, set the toggle to **Enabled**.

5. In the **URL** box, paste the URL you copied in Microsoft Teams.

6. Select the **SAVE** button.

---
