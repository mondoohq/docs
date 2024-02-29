---
title: gcp.project.sqlService.instance.settings.ipConfiguration
id: gcp.project.sqlService.instance.settings.ipConfiguration
sidebar_label: gcp.project.sqlService.instance.settings.ipConfiguration
displayed_sidebar: MQL
description: GCP Cloud SQL instance settings IP configuration
---

# gcp.project.sqlService.instance.settings.ipConfiguration

**Supported platform**

- gcp

**Description**

GCP Cloud SQL instance settings IP configuration

**Fields**

| ID                 | TYPE           | DESCRIPTION                                                                                    |
| ------------------ | -------------- | ---------------------------------------------------------------------------------------------- |
| id                 | string         | Internal ID                                                                                    |
| allocatedIpRange   | string         | Name of the allocated IP range for the private IP Cloud SQL instance                           |
| authorizedNetworks | &#91;&#93;dict | List of external networks that are allowed to connect to the instance using the IP             |
| ipv4Enabled        | bool           | Whether the instance is assigned a public IP address                                           |
| privateNetwork     | string         | Resource link for the VPC network from which the private IPs can access the Cloud SQL instance |
| requireSsl         | bool           | Whether SSL connections over IP are enforced                                                   |
