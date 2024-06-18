---
title: Supported Scan Targets
id: cnspec-supported
sidebar_label: Supported Scan Targets
displayed_sidebar: cnspec
sidebar_position: 6
description: A list of technologies that cnspec can scan
image: /img/featured_img/mondoo-feature.jpg
---

cnspec can make assertions against and scan:

| Target                        | Provider                   | Example                                                                                                                                               |
| ----------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ansible playbooks             | `ansible`                      | `cnspec shell ansible YOUR_PLAYBOOK.yml`                                                          |
| Arista network devices        | `arista`                      | `cnspec shell arista DEVICE_PUBLIC_IP --ask-pass`                                                          |
| Atlassian organizations       | `atlassian`                      | `cnspec shell atlassian --host YOUR_HOST_URL --admin-token YOUR_TOKEN`                                                          |
| AWS accounts                  | `aws`                      | `cnspec scan aws`                                                                                                                                     |
| AWS CloudFormation templates  | `cloudformation`           | `cnspec scan cloudformation cloudformation_file.json`                                                                                                 |
| AWS EC2 EBS snapshot          | `aws ec2 ebs snapshot`     | `cnspec scan aws ec2 ebs snapshot SNAPSHOTID`                                                                                                         |
| AWS EC2 EBS volume            | `aws ec2 ebs volume`       | `cnspec scan aws ec2 ebs volume VOLUMEID`                                                                                                             |
| AWS EC2 Instance Connect      | `aws ec2 instance-connect` | `cnspec scan aws ec2 instance-connect ec2-user@INSTANCEID`                                                                                            |
| AWS EC2 instances             | `ssh`                      | `cnspec scan ssh user@host`                                                                                                                           |
| Confluence users              | `atlassian`                | `cnspec shell atlassian --host YOUR_HOST_URL --admin-token YOUR_TOKEN`                                                                                            |
| Container images              | `container`, `docker`      | `cnspec scan container ubuntu:latest`                                                                                                                 |
| Container registries          | `container registry`       | `cnspec scan container registry index.docker.io/library/rockylinux:8 `                                                                                |
| DNS records                   | `host`                     | `cnspec scan host mondoo.com`                                                                                                                         |
| Dockerfiles                   | `docker`                     | `cnspec shell docker file FILENAME`                                                                                                                                 |
| GitHub organizations          | `github org`               | `cnspec scan github org mondoohq`                                                                                                                     |
| GitHub repositories           | `github repo`              | `cnspec scan github repo mondoohq/cnspec`                                                                                                             |
| GitLab groups                 | `gitlab`                   | `cnspec scan gitlab --group mondoohq`                                                                                                                 |
| Google Cloud projects         | `gcp`                      | `cnspec scan gcp`                                                                                                                                     |
| Google Workspace              | `google-workspace`         | `cnspec shell google-workspace --customer-id CUSTOMER_ID --impersonated-user-email EMAIL --credentials-path JSON_FILE`                                |
| IoT devices                   | `opcua`                    | `cnspec shell opcua`                                                                                                             |
| Jira projects                 | `atlassian`                | `cnspec shell atlassian --host YOUR_HOST_URL --admin-token YOUR_TOKEN`                                                                                            |
| Kubernetes cluster nodes      | `local`, `ssh`             | `cnspec scan ssh user@host`                                                                                                                           |
| Kubernetes clusters           | `k8s`                      | `cnspec scan k8s`                                                                                                                                     |
| Kubernetes manifests          | `k8s`                      | `cnspec scan k8s manifest.yaml `                                                                                                                      |
| Kubernetes workloads          | `k8s`                      | `cnspec scan k8s --discover pods,deployments`                                                                                                         |
| Linux hosts                   | `local`, `ssh`             | `cnspec scan local` or<br></br>`cnspec scan ssh user@host`                                                                                            |
| macOS hosts                   | `local`, `ssh`             | `cnspec scan local` or<br></br>`cnspec scan ssh user@IP_ADDRESS`                                                                                      |
| Microsoft 365 accounts        | `ms365`                    | `cnspec scan ms365 --tenant-id TENANT_ID --client-id CLIENT_ID --certificate-path PFX_FILE`                                                           |
| Microsoft Azure instances     | `ssh`                      | `cnspec scan ssh user@host`                                                                                                                           |
| Microsoft Azure subscriptions | `azure`                    | `cnspec scan azure --subscription SUBSCRIPTION_ID`                                                                                                    |
| Okta org                      | `okta`                     | `cnspec shell okta --token TOKEN --organization ORGANIZATION`                                                                                         |
| Oracle Cloud Interface (OCI)  | `oci`                      | `cnspec shell oci`                                                                                                                                    |
| Running containers            | `docker`                   | `cnspec scan docker CONTAINER_ID`                                                                                                                     |
| Shodan search engine          | `shodan`                   | `cnspec shell shodan`                                     |
| Slack team                    | `slack`                    | `cnspec shell slack --token TOKEN`                                                                                                                    |
| SSL certificates on websites  | `host`                     | `cnspec scan host mondoo.com`                                                                                                                         |
| Terraform HCL                 | `terraform`                | `cnspec scan terraform HCL_FILE_OR_PATH`                                                                                                              |
| Terraform plan                | `terraform plan`           | `cnspec scan terraform plan plan.json`                                                                                                                |
| Terraform state               | `terraform state`          | `cnspec scan terraform state state.json`                                                                                                              |
| Vagrant virtual machines      | `vagrant`                  | `cnspec scan vagrant HOST`                                                                                                                            |
| VMware Cloud Director         | `vcd`                      | `cnspec shell vcd user@domain@host --ask-pass`                                                                                                         |
| VMware vSphere                | `vsphere`                  | `cnspec scan vsphere user@domain@host --ask-pass`                                                                                                     |
| Windows hosts                 | `local`, `ssh`, `winrm`    | `cnspec scan local`,<br></br>`cnspec scan ssh Administrator@IP_ADDRESS --ask-pass` or<br></br>`cnspec scan winrm Administrator@IP_ADDRESS --ask-pass` |
