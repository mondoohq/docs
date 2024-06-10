---
title: MQL Reference
sidebar_label: Overview
sidebar_position: 3
displayed_sidebar: MQL
id: mql.reference
description: Learn about all of the available MQL resources and how you can use them to query your infrastructure and to create security policies.
image: /img/featured_img/mondoo-feature.jpg
---

**MQL** is a lightweight, ultra-fast query language purpose-built for:

- Searching and filtering infrastructure configuration data
- Making checks about infrastructure configuration
- Building security policies

For an introduction to MQL, read the [MQL intro slide deck](https://mondoohq.github.io/mql-intro/index.html)

To learn how to create queries, checks, and policies in MQL, read [Write Effective MQL](/mql/mql.write/).

## Resources

A _resource_ is a source of information about an asset in your infrastructure, such as a file, a container image, or an AWS EC2 instance. We've organized MQL resources into packs to make it easy to find what you need.

[**Core resource pack:**](./core-pack)
The core pack is essential for queries and checks against many different systems. Use it to retrieve information about users, files, packages, ports, and much more.

[**Operating system resource pack:**](./os-pack)
Some of the resources in the operating system pack span different operating systems, while others are specific to a single operating system.

[**Network resource pack:**](./network-pack)
The network pack includes resources for querying assets like host names and checking certificate contents.

**IaC-specific resource packs:**
These specialized packs let you examine infrastructure-as-code (IaC) files:

- [Amazon Web Services (AWS) CloudFormation IaC resource pack](./cloudformation-pack)
- [Ansible IaC resource pack](./ansible-pack)
- [Terraform IaC resource pack](./terraform-pack)

**Platform-specific resource packs:**
These specialized packs let you deep-dive into attributes unique to the platforms:

- [Amazon Web Services (AWS) resource pack](./aws-pack)
- [Arista resource pack](./arista-pack)
- [Atlassian resource pack](./atlassian-pack)
- [Azure resource pack](./azure-pack)
- [Equinix Metal resource pack](./equinix-pack)
- [GitHub resource pack](./github-pack)
- [GitLab resource pack](./gitlab-pack)
- [Google Cloud (GCP) resource pack](./gcp-pack)
- [Google Workspace resource pack](./google-workspace-pack/)
- [IPMI resource pack](./ipmi-pack)
- [Kubernetes resource pack](./k8s-pack)
- [Microsoft 365 resource pack](./ms365-pack)
- [Okta resource pack](./okta-pack)
- [OPC UA resource pack](./opcua-pack)
- [Oracle Cloud Infrastructure (OCI) resource pack](./oci-pack)
- [Shodan Search Engine resource pack](./shodan-pack)
- [Slack resource pack](./slack-pack)
- [Snowflake resource pack](./snowflake-pack)
- [VMware Cloud Director resource pack](./vcd-pack/)
- [VMware vSphere resource pack](./vsphere-pack)

## Learn more

- To learn about querying your systems with MQL, read the [cnquery docs](/cnquery/home/).

- To learn how to create queries, checks, and policies in MQL, read [Write Effective MQL](/mql/mql.write/).

---
