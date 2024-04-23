---
title: Docker Hub
sidebar_label: Docker Hub
sidebar_position: 5
displayed_sidebar: cnspec
description: This page provides an overview of how to use Mondoo to scan Docker Hub for vulnerabilities in your containers.
image: /img/featured_img/mondoo-docker.jpg
---

The [Docker Hub](https://hub.docker.com/) is a well-known registry that lists the major public container images. To learn about the Docker Hub, read the Docker Hub [Get Started Guide](https://docs.docker.com/docker-hub/).

<!-- prettier-ignore -->
import Partial from "./_providers-note.mdx";

<Partial />{" "}

## Prerequisite

Install the Docker CLI and [Log into the registry](https://docs.docker.com/engine/reference/commandline/login/):

```bash
docker login
```

## Scan

Once you log in, you can run `cnspec scan` to asses security:

```bash
$ cnspec scan container registry index.docker.io/mondoo/cnspec

  →  loaded configuration from /Users/username/.config/mondoo/mondoo.yml
Start the vulnerability scan:
  →  resolve asset connections
  →  verify platform access to cf5442b2d681
  →  gather platform details
  →  detected alpine 3.18.6
  →  gather platform packages for vulnerability scan
  →  found 38 packages
  ✔  completed analysis for cf5442b2d681
  →  verify platform access to 23ae745857f8
  →  gather platform details
  →  detected alpine 3.18.6
  →  gather platform packages for vulnerability scan
  →  found 38 packages
  ✔  completed analysis for 23ae745857f8
...
  →  verify platform access to b419fd9f16ae
  →  gather platform details
  →  detected alpine 3.18.5
  →  gather platform packages for vulnerability scan
  →  found 38 packages
  ✔  completed analysis for b419fd9f16ae
Advisory Reports Overview
  ■  SCORE  NAME          SCORE
  ■  0.0    331cf0232075  ══════════
  ■  0.0    747afbd1fb74  ══════════
  ■  0.0    eafc9d1d5537  ══════════
  ■  0.0    b419fd9f16ae  ══════════
  ■  0.0    9b4ae77d28b6  ══════════
  ■  0.0    cb01bf407dc2  ══════════
  ■  0.0    d16b8960ff5f  ══════════
  ■  0.0    0b811b267d65  ══════════
  ■  0.0    c601ebfd35b4  ══════════
  ■  0.0    087756d58892  ══════════
  ■  0.0    5a2cd2cd75f3  ══════════
  ■  0.0    1e6c181819f1  ══════════
  ■  0.0    f36d3fba0066  ══════════
  ■  0.0    9908ccbd6449  ══════════
  ■  0.0    23ae745857f8  ══════════
  ■  0.0    4f81f1be7364  ══════════
  ■  0.0    487a85aea611  ══════════
  ■  0.0    69bd294493a0  ══════════
  ■  0.0    f59925492ed6  ══════════
  ■  0.0    cf5442b2d681  ══════════
```

---
