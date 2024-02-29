---
title: Software Supply Chain Security with Mondoo
sidebar_label: Overview
sidebar_position: 1
description: This page provides an overview of how to use Mondoo for software supply chain security.
image: /img/featured_img/mondoo-feature.jpg
---

Mondoo integrates into existing developer software development workflows with minimal friction. It empowers all developers to easily surface security vulnerabilities and misconfigurations before they reach production.

## Ways to use Mondoo in software development

There are many ways to use Mondoo within the software development process:

- **CI/CD testing** - Mondoo integrates easily into all major CI tooling, such as:

  - [Azure Pipelines](/platform/infra/supply/cicd/azure-pipelines/)

  - [CircleCI](/platform/infra/supply/cicd/circleci/)

  - [GitHub Actions](/platform/infra/supply/cicd/github-actions/)

  - [GitLab CI/CD](/platform/infra/supply/cicd/gitlab/)

  - [Jenkins](/platform/infra/supply/cicd/jenkins/)

- **Secure base images** - Use cnspec to ensure you build virtual instances that are free of security vulnerabilities. It integrates with:

  - [Docker](/cnspec/supplychain/docker/)

  - [HashiCorp Packer](/cnspec/supplychain/packer/)

  - [HashiCorp Terraform](/cnspec/supplychain/terraform/)

- **Container image security** - Use [cnspec](/cnspec/cnspec-about/) to test containers for security vulnerabilities during development on your workstation before publishing to container registries, including:

  - [AWS Elastic Container Registry](/cnspec/supplychain/registry/aws_ecr/)

  - [Azure Container Registry](/cnspec/supplychain/registry/azure_acr/)

  - [Google Container Registry](/cnspec/supplychain/registry/gcp_gcr/)

  - [Docker Hub](/cnspec/supplychain/registry/docker_hub/)

  - [Harbor Container Registry](/cnspec/supplychain/registry/harbor/)

---
