---
title: Azure Container Registry (ACR)
sidebar_label: Azure Container Registry (ACR)
sidebar_position: 3
displayed_sidebar: cnspec
description: This page provides an overview of how to use Mondoo to scan Azure Container Registry for vulnerabilities in your containers.
image: /img/featured_img/mondoo-azure.jpg
---

The [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/) allows you to store container images within Azure. To learn about the Azure registry, read [Get Started Guide](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli?tabs=azure-cli) in the Azure documentation.

<!-- prettier-ignore -->
import Partial from "./_providers-note.mdx";

<Partial />{" "}

## Prerequisite

cnspec uses the configuration from [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest). Install the `az` command and log into Azure:

```bash
az login
```

Display all available registries:

```bash
$ az acr list --output table

NAME       RESOURCE GROUP    LOCATION    SKU       LOGIN SERVER
---------  ----------------  ----------  --------  --------------------
<acrName>  <resourceGroup>   eastus      Standard  <acrLoginServer>
```

List available container images:

```bash
$ az acr repository list --name <acrName> --output table

Result
-----------
centos
hello-world
ubuntu
```

## Scan

Once you log in, cnspec can scan the registry:

```bash
# scan the complete registry
$ cnspec scan container registry <acrLoginServer>

  →  loaded configuration from /Users/suki/.config/mondoo/mondoo.yml
Start the vulnerability scan:
  →  resolve asset connections
  →  verify platform access to 7e5330839326
  →  gather platform details
  →  detected centos 6.10
  →  gather platform packages for vulnerability scan
  →  found 129 packages
  ✔  completed analysis for 7e5330839326
  →  verify platform access to 92c7f9c92844
  →  gather platform details
  →  detected scratch
  →  gather platform packages for vulnerability scan
  →  found 0 packages
  ✔  completed analysis for 92c7f9c92844
  →  verify platform access to 61844ceb1dd5
  →  gather platform details
  →  detected ubuntu 19.04
  →  gather platform packages for vulnerability scan
  →  found 89 packages
  ✔  completed analysis for 61844ceb1dd5
Advisory Reports Overview
  ■  SCORE  NAME          SCORE
  ■  9.8    7e5330839326  ══════════
  ■  0.0    92c7f9c92844  ══════════
  ■  0.0    61844ceb1dd5  ══════════
```

You can also scan individual repositories:

```bash
$ cnspec scan container registry <acrLoginServer>/centos

  →  loaded configuration from /Users/suki/.config/mondoo/mondoo.yml
Start the vulnerability scan:
  →  resolve asset connections
  →  verify platform access to 7e5330839326
  →  gather platform details
  →  detected centos 6.10
  →  gather platform packages for vulnerability scan
  →  found 129 packages
  ✔  completed analysis for 7e5330839326
Advisory Report ( asset 7e5330839326):
  ■   SCORE  PACKAGE                   INSTALLED              VULNERABLE (<)              AVAILABLE              ADVISORY
  ■   9.8    python                    2.6.6-66.el6_8         2.6.6-68.el6_10             2.6.6-66.el6_8         https://mondoo.app/vuln/CESA-2019%3A1467
  ...
  →  ■ found 10 advisories: ■ 1 critical, ■ 5 high, ■ 4 medium, ■ 0 low, ■ 0 informational, ■ 0 unknown
```

To scan a specific container image, use:

```bash
cnspec scan docker mondooacr.azurecr.io/centos:6.10
```

---
