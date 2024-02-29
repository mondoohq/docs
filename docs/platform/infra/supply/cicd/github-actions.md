---
title: Scan in GitHub Actions
sidebar_label: GitHub Actions
sidebar_position: 4
description: This page details how to integrate Mondoo with GitHub Actions.
image: /img/featured_img/github.jpg
---

The [Mondoo GitHub Action](https://github.com/mondoohq/actions) allows you to scan Kubernetes manifests, Terraform configuration files, and Docker containers for common security misconfigurations. The scan results are available directly in the GitHub Actions UI as well as the Mondoo Console. The action handles the installation and configuration of [cnspec](/cnspec/cnspec-about/), Mondoo's CLI security tool. That way, all you have to do is specify what you want to scan and point the action to your Mondoo credentials.

:::tip

You can also use Mondoo to continuously assess the security of your GitHub repositories and organization. To learn more, read [Secure GitHub with Mondoo](/platform/infra/saas/github/).

:::

## Configure GitHub Actions security

To set up a GitHub Actions integration with Mondoo:

- Create Mondoo credentials

- Store those credentials in GitHub

### Create credentials in Mondoo

To fetch policies and send scan results to Mondoo Platform, first configure a Mondoo service account for use in your CI/CD pipeline:

1. In the [Mondoo Console](https://console.mondoo.com) side navigation bar, under **INTEGRATIONS**, select **Add New Integration**.

2. Under **CI/CD**, select **GitHub Actions**.

3. Copy the value in the **Copy the Mondoo Platform credentials** box to use it as a variable in your pipeline.

4. Select the **START SCANNING** button.

The credential is a base64-encrypted code that contains all the information needed to send the results of the scan to Mondoo. You can decrypt and check the content easily using this command:

```bash
echo <Credentials> | base64 -d
```

### Securely store credentials in GitHub

1. Go to your GitHub repo and, in the top-right corner, select **Settings**.

2. In the left navigation panel, under **Security**, select **Secrets and variables** and then select **Actions**.

3. Select the **New repository secret** button.

4. Name the secret MONDOO_CONFIG_BASE64 and, in the **Secret** box, paste the credentials you copied in the steps above.

   ![Create a GitHub Actions secret](/img/platform/infra/github/secret.png)

5. Select the **Add secret** button.

### Workflow configuration options

The Mondoo GitHub Action has two required `with` values that you must set in your workflow configuration file:

- **path** is the file to scan with Mondoo when using the `k8s-manifest` or `terraform` action.

- **image** is the container image name when using the `docker-image` action.

The Mondoo GitHub Action has one required `env` value that must be set in your workflow configuration file: **MONDOO_CONFIG_BASE64** is the Mondoo service account credentials that you stored in the GitHub secret. Do not set credentials directly in the workflow configuration file. Once you've set up the secret (as described above) you can reference that secret in your workflow configuration file as `${{ secrets.MONDOO_SERVICE_ACCOUNT }}`.

## Example workflows

### Kubernetes manifest scanning

This example runs a Mondoo scan against a Kubernetes manifest:

```yaml title=".github/workflows/manifest-scan.yml"
name: mondoo-scan

on:
  pull_request:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Scan with Mondoo
        uses: mondoohq/actions/k8s-manifest@main
        env:
          MONDOO_CONFIG_BASE64: ${{ secrets.MONDOO_SERVICE_ACCOUNT }}
        with:
          path: nginx.yml
```

### Terraform configuration files scanning

This example runs a simple scan of Terraform files:

```yaml title=".github/workflows/terraform-scan.yml"
name: mondoo-scan

on:
  pull_request:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Scan with Mondoo
        uses: mondoohq/actions/terraform@main
        env:
          MONDOO_CONFIG_BASE64: ${{ secrets.MONDOO_SERVICE_ACCOUNT }}
        with:
          path: "*.tf"
```

### Docker image scanning

This example scans a Docker image in a registry or built in a previous GitHub Action:

```yaml title=".github/workflows/docker-image-scan.yml"
name: mondoo-scan

on:
  pull_request:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Scan with Mondoo
        uses: mondoohq/actions/docker-image@main
        env:
          MONDOO_CONFIG_BASE64: ${{ secrets.MONDOO_SERVICE_ACCOUNT }}
        with:
          image: ubuntu:22.04
```

---
