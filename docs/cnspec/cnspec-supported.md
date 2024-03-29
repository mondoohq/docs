---
title: Supported Scan Targets
id: cnspec-supported
sidebar_label: Supported Scan Targets
displayed_sidebar: cnspec
sidebar_position: 6
description: A list of technologies that cnspec can scan
image: /img/featured_img/mondoo-feature.jpg
---

cnquery can request information from:

| Target                       | Provider                   | Example                                                                                                                                               |
| ---------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS accounts                 | `aws`                      | `cnspec scan aws`                                                                                                                                     |
| AWS EC2 instances            | `ssh`                      | `cnspec scan ssh user@host`                                                                                                                           |
| AWS EC2 Instance Connect     | `aws ec2 instance-connect` | `cnspec scan aws ec2 instance-connect ec2-user@INSTANCEID`                                                                                            |
| AWS EC2 EBS snapshot         | `aws ec2 ebs snapshot`     | `cnspec scan aws ec2 ebs snapshot SNAPSHOTID`                                                                                                         |
| AWS EC2 EBS volume           | `aws ec2 ebs volume`       | `cnspec scan aws ec2 ebs volume VOLUMEID`                                                                                                             |
| Container images             | `container`, `docker`      | `cnspec scan container ubuntu:latest`                                                                                                                 |
| Container registries         | `container registry`       | `cnspec scan container registry index.docker.io/library/rockylinux:8 `                                                                                |
| DNS records                  | `host`                     | `cnspec scan host mondoo.com`                                                                                                                         |
| GitHub organizations         | `github org`               | `cnspec scan github org mondoohq`                                                                                                                     |
| GitHub repositories          | `github repo`              | `cnspec scan github repo mondoohq/cnspec`                                                                                                             |
| GitLab groups                | `gitlab`                   | `cnspec scan gitlab --group mondoohq`                                                                                                                 |
| Google Cloud projects        | `gcp`                      | `cnspec scan gcp`                                                                                                                                     |
| Google Workspace             | `google-workspace`         | `cnspec shell google-workspace --customer-id CUSTOMER_ID --impersonated-user-email EMAIL --credentials-path JSON_FILE`                                |
| Kubernetes cluster nodes     | `local`, `ssh`             | `cnspec scan ssh user@host`                                                                                                                           |
| Kubernetes clusters          | `k8s`                      | `cnspec scan k8s`                                                                                                                                     |
| Kubernetes manifests         | `k8s`                      | `cnspec scan k8s manifest.yaml `                                                                                                                      |
| Kubernetes workloads         | `k8s`                      | `cnspec scan k8s --discover pods,deployments`                                                                                                         |
| Linux hosts                  | `local`, `ssh`             | `cnspec scan local` or<br></br>`cnspec scan ssh user@host`                                                                                            |
| macOS hosts                  | `local`, `ssh`             | `cnspec scan local` or<br></br>`cnspec scan ssh user@IP_ADDRESS`                                                                                      |
| Microsoft 365 accounts       | `ms365`                    | `cnspec scan ms365 --tenant-id TENANT_ID --client-id CLIENT_ID --certificate-path PFX_FILE`                                                           |
| Microsoft Azure accounts     | `azure`                    | `cnspec scan azure --subscription SUBSCRIPTION_ID`                                                                                                    |
| Microsoft Azure instances    | `ssh`                      | `cnspec scan ssh user@host`                                                                                                                           |
| Okta                         | `okta`                     | `cnspec shell okta --token TOKEN --organization ORGANIZATION`                                                                                         |
| Oracle Cloud Interface (OCI) | `oci`                      | `cnspec shell oci`                                                                                                                                    |
| Running containers           | `docker`                   | `cnspec scan docker CONTAINER_ID`                                                                                                                     |
| Slack                        | `slack`                    | `cnspec shell slack --token TOKEN`                                                                                                                    |
| SSL certificates on websites | `host`                     | `cnspec scan host mondoo.com`                                                                                                                         |
| Terraform HCL                | `terraform`                | `cnspec scan terraform HCL_FILE_OR_PATH`                                                                                                              |
| Terraform plan               | `terraform plan`           | `cnspec scan terraform plan plan.json`                                                                                                                |
| Terraform state              | `terraform state`          | `cnspec scan terraform state state.json`                                                                                                              |
| Vagrant virtual machines     | `vagrant`                  | `cnspec scan vagrant HOST`                                                                                                                            |
| VMware vSphere               | `vsphere`                  | `cnspec scan vsphere user@domain@host --ask-pass`                                                                                                     |
| Windows hosts                | `local`, `ssh`, `winrm`    | `cnspec scan local`,<br></br>`cnspec scan ssh Administrator@IP_ADDRESS --ask-pass` or<br></br>`cnspec scan winrm Administrator@IP_ADDRESS --ask-pass` |
