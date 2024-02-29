---
title: Register cnspec Using a Credentials File
sidebar_label: Register cnspec Using a Credentials File
sidebar_position: 8
displayed_sidebar: cnspec
description: This page provides details on registering cnspec with Mondoo Platform using a credentials file.
image: /img/featured_img/mondoo-feature.jpg
---

cnspec must be registered with Mondoo Platform in order to download policies and report results. Typically you [register cnspec using a temporary token](registration.md). However, to ease automation, you can use a client credentials file instead. A common example is when you're integrating cnspec into your CI/CD pipeline.

:::caution

The credentials file includes a private key. Keep this credential safe!

:::

1. Open the [Mondoo Console](https://console.mondoo.com).

2. [Navigate](/platform/start/navigate/) to the space where you want to view results.

3. In the left navigation, under **Integrations**, select **Add New Integration**.

4. Under **Supply Chain**, select **Generate Long-Lived Credentials**.

5. Select the **GENERATE NEW CREDENTIALS** button.

6. Copy the JSON string and save it in a .json file.

## Validate registration

The `cnspec status` command validates cnspec registration and ensures that communication with Mondoo Platform is successful.

```bash title="Unregistered cnspec"
cnspec status
→ Time:		2023-01-13T16:12:44-08:00
→ Version:	7.12.1 (API Version: 7)
→ API ConnectionConfig:	https://us.api.mondoo.com
→ API Status:	SERVING
→ API Time:	2023-01-14T00:12:45Z
→ API Version:	7
→ Space:
x client is not registered
x could not connect to mondoo platform
```

```bash title="Correctly registered client"
cnspec status
→ Time:		2023-01-13T16:12:44-08:00
→ Version:	7.12.1 (API Version: 7)
→ API ConnectionConfig:	https://us.api.mondoo.com
→ API Status:	SERVING
→ API Time:	2023-01-14T00:11:18Z
→ API Version:	7
→ Space:	//captain.api.mondoo.app/spaces/lunalectric-prod-eks
→ Client:	//agents.api.mondoo.app/spaces/lunalectric-prod-eks/agents/1N9EGTzvlizF1n7vPtz21y7XFA3
→ Service Account:	//agents.api.mondoo.app/spaces/lunalectric-prod-eks/serviceaccounts/1N9EGTzvlizF1n7vPtz21y7XFA3
→ client is registered
→ client authenticated successfully
```

```bash title="Invalid cnspec registration"
cnspec status
→ Time:		2023-01-13T16:17:50-08:00
→ Version:	7.12.1 (API Version: 7)
→ API ConnectionConfig:	https://us.api.mondoo.com
→ API Status:	SERVING
→ API Time:	2023-01-14T00:17:50Z
→ API Version:	7
→ Space:	//captain.api.mondoo.app/spaces/lunalectric-prod-eks
→ Client:	//agents.api.mondoo.app/spaces/lunalectric-prod-eks/agents/1N9EGTzvlizF1n7vPtz21y7XFA3
→ Service Account:	//agents.api.mondoo.app/spaces/lunalectric-prod-eks/serviceaccounts/1N9EGTzvlizF1n7vPtz21y7XFA3
→ client is registered
x could not connect to mondoo platform error="rpc error: code = Unauthenticated desc = request permission unauthenticated"permission unauthenticated"
```

```bash title="No current system time (clock skew detected)"
cnspec status
→ Time:		2023-01-10T16:19:39-08:00
→ Version:	7.12.1 (API Version: 7)
→ API ConnectionConfig:	https://us.api.mondoo.com
→ API Status:	SERVING
→ API Time:	2023-01-14T00:19:46Z
→ API Version:	7
→ Space:	//captain.api.mondoo.app/spaces/lunalectric-prod-eks
→ Client:	//agents.api.mondoo.app/spaces/lunalectric-prod-eks/agents/1N9EGTzvlizF1n7vPtz21y7XFA3
→ Service Account:	//agents.api.mondoo.app/spaces/lunalectric-prod-eks/serviceaccounts/1N9EGTzvlizF1n7vPtz21y7XFA3
→ client is registered
→ client authenticated successfully
! possible clock skew detected: 72h0m6.277868s
```

---
