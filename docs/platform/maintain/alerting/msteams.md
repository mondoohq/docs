---
title: Receive Microsoft Teams Alerts from Mondoo
sidebar_label: Microsoft Teams
sidebar_position: 4
description: Send Mondoo alerts to Microsoft Teams.
image: /img/featured_img/mondoo-feature.jpg
---

You can configure Mondoo to send a message to a Microsoft Teams channel whenever there's a change to an asset's security score. You do this by integrating Microsoft Teams with the Mondoo space from which you want to receive alerts.

Before you set up the integration, you must generate a new Microsoft Teams webhook URL.

## Create a webhook in Microsoft Teams

1. In Microsoft Teams app, select the team and channel where you want Mondoo to send alerts.

2. On the right side of the selected channel, select the ellipsis (...).

3. Select **Connectors**.

   ![Add a new Connector to your channel](/img/platform/maintain/alerting/msteams/msteams-webhook-new.png)

4. Search the Incoming webhook connector and select **Add** or **Configure**.

   ![Select a webhook in Microsoft Teams](/img/platform/maintain/alerting/msteams/msteams-webhook-add.png)

5. Provide a webhook name and icon and select Create.

   ![Create a new webhook in Microsoft Teams](/img/platform/maintain/alerting/msteams/msteams-webhook-create.png)

6. Select the Copy icon next to the generated webhook URL.

   ![Copy the confirmed URL](/img/platform/maintain/alerting/msteams/msteams-webhook-created.png)

## Set up the integration with your Mondoo space

1. In the [Mondoo Console](https://console.mondoo.com), [navigate to the space](/platform/start/navigate) for which you want to see Microsoft Teams alerts.

2. In the side navigation bar, under **Integrations**, select **Add New Integration**.

3. Scroll down to **Chat Ops** and select **Microsoft Teams**.

   ![Configure Microsoft Teams webhook in Mondoo](/img/platform/maintain/alerting/msteams/msteams-mondoo-configure.png)

4. On the right side of the page, set the toggle to **Enabled**.

5. In the **URL** box, paste the URL you copied in Microsoft Teams.

6. Select the **SAVE** button.

---
