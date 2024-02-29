---
title: Integrate Mondoo with CI/CD Platforms
sidebar_label: Overview
sidebar_position: 1
description: This page provides an overview of integrating Mondoo with CI/CD platforms.
image: /img/featured_img/mondoo-feature.jpg
---

Mondoo integrates with major CI/CD platforms to shift security out of production and into the development and testing phases of the software development life cycle (SDLC). This shift prevents insecure changes from making it to test environments and keeps security findings from holding up production deployments.

With Mondoo security scanning in CI/CD systems, you can:

- Scan system images such as AMIs (using [Mondoo's Packer integration](/cnspec/supplychain/packer), for example)

- Scan application container images (with [Docker](/cnspec/supplychain/docker/), for example)

- Scan [Kubernetes manifests](/cnspec/cnspec-k8s/cnspec-k8s-manifest/)

- Scan infrastructure as code configuration files (such as [Terraform configurations](/cnspec/supplychain/terraform/))

## Supported platforms

Mondoo supports these CI/CD platforms:

- [Azure Pipelines](/platform/infra/supply/cicd/azure-pipelines)

- [CircleCI](/platform/infra/supply/cicd/circleci)

- [GitHub Actions](/platform/infra/supply/cicd/github-actions)

- [GitLab CI/CD](/platform/infra/supply/cicd/gitlab)

- [Jenkins](/platform/infra/supply/cicd/jenkins)

## General CI/CD setup

No matter if you want to scan Kubernetes manifests, container images, or deployed VMs, the setup follows a basic pattern:

1. [Install cnspec](/cnspec/) or use the [Mondoo Docker image](https://hub.docker.com/r/mondoolabs/mondoo).

2. Store Mondoo credentials securely in your CI system.

3. Run cnspec to scan systems or repository files.

## Exit code handling

Exit codes allow CI systems to properly raise failure conditions to users. Mondoo has several methods of controlling how and when a scan causes a CI system to fail a job.

### Pass on successful scan

By default, `cnspec scan` returns these exit codes:

- `0` indicates a successful scan with no critical policy failures.

- `1` indicates that the scan found critical policy failures.

Instead of blocking the pipeline, you can choose to always pass the build if the scan was successful using the `--score-threshold 0` flag.

```bash
cnspec scan docker a3592cc01fdf --score-threshold 0
```

## Store Mondoo credentials

Mondoo uses a private key to encrypt all communication with the Mondoo API. Because CI/CD systems do not allow persistent configuration on build nodes, the configuration must be passed into the CI/CD job.

All CI/CD environments have a way to store environment variables. Some provide extra capabilities to store secrets, which we recommend. Set an environment variable with the content of the [agent credentials file](/cnspec/cnspec-adv-install/registration-keys).

The JSON configuration file includes the agent's private key and certificate. The PEM format requires proper newlines, and some CI/CD systems interpret the newlines, which causes failures reading the credentials. To prevent this, encode the credentials data using base64 encoding. Mondoo automatically encodes credentials generated for CI integrations to avoid errors.

---
