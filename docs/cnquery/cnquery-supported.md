---
title: Supported Query Targets
id: cnquery-supported
sidebar_label: Supported Query Targets
displayed_sidebar: cnquery
sidebar_position: 8
description: A list of technologies from which cnquery can request information
image: /img/featured_img/mondoo-feature.jpg
---

cnquery can request information from:

| Target                        | Provider                   | Example                                                                                                                                                     |
| ----------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ansible playbooks             | `ansible`                      | `cnquery shell ansible YOUR_PLAYBOOK.yml`                                                          |
| Arista network devices        | `arista`                      | `cnquery shell arista DEVICE_PUBLIC_IP --ask-pass`                                                          |
| Atlassian organizations       | `atlassian`                      | `cnquery shell atlassian --host YOUR_HOST_URL --admin-token YOUR_TOKEN`                                                          |
| AWS accounts                  | `aws`                      | `cnquery shell aws`                                                                                                                                         |
| AWS CloudFormation templates  | `cloudformation`           | `cnquery shell cloudformation cloudformation_file.json`                                                                                                     |
| AWS EC2 EBS snapshot          | `aws ec2 ebs snapshot`     | `cnquery shell aws ec2 ebs snapshot SNAPSHOTID`                                                                                                             |
| AWS EC2 EBS volume            | `aws ec2 ebs volume`       | `cnquery shell aws ec2 ebs volume VOLUMEID`                                                                                                                 |
| AWS EC2 Instance Connect      | `aws ec2 instance-connect` | `cnquery shell aws ec2 instance-connect ec2-user@INSTANCEID`                                                                                                |
| AWS EC2 instances             | `ssh`                      | `cnquery shell ssh user@host`                                                                                                                               |
| Confluence users              | `atlassian`                | `cnquery shell atlassian --host YOUR_HOST_URL --admin-token YOUR_TOKEN`                                                                                            |
| Container images              | `container`, `docker`      | `cnquery shell container ubuntu:latest`                                                                                                                     |
| Container registries          | `container registry`       | `cnquery shell container registry index.docker.io/library/rockylinux:8 `                                                                                    |
| Dockerfiles                   | `docker`                     | `cnquery shell docker file FILENAME`                                                                                                                                 |
| DNS records                   | `host`                     | `cnquery shell host mondoo.com`                                                                                                                             |
| GitHub organizations          | `github org`               | `cnquery shell github org mondoohq`                                                                                                                         |
| GitHub repositories           | `github repo`              | `cnquery shell github repo mondoohq/cnquery`                                                                                                                |
| GitLab groups                 | `gitlab`                   | `cnquery shell gitlab --group mondoohq`                                                                                                                     |
| Google Cloud projects         | `gcp`                      | `cnquery shell gcp`                                                                                                                                         |
| Google Workspace              | `google-workspace`         | `cnquery shell google-workspace --customer-id CUSTOMER_ID --impersonated-user-email EMAIL --credentials-path JSON_FILE`                                     |
| IoT devices                   | `opcua`                    | `cnquery shell opcua`                                                                                                             |
| Jira projects                 | `atlassian`                | `cnquery shell atlassian --host YOUR_HOST_URL --admin-token YOUR_TOKEN`                                                                                            |
| Kubernetes cluster nodes      | `local`, `ssh`             | `cnquery shell ssh user@host`                                                                                                                               |
| Kubernetes clusters           | `k8s`                      | `cnquery shell k8s`                                                                                                                                         |
| Kubernetes manifests          | `k8s`                      | `cnquery shell k8s manifest.yaml `                                                                                                                          |
| Kubernetes workloads          | `k8s`                      | `cnquery shell k8s --discover pods,deployments`                                                                                                             |
| Linux hosts                   | `local`, `ssh`             | `cnquery shell local` or<br></br>`cnquery shell ssh user@host`                                                                                              |
| macOS hosts                   | `local`, `ssh`             | `cnquery shell local` or<br></br>`cnquery shell ssh user@IP_ADDRESS`                                                                                        |
| Microsoft 365 accounts        | `ms365`                    | `cnquery shell ms365 --tenant-id TENANT_ID --client-id CLIENT_ID --certificate-path PFX_FILE`                                                               |
| Microsoft Azure instances     | `ssh`                      | `cnquery shell ssh user@host`                                                                                                                               |
| Microsoft Azure subscriptions | `azure`                    | `cnquery shell azure --subscription SUBSCRIPTION_ID`                                                                                                        |
| Okta org                      | `okta`                     | `cnquery shell okta --token TOKEN --organization ORGANIZATION`                                                                                              |
| Oracle Cloud Interface (OCI)  | `oci`                      | `cnquery shell oci`                                                                                                                                         |
| Running containers            | `docker`                   | `cnquery shell docker CONTAINER_ID`                                                                                                                         |
| Shodan search engine          | `shodan`                   | `cnquery shell shodan`                                     |
| Slack team                    | `slack`                    | `cnquery shell slack --token TOKEN`                                                                                                                         |
| SSL certificates on websites  | `host`                     | `cnquery shell host mondoo.com`                                                                                                                             |
| Terraform HCL                 | `terraform`                | `cnquery shell terraform HCL_FILE_OR_PATH`                                                                                                                  |
| Terraform plan                | `terraform plan`           | `cnquery shell terraform plan plan.json`                                                                                                                    |
| Terraform state               | `terraform state`          | `cnquery shell terraform state state.json`                                                                                                                  |
| Vagrant virtual machines      | `vagrant`                  | `cnquery shell vagrant HOST`                                                                                                                                |
| VMware Cloud Director         | `vcd`                      | `cnquery shell vcd user@domain@host --ask-pass`                                                                                                         |
| VMware vSphere                | `vsphere`                  | `cnquery shell vsphere user@domain@host --ask-pass`                                                                                                         |
| Windows hosts                 | `local`, `ssh`, `winrm`    | `cnquery shell local`,<br></br>`cnquery shell ssh Administrator@IP_ADDRESS --ask-pass` or<br></br>`cnquery shell winrm Administrator@IP_ADDRESS --ask-pass` |
