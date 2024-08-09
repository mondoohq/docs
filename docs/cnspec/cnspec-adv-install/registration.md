---
title: Register cnspec
sidebar_label: Register cnspec with Mondoo
sidebar_position: 7
displayed_sidebar: cnspec
description: This page provides details on registering cnspec with Mondoo Platform.
image: /img/featured_img/mondoo-feature.jpg
---

If you install cnspec on an asset using a system package instead of Mondoo’s automated installation script, you must register the asset manually.

:::note

If you need to _automate_ registering cnspec, read [Registering cnspec Using a Credentials File](registration-keys.md).

:::

1. Log into the [Mondoo Console](https://console.mondoo.com).

2. [Navigate](/platform/start/navigate/) to the [region](/docs/platform/start/organize/regions.md), [organization](/docs/platform/start/organize/organizations.md), and [space](/docs/platform/start/organize/spaces.md) where you want to see the new asset's scan results.

3. In the left navigation, under **Integrations**, select **Add New Integration**.

4. Select your operating system and copy the registration token.

5. Open a terminal and run this command:

   ```bash title="Register cnspec"
   cnspec login --token "<PASTE_YOUR_TOKEN_HERE>"
   ```

   This command uses the token to create a service account that lets cnspec report results to Mondoo Platform.

:::note IMPORTANT

For cnspec to continuously transmit results to the Mondoo Platform, the Mondoo configuration must be stored in a specific location. To do this, use the cnspec `--config` parameter:

- Windows:
  `cnspec login --token "<PASTE_YOUR_TOKEN_HERE>" --config "C:\ProgramData\Mondoo\mondoo.yml"`
- Linux:
  `cnspec login --token "<PASTE_YOUR_TOKEN_HERE>" --config "/etc/opt/mondoo/mondoo.yml"`

:::

:::info

Communication with Mondoo Platform is encrypted using HTTPS. The payload is signed to ensure it has not been tampered with.

:::

## Validate registration

The `cnspec status` command validates cnspec registration and ensures that communication with Mondoo Platform is successful.

```bash title="Unregistered cnspec"
cnspec status
→ loaded configuration from /Users/stella/.config/mondoo/mondoo.yml using source default
→ Platform:		macos
→ Version:		13.4.1
→ Hostname:		stella.home
→ IP:			192.168.254.21
→ Time:			2024-03-23T12:07:41-08:00
→ Version:		10.8.4 (API Version: 10)
→ Latest Version:	10.8.4
→ Installed Providers:	core | os | mock
→ API ConnectionConfig:	https://us.api.mondoo.com
→ API Status:		SERVING
→ API Time:		2024-03-23T20:07:42Z
→ API Version:		10
x client is not registered
x The Mondoo Platform credentials provided at /root/.config/mondoo/mondoo.yml didn't successfully authenticate with Mondoo Platform. Please re-authenticate with Mondoo Platform. To learn how, read https://mondoo.com/docs/cnspec/cnspec-adv-install/registration/.
```

```bash title="Correctly registered client"
cnspec status
→ loaded configuration from /Users/mwezi/.config/mondoo/mondoo.yml using source default
→ Platform:		macos
→ Version:		13.4.1
→ Hostname:		mwezi.home
→ IP:			192.168.254.21
→ Time:			2024-03-23T12:07:41-08:00
→ Version:		10.8.4 (API Version: 10)
→ Latest Version:	10.8.4
→ Installed Providers:	arista | aws | azure | core | mock | os
→ API ConnectionConfig:	https://api.edge.mondoo.com
→ API Status:		SERVING
→ API Time:		2024-03-23T20:07:42Z
→ API Version:		10
→ Owner:		//captain.api.mondoo.app/spaces/lunalectric-team-workstations
→ Client:		//agents.api.mondoo.app/spaces/lunalectric-team-workstations/agents/2SARlZgQnFLAzj7jfiS1Fx2HBz8
→ Service Account:      //agents.api.mondoo.app/spaces/lunalectric-team-workstations/serviceaccounts/2bMtksUk9EjrI5MC3tTf6UmhNC2
→ client is registered
→ client authenticated successfully
```

```bash title="Invalid cnspec registration"
cnspec status
→ loaded configuration from /Users/cosmo/.config/mondoo/mondoo.yml using source default
→ Platform:		macos
→ Version:		13.4.1
→ Hostname:		cosmo.home
→ IP:			192.168.254.21
→ Time:			2024-03-23T12:07:41-08:00
→ Version:		10.8.4 (API Version: 10)
→ Latest Version:	10.8.4
→ Installed Providers:	arista | aws | azure | core | mock | os
→ API ConnectionConfig:	https://api.edge.mondoo.com
→ API Status:		SERVING
→ API Time:		2024-03-23T20:07:42Z
→ API Version:		10
→ Owner:		//captain.api.mondoo.app/spaces/lunalectric-team-workstations
→ Client:		//agents.api.mondoo.app/spaces/lunalectric-team-workstations/agents/2SARlZgQnFLAzj7jfiS1Fx2HBz8
→ Service Account:      //agents.api.mondoo.app/spaces/lunalectric-team-workstations/serviceaccounts/2bMtksUk9EjrI5MC3tTf6UmhNC2
→ client is registered
x could not connect to mondoo platform error="rpc error: code = Unauthenticated desc = request permission unauthenticated"permission unauthenticated"
```

```bash title="No current system time (clock skew detected)"
cnspec status
cnspec status
→ loaded configuration from /Users/cosmo/.config/mondoo/mondoo.yml using source default
→ Platform:		macos
→ Version:		13.4.1
→ Hostname:		tsuki.home
→ IP:			192.168.254.21
→ Time:			2024-03-23T12:07:41-08:00
→ Version:		10.8.4 (API Version: 10)
→ Latest Version:	10.8.4
→ Installed Providers:	 aws | azure | core | mock | os
→ API ConnectionConfig:	https://api.edge.mondoo.com
→ API Status:		SERVING
→ API Time:		2024-03-23T20:07:42Z
→ API Version:		10
→ Owner:		//captain.api.mondoo.app/spaces/lunalectric-team-workstations
→ Client:		//agents.api.mondoo.app/spaces/lunalectric-team-workstations/agents/2SARlZgQnFLAzj7jfiS1Fx2HBz8
→ Service Account:      //agents.api.mondoo.app/spaces/lunalectric-team-workstations/serviceaccounts/2bMtksUk9EjrI5MC3tTf6UmhNC2
→ client is registered
→ client authenticated successfully
! possible clock skew detected: 72h0m6.277868s
```

## Specify a proxy server for communication with Mondoo

You can specify a proxy server for communication between cnspec and Mondoo Platform. This is useful if your default system proxy restricts communication, or if you need to monitor different types of traffic.

1. Find the Mondoo configuration file: `/etc/opt/mondoo/mondoo.yml`.

2. Add this line to `mondoo.yml`:

   ```yaml
   api_proxy: https://1.1.1.1:8080
   ```

---
