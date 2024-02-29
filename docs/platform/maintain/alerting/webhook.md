---
title: Receive Webhook Alerts from Mondoo
sidebar_label: Webhook
sidebar_position: 6
description: Integrate Mondoo alerts with API webhooks.
image: /img/featured_img/mondoo-feature.jpg
---

Even if Mondoo doesn't have dedicated support for your messaging platform, you can configure Mondoo to send you alerts. A _webhook_ makes this possible. Mondoo's custom webhook integration posts asset alerts as JSON-encoded data to an HTTP endpoint. To learn how to create a webhook, read your messaging platform documentation.

1. In the [Mondoo Console](https://console.mondoo.com), [navigate to the space](/platform/start/navigate) for which you want to send alerts.

2. In the side navigation bar, under **Integrations**, select **Add New Integration**.

3. Scroll down to **Chat Ops** and select **Outbound Webhook**.

   ![Configure webhook in Mondoo](/img/platform/maintain/alerting/webhook/webhook-mondoo-configure.png)

4. On the right side of the page, set the toggle to **Enabled**.

5. In the **Webhook URL** box, paste the URL for your messaging platform's HTTP endpoint URL.

6. Select the **SAVE** button.

---
