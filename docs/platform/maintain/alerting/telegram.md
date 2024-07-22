---
title: Receive Telegram Alerts from Mondoo
sidebar_label: Telegram
sidebar_position: 5
description: Send Mondoo alerts to Telegram.
image: /img/featured_img/mondoo-feature.jpg
---

You can configure Mondoo to send a message to a Telegram account whenever there's a change to an asset's security score. You do this by integrating Telegram with the Mondoo space from which you want to receive alerts.

Before you set up the integration, you must create Telegram bot token and get your Telegram chat ID.

## Create a Telegram bot token

1. Open Telegram and search for the [@BotFather](https://telegram.me/botfather) username. Then start a new conversation with @BotFather with `/newbot`. `@BotFather` responds:

   ![Telegram Botfather](/img/platform/maintain/alerting/telegram/telegram-botfather.png)

2. During the conversation, the bot provides a Telegram access token:

> Use this token to access the HTTP API:
> `<telegram-access-token>`

## Get your Telegram chat ID

1. Create a new chat group in Telegram.

   ![Create a new chat group](/img/platform/maintain/alerting/telegram/telegram-new-group.png)

2. Invite the [@myidbot](https://telegram.me/myidbot).

   ![Invite the myidbot](/img/platform/maintain/alerting/telegram/telegram-new-group-idbot.png)

3. Enter a chat group name.

   ![Configure the group name](/img/platform/maintain/alerting/telegram/telegram-new-group-name.png)

4. Ask the myidbot `/getgroupid@myidbot` for the chat ID.

   ![Ask the myidbot for the chat ID](/img/platform/maintain/alerting/telegram/telegram-chatid.png)

5. Uninvite `@myidbot`.

## Set up the integration

import Partial from "../../partials/\_editor-owner.mdx";

<Partial />{" "}

1. In the [Mondoo Console](https://console.mondoo.com), [navigate to the space](/platform/start/navigate) for which you want to see Telegram alerts.

2. In the side navigation bar, under **Integrations**, select **Add New Integration**.

3. Scroll down to **Chat Ops** and select **Telegram**.

   ![Telegram Integration Setup](/img/platform/maintain/alerting/telegram/telegram-mondoo-configure.png)

4. On the right side of the page, set the toggle to **Enabled**.

5. In the **Chat ID** box, paste the Telegram chat ID that `@myidbot` provided in the instructions above.

6. In the **Secret** box, paste the Telegram secret that `@botfather` provided in the instructions above.

7. Select the **SAVE** button.

---
