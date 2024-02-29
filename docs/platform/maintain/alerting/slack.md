---
title: Receive Slack Alerts from Mondoo
sidebar_label: Slack
sidebar_position: 3
description: Send Mondoo alerts to Slack.
image: /img/featured_img/mondoo-feature.jpg
---

You can configure Mondoo to send a message to a Slack channel whenever there's a change to an asset's security score. You do this by integrating Slack with the Mondoo space from which you want to receive alerts.

Before you set up the integration, you must create an incoming webhook app for Slack.

## Create and customize an incoming webhook in Slack

![Slack Directory](/img/platform/maintain/alerting/slack/slack-webhook-directory.png)

1. Open the [Incoming WebHooks app](https://slack.com/apps/A0F7XDUAZ-incoming-webhooks) in your browser and select **Add to Slack**.

   ![Slack webhook Directory](/img/platform/maintain/alerting/slack/slack-webhook-create.png)

2. In the **Post to Channel** configuration, select the name of the Slack channel that you want to send alerts to, and then select **Add Incoming WebHooks integration**.

   ![Slack webhook Directory](/img/platform/maintain/alerting/slack/slack-webhook-created.png)

3. Under **Sending Messages**, customize the message.

   If you want, configure the details of the webhook, including a descriptive name, label, and icon.

4. Select **Save Settings**.

## Set up the integration with your Mondoo space

1. In the [Mondoo Console](https://console.mondoo.com), [navigate to the space](/platform/start/navigate) for which you want to see Slack alerts.

2. In the side navigation bar, under **Integrations**, select **Add New Integration**.

3. Scroll down to **Chat Ops** and select **Slack**.

   ![Configure Slack integration](/img/platform/maintain/alerting/slack/slack-mondoo-configure.png)

4. On the right side of the page, set the toggle to **Enabled**.

5. In the **URL** box, paste the URL you copied.

6. Select the **SAVE** button.

---
