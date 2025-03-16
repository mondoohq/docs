---
title: Harbor Container Registry
sidebar_label: Harbor Container Registry
sidebar_position: 6
displayed_sidebar: cnspec
description: This page provides an overview of how to use cnspec to scan Harbor Container Registry for vulnerabilities in your containers.
image: /img/featured_img/mondoo-feature.jpg
---

The [Harbor Registry](https://goharbor.io/) is an open source container registry. To learn how to set up the registry, read [Harbor Installation and Configuration](https://goharbor.io/docs/1.10/install-config/).

<!-- prettier-ignore -->
import Partial from "./_providers-note.mdx";

<Partial />{" "}

## Prerequisite

Log into docker with your Harbor credentials. cnspec uses Docker's configuration.

```bash
docker login -u admin -p Harbor12345 harbor.lunalectric.com
```

## Run an individual scan

> Note: If you are running Harbor with self-signed certificates, use the `--insecure` flag. It deactivates Mondoo certificate checks. We do not recommend to use a self-signed certificate in production

To scan the whole registry, run:

```bash
cnspec scan container registry harbor.lunalectric.com --insecure
```

To scan an individual repository, run:

```bash
cnspec scan container registry harbor.lunalectric.com/library/centos --insecure
```

## Harbor interrogation services

To complete this task, you must first create a Mondoo Platform account. To learn how, [contact Mondoo](https://mondoo.com/contact).

1. In the Mondoo Console, create a new, separate space for the Harbor integration.

2. Install cnspec on a machine that the Harbor registry can access or a machine that runs Harbor. To learn more, read [Install cnspec on Linux](/cnspec/cnspec-adv-install/linux.mdx). Register the agent with the created space.

3. Because normal service accounts do not have permission to fetch report results, you must elevate the service account. Run `cnspec status` and note your service account ID. This is an example:

   ```
   $ cnspec status
   → Hostname:	mondoo-harbor.lunalectric.com
   → IP:		192.168.178.22
   → Platform:	macos
   → Release:	11.5.2
   ...
   → Service Account:	//agents.api.mondoo.app/spaces/distracted-taussig-12345/serviceaccounts/1vCf14l6pSczU9pmhABELCABTk6
   → agent is registered
   → agent authenticated successfully
   ```

   In the example above, the service account ID is `1vCf14l6pSczU9pmhABELCABTk6`.

4. In the Mondoo Console, [navigate to your space](/platform/start/navigate/). In the left navigation, select **Settings**. Select the **Service Accounts** tab.

5. Select the service account and select the **PERMISSIONS** button. Check **Agent** and select the **CHECK PERMISSIONS** button.

6. By default, the Mondoo does not expose the Harbor API. You must edit the `token` value in the configuration file `/etc/opt/mondoo/mondoo.yml`. Follow this example:

   ```yaml
   ---
   space_mrn: //captain.api.mondoo.app/spaces/distracted-taussig-12345
   container_registries:
     token: abc123 # change this to a random long token to secure the api
     enable_harbor: true
   ```

7. Run `cnspec serve`:

   ```bash
   cnspec serve https://0.0.0.0:8990
   → loaded configuration from /Users/suki/.config/mondoo/mondoo.yml using source default
   → enabled beta feature to scan for container registries, normal serve is deactivated
   → use bearer token authentication token=abc123
   → enable health check url=/Health/Check
   → enable harbor webhook url=/harbor/
   → enable bearer authentication
   → start http server address=0.0.0.0:8990
   ```

8. Test the API:

   ```bash
   curl -H 'Accept: application/vnd.scanner.adapter.metadata+json; version=1.0' -H 'Authorization: Bearer abc123' http://0.0.0.0:8990/harbor/api/v1/metadata
   {"scanner":{"name":"Mondoo","vendor":"Mondoo, Inc","version":"Mondoo 5.2.0 (3b16ff833, unknown)"},"capabilities":[{"consumes_mime_types":["application/vnd.oci.image.manifest.v1+json","application/vnd.docker.distribution.manifest.v2+json"],"produces_mime_types":["application/vnd.scanner.adapter.vuln.report.harbor+json; version=1.0","application/vnd.security.vulnerability.report; version=1.1"]}],"properties":{"harbor.scanner-adapter/registry-authorization-type":"Bearer","harbor.scanner-adapter/scanner-type":"os-package-vulnerability"}}
   ```

9. Open Harbor and configure the public IP of the machine running cnspec.

   ![Configure Mondoo as Interrogation Services](/img/cnspec/supplychain/registry/harbor/harbor_configure_1.png)

   ![Configure Mondoo as Interrogation Services](/img/cnspec/supplychain/registry/harbor/harbor_configure_2.png)

10. Navigate to the container image you want to scan and select the scan button

   ![Configure Mondoo as Interrogation Services](/img/cnspec/supplychain/registry/harbor/harbor_scan_1.png)

   ![Configure Mondoo as Interrogation Services](/img/cnspec/supplychain/registry/harbor/harbor_scan_2.png)

   ![Configure Mondoo as Interrogation Services](/img/cnspec/supplychain/registry/harbor/harbor_scan_3.png)

---
